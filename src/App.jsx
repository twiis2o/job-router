import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import Main from "./layouts/Main";
import Help from "./layouts/HelpLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { actionData } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersLayout from "./layouts/CareersLayout";
import CareerDetails, { careerLoader } from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },

        {
          path: "help",
          element: <Help />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "contact",
              element: <Contact />,
              action:actionData,
            },
          ],
        },
        {
          path: "careers",
          element: <CareersLayout />,
          errorElement: <CareersError />,
          children: [
            {
              index: true,
              element: <Careers />,
              loader: careersLoader,
            },
            {
              path: ":id",
              element: <CareerDetails />,
              loader: careerLoader,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
