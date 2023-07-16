const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const Note = require('./models/Note');


connectToMongo();


const app = express()
const port = 5000

app.use(cors())
app.use(express.json()); // middleware for the body which is in auth.js , header in notes etc.,
//Available Routes 
//app.use('/api/auth',require('./routes/auth'));
//app.use('/api/notes',require('./routes/notes'));
//const id = "103010673795422072338";

app.get('/document/:id', (req, res) => {
 
  const ghh = async()=>{
    try {
        const jgh =  Note.find({ 
            userId: `${req.params.id}`}).exec();
        console.log(await jgh);
        res.json(await jgh)
    } catch (error) {
        console.log(error);
    }
}
ghh();


/*
Note.find(function(err, notes) {
  if (err) return console.error(err);
  else{
      //const res = await Note.updateOne({_id: '648416df17aa54c2d529e2a5'}, {description: "103010673795422072338"});
      //res.matchedCount;
      console.log(notes);
      notes.forEach(function(note) {
        if( note.userId ==`${req.params.id}` ){
          console.log("hello",note);
          const ans = note;
        }
      });
      //console.log("hello",notes)
      //res.json(notes)
}
  
})
res.json(ans);
*/
})

app.put('/updatedoc/:id', (req, res) => {
  const ghh = async()=>{
    try {
        const jgh = await Note.find({ 
            userId:`${req.params.id}`}).exec();
            //console.log("ekjh",req.body);
            const {text} = req.body;
            const response = await Note.updateOne({_id: '648416df17aa54c2d529e2a5'}, {description: text});
          res.json(response)
    } catch (error) {
        console.log(error);
    }
}
ghh();
  
})

app.listen(port, () => {
  console.log(`googleDocs backend listening on port ${port}`)
})


