// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth';
// import { Container } from 'components/Navigation/Navigation.styled';
// import { Button } from '@mui/material';

// export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

//   return (
//     <Container>
//       <p>Welcome, {user.name}</p>
//       <Button
//         type="button"
//         onClick={() => dispatch(logOut())}
//       >
//         Logout
//       </Button>
//     </Container>
//   );
// };