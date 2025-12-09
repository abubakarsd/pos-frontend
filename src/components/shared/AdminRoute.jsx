import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { isAuth, role } = useSelector((state) => state.user);

    if (!isAuth) {
        return <Navigate to="/auth" />;
    }

    // Assuming the user object has a 'role' property and 'Admin' is the value for admins
    // You might need to adjust "Admin" based on your exact backend value (e.g., "admin", "ADMIN")
    if (role !== "Admin") {
        // Redirect to home if authorized but not admin
        return <Navigate to="/" />;
    }

    return children;
};

export default AdminRoute;
