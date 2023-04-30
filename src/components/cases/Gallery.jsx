/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import './Gallery.scss';
import {
  GalleryItem1,
  GalleryItem2,
  GalleryItem3,
  GalleryItem4,
  GalleryItem5,
  GalleryItem6,
} from './GalleryItems';

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState('');
  const openModal = (picture) => {
    setImg(picture);
    setShowModal(true);
  };
  const closeModal = () => { setShowModal(false); };

  useEffect(() => {
    document.body.style.overflowY = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <ul className='gallery-list'>
      <li onClick={() => openModal(<GalleryItem1 />)}>
        <GalleryItem1 />
      </li>
      <li onClick={() => openModal(<GalleryItem2 />)}>
        <GalleryItem2 />
      </li>
      <li onClick={() => openModal(<GalleryItem3 />)}>
        <GalleryItem3 />
      </li>
      <li onClick={() => openModal(<GalleryItem4 />)}>
        <GalleryItem4 />
      </li>
      <li onClick={() => openModal(<GalleryItem5 />)}>
        <GalleryItem5 />
      </li>
      <li onClick={() => openModal(<GalleryItem6 />)}>
        <GalleryItem6 />
      </li>
      {showModal && (
        <Modal onModalClose={closeModal}>
          {img}
        </Modal>
      )}
    </ul>
  );
}

export default Gallery;
