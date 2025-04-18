import App from "../App.jsx";
import CreatePage from "../pages/CreatePage.jsx";
import PetitionsPage from "../pages/PetitionsPage.jsx";
import PollsPage from "../pages/PollsPage.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/Signup.jsx";

const routes = [
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <></> 
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp/>,
      },
      {
        path: '/petitions',
        element: <PetitionsPage/>,
      },
      {
        path: '/polls',
        element: <PollsPage/>,
      },
      {
        path: '/create',
        element: <CreatePage/>,
      },
    ]
  },
];

export default routes;
