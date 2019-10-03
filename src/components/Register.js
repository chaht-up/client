import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useLazyAxios } from 'use-axios-client';
import { navigate } from '@reach/router';
import { registerSchema } from '../schemas';

export default function Register() {
  const [getData, { data }] = useLazyAxios({
    method: 'POST',
    url: '/api/register',
  });

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    onSubmit: () => getData(values),
    validationSchema: registerSchema,
  });

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data]);

  return (
    <div>
      <h2>Register</h2>
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
            type="password"
            onChange={handleChange}
            value={values.password}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="submit" onClick={() => navigate('/login')}>
          Login
        </button>
      </form>
    </div>
  );
}
