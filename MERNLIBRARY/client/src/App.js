import './App.css';
import Home from '../src/components/Home';
import About from '../src/components/About';
import PageNotFound from '../src/components/PageNotFound';
import AddBook from '../src/components/AddBook';
import Books from '../src/components/Book/Books';
import BookDetails from '../src/components/Book/BookDetails';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddBook />} />
        <Route path='/books' element={<Books />} />
        <Route path='/about' element={<About />} />
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
