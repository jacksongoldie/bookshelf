import carouselstarterphoto1 from '../assets/carouselstarterphoto1.png'
import carouselstarterphoto2 from '../assets/carouselstarterphoto2.png'
import carouselstarterphoto3 from '../assets/carouselstarterphoto3.png'
import Carousel from 'react-bootstrap/Carousel';
import Ratio from 'react-bootstrap/Ratio';

function HomeCarousel() {
  return (
    <div>
      <Carousel variant="dark">
          <Carousel.Item>
          <Ratio aspectRatio={'21x9'}>
          <img
            className="d-block w-100"
            src={carouselstarterphoto1}
            alt="First slide"
          />
          </Ratio>
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Ratio aspectRatio={'21x9'}>
          <img
            className="d-block w-100"
            src={carouselstarterphoto2}
            alt="Second slide"
            width='1000'
            height='800'
          />
        </Ratio>
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Ratio aspectRatio={'21x9'}>
          <img
            className="d-block w-100"
            src={carouselstarterphoto3}
            alt="Third slide"
            width='1000'
            height='800'
          />
          </Ratio>
          <Carousel.Caption>
            {/* <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default HomeCarousel;