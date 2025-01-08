import React, { useState } from 'react';
import '../index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { saveBookAPI } from '../services/allAPI';

const Add = ({ isHomePage, setLoading }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bookDetails, setBookDetails] = useState({
    name: "",
    author: "",
    image: "",
    description: "",
    likes: 0
  });

  const handleUploadBook = async()=>{
    //object destructuring
    const {name,author,image,description} = bookDetails;
    if(name && author && image && description){
      //store book details permanentaly
      try{
        const result = await saveBookAPI(bookDetails);
        console.log(result);
        if(result.status>=200 && result.status<300){
          handleClose()
          setBookDetails({
            name: "",
            author: "",
            image: "",
            description: "",
            likes: 0
          })
          setLoading(result)
        }else{
          console.log(result);
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill all fields!!")
    }
  }

  return (
    <>
      {!isHomePage && (
        <div style={{ marginLeft: '250px' }}>
          <button onClick={handleShow} className="btn btn-outline-light">
            Add <i className="fa-solid fa-plus addBtn"></i>
          </button>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-dark">Title of Book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={bookDetails.name}
                onChange={(e) => setBookDetails({ ...bookDetails, name: e.target.value })}
                autoFocus
              />
              <Form.Label className="text-dark mt-3">Author Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                value={bookDetails.author}
                onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })}
              />
              <Form.Label className="text-dark mt-3">Cover Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image Link"
                value={bookDetails.image}
                onChange={(e) => setBookDetails({ ...bookDetails, image: e.target.value })}
              />
              <Form.Label className="text-dark mt-3">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={bookDetails.description}
                onChange={(e) => setBookDetails({ ...bookDetails, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUploadBook}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
