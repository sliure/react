import Main from "../pages/Main/Main";
import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Profile from "../pages/Profile/Profile";

export const REGISTER_ROUTE = "/register";
export const LOGIN_ROUTE = "/";
export const MAIN_ROUTE = "/";
export const CONTACTS_ROUTE = "/contacts";
export const PROFILE_ROUTE = "/profile";

// kol neesu prisijnugęs
export const loginRoutes = {
  Layout: LoginLayout,
  routes: [
    {
      path: LOGIN_ROUTE,
      Component: Login,
    },
    {
      path: REGISTER_ROUTE,
      Component: Register,
    },
  ],
};

// kai esu prisijungęs
export const authenticatedRoutes = {
  Layout: AuthenticatedLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      Component: Main,
    },
    {
      path: CONTACTS_ROUTE,
      Component: Contacts,
    },
    {
      path: PROFILE_ROUTE,
      Component: Profile,
    },
  ],
};
