import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Users from "./pages/Users";
import Deliveries from "./pages/Deliveries";
import Requests from "./pages/Requests";
import Reports from "./pages/Reports";
import Purchases from "./pages/Purchases";
import Login from "./pages/Login";
import SideBar from "./components/Sidebar";
import Request from "./pages/Request";
import { Purchase } from "@/pages";
import { Toaster } from "sonner";
import { AuthProvider } from "@/providers";
import { PrivateRoute } from "./components/PrivateRoute";
import Classroom from "./pages/Classroom";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <SideBar />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="/inventory" />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="requests" element={<Requests />} />
            <Route path="reports" element={<Reports />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="deliveries" element={<Deliveries />} />
            <Route path="users" element={<Users />} />
            <Route path="requests/:id" element={<Request />} />
            <Route path="purchases/:id" element={<Purchase />} />
            <Route path="classrooms/:id" element={<Classroom />} />
            <Route path="*" element={<Navigate to="/inventory" />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </AuthProvider>
  );
}

export default App;