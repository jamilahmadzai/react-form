import {useState, useEffect} from 'react'
import formValidate from './formValidate'

const useForm = callback => {
  const [values, setValues] = useState ({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(formValidate(values));
    setIsSubmitting(true);
  }

  useEffect( () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return {handleChange, handleSubmit, values, errors};
}

export default useForm;