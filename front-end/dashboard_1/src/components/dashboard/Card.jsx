import React from "react";
import {
  RiShoppingBasket2Line,
  FiUsers,
  AiOutlineTag,
  IoPricetagsOutline,
} from "../../assets/icons/index";

function Card() {
  const cards = [
    { icon: FiUsers, name: "Total Clients", total: "6389" },
    { icon: RiShoppingBasket2Line, name: "Total Commandes", total: "6389" },
    { icon: AiOutlineTag, name: "Total Produits", total: "6389" },
    { icon: IoPricetagsOutline, name: "Total Coupons", total: "6389" },
  ];

  return (
    <div className="flex gap-4 justify-between">
      {cards?.map((card, i) => (
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 bg-gray-100 rounded-full">
              {React.createElement(card?.icon, { size: "24" })}
            </div>
            <div className="px-3">
              <p className="text-sm text-gray-500 font-light">
                {card?.name}
              </p>
              <p className="text-xl text-gray-700 font-semibold">6389</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
