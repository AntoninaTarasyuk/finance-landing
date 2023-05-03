/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Spinner from '../../spinner/Spinner';
import './Gallery.scss';

const imgModalRoot = document.querySelector('#modal-root');

function Modal(props) {
  const {
    onModalClose,
    clickedImg,
    load,
    disableRightBtn,
    disableLeftBtn,
    handelRotationRight,
    handelRotationLeft,
  } = props;

  const handleKeyDown = useCallback((event) => {
    if (event.code === 'Escape') {
      props.onModalClose();
    }
  }, [props]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  return createPortal(
    <div className='img-modal-overlay' onClick={handleBackdropClick}>
      {load && <Spinner />}
      {clickedImg}
      <button className='img-modal-close-btn' type='button' onClick={onModalClose} aria-label='Image modal window close button'>
      <svg fill='currentColor' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>
        <path d='M512.896 466.730667L816.298667 174.933333a38.698667 38.698667 0 0 1 8.192-5.717333 32.256 32.256 0 0 1 29.056 0.554667 35.84 35.84 0 0 1 10.197333 8.576 32 32 0 0 1-3.072 42.709333L557.226667 512.853333l291.797333 303.445334c1.962667 2.218667 2.56 2.730667 4.138667 5.248a32.341333 32.341333 0 0 1 2.474666 28.970666 32 32 0 0 1-50.304 12.416c-0.853333-0.725333-1.621333-1.536-2.432-2.304l-291.797333-303.402666-303.402667 291.797333c-2.261333 1.962667-2.773333 2.517333-5.290666 4.096a32.085333 32.085333 0 0 1-28.970667 2.474667 32.298667 32.298667 0 0 1-18.688-38.528c1.237333-4.266667 3.413333-8.32 6.272-11.733334 0.725333-0.853333 1.536-1.621333 2.304-2.432l303.402667-291.797333L174.933333 207.658667c-1.92-2.218667-2.517333-2.730667-4.096-5.248a32.341333 32.341333 0 0 1-2.474666-28.970667 32.298667 32.298667 0 0 1 38.528-18.688 31.573333 31.573333 0 0 1 11.733333 6.272c0.853333 0.725333 1.621333 1.536 2.432 2.304l291.84 303.402667z' />
      </svg>
      </button>
      <button type='button' onClick={handelRotationLeft} className='img-modal-arrow-left' disabled={disableLeftBtn}>
        <svg fill='currentColor' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>
          <path d='M375 535.2L758.2 152c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L329.7 490c-12.5 12.5-12.5 32.8 0 45.3 12.5 12.4 32.8 12.4 45.3-0.1z' />
          <path d='M758.3 873.7L375 490.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L713 919c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z' />
        </svg>
      </button>
      <button type='button' onClick={handelRotationRight} className='img-modal-arrow-right' disabled={disableRightBtn}>
      <svg fill='currentColor' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>
        <path d='M649 535.2L265.8 152c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L694.3 490c12.5 12.5 12.5 32.8 0 45.3-12.5 12.4-32.8 12.4-45.3-0.1z' />
        <path d='M265.7 873.7L649 490.5c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L311 919c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z' />
      </svg>
      </button>
    </div>,
    imgModalRoot,
  );
}

export default Modal;
