import React from "react";
import { MdDashboard, MdRestaurantMenu, MdTableBar, MdSettings, MdLogout, MdReceipt } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice";

const Sidebar = ({ isOpen, toggleSidebar, onOpenModal }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const links = [
        { name: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
        { name: "Orders", icon: <MdReceipt />, path: "/orders" },
        { name: "Menu", icon: <MdRestaurantMenu />, path: "/menu" },
        { name: "Tables", icon: <MdTableBar />, path: "/tables" },
        // { name: "Settings", icon: <MdSettings />, path: "/settings" },
    ];

    const logoutMutation = useMutation({
        mutationFn: () => logout(),
        onSuccess: () => {
            dispatch(removeUser());
            navigate("/auth");
        },
        onError: (error) => {
            console.error("Logout error:", error);
        },
    });

    const handleLogout = () => {
        logoutMutation.mutate();
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar Container */}
            <motion.div
                className={`fixed md:static inset-y-0 left-0 bg-[#1f1f1f] w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col border-r border-[#262626]`}
            >
                <div className="p-6 text-center border-b border-[#262626]">
                    <h1 className="text-2xl font-bold text-red-500">Admin Panel</h1>
                </div>

                <nav className="flex-1 mt-6 px-4 space-y-2">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium transition-colors ${location.pathname === link.path
                                ? "bg-red-500 text-white"
                                : "text-[#ababab] hover:bg-[#262626] hover:text-white"
                                }`}
                            onClick={() => window.innerWidth < 768 && toggleSidebar()}
                        >
                            <span className="text-2xl">{link.icon}</span>
                            {link.name}
                        </Link>
                    ))}

                    {/* Quick Actions */}
                    <div className="mt-8">
                        <h3 className="text-[#757575] text-xs font-bold uppercase tracking-wider px-4 mb-2">
                            Quick Actions
                        </h3>
                        <button
                            onClick={() => onOpenModal("table")}
                            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium text-[#ababab] hover:bg-[#262626] hover:text-white transition-colors text-left"
                        >
                            <span className="text-2xl"><MdTableBar /></span>
                            Add Table
                        </button>
                        <button
                            onClick={() => onOpenModal("category")}
                            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium text-[#ababab] hover:bg-[#262626] hover:text-white transition-colors text-left"
                        >
                            <span className="text-2xl"><MdRestaurantMenu /></span>
                            Add Category
                        </button>
                        <button
                            onClick={() => onOpenModal("dishes")}
                            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium text-[#ababab] hover:bg-[#262626] hover:text-white transition-colors text-left"
                        >
                            <span className="text-2xl"><MdDashboard /></span>
                            Add Dish
                        </button>
                    </div>
                </nav>

                <div className="p-4 border-t border-[#262626]">
                    <button
                        onClick={handleLogout}
                        disabled={logoutMutation.isPending}
                        className={`flex items-center gap-4 px-4 py-3 w-full rounded-lg text-lg font-medium text-red-500 hover:bg-[#260000] transition-colors ${logoutMutation.isPending ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        <span className="text-2xl"><MdLogout /></span>
                        {logoutMutation.isPending ? "Logging out..." : "Logout"}
                    </button>
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
