import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button type="button" onClick={() => dispatch(logOut())}>Log out</Button>
    </div>
  );
};