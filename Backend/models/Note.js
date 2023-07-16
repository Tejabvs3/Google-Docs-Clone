const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    description : {
        type : String,
        required : true,  
       
    },
});

module.exports = mongoose.model('notes', NotesSchema);