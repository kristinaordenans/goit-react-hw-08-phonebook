
import { Container } from './App.styled';
import { useDispatch } from 'react-redux';
import { lazy, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout';
import { RestrictedRoute } from './RegisterRoute';
import { PrivateRoute} from './PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactPage />} />
              }
            />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
};



// export const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//      dispatch(fetchContact())
//   }, [dispatch])
  
//     const items = useSelector(getItems);
//     const isError = useSelector(getError);
  
//   return (
//       <Container>
//         <ContainerTitle>Phonebook</ContainerTitle>
//         <ContactForm/>
//         <ContactsTitle>Contacts</ContactsTitle>
//         {items?.length !== 0 && !isError && <Filter/>}
//         <ContactList contacts={items}/> 
//     </Container>
//     );
// }
