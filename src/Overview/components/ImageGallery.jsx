import React from 'react';

class ImageGallery extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      images: [],
      mainImage: 'main',
    }
  }
  componentDidMount () {
    console.log('imageGallerymounted')
  }
  componentWillReceiveProps(props) {
    this.setState({
      images: props.images,
      mainImage: props.images[0].thumbnail_url
    })
  }

  componentWillMount () {
    console.log('componentWillMount, images saved to state:', this.state.images);
  }
  render (props) {
    return (
      <div id='image-gallery'>
        <h2>Image Gallery</h2>
        <img id='main-img 'src={this.state.mainImage}/>
        {this.state.images.map((image) => {
          return (
          <div>
            <img id ='gallery'src={image.thumbnail_url}/>
          </div>
          );
        })}
      </div>
    );
  }
}

export default ImageGallery;