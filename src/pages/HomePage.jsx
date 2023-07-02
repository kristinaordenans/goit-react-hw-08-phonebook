import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector';
// import { Container } from 'components/App.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
        <h1>Welcome to Phonebook</h1>
        {!isLoggedIn && (
          <p>Please log in to use the Phonebook</p>
        )}
    </div>
  );
}