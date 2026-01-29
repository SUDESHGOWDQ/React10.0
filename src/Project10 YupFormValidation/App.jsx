import React from 'react'
import { validationSchema } from './Project10 YupFormValidation/Schema';
 import { Formik,Form,Field } from 'formik';

const App = () => {
	const initialValues = {name:"",email:"",password:"",cpassword:""}
  return (
	<div>
	<Formik initialValues={initialValues} validationSchema={validationSchema}>
	  {({errors,touched})=>(
	   <Form>
	   <Field type='text' name='name'  />
	   {errors.name && touched.name && <p style={{color:'red'}}>{errors.name}</p>}
	   <br/>
	   <Field type="email" name="email"/>
	   {errors.email && touched.email && <p style={{color:'red'}}>{errors.email}</p>}
	   <br/>
	   <Field type='password' name='password' />
	   {errors.password && touched.password && <p style={{color:'red'}}>{errors.password}</p>}
	   <br/>
	   <Field type='password' name='cpassword' />
	   {errors.cpassword && touched.cpassword && <p style={{color:'red'}}>{errors.cpassword}</p>}
	   <br/>
	   <button type='submit'>Submit</button>
	  </Form>
	  )}
	</Formik>
	</div>
  )
}

export default App