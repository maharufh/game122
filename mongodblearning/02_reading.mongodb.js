use ("ecommerce");

// db.products.find({"name":"Wireless Mouse"});
// db.products.find({category:"Electronics"});

// db.products.find({ price: { $gt: 1000 } }) 
db.products.find({ price: { $gte: 1000, $lte: 50000 } })

