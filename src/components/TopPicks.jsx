import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Add from './Add';
import { deleteBookAPI, numOfLikesAPI, showAllBooksAPI } from '../services/allAPI';

const TopPicks = ({ heading, isHomePage }) => {
  // to store all books
  const [allBooks, setAllBooks] = useState([]);
  const sortedBooks = allBooks?.sort((a, b) => b.likes - a.likes);
  
  // to trigger the useEffect when new data is added in the add component
  const [loading, setLoading] = useState(true);
  // to only show 3 books on the home page
  const displayedBooks = isHomePage ? sortedBooks?.slice(0, 3) : allBooks;

  // Fetch all books when the page loads
  useEffect(() => {
    getAllBooks();
  }, [loading]);

  // Function to get all books from the API
  const getAllBooks = async () => {
    try {
      const result = await showAllBooksAPI();
      if (result.status > 199 && result.status < 300) {
        setAllBooks(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Function to delete book from the API
  const deleteBook = async (id) => {
    try {
      const result = await deleteBookAPI(id)
      if(result.status >= 200 && result.status < 300) {
        getAllBooks()
      }
    }catch(err){
      console.log(err);
    }
  }
  
  // Function to get the number of likes for a book
  const likeBook = async (id) => {
    const updatedLikes = allBooks.find(book => book.id === id).likes
    try{
      const result = await numOfLikesAPI(id,updatedLikes+1)
      if(result.status >= 200 && result.status < 300) {
        // console.log(result);
        getAllBooks()
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div style={{ minHeight: "80vh", backgroundColor: "#021334" }} className="pt-5">
      <h1 className="text-center">{heading}</h1>

      <Add isHomePage={isHomePage} setLoading={setLoading}/>

      <div className='container ps-5'>
        <Row className="pt-5 ps-5" xs={1} sm={2}  md={3}>
          {displayedBooks.length > 0 ? (
            displayedBooks.map(book => (
              <Col key={book.id} className="mb-4">
                <Card style={{ width: '18rem' }}>
                  {!isHomePage && (
                    <button style={{marginLeft:'245px'}} onClick={()=>{deleteBook(book.id)}} className="btn text-danger">
                      <i className="fa-solid fa-trash fs-6 text-danger"></i>
                    </button>
                  )}
                  <Card.Img style={{height:'400px'}} variant="top" src={book.image} />
                  <Card.Body>
                    <Card.Title className='d-flex flex-row align-items-center justify-content-between'>
                      {book.name}
                      <button onClick={() => {likeBook(book.id)}} className="btn fs-6">
                            <i className="fa-regular fa-heart text-danger"></i> 
                            <span className="text-danger ms-2">{book.likes}</span>
                        </button>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.author}
                    </Card.Subtitle>
                    <Card.Text className="text-dark">{book.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="fw-bolder text-danger fs-5">No books added!!</div>
          )}
        </Row>
      </div>

      {isHomePage && (
        <p className="container text-end me-5 mt-4 pe-5 mb-0">
          <Link className="me-5" to={'/books'}>
            more...
          </Link>
        </p>
      )}
    </div>
  );
};

export default TopPicks;
