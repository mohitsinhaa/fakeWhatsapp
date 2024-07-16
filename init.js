const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(() => {
    console.log("connection successfull");
})
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "hello",
        created_at: new Date(),
    },
    {
        from: "akash",
        to: "sonu",
        msg: "How r u?",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "akansha",
        msg: "can we go for coffee ?",
        created_at: new Date(),
    },
    {
        from: "punit",
        to: "MR. J",
        msg: "how was your day today",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "mohit",
        msg: "which book you purchase yesterday ?",
        created_at: new Date(),
    },
]

Chat.insertMany(allChats);

