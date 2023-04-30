/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Modal from '../../modal/Modal';
import FormInput from './FormInput';
import './FeedbackForm.scss';

function FeedbackForm() {
  const form = useForm();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => { setShowModal(true); };
  const closeModal = () => { setShowModal(false); };

  useEffect(() => {
    document.body.style.overflowY = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const onSubmit = async (data) => {
    console.log(data);
    openModal();
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='form' name='contact' method='POST' data-netlify='true'>
        <input type='hidden' name='email' value='name_of_my_form' />
        <div className='form-wrap'>
          <label className='form-field'>
            <FormInput
              type='text'
              name='name'
              placeholder='Enter your name'
              inputRules={{
                minLength: { value: 2, message: 'The minimum length is 2 characters' },
                maxLength: { value: 256, message: 'The maximum length is 256 characters' },
              }}
            />
          </label>
          <label className='form-field'>
            <FormInput
              type='email'
              name='email'
              placeholder='Enter email*'
              inputRules={{
                required: 'This is a required field',
                maxLength: { value: 256, message: 'The maximum length is 256 characters' },
                pattern: {
                  value: /(^$)|^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Enter E-mail in the format example@mail.com',
                },
              }}
            />
          </label>
        </div>
        <button type='submit' className='form-btn' aria-label='Form submit button'>
          <p>Send</p>
        </button>
      </form>
      {showModal && (
        <Modal onModalClose={() => { closeModal(); }}>
          <p className='modal-header'>Thank you!</p>
          <p className='modal-text'>Your form submission has been received.</p>
          <a className='modal-link' href='./index.html'>Back to our site</a>
        </Modal>
      )}
    </FormProvider>
  );
}

export default FeedbackForm;
