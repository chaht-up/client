import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useLazyAxios } from 'use-axios-client';
import { navigate } from '@reach/router';
import { loginSchema } from '../schemas';

export default function Login() {
  const [getData, { data }] = useLazyAxios({
    method: 'POST',
    url: '/login',
  });

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    onSubmit: () => getData(values),
    validationSchema: loginSchema,
  });

  useEffect(() => {
    if (data && data.success) {
      navigate('/');
    }
  }, [data]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            name="username"
            id="username"
            onChange={handleChange}
            value={values.username}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            id="password"
            onChange={handleChange}
            value={values.password}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="submit" onClick={() => navigate('/register')}>
          Register
        </button>
      </form>
    </div>
  );
}
