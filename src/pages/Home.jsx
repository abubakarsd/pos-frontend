import React, { useEffect } from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";

const Home = () => {

  useEffect(() => {
    document.title = "POS | Home"
  }, [])

  return (
    <section className="bg-[#1f1f1f] h-auto md:h-[calc(100vh-5rem)] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row gap-3 pb-24 md:pb-0">
      {/* Left Div */}
      <div className="w-full md:flex-[3] flex flex-col">
        <Greetings />
        <div className="flex flex-col md:flex-row items-center w-full gap-3 px-8 mt-8">
          <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
          <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} />
        </div>
        <RecentOrders />
      </div>
      {/* Right Div */}
      <div className="w-full md:flex-[2] mt-4 md:mt-0">
        <PopularDishes />
      </div>
      <BottomNav />
    </section>
  );
};

export default Home;
