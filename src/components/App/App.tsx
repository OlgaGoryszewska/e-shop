import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import ContactPage from "../../Pages/ContactPage";
import Layout from "../Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="ContactPage" element={<ContactPage />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

