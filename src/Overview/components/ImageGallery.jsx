import React, {useState, useEffect, useRef} from 'react';
import expand_icon from '../../../dist/expand_icon.png';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
<<<<<<< HEAD
import Overlay from 'react-bootstrap/Overlay';

const ImageGallery = ({images, clickedThumb, thumbnailClicked, galleryIMG, toggleImages, setGallery}) => {
  const mainImage = 'Smiley Shades.png';


    // ------------Sets one of the gallery images the main image in the gallery------------//
  const [listImg, addImage] = useState('');
  const [galleryIMGClicked, clicked] = useState(false);
=======

const ImageGallery = ({images, clickedThumb, thumbnailClicked, galleryIMG, toggleImages, setGallery}) => {
  const imageArr = [];
  const mainImage = 'Smiley Shades.png';
  const [listImg, addImage] = useState('');
  const [galleryIMGClicked, clicked] = useState(false);

>>>>>>> 71ab0a3d9d6bca7b7657dc9f68583338a56901c5
  const setBackgroundImage = (event, imageURL) => {
    event.preventDefault();
    console.log('setBackgroundImage EVENT:', event.target);
    addImage(current => imageURL);
    clicked( current => true);

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
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const expandView = (listImg) => {
    const handleClose = () => setShow(false);
    if (!show) {
      return;
      } else {
      return (
        <>
          <Modal show={show} onHide={handleClose} animation={false}>
            <img src={listImg}></img>
          </Modal>
        </>
      );
    }
  }

  const highlight = (event) => {
    console.log('highlight event:', event)
    if (galleryIMGClicked) {
      return {
        opacity: 1
      }
    }
  }

 // ------------Creates the image gallery for the gallery thumbnails------------
  const imageArr = [];

  const createGallery = () => {
    if (images.length <= 7 && setGallery) {
      return images.map((image) => {
        return (
          <div>
            <img
            id ='gallery-thumbnail'src={image.thumbnail_url}
            onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
            />
          </div>
        );
      });
    } else if (images.length > 7 && setGallery) {
      var divideIndex = images.length - 7
      var imgArr1 = images.slice(0, 7);
      var imgArr2 = images.slice(-divideIndex, images.length);
      return (
      <div id='gallery-carousel' style={{height: '50px', width: '400px', /*border: 'solid 1px yellow'*/}}>
      <Carousel interval={null}>
        <Carousel.Item>
          {imgArr1.map((image) => {
            return (
              <img
                id ='gallery-thumbnail'src={image.thumbnail_url}
                onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
              />
              );
            })}
        </Carousel.Item>
        <Carousel.Item>
          {imgArr2.map((image) => {
            return (
              <img
                id ='gallery-thumbnail'src={image.thumbnail_url}
                onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
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

// ------------Creates the main image Carousel------------
  const mainImageCarousel = () => {
    return (
      <div id='carousel-main' style={{height: '400px', width: '600px', /*border: 'solid 1px red'*/}}>
    <Carousel interval={null} ref={target}>
    {images.map((image) => {
      return (
        <Carousel.Item>
          <img
          id ='carousel-main-img' // Lawrence, images don't resize their dimensions with the carousel, they both need separate CSS
          src={image.thumbnail_url}
          onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
          />
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

  // ------------Overlay gallery carousel over main carousel------------
  const target = useRef(null);
  return (
    <div id='image-gallery'>
      {/* <div id='main-img'  style={setMainImg()} >
        {createGallery()}
        <div id='view'>
          <img id='expander'src={expand_icon} onClick={handleShow}/>
        </div>
        <div>
          {expandView(listImg)}
        </div>
      </div> */}
    {createGallery()}
    {mainImageCarousel()}
  </div>
  );
}

export default ImageGallery;