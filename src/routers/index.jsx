import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const privateRouter = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
];

export default privateRouter;
