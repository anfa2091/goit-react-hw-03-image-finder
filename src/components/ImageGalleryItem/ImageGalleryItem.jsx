import  { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';
import { Modal } from '../Modal/Modal.jsx';


export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isShowModal: !prevState.isShowModal,
    }));
  };

  render() {
    const { url, alt, largeImage } = this.props;
    const { isShowModal } = this.state;
    let modal;

    if (isShowModal) {
      modal = <Modal onClose={this.toggleModal}>
            <img alt={alt} src={largeImage} />
          </Modal>
    } else{
      <h1>Title</h1>
    }
      
    return (
      <>
        <div className='item' onClick={this.toggleModal}>
          <img className='card' src={url} alt={alt} loading="lazy" />
        </div>
        {modal}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;