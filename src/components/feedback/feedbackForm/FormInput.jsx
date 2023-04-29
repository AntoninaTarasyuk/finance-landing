import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

function FormInput({
  type,
  name,
  placeholder,
  inputRules,
}) {
  const { register, formState: { errors } } = useFormContext();
  const inputError = errors[name];

  const inputProps = register ? register(name, inputRules) : {};
  return (
    <div className='input-container'>
      <input
        {...inputProps}
        className='form-input'
        type={type}
        placeholder={placeholder}
      />
      { inputError?.message && <p className='error-message'>{ inputError.message }</p> }
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  inputRules: PropTypes.object,
};

FormInput.defaultProps = { inputRules: {} };

export default FormInput;
