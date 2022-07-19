import React, {useState, useEffect} from 'react';
import expand_icon from '../../../dist/expand_icon.png';
import Modal from 'react-bootstrap/Modal';

const ImageGallery = ({images, clickedThumb, thumbnailClicked, galleryIMG, toggleImages, setGallery}) => {
  const imageArr = [];
  const mainImage = 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
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
    if (setGallery) {
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