const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    publishedDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImageUrl: {
        type: String,
        required: false
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author',
    },
    genre: [String]
}, {
    methods: {

    },
    virtuals: {
        summary: {
            get() {
                return this.title + ' was published by ' + this.author.name + "on " + new Date(this.publishedDate).toISOString();
            }
        }
    }
});


module.exports = mongoose.model('Book', BookSchema);