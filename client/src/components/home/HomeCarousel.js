import carouselstarterphoto1 from '../assets/carouselstarterphoto1.png'
import carouselstarterphoto2 from '../assets/carouselstarterphoto2.png'
import carouselstarterphoto3 from '../assets/carouselstarterphoto3.png'
import Carousel from 'react-bootstrap/Carousel';
import Ratio from 'react-bootstrap/Ratio';
import { useNavigate } from 'react-router-dom';

function HomeCarousel() {

  const navigate = useNavigate();

  function handleClick(navEnding){
    console.log('use navigation', navEnding)
    navigate(navEnding)
  }
  return (
    <div>
      <Carousel variant="dark">
          <Carousel.Item style={{cursor:'pointer'}} onClick={()=>handleClick('account')}>
          <Ratio aspectRatio={'21x9'}>
          <img
            className="d-block w-100"
            src={carouselstarterphoto1}
            alt="First slide"
          />
          </Ratio>
          <Carousel.Caption>
            <h5>Welcome to the Bookshelf App!</h5>
            <p>Sign up</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{cursor:'pointer'}} onClick={()=>handleClick('friends')}>
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
            <h5>Find a Friend's Bookshelf</h5>
            <p>Search public profiles and see what your friends are reading!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{cursor:'pointer'}} onClick={()=>handleClick('browse')}>
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
            <h5>Browse all Books</h5>
            <p>Powered by Google Books, start saving to MyShelf now!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default HomeCarousel;