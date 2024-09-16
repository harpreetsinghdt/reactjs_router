import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

// Relative vs Absolute path
// if a path start with a leading forward slash then it is an absolute path
// without leading slash it is a relative path
// if parent path is not base path means not / only then make all child path to relative path means dont use slash before them

// below router is use with relative path for children
// const router = createBrowserRouter([
//   {
//     path: "/root",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "products", element: <Products /> },
//       { path: "products/:id", element: <ProductDetail /> },
//     ],
//   },
// ]);

// below router is used as absolute path for parent and all children route are relative path
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      // { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
