import carouselstarterphoto1 from '../assets/carouselstarterphoto1.png'
import carouselstarterphoto2 from '../assets/carouselstarterphoto2.png'
import carouselstarterphoto3 from '../assets/carouselstarterphoto3.png'
import Carousel from 'react-bootstrap/Carousel';
import Ratio from 'react-bootstrap/Ratio';
import { useNavigate } from 'react-router-dom';

function HomeCarousel() {

  const navigate = useNavigate();
  const captionStyle = { textShadow: '1px 1px white' }

  function handleClick(navEnding){
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
          <Carousel.Caption style={captionStyle}>
            <h1>Welcome to Bookshelf!</h1>
            <h3 as='h2'>Sign up</h3>
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
          <Carousel.Caption style={captionStyle}>
            <h1>Find a Friend's Bookshelf</h1>
            <h3>Search public profiles and see what your friends are reading!</h3>
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
          <Carousel.Caption style={captionStyle}>
            <h1>Browse all Books</h1>
            <h3>Powered by Google Books, start saving to MyShelf now!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default HomeCarousel;