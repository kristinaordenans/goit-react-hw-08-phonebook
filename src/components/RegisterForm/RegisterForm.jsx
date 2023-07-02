import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from 'redux/auth/operations';
import { Form, Button, Label, Input, Span } from "../ContacForm/ContactForm.styled";


export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      
      case 'email':
        setEmail(e.target.value);
        break;
        
      case 'password':
        setPassword(e.target.value);
        break;
      
      default:
        return;
    }
  };
    
    const handleSubmit = (e) => {
    e.preventDefault();
         dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
    }

    return (
    <Form onSubmit={handleSubmit}>
            <Label>
              <Span>Name</Span>
              <Input type="text"
                 value={name}
                 onChange={handleChange}
            name="name"
                      placeholder="Type your name..."

                 />
              </Label>
            <Label>
              <Span>Email</Span>
              <Input type="email"
                 value={email}
                 onChange={handleChange}
            name="email"
          placeholder="Type your email..."
                  />
            </Label>
            <Label>
              <Span>Password</Span>
              <Input type="password"
                 value={password}
                 onChange={handleChange}
            name="password"
          placeholder="Type your password..."
                  />
              </Label>
            <Button type="submit">Register</Button>
          </Form>
  )
}