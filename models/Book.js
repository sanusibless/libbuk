const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    description: {
        type: String,
        required: false
    },
    publishedDate: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    coverImageUrl: {
        type: String
    },
    genre: [String]
});


module.exports = mongoose.model('Book', BookSchema);