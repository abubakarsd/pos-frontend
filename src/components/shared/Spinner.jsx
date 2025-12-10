import React from "react";

const Spinner = ({ size = "md", color = "white" }) => {
    const sizeClasses = {
        sm: "w-4 h-4 border-2",
        md: "w-5 h-5 border-2",
        lg: "w-6 h-6 border-3",
    };

    const colorClasses = {
        white: "border-white border-t-transparent",
        red: "border-red-500 border-t-transparent",
        gray: "border-gray-400 border-t-transparent",
    };

    return (
        <div
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin`}
        ></div>
    );
};

export default Spinner;
