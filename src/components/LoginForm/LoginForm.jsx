import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import { FormLogin, LableFormLogin, LoginButton, ButtonContainer, div} from './LoginForm.styled';
import { useState } from 'react';
import { Form, Button, Label, Input, Span } from "../ContacForm/ContactForm.styled";


export const LoginForm = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setMail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form;
    if (!email.value || !password.value)
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>
              <Span>Email</Span>
        <Input
          autoComplete="current-email"
          placeholder="Type your email..."
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />
      </Label>
          <Label>
              <Span>Password</Span>
        <Input
          autoComplete="current-password"
          placeholder="Type your password..."
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />
      </Label>
      <div>
        <Button type="submit">Log In</Button>
      </div>
    </Form>
  );
};