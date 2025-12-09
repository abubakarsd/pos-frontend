import React, { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardMetrics from "../components/dashboard/DashboardMetrics";
import RevenueChart from "../components/dashboard/RevenueChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import Modal from "../components/dashboard/Modal";
import { HiMenuAlt2 } from "react-icons/hi";

const Dashboard = () => {
  useEffect(() => {
    document.title = "POS | Admin Dashboard";
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalState, setModalState] = useState({
    table: false,
    category: false,
    dishes: false,
  });

  const handleOpenModal = (action) => {
    setModalState({ ...modalState, [action]: true });
    setIsSidebarOpen(false); // Close sidebar on mobile when action clicked
  };

  const handleCloseModal = (action) => {
    setModalState({ ...modalState, [action]: false });
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-[calc(100vh-5rem)] bg-[#1f1f1f] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onOpenModal={handleOpenModal}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {/* Mobile Header Toggle */}
        <div className="md:hidden p-4 bg-[#1f1f1f] border-b border-[#262626] flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Dashboard</h1>
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <HiMenuAlt2 />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome/Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Dashboard Overview</h1>
                <p className="text-[#ababab] text-sm">Welcome back, Admin! Here's what's happening today.</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <DashboardMetrics />

            {/* Charts & Tables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Revenue Chart - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>

              {/* Recent Orders - Takes up 1 column or full width if we prefer */}
              {/* For this design, let's put Recent Orders below or beside. 
                                Let's put it full width below for better visibility in this iteration 
                                OR adjust the grid. Let's keep specific layout simple:
                            */}
            </div>

            {/* Recent Activity / Orders Section */}
            <div className="bg-[#1f1f1f] rounded-xl border border-[#262626] overflow-hidden">
              <div className="p-6 border-b border-[#262626]">
                <h2 className="text-xl font-bold text-white">Recent Orders</h2>
              </div>
              <RecentOrders />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {Object.entries(modalState).map(([key, value]) =>
        value ? (
          <Modal key={key} modalType={key} handleClose={() => handleCloseModal(key)} />
        ) : null
      )}
    </div>
  );
};

export default Dashboard;