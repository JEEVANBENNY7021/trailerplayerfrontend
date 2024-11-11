/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryAPI, deleteVideoAPI } from '../../services/allAPI';
import Swal from 'sweetalert2';


function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  console.log(displayVideo);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, embedLink } = displayVideo;
    let today = new Date();

    let timestamp = new Intl.DateTimeFormat('en-us', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit'
    }).format(today);

    let videoDetails = {
      caption,
      embedLink,
      timestamp
    };

    const response = await addHistoryAPI(videoDetails);
    console.log(response);
  }

  const handleDelete = async (id) => {
    try {
      const response = await deleteVideoAPI(id);
      
      if (response.status >= 200 && response.status <= 300) {
        console.log(response.data); //data 
        setDeleteVideoStatus(response);
        handleClose();
        Swal.fire({
          title: 'Success!',
          text: 'Video Deleted Successfully',
          icon: 'success',
          confirmButtonText: 'Back'
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  const dragStarted = (e, id) => {
    console.log("Video Drag started " + id, e);
    e.dataTransfer.setData("videoID", id);  
  }

  return (
    <div>
      <Card
        className="video-card" // CSS class for custom styles
        draggable={true}
        onDragStart={e => dragStarted(e, displayVideo.id)}
      >
        <Card.Img
          variant="top"
          src={displayVideo.url}
          onClick={handleShow}
          className="video-thumbnail"
        />
        <Card.Body className="video-card-body">
          <Card.Title className="video-title">{displayVideo.caption}</Card.Title>
          <Card.Text className="video-description">{displayVideo.description}</Card.Text>
          <Button onClick={() => handleDelete(displayVideo.id)} variant="danger" className="delete-button rounded-circle"> 
            <RiDeleteBinLine />
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe 
            width="460" 
            height="315" 
            src={displayVideo.embedLink} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default VideoCard;
