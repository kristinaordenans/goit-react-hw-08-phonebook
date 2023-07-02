import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector';
import { Container, Title, Par } from './HomePage.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
        <Title>Welcome to Phonebook!</Title>
        {!isLoggedIn && (
          <Par>Please log in to use the Phonebook!</Par>
        )}
    </Container>
  );
}