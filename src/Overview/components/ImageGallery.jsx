import React, {useState, useEffect} from 'react';
import expand_icon from '../../../dist/expand_icon.png';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

const ImageGallery = ({images, clickedThumb, thumbnailClicked, galleryIMG, toggleImages, setGallery}) => {
  const imageArr = [];
  const mainImage = 'Smiley Shades.png';
  const [listImg, addImage] = useState('');
  const [galleryIMGClicked, clicked] = useState(false);

  const setBackgroundImage = (event, imageURL) => {
    event.preventDefault();
    addImage(current => imageURL);
    clicked( current => true);

  }

  const setMainImg = () => {
    if (thumbnailClicked) {
      return { backgroundImage: `url( ${clickedThumb})`};
    }  else if (galleryIMGClicked) {
      return { backgroundImage: `url( ${listImg})`};
    } else if (!thumbnailClicked && !galleryIMGClicked){
      return { backgroundImage: `url( ${mainImage})`};
    }
  }

  // const [view, changeView] = useState(false);
  // const expandView= () => changeView(true);

  // const Modal = (listImg) => {
  //   console.log('show:', view);
  //   const revertView = () => changeView(false);
  //   if (!view) {
  //     return <div>Closed</div>;
  //   } else {
  //   return (
  //     <>
  //       <Modal ={view} onHide={revertView} animation={false}>
  //         <img src={listImg}></img>
  //       </Modal>
  //     </>
  //   );
  // }
  // }


  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const Example = (listImg) => {
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

  const createGallery = () => {
    if (images.length <= 5 && setGallery) {
      console.log('under 5');
      return images.map((image) => {
        return (
          <div>
            <img
            id ='gallery'src={image.thumbnail_url}
            onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
            />
          </div>
        );
      });
    } else if (images.length > 5 && setGallery) {
      console.log('over 5');
      var imgArr1 = images.slice(0, 5);
      var imgArr2 = images.slice(-5, images.length);
      console.log('imgArr1: ', imgArr1, 'imgArr2: ', imgArr2)
      return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
        />
          {imgArr1.map((image) => {
            return (
                <img
                id ='gallery'src={image.thumbnail_url}
                onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
                />
            );
          })}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
        />
        {imgArr2.map((image) => {
            return (
                <img
                id ='gallery'src={image.thumbnail_url}
                onClick={()=> {setBackgroundImage(event, image.url); toggleImages()}}
                />
            );
          })}
      </Carousel.Item>
      </Carousel>
      );
    } else {
      console.log('no images in gallery')
      return;
    }
  }

  return (
    <div id='image-gallery'>
      <div id='main-img'  style={setMainImg()}>
        {createGallery()}
        <div id='view'>
          {/* <img src={expand_icon} onClick={expandView}> */}
          <img src={expand_icon} onClick={handleShow}>
        </img></div>
        <div>
          {Example(listImg)}
          {/* {Modal(listImg)} */}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;