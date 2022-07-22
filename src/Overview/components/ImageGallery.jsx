import React, {useState, useEffect, useRef} from 'react';
import expand_icon from '../../../dist/expand_icon.png';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
const ImageGallery = ({images, clickedThumb, thumbnailClicked, galleryIMG, toggleImages, setGallery}) => {
  const mainImage = 'Smiley Shades.png';


    // ------------Sets one of the gallery images the main image in the gallery------------//
  const [listImg, addImage] = useState('');
  const [galleryIMGClicked, clicked] = useState(false);
  const setBackgroundImage = (event, imageURL) => {
    event.preventDefault();
    addImage(current => imageURL);
    clicked( current => true);
    setMainCarouselIndex(Number(event.target.className[event.target.className.length -1]));

  }

  // ------------Sets the main image in the gallery------------
  const setMainImg = () => {
    if (thumbnailClicked) {
      return { backgroundImage: `url( ${clickedThumb})`};
    }  else if (galleryIMGClicked) {
      return { backgroundImage: `url( ${listImg})`};
    } else if (!thumbnailClicked && !galleryIMGClicked){
      return { backgroundImage: `url( ${mainImage})`};
    }
  }

// ------------Creates the expanded view for the main image------------
  const [modal, setModal] = useState(false);
  var countShow = 0;
  var countClose = 0;
  const showModal= () => {setModal(true); console.log('<- Modal opened!', 'countShow:', countShow); countShow ++;};
  const closeModal = () => {setModal(false); console.log('<- Modal closed!','countClose:', countClose); countClose ++};
  const expandView = (listImg) => {
    if (!modal) {
      return;
      } else {
      return (
        <Modal show={modal} animation={false}>
          <Modal.Body onClick={closeModal}>
          <img src={listImg}></img>
          </Modal.Body>
        </Modal>
      );
    }
  }
 // ------------Highlight the gallery thumbnail when selected------------
  const highlightGalleryThumbnail = (event) => {
    console.log('highlight event:', event)
    if (galleryIMGClicked) {
      return {opacity: 1};
      } else {
      return {};
    }
  }
 // ------------Creates the carousel for the gallery thumbnails------------
  const imageArr = [];

  const createGallery = () => {
    var i = -1;
    if (images.length <= 7 && setGallery) {
      return images.map((image) => {
        i++;
        return (
          <div>
            <img
            id ='gallery-thumbnail-static'src={image.thumbnail_url}
            onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
            key={i}
            className={`galleryImg ${i}`}
            />
          </div>
        );
      });
    } else if (images.length > 7 && setGallery) {
      var divideIndex = images.length - 7
      var imgArr1 = images.slice(0, 7);
      var imgArr2 = images.slice(-divideIndex, images.length);
      return (
      <div id='gallery-carousel' style={{height: '50px', width: '70px', /*border: 'solid 2px yellow'*/ position: 'absolute',zIndex: '9'}}>
      <Carousel interval={null} style={{zIndex: '9'/* border: 'solid 2px pink'*/}}>
        <Carousel.Item
        style={{ zIndex: '9', position: 'relative', bottom: '40px', display: 'flex', flexDirection:'column' /*border: 'solid 2px orange'*/}}
        >
          {imgArr1.map((image) => {
            i++;
            return (
              <div style={{/*border: 'solid 2px purple'*/ zIndex: '1000'}}>
              <img
                id ='gallery-thumbnail'src={image.thumbnail_url}
                onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
                key={i}
                className={`galleryImg ${i}`}
              />
              </div>
              );
            })}
        </Carousel.Item>
        <Carousel.Item
          style={{/*border: 'solid 2px orange'*/ zIndex: '9', position: 'relative', bottom: '40px'}}
        >
          {imgArr2.map((image) => {
            i++;
            return (
              <img
                id ='gallery-thumbnail'src={image.thumbnail_url}
                onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
                key={i}
                className={`galleryImg ${i}`}
                style={{border: 'solid 2px blue', zIndex: '1000'}}
              />
            );
          })}
        </Carousel.Item>
      </Carousel>
      </div>
      );
    } else {
      return;
    }
  }

  // ------------Keep track of carousel state------------
    const [carouselIndex, setMainCarouselIndex] = useState(0);
    const updateCarouselState = (selectedIndex, e) => {
      setMainCarouselIndex(selectedIndex);
    }

// ------------Creates the main image Carousel------------
  const mainImageCarousel = () => {
    return (
    <div id='carousel-main' style={{height: '400px', width: '600px', /*border: 'solid 1px red'*/}}>
    <Carousel interval={null} ref={target} activeIndex={carouselIndex} onSelect={updateCarouselState} style={{zIndex:'1'}}>
    {images.map((image) => {
      return (
        <Carousel.Item>
          <div
            id ='carousel-main-img' // Lawrence, images don't resize their dimensions with the carousel, they both need separate CSS
            src={image.thumbnail_url}
            onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
            onClick={showModal}
            style={{backgroundImage: `url(${image.thumbnail_url})`, backgroundSize: 'cover', zIndex:'1'}}
            >
            </div>
          <div>
          {expandView(listImg)}
        </div>
        </Carousel.Item>
        );
      })}
    </Carousel>
    </div>
    )
  };



    const [show, setShow] = useState(false);
    const target = useRef(null);
  return (
    <div id='image-gallery'
    style={{display: 'grid', border: 'solid 2px green' }}
    >
      {/* <div id='main-img'  style={setMainImg()} >
        {createGallery()}
        <div id='view'>
          <img id='expander'src={expand_icon} onClick={showModal}}/>
        </div>
        <div>
          {expandView(listImg)}
        </div>
      </div> */}
    {mainImageCarousel()}
    {createGallery()}
  </div>
  );
}

export default ImageGallery;

