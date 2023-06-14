const mongoose = require("mongoose");
require("dotenv").config();

// connection string
const mongoURI = "mongodb+srv://foodWorld:" +
    process.env.PASSWORD + "@cluster0.8onaf6v.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));


const connectTomongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((data) => {
            console.log(`MongoDB connected to the server : ${data.connection.host}`);

            connection.once("open",  function () {

                const collection = connection.db.collection("food_items");
                collection.find({}).toArray(function (err, data) {
                    if (!err) {
                        global.food_items=data;
                        console.log(global.food_items);
                    }
                    else {
                        console.log("error ", err.message);
                    }
                });

            })

        })

        .catch((err) => {
            console.log(`Some Database connection error occured : ${err}`);
        })
}

module.exports = connectTomongoDB;





