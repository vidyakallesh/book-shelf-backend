import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageLink: { type: String, required: true },
  author: { type: String, required: true },
});

export const BookModel = mongoose.model('book', BookSchema);
