import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { useLazyAxios } from 'use-axios-client';
import { navigate } from '@reach/router';
import { AuthContext } from '../contexts/Authentication';
import { loginSchema } from '../schemas';

export default function Login() {
  const { setUser } = useContext(AuthContext);

  const [getData, { data, error, loading }] = useLazyAxios({
    method: 'POST',
    url: '/api/sessions',
    headers: { 'content-type': 'application/json' },
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
      setUser(data);
      navigate('/');
    }
  }, [data, setUser]);

  if (loading) {
    return <div data-testid="loading">Loading...</div>;
  }

  if (error) {
    return <div data-testid="error">Error...{error.message}</div>;
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
