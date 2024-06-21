import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, FormLabel, FormControlLabel, TextField } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios';

const BookDetails = () => {
    const { id } = useParams();
    const [input, setInput] = useState({});
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            await axios.get(`http://localhost:5000/books/${id}`)
                .then((res) => res.data)
                .then(data => setInput(data))
        }
        fetchBooks()
    }, [id])
    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/books/${id}`, {
            bName: String(input.bName),
            author: String(input.author),
            description: String(input.description),
            price: Number(input.price),
            image: String(input.image),
            available: Boolean(input.checked),

        }).then((res) => res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
            .then(() => toast.success('Book updated successfully'))
            .then(() => navigate('/books'))
    }

    return (
        <>
            <Toaster />
            <form onSubmit={handleSubmit}>
                {/* box-conatainer */}
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    max-width={700}
                    alignContent={'center'}
                    marginleft={'auto'}
                    marginRight={'auto'}
                    marginTop={10}
                >
                    <FormLabel>Book Name:</FormLabel>
                    <TextField
                        value={input.bName}
                        varient='outlined'
                        onChange={handleChange}
                        name='bName'
                        fullWidth
                    />
                    <FormLabel>Author</FormLabel>
                    <TextField
                        value={input.author}
                        varient='outlined'
                        onChange={handleChange}
                        name='author'
                        fullWidth

                    />
                    <FormLabel>Description</FormLabel>
                    <TextField
                        value={input.description}
                        varient='outlined'
                        onChange={handleChange}
                        name='description'
                        fullWidth

                    />
                    <FormLabel>Price</FormLabel>
                    <TextField
                        value={input.price}
                        varient='outlined'
                        onChange={handleChange}
                        name='price'
                        fullWidth

                    />

                    <FormLabel>Image</FormLabel>
                    <TextField
                        value={input.image}
                        varient='outlined'
                        onChange={handleChange}
                        name='image'
                        fullWidth

                    />
                    {/* <FormControlLable/>-canonot use seperate input */}
                    <FormControlLabel control={
                        <Checkbox
                            checked={checked}
                            onChange={() => setChecked(!checked)} />
                    } label="Available" />
                    <Button type='submit' varient="outlined">Add Book</Button>



                </Box>

            </form>




        </>
    )
}


export default BookDetails