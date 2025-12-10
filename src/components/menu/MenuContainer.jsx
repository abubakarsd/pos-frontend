import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";


const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();
  const dispatch = useDispatch();

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 10) return;
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  const handleAddToCart = (item) => {
    if (itemCount === 0) return;

    const { name, price } = item;
    const newObj = { id: new Date().getTime(), name, pricePerQuantity: price, quantity: itemCount, price: price * itemCount };

    dispatch(addItems(newObj));
    setItemCount(0);
  }


  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-10 pb-4">
      {/* Category Grid - Scrollable horizontally on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 py-4">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-3 md:p-4 rounded-lg h-20 md:h-24 cursor-pointer transition-transform hover:scale-105"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-sm md:text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={16} />
                )}
              </div>
              <p className="text-[#ababab] text-xs md:text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 my-4" />

      {/* Menu Items Grid - Responsive and Scrollable */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-3 md:p-4 rounded-lg cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a] transition-colors"
            >
              {/* Menu Item Image */}
              {item.image && (
                <div className="w-full h-32 md:h-40 mb-3 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex items-start justify-between w-full mb-2">
                <h1 className="text-[#f5f5f5] text-base md:text-lg font-semibold">
                  {item.name}
                </h1>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg hover:bg-[#3a5a4f] transition-colors"
                  disabled={itemCount === 0}
                >
                  <FaShoppingCart size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between w-full">
                <p className="text-[#f5f5f5] text-lg md:text-xl font-bold">
                  ₦{item.price}
                </p>
                <div className="flex items-center justify-between bg-[#1f1f1f] px-3 py-2 rounded-lg gap-3">
                  <button
                    onClick={() => decrement(item.id)}
                    className="text-red-500 text-xl font-bold hover:text-red-400"
                  >
                    &minus;
                  </button>
                  <span className="text-white min-w-[20px] text-center">
                    {itemId == item.id ? itemCount : "0"}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-red-500 text-xl font-bold hover:text-red-400"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuContainer;
