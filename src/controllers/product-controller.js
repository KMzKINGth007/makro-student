exports.getProductsLanding = (req, res, next) => {
    res.json({ message: "Get Products Landing Page" });
  };
  
  exports.getProducts = (req, res, next) => {
    res.json({ message: "Get Filtered Products" });
  };
  
  exports.getProductById = (req, res, next) => {
    res.json({ hi: "Get Product By Id" });
  };
  