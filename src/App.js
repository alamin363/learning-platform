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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:4000/"),
        element: <Home />,
      },
      { path: "/blog", element: <Blog /> },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/course/${params.id}`),
        element: <CourseDetails />,
      },
      { path: "/login", element: <Login /> },
      {
        path: "/course",
        loader: () => fetch("http://localhost:4000/"),
        element: <Course />,
      },
      { path: "/register", element: <Register /> },
      { path: "*", element: <h1>this is error page</h1> },
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
