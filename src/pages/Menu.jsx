// import React, { useEffect } from "react";
// import BottomNav from "../components/shared/BottomNav";
// import BackButton from "../components/shared/BackButton";
// import { MdRestaurantMenu } from "react-icons/md";
// import MenuContainer from "../components/menu/MenuContainer";
// import CustomerInfo from "../components/menu/CustomerInfo";
// import CartInfo from "../components/menu/CartInfo";
// import Bill from "../components/menu/Bill";
// import { useSelector } from "react-redux";

// const Menu = () => {
//   useEffect(() => {
//     document.title = "POS | Menu";
//   }, []);

//   const customerData = useSelector((state) => state.customer);

//   return (
//     <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
//       {/* Left Div */}
//       <div className="flex-[3] flex flex-col">
//         <div className="flex items-center justify-between px-10 py-4">
//           <div className="flex items-center gap-4">
//             <BackButton />
//             <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
//               Menu
//             </h1>
//           </div>
//           <div className="flex items-center justify-around gap-4">
//             <div className="flex items-center gap-3 cursor-pointer">
//               <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
//               <div className="flex flex-col items-start">
//                 <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
//                   {customerData.customerName || "Customer Name"}
//                 </h1>
//                 <p className="text-xs text-[#ababab] font-medium">
//                   Table : {customerData.table?.tableNo || "N/A"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <MenuContainer />
//       </div>
//       {/* Right Div (Scrollable) */}
//       <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[calc(100vh-8rem)] rounded-lg flex flex-col pt-2">
//         {/* Customer Info (fixed at the top) */}
//         <CustomerInfo />
//         <hr className="border-[#2a2a2a] border-t-2" />
//         {/* Scrollable container for both CartInfo and Bill */}
//         <div className="flex-1 overflow-y-auto">
//           <CartInfo />
//           <hr className="border-[#2a2a2a] border-t-2" />
//           <Bill />
//         </div>
//       </div>

//       <BottomNav />
//     </section>
//   );
// };

// export default Menu;
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
    <section className="bg-[#1f1f1f] h-[calc(100vh-10rem)] overflow-hidden flex gap-3">
      {/* Left Div */}
      <div className="flex-[3] flex flex-col">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#2a2a2a] text-4xl" />
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

        <MenuContainer />
      </div>
      {/* Right Div (Scrollable) */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[calc(100vh-13rem)] rounded-lg flex flex-col pt-2">
        {/* Customer Info (fixed at the top) */}
        <CustomerInfo />
        <hr className="border-[#2a2a2a] border-t-2" />
        {/* Scrollable container for both CartInfo and Bill */}
        <div className="flex-1 overflow-y-auto">
          <CartInfo />
          <hr className="border-[#2a2a2a] border-t-2" />
          <Bill />
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;