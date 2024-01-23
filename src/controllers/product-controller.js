exports.getProductLanding = (req, res, next) => {
    res.json({message: "Get products Landing Page"})
}

exports.getProducts = (req, res, next) => {
    res.json({ message: "Get Filtered Products"})
}

exports.getProductById = (req, res, next) => {
    res.json({ message: "Get Product By Id" })
}