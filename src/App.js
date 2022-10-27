import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Course from "./component/Cources/Cources";
import Login from "./component/Form/Login";
import Register from "./component/Form/Register";
import CourseDetails from "./component/CourseDetails/CourseDetails";
import PrivetRout from "./component/PrivetRout/PrivetRout";
import Error from "./component/Error/Error";
import Faq from "./component/Faq/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://backend-cores-server-alaminpk360.vercel.app/"),
        element: <Home />,
      },
      { path: "/blog", element: <Blog /> },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`https://backend-cores-server-alaminpk360.vercel.app/course/${params.id}`),
        element: <PrivetRout><CourseDetails /></PrivetRout>,
      },
      { path: "/login", element: <Login /> },
      {
        path: "/course",
        loader: () => fetch("https://backend-cores-server-alaminpk360.vercel.app/"),
        element: <Course />,
      },
      {path:'/faq' , element: <Faq />},
      { path: "/register", element: <Register /> },
      { path: "*", element: <Error /> }
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
