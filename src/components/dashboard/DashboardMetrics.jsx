import React from "react";
import { FaDollarSign, FaUserFriends, FaClipboardList, FaUtensils } from "react-icons/fa";

const MetricsCard = ({ title, value, icon, color }) => (
    <div className="bg-[#1f1f1f] p-6 rounded-xl border border-[#262626] flex items-center justify-between">
        <div>
            <p className="text-[#ababab] text-sm font-medium mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
        <div className={`p-4 rounded-full ${color} bg-opacity-20 text-white text-xl`}>
            {icon}
        </div>
    </div>
);

const DashboardMetrics = () => {
    // TODO: Replace with real data from props or API
    const metrics = [
        { title: "Total Revenue", value: "$12,450", icon: <FaDollarSign />, color: "bg-green-500" },
        { title: "Total Orders", value: "1,240", icon: <FaClipboardList />, color: "bg-blue-500" },
        { title: "Active Tables", value: "8", icon: <FaUserFriends />, color: "bg-red-500" },
        { title: "Total Dishes", value: "45", icon: <FaUtensils />, color: "bg-purple-500" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((item, index) => (
                <MetricsCard key={index} {...item} />
            ))}
        </div>
    );
};

export default DashboardMetrics;
