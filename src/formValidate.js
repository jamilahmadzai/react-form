const formValidate = (values) => {
  let errors = {}

  if (!values.username.trim()){
    errors.username = "Username is required"
  }

  if (!values.email){
    errors.email = 'Email is required'
  }else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password){
    errors.password = 'Password is required';
  }else if(values.password.length < 8) {
    errors.password = 'Password has to be 8 character or more'
  }

  if (!values.confirm_password){
    errors.confirm_password = 'Password is required';
  }else if(values.confirm_password !== values.password) {
    errors.confirm_password = 'Passwords do not match';
  }

  return errors;

}

export default formValidate;