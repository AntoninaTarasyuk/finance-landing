import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
// import close from '../../assets/close.svg';

const modalRoot = document.querySelector('#modal-root');

function Modal(props) {
  const { onModalClose, children } = props;

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

  return createPortal(
    <div className='modal-overlay'>
      <div className='modal-window'>
        <button className='modal-close-btn' type='button' onClick={onModalClose}>
          X
          {/* <img src={close} alt='' className='close-icon' /> */}
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
