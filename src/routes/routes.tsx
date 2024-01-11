import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "../pages/ErrorPage";
import { NoteDetailPage } from "../pages/NoteDetailPage";
import { Landing } from "../pages/LandingPage";
import { CreateNotePage } from "../pages/CreateNote";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "notes",
        element: <Landing />,
      },
      {
        path: "notes/create",
        element: <CreateNotePage />
      },
      {
        path: "notes/:id/detail",
        element: <NoteDetailPage />
      }
    ],
  },
]);