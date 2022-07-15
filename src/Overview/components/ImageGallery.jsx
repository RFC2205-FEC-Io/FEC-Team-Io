import React from 'react';

class ImageGallery extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      images: [],
      mainImage: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      listImg: '',
      imgClicked: false,
      clickedthumb: ''
    }
    this.setBackgroundImage = this.setBackgroundImage.bind(this);
  }

  componentDidMount () {
    console.log('imageGallerymounted')
  }

  componentWillReceiveProps(props) {
    this.setState({
      images: props.images,
      // mainImage: props.images[0].thumbnail_url
      clickedthumb: props.clickedImg

    })
  }

  componentWillMount () {
    console.log('componentWillMount, images saved to state:', this.state.images);
  }

  setBackgroundImage(event, imageURL) {
    event.preventDefault();
    console.log('imageURL:', imageURL);
    this.setState({
      listImg: imageURL
    });
    this.setState({
      imgClicked: true
    })
  }

  setStyle () {
    if (this.state.imgClicked) {
      return { backgroundImage: `url( ${this.state.listImg})`};
    } else {
      return { backgroundImage: `url( ${this.state.clickedthumb})`};
    }
  }
  render (props) {
    return (
      <div id='image-gallery' style={this.setStyle()}>
        {this.state.images.map((image) => {
          return (
          <div>
            <img id ='gallery'src={image.thumbnail_url} onClick={()=> {this.setBackgroundImage(event, image.url)}}/>
          </div>
          );
        })}
      </div>
    );
  }
}

export default ImageGallery;