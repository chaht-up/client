import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useLazyAxios } from 'use-axios-client';
import { navigate } from '@reach/router';
import { loginSchema } from '../schemas';

export default function Login() {
  const [getData, { data, error, loading }] = useLazyAxios({
    method: 'POST',
    url: '/api/login',
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
    if (data) {
      navigate('/');
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...{error.message}</div>;
  }

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
            type="password"
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
