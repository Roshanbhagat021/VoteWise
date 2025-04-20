import App from "../App.jsx";
import ProtectedRoutes from "../components/ProtectedRoutes.jsx";
import CreatePage from "../pages/CreatePage.jsx";
import MyPetitions from "../pages/MyPetitions.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import PetitionsPage from "../pages/PetitionsPage.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/Signup.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <></>,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/petitions",
        element: <PetitionsPage />,
      },
      {
        path: "/my-petitions",
        element: <ProtectedRoutes><MyPetitions /></ProtectedRoutes>,
      },
      {
        path: "/create",
        element: (
          <ProtectedRoutes>
            <CreatePage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];

export default routes;
