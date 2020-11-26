import React from 'react'
import useForm from './useForm'
import './Form.css'

const FormSignup = (props) => {
  const {values, handleChange, handleSubmit, errors} = useForm(props.submitForm);
  return (
    <div className='form-content'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Fill in the following information to signup</h1>
        
        <div className='form-inputs'>
          <label htmlFor='username'>
            Username
          </label>
          <input 
          type='text' 
          name='username' 
          className='form-input' 
          placeholder='Enter username'
          value={values.username}
          onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label htmlFor='email'>
            Email
          </label>
          <input 
          type='email' 
          name='email' 
          className='form-input' 
          placeholder='Enter email'
          value={values.email}
          onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label htmlFor='password'>
            Password
          </label>
          <input 
          type='password' 
          name='password' 
          className='form-input' 
          placeholder='Enter password'
          value={values.password}
          onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className='form-inputs'>
          <label htmlFor='confirm_password'>
            Confirm Password
          </label>
          <input 
          type='password' 
          name='confirm_password' 
          className='form-input' 
          placeholder='Enter password'
          value={values.confirm_password}
          onChange={handleChange}
          />
          {errors.confirm_password && <p>{errors.confirm_password}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Submit
        </button>

        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here </a>
        </span>

      </form>
    </div>
  )
}

export default FormSignup
