import * as Yup from 'yup';

/**
 * Schema for signup.
 */
const signupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').trim().lowercase().required('Email is required'),
  password: Yup.string().required('Password is required'),
  identificationNumber: Yup.string().required('Identification Number is required '),
});

export default signupSchema;
