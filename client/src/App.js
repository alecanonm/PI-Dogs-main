import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import HomePage from "./components/Home/HomePage";
import RootLayout from "./components/Helper/RootLayout";
import DogsDetail from "./components/Detail/DogsDetail";
import MyDogs from "./components/Form/MyDogs";
import Error from "./components/Error/Error";
const root = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/home", element: <HomePage /> },
      { path: "/detail/:id", element: <DogsDetail /> },
      { path: "/mydogs", element: <MyDogs /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={root} />
    </div>
  );
}

export default App;
