import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import Root from "./components/Root/Root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "applied",
        Component: AppliedJobs,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "job/:id",
        Component: JobDetails,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
