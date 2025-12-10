import React, { useEffect } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";
import { useSelector } from "react-redux";

const Menu = () => {
  useEffect(() => {
    document.title = "POS | Menu";
  }, []);

  const customerData = useSelector((state) => state.customer);

  return (
    <section className="bg-[#1f1f1f] h-screen overflow-hidden flex flex-col">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 gap-4 md:gap-0 border-b border-[#2a2a2a]">
        <div className="flex items-center gap-4 self-start md:self-auto">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
            Menu
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4 w-full md:w-auto">
          <div className="flex items-center gap-3 cursor-pointer">
            <MdRestaurantMenu className="text-red-500 text-4xl" />
            <div className="flex flex-col items-start">
              <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
                {customerData.customerName || "Customer Name"}
              </h1>
              <p className="text-xs text-[#ababab] font-medium">
                Table : {customerData.table?.tableNo || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row gap-3 overflow-hidden pb-20 md:pb-0">
        {/* Left Side - Menu Items (Scrollable) */}
        <div className="w-full md:flex-[3] flex flex-col overflow-hidden">
          <MenuContainer />
        </div>

        {/* Right Side - Cart & Bill (Scrollable) */}
        <div className="w-full md:flex-[1] bg-[#1a1a1a] md:mr-3 rounded-lg flex flex-col overflow-hidden">
          {/* Customer Info (fixed at the top) */}
          <div className="flex-shrink-0">
            <CustomerInfo />
            <hr className="border-[#2a2a2a] border-t-2" />
          </div>

          {/* Scrollable container for both CartInfo and Bill */}
          <div className="flex-1 overflow-y-auto">
            <CartInfo />
            <hr className="border-[#2a2a2a] border-t-2" />
            <Bill />
          </div>
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;