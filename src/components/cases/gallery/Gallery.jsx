/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import './Gallery.scss';
import Modal from './ImageModal';

import {
  GalleryItem1,
  GalleryItem2,
  GalleryItem3,
  GalleryItem4,
  GalleryItem5,
  GalleryItem6,
} from './GalleryItems';

function Gallery() {
  const data = [
    <GalleryItem1 />,
    <GalleryItem2 />,
    <GalleryItem3 />,
    <GalleryItem4 />,
    <GalleryItem5 />,
    <GalleryItem6 />];
  const [clickedImg, setClickedImg] = useState();
  const [currentIdx, setCurrentIdx] = useState();
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
    setClickedImg(null);
  };

  useEffect(() => {
    document.body.style.overflowY = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const openModal = (image, index) => {
    setShowModal(true);
    setCurrentIdx(index);
    setClickedImg(image);
    setDisableRight(false);
    setDisableLeft(false);
    if (index === data.length - 1) {
      setDisableRight(true);
    }
    if (index === 0) {
      setDisableLeft(true);
    }
  };

  const handleRotationRight = () => {
    if (currentIdx === data.length - 1) {
      setDisableRight(true);
      return;
    }
    setDisableRight(false);
    setDisableLeft(false);
    const newIdx = currentIdx + 1;
    const newImg = data.filter((item) => data.indexOf(item) === newIdx);
    setCurrentIdx(newIdx);
    setClickedImg(newImg);
  };

  const handleRotationLeft = () => {
    if (currentIdx === 0) {
      setDisableLeft(true);
      return;
    }
    setDisableLeft(false);
    setDisableRight(false);
    const newIdx = currentIdx - 1;
    const newImg = data.filter((item) => data.indexOf(item) === newIdx);
    setCurrentIdx(newIdx);
    setClickedImg(newImg);
  };

  return (
    <ul className='gallery'>
      {data.map((imgItem, index) => (
        <li key={index} className='gallery-item' onClick={() => openModal(imgItem, index)}>
          {imgItem}
        </li>
      ))}
      {clickedImg && (
        <Modal
          onModalClose={closeModal}
          clickedImg={clickedImg}
          disableRightBtn={disableRight}
          disableLeftBtn={disableLeft}
          handelRotationRight={handleRotationRight}
          handelRotationLeft={handleRotationLeft}
        />
      )}
    </ul>
  );
}

export default Gallery;
