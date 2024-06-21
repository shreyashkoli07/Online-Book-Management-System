import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import Book from './Book'

const URL = "http://localhost:5000/books";

const fetchBooks = async () => {
    return axios.get(URL).then((res) => res.data)
}


    const Books = () => {
        
        const [books, setBooks] = useState();

        console.log(books)

        useEffect(()=>{
            fetchBooks().then(data => setBooks(data))
        },[])

    
    return (
        <>
            <ul>
                {
                    books && books?.map((book, i) => {
                        return (
                            <li key={i}>
                                <Book book={book} />

                            </li>
                        )

                    })
                }
            </ul>
        </>
    )
}
export default Books