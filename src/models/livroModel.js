const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const livroSchema = Schema({ 
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    synopsis: {
        type: String,
        required: true
    },

    qtd: {
        type: Number,
        required: true
        
    }
});

module.exports = mongoose.model('livro', livroSchema);