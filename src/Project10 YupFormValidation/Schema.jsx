import * as Yup from 'yup';


const passwordRegex = new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")

export const validationSchema = Yup.object({
	name: Yup.string().min(3).required('Name is required'),
	email:Yup.string().email('Invalid email format').required('Email is required'),
	password:Yup.string().matches(passwordRegex,"Please Enter Valid Password").required('Password is required'),
	confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password doesn't match").required('Confirm Password is Required')
})