/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './FormInput';
import Modal from '../../modal/Modal';
import './FeedbackForm.scss';
// import { Spinner } from '../../spinner/Spinner';

function FeedbackForm() {
  const form = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => { setShowModal(true); };
  const closeModal = () => { setShowModal(false); };

  useEffect(() => {
    document.body.style.overflowY = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    openModal();
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='form' method='POST' action='/api/feedback'>
        {isLoading && <p>loading...</p>}
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
        <button type='submit' className='form-btn' disabled={isLoading}>
          <p>Send</p>
        </button>
      </form>
      {showModal && (
        <Modal onModalClose={() => {
          closeModal();
          setIsLoading(false);
        }}
        >
          <p>Thank you!<br />
            Your form submission has been received.<br />
            Back to our site
          </p>
        </Modal>
      )}
    </FormProvider>
  );
}

export default FeedbackForm;
