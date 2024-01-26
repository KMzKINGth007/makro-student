const cloudUpload = require("../utils/cloudUpload");
const prisma = require("../config/prisma");
const createError = require("../utils/createError");
const { createProductSchema } = require("../validator/admin-validator");

exports.createProduct = async (req, res, next) => {
  try {
    const value = await createProductSchema.validateAsync(req.body);

    const { brandId, categoryId } = req.body;

    const product = await prisma.product.create({
      data: {
        ...value,
        brand: {
          connect: {
            id: Number(brandId),
          },
        },
        category: {
          connect: {
            id: Number(categoryId),
          },
        },
        user: {
          connect: {
            id: req.user.id,
          },
        },
      },
    })

    const imagesPromiseArray = req.files.map((file) => {
      return cloudUpload(file.path)
    })

    const imgUrlArray = await Promise.all(imagesPromiseArray)

    const productImages = imgUrlArray.map((imgUrl) => {
      return {
        url: imgUrl,
        productId: product.id,
      }
    })

    await prisma.product_Img.createMany({
      data: productImages,
    })

    const newProduct = await prisma.product.findFirst({
      where: {
        id: product.id,
      },
      include: {
        product_imgs: true,
      },
    })

    res.json({ newProduct });
  } catch (err) {
    next(err)
  }
}

exports.updateProduct = async (req, res, next) => {
  try {
    res.json({ message: "Update Product" })
  } catch (err) {
    next(err)
  }
}

exports.createCategory = async (req, res, next) => {
  try {
    const { name } = req.body
    const category = await prisma.category.create({
      data: {
        name,
      },
    })
    res.json({ category })
  } catch (err) {
    next(err)
  }
};

exports.createBrand = async (req, res, next) => {
  try {
    res.json({ message: "Create Brand" })
  } catch (err) {
    next(err)
  }
}

exports.createPromotion = async (req, res, next) => {
  try {
    res.json({ message: "Create Promotion" })
  } catch (err) {
    next(err)
  }
};
