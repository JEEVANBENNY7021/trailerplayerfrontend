import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
      {/* Carousel */}
<Container style={{ padding: '20px 0' }}>
  <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wallpapers.com/images/hd/fantastic-beasts-and-where-to-find-them-horizontal-poster-86utad5c6nr65k54.jpg"
        alt="First slide"
        style={{ height: '550px', objectFit: 'cover' }} // Adjust height here
      />
      <Carousel.Caption>
        <h3>FANTASTIC  BEASTS AND WHERE TO FIND THEM</h3>

        <p style={{fontSize:'30px'}}>2006</p>
        <Link to={'./home'}>
          <Button style={{color:'white',backgroundColor:'black' }} className="mt-5">Get Started</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/706b9474134343.5c239806af449.jpg"
        alt="Second slide"
        style={{ height: '550px', objectFit: 'cover' }} // Adjust height here
      />
      <Carousel.Caption>
        <h3> URI :THE SURGICAL  STRIKE</h3>


        <p style={{fontSize:'30px'}}>2019 Film</p>
        <Link to={'./home'}>
        <Button style={{color:'white',backgroundColor:'black' }} className="mt-5">Get Started</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://m.media-amazon.com/images/I/71r-aysV8TL.jpg"
        alt="Third slide"
        style={{ height: '550px', objectFit: 'cover' }} // Adjust height here
      />
      <Carousel.Caption>
        <h3>IRON MAN 4</h3>
        <p style={{fontSize:'30px'}}>2020.</p>
        <Link to={'./home'}>
        <Button style={{color:'white',backgroundColor:'black' }} className="mt-5">Get Started</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</Container>

      {/* THE LATEST TRAILER */}
      <Container style={{ padding: '40px 0' }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>The Latest Trailer</h2>
        <Row className="d-flex flex-wrap justify-content-center">
          
        <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b307d127256085.560502e8b209e.jpg" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>KAHANI</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>


            

            

            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/62804b18669443.562cd567cbcd8.jpg" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>KICK</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>JUMANJI 3</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://e1.pxfuel.com/desktop-wallpaper/528/531/desktop-wallpaper-1-pc-hollywood-movies-hollywood-movie-poster-thumbnail.jpg" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>AVATAR</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>
          
        </Row>
      </Container>

      {/* UPCOMING MOVIES */}
      <Container style={{ padding: '40px 0' }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>Upcoming Movies</h2>
        <Row className="d-flex flex-wrap justify-content-center">
         
            <Col md={4} className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th/id/OIP.fS7drXelAzXScI8AZCpW0QHaKX?w=1071&h=1500&rs=1&pid=ImgDetMain" // Replace with actual image
                  alt="Movie Thumbnail"
                />
                <Card.Body>
                  <Card.Title>Upcoming Movie</Card.Title>
                  <Card.Text>Release Date: JAN 13</Card.Text>
                  <Button variant="primary">View Trailer</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://m.media-amazon.com/images/I/81KWTMl0JUL._AC_UF1000,1000_QL80_.jpg" // Replace with actual image
                  alt="Movie Thumbnail"
                />
                <Card.Body>
                  <Card.Title>Upcoming Movie</Card.Title>
                  <Card.Text>Release Date: DEC 20</Card.Text>
                  <Button variant="primary">View Trailer</Button>
                </Card.Body>
              </Card>
            </Col>
          

          
            <Col md={4} className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://c8.alamy.com/comp/R2FPMM/x-men-days-of-future-past-year-2014-usa-director-bryan-singer-movie-poster-fr-R2FPMM.jpg" // Replace with actual image
                  alt="Movie Thumbnail"
                />
                <Card.Body>
                  <Card.Title>Upcoming Movie</Card.Title>
                  <Card.Text>Release Date:MAY 12</Card.Text>
                  <Button variant="primary">View Trailer</Button>
                </Card.Body>
              </Card>
            </Col>

            
            
        </Row>
      </Container>

        {/* THE LATEST TRAILER */}
        <Container style={{ padding: '40px 0' }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>Anime Trailers</h2>
        <Row className="d-flex flex-wrap justify-content-center">
          
        <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/media/DaDM26yVQAARzcL.jpg" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>GRAVE OF THE FIREFLIES</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            

            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/05/jujutsu-kaisen-0-film-main-poster.jpg" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>JUJUTSU KAISEN</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/o/3/l/medium-akira-anime-hd-matte-finish-poster-btt1023-butcute-original-imagmnh9bkgk3tpq.jpeg?q=90&crop=false" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>AKIRA</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rlxT-Cni_SQKdpAe5QrHCwXu8Mc453z-A7jsB53gfIv8d1-WOQWM_uG_oFGMuc7waBc&usqp=CAU" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>MONONOKE</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>
          
        </Row>
      </Container>
        {/* THE LATEST TRAILER */}
        <Container style={{ padding: '40px 0' }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>Popular Trailer</h2>
        <Row className="d-flex flex-wrap justify-content-center">
          
        <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4b62f079-afb4-49c6-a4ba-f8e4c0f8e6fc.__CR0,0,1617,1000_PT0_SX970_V1___.jpg" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>SALAAR</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            

            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/47ca6ef9-f1b3-46cc-83bd-5925ee723092.__CR91,0,1019,630_PT0_SX970_V1___.jpg" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>OPPENHEIMER</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/850/1000/km3s1ow0/poster/f/o/7/medium-the-thor-movie-wall-poster-for-room-with-gloss-lamination-original-imagf2uzyhaat5th.jpeg?q=90&crop=false" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>THOR 4</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            
            <Col md={3}  className="mb-4 d-flex">
              <Card style={{ backgroundColor: '#333', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src="https://rukminim2.flixcart.com/image/850/1000/k77xx8w0/poster/c/g/t/medium-the-shawshank-redemption-movie-poster-for-room-with-gloss-original-imafphnwmxjkvfjf.jpeg?q=90&crop=false" // Replace with actual image
                  alt="Trailer Thumbnail"
                />
                <Card.Body>
                  <Card.Title>SWAWSHANK</Card.Title>
                  <Card.Text>Rating: ★★★★☆</Card.Text>
                  <Button variant="primary">Watch Now</Button>
                </Card.Body>
              </Card>
            </Col>

            
          
        </Row>
      </Container>


    </div>
  );
}

export default LandingPage;
