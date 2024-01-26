const Joi = require("joi");

exports.createProductSchema = Joi.object({
  stock: Joi.number(),
  unit: Joi.number(),
  priceHigh: Joi.number().required(),
  minPriceHigh: Joi.number().required(),
  priceMedium: Joi.number(),
  minPriceMedium: Joi.number(),
  priceLow: Joi.number(),
  minPriceLow: Joi.number(),
  detail: Joi.string().required(),
  width: Joi.number().required(),
  height: Joi.number().required(),
  depth: Joi.number().required(),
  weight: Joi.number().required(),
  brandId: Joi.number().required().strip(),
  categoryId: Joi.number().required().strip(),
});
