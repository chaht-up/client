import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: yup
    .string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/[a-z]/, 'Password needs at least one lowercase letter')
    .matches(/[A-Z]/, 'Password needs at least one uppercase letter')
    .matches(/\d/, 'Password must include one number')
    .matches(
      /[!@#$%^&*(),./<>?;':"[\]{}=\-_+`~\\|]/,
      'Password must include one symbol',
    )
    .required('Required'),
});

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: yup
    .string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/[a-z]/, 'Password needs at least one lowercase letter')
    .matches(/[A-Z]/, 'Password needs at least one uppercase letter')
    .matches(/\d/, 'Password must include one number')
    .matches(
      /[!@#$%^&*(),./<>?;':"[\]{}=\-_+`~\\|]/,
      'Password must include one symbol',
    )
    .required('Required'),
});

export { loginSchema, registerSchema };
