use("ecommerce");

// db.products.updateOne(
//     { name: "Wireless Mouse" },
//     { $set: { price: 8999 } }
//     )

// db.products.updateMany(
//     { category: "Electronics" },
//     { $inc: { stock: 30 } }
//     )

db.products.updateOne(
    { name: "Wireless Mouse" },
    { $push: { tags: "new" } }
    )