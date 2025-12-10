import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { name: "Mon", revenue: 4000 },
    { name: "Tue", revenue: 3000 },
    { name: "Wed", revenue: 5000 },
    { name: "Thu", revenue: 2780 },
    { name: "Fri", revenue: 1890 },
    { name: "Sat", revenue: 6390 },
    { name: "Sun", revenue: 3490 },
];

const RevenueChart = () => {
    // Ensure data is always defined
    if (!data || data.length === 0) {
        return (
            <div className="bg-[#1f1f1f] p-6 rounded-xl border border-[#262626]">
                <h2 className="text-white text-lg font-bold mb-6">Weekly Revenue</h2>
                <div className="h-80 w-full flex items-center justify-center">
                    <p className="text-gray-400">No revenue data available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#1f1f1f] p-6 rounded-xl border border-[#262626]">
            <h2 className="text-white text-lg font-bold mb-6">Weekly Revenue</h2>
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" stroke="#ababab" />
                        <YAxis stroke="#ababab" />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#262626", border: "none", borderRadius: "8px", color: "#fff" }}
                            cursor={{ fill: "transparent" }}
                        />
                        <Bar dataKey="revenue" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;
