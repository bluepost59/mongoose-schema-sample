async function main() {
    const Mongoose = require("mongoose");

    conn = await Mongoose.connect('mongodb://localhost:27017/myapp');

    console.log("connected");

    const Schema = Mongoose.Schema;
    const ObjectId = Schema.ObjectId;

    const blogPost = new Schema({
        author: String,
        title: String,
        body: String,
    });

    const myModel = Mongoose.model("myblog", blogPost);

    const doc = new myModel({
        // author: "momoka",
        title: "hello",
        body: "Hi",
    })

    doc.save((err) => {
        if (err) { throw err }
        console.log("saved");
    });
}

main();
