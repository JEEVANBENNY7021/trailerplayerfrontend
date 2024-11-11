/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';

function AddCategory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState(""); // To hold new category name
  const [getCategory, setGetCategory] = useState([]); // Initialize as an array to hold categories
  const [deleteStatus, setDeleteStatus] = useState("");

  const handleAdd = async () => {
    const body = {
      categoryName,
      allVideos: []
    };

    if (categoryName) {
      try {
        const response = await addCategoryAPI(body);
        console.log(response);
        alert("Added category " + categoryName);
        handleGetCategory(); // Get all categories 
        setCategoryName("");
        handleClose();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please provide category name");
    }
  };

  const handleGetCategory = async () => {
    try {
      const response = await getCategoryAPI();
      console.log(response);
      setGetCategory(response.data || []); // Ensure it's an array
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await deleteCategoryAPI(categoryId);
      console.log(response);
      setDeleteStatus(response);
      handleGetCategory();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteVideo = async (categoryId, videoId) => {
    try {
      const updatedCategory = getCategory?.find(category => category.id === categoryId);
      if (updatedCategory) {
        // Filter out the video to delete it from allVideos array of the category
        updatedCategory.allVideos = updatedCategory.allVideos?.filter(video => video.id !== videoId);
        await updateCategoryAPI(categoryId, updatedCategory);
        handleGetCategory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const videoDrop = async (e, categoryId) => {
    e.preventDefault();
    const videoId = e.dataTransfer.getData("videoId");
    console.log("VideoId: " + videoId);

    try {
      const { data } = await getAVideoAPI(videoId);
      console.log(data);

      const selectedCategory = getCategory?.find(item => item.id === categoryId);
      if (selectedCategory) {
        selectedCategory.allVideos = selectedCategory.allVideos || [];
        selectedCategory.allVideos.push(data);
        await updateCategoryAPI(categoryId, selectedCategory);
        handleGetCategory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    handleGetCategory();
  }, [deleteStatus]);

  return (
    <div>
      <div className="d-grid gap-2 me-3 mt-4">
        <Button variant="primary" size="lg" onClick={handleShow}>
          Add Category
        </Button>

        <div className="row">
          {getCategory && getCategory.length > 0 ? getCategory.map(item => (
            <div
              key={item.id}
              onDragOver={e => dragOver(e)}
              onDrop={(e) => videoDrop(e, item.id)}
              className="col m-3 p-4 border border-light d-flex justify-content-between"
            >
              <p>{item.categoryName}</p>
              <i
                onClick={() => handleDeleteCategory(item.id)}
                className="m-0 p-1 fa-solid fa-trash text-danger"
              ></i>
              <div className='row' style={{ width: '100%' }}>
                <div className="col">
                  {item.allVideos && item.allVideos.map(data => (
                    <VideoCard
                      key={data.id}
                      displayVideo={data}
                      onDelete={() => handleDeleteVideo(item.id, data.id)} // Pass video deletion handler
                    />
                  ))}
                </div>
              </div>
            </div>
          )) : <p>No data found</p>}
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder='Category Name'
            className='form-control'
            value={categoryName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCategory;
