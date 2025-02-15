import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import Alert from "./components/Alert/Alert";
import About from "./components/About/About";
import SensorMonitoring from "./components/SensorMointoring/Sensor"; // Sensor Monitoring Page
import UserManagement from "./components/Usermanagement/UserManagement";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/alerts",
      element: <Alert />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/sensor-monitoring",
      element: <SensorMonitoring />,
    },
    {
      path: "/user-management",
      element: <UserManagement />, // Added User Management Page
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
