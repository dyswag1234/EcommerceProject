const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const { Category, Product } = require("../model/product");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://vandy:khmergamer@cluster0.63zqaij.mongodb.net/User?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./uploads`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
route.post("/addproduct", upload.single("image"), async (req, res) => {
  let image;
  if (req.file) {
    const image_name = req.file.originalname;
    image = `http://${req.headers.host}/uploads/${image_name}`;
  }

  try {
    const category = await Category.findOne({ name: req.body.category }); // find category by name
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      image: image,
      category: category ? category.name : null, // assign category name to product
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Adding product failed", error });
  }
});

//display all product
route.get("/allproduct", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Fetching products failed", error });
  }
});

//get one product
route.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Fetching products with this id failed", error });
    });
});
//update product
route.put("/edit/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    const updateData = {};
    if (req.body.name) {
      updateData.name = req.body.name;
    }
    if (req.body.description) {
      updateData.description = req.body.description;
    }
    if (req.body.price) {
      updateData.price = req.body.price;
    }
    if (req.body.stock) {
      updateData.stock = req.body.stock;
    }
    if (req.body.category) {
      updateData.category = req.body.category;
    }

    let image;
    if (req.file) {
      const image_name = req.file.originalname;
      image = `http://${req.headers.host}/uploads/${image_name}`;
      updateData.image = image;
    }
    // else if (req.body.oldImage) {
    //   updateData.image = req.body.oldImage;
    // }
    Product.findByIdAndUpdate(req.params.id, updateData)
      .then(() => {
        res.status(200).json(product);
      })
      .catch((error) => {
        res.status(500).json({ message: "Updating product failed", error });
      });
  } catch (error) {
    res.status(500).json({ message: "Editing product failed!" });
  }
});
//delete product
route.delete("/delete/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      res.status(404).send({ error: "Product not found." });
    }
    res.send({ message: "Product have been deleted." });
  } catch (error) {
    res.status(500).send({ error: "Internal server error." });
  }
});

//category
route.post("/addcategory", (req, res) => {
  const category = new Category({
    name: req.body.name,
  });
  category
    .save()
    .then(() => {
      res.status(201).json({ message: "Category added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Adding category failed", error });
    });
});

module.exports = route;
