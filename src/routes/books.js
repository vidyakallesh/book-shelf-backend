import express from 'express';
import { BookModel } from '../models/Books.js';

const router = express.Router();

router.post("/book", async (req, res) => {
  try {
    const { title, description, authors, imageLink } = req.body; // Extract the necessary properties from the request body
    const book = new BookModel({ title, description, authors, imageLink }); // Create a new book instance with the extracted properties
    const savedBook = await book.save(); // Save the book
    res.json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as bookRouter };
