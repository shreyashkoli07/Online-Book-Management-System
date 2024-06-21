const Book = require('../models/bookModel');

// add Book -post request

const addBook = async (req, res, next) => {
    let book;
    const { bName, author, description, price, available, image } = req.body;

    try {
        book = new Book({
            bName,
            author,
            description,
            price,
            available,
            image
        })
        await book.save();

    } catch (e) {
        console.log(`Error is ${e}`)
    }
    if (!book) {
        return res.status(404).json({ message: "book cannot added" })
    } else {
        return res.status(201).json(book)
    }

}

// get request

const getBooks = async (req, res, next) => {
    let book;

    try {
        book = await Book.find();

    } catch (e) {
        console.log(`Error is ${e}`)
    }
    if (!book) {
        return res.status(404).json({ message: "book not found" })
    } else {
        return res.status(200).json(book)
    }
}

// get book by id

const getBookById = async (req, res, next) => {
    const _id = req.params.id;
    let book;
    try {
        book = await Book.findById(_id);

    } catch (e) {
        console.log(`Error is ${e}`)

    }
    if (!book) {
        return res.status(404).json({ message: "book not found" })
    } else {
        return res.status(200).json(book)
    }
}

// update a book

const updateBook = async (req, res, next) => {
    let book;
    const _id = req.params.id;
    const { bName, author, description, price, available, image } = req.body;
    try {
        book = await Book.findByIdAndUpdate(_id, {
            bName,
            author,
            description,
            price,
            available,
            image
        }, { new: true });

        book = await book.save();


    } catch (e) {
        console.log(`Error is ${e}`)
    }
    if (!book) {
        return res.status(404).json({ message: "book not found" })
    } else {
        return res.status(200).json(book)
    }
}

// delete book

const deleteBook = async (req, res, next) => {
    let book;
    const _id = req.params.id;
    try {
        book = await Book.findByIdAndDelete(_id);

    } catch (e) {
        console.log(`Error is ${e}`);
    }
    if (!book) {
        return res.status(404).json({ message: "book does not exist" })
    } else {
        return res.status(200).json({ message: "booked deleted" })
    }
}

exports.addBook = addBook;
exports.getBookById = getBookById;
exports.getBooks = getBooks;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
