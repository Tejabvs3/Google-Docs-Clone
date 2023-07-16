const { text } = require('express');
const mongoose = require('mongoose');

//const mongoURI = "mongodb://localhost:27017/?tls=false&readPreference=primary&directConnection=true&appName=MongoDB%25Compass";

// DB - CRUD - create read update delete

/*const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
       
            console.log("Connected to Mongo Succesfully");
        }) 
    }
      */

        const server = '127.0.0.1:27017';
        const database = 'googleDocs';



        const connectDB = async()=>{
            try {
                await mongoose.connect(`mongodb://${server}/${database}`);
                console.log('MongoDB connected!!');
            } catch (err){
                console.log("Failed to connect to MongoDB",err);
            }
        };
    
        const noteSchema = new mongoose.Schema({
            description : String,
            userId: String,
        });
        const Note = mongoose.model('Note', noteSchema);
        const note = new Note({
            description : "This is a noTe"
        });

 //note.save();
       
/*
       // note.save();
       Note.find(function(err, notes) {
        if (err) return console.error(err);
        else{
            //const res = await Note.updateOne({_id: '648416df17aa54c2d529e2a5'}, {description: "103010673795422072338"});
            //res.matchedCount;
            console.log("skdcb")
    }
});
*/

const ghh = async()=>{
    try {
        const jgh = await Note.find({ 
            description: "This is a noTe"}).exec();
            const res = await Note.updateOne({_id: '648416df17aa54c2d529e2a5'}, {userId: "103010673795422072338"});
            
            console.log(res.matchedCount)
            console.log(res.modifiedCount)
    } catch (error) {
        console.log(error);
    }
}
ghh();






// module.exports = connectToMongo;
 module.exports = connectDB;