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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
    setClickedImg(null);
  };

  const openModal = (image, index) => {
    setIsLoading(true);
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
    setTimeout(() => { setIsLoading(false); }, 700);
  };

  const handleRotationRight = () => {
    setIsLoading(true);
    setDisableRight(false);
    setDisableLeft(false);
    const newIdx = currentIdx + 1;
    if (newIdx === data.length - 1) {
      setDisableRight(true);
    }
    const newImg = data.filter((item) => data.indexOf(item) === newIdx);
    setCurrentIdx(newIdx);
    setClickedImg(newImg);
    setTimeout(() => { setIsLoading(false); }, 500);
  };

  const handleRotationLeft = () => {
    setIsLoading(true);
    setDisableLeft(false);
    setDisableRight(false);
    const newIdx = currentIdx - 1;
    if (newIdx === 0) {
      setDisableLeft(true);
    }
    const newImg = data.filter((item) => data.indexOf(item) === newIdx);
    setCurrentIdx(newIdx);
    setClickedImg(newImg);
    setTimeout(() => { setIsLoading(false); }, 500);
  };

  return (
    <div>
      <ul className='gallery'>
        {data.map((imgItem, index) => (
          <li key={index} className='gallery-item' onClick={() => openModal(imgItem, index)}>
            {imgItem}
          </li>
        ))}
      </ul>
      {clickedImg && (
        <Modal
          onModalClose={closeModal}
          clickedImg={clickedImg}
          load={isLoading}
          disableRightBtn={disableRight}
          disableLeftBtn={disableLeft}
          handelRotationRight={handleRotationRight}
          handelRotationLeft={handleRotationLeft}
        />
      )}
    </div>
  );
}

export default Gallery;
