import logo from "../assets/logo.svg";
import dashboardData from "./dashboardData";
import arrowIcon from "../assets/arrowIcon.svg";
import { useState, useEffect, useRef } from "react";

function Container() {
  const [expandedItemId, setExpandedItemId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setExpandedItemId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubItems = (itemId) => {
    setExpandedItemId(itemId === expandedItemId ? null : itemId);
  };

  return (
    <div className="grid grid-cols-6 bg-[#41576B]/35 h-screen">
      <div className="lg:col-span-1 col-span-3 bg-white flex flex-col items-center">
        <img src={logo} className="cursor-pointer w-40 mt-24" />

        <div className="mt-16 w-full">
          {dashboardData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-row items-center justify-between group h-12 pl-5 pr-5 lg:pl-14 lg:pr-9 
              relative border-l-[6px] border-transparent cursor-pointer hover:bg-[#5866DD]/5 
              hover:border-[#5866DD] ${
                item.id === expandedItemId
                  ? "bg-[#5866DD]/5 border-[#5866DD] border-l-[6px]"
                  : ""
              }`}
              onClick={() => toggleSubItems(item.id)}
            >
              <div className="flex flex-row gap-2">
                <img
                  className="w-4"
                  src={
                    item.subItems && item.id === expandedItemId
                      ? item.activeIconSrc
                      : item.iconSrc
                  }
                  alt={item.name}
                />

                <p
                  className={`font-[350] text-[0.80rem]  
                group-hover:text-[#5866DD] group-hover:font-medium ${
                  item.id === expandedItemId
                    ? "text-[#5866DD] font-medium"
                    : "text-[#6B788E]"
                }`}
                >
                  {item.name}
                </p>
              </div>
              {item.showArrowIcon && (
                <img className="w-2" src={arrowIcon} alt="Arrow Icon" />
              )}

              {item.subItems && item.id === expandedItemId && (
                <div
                  ref={menuRef}
                  className="bg-white lg:p-5 p-3 lg:w-64 w-11/12 rounded-r-xl shadow-xl flex flex-col 
                gap-2 absolute top-0 left-full"
                >
                  <div
                    className="flex flex-row gap-5 justify-between items-center
                 bg-[#EEEEEE]/30 h-7 rounded-lg border lg:pl-3 lg:pr-3 pl-1 pr-2"
                  >
                    <div className="flex flex-row items-center lg:gap-2 gap-1">
                      <img className="w-4" src={item.iconSrc} alt={item.name} />

                      <p className="font-medium lg:text-xs text-[11px] text-[#6B788E]">
                        {item.name}
                      </p>
                    </div>

                    <img className="w-2" src={arrowIcon} alt="Arrow Icon" />
                  </div>

                  <ul className="flex flex-col gap-2 mt-2 pl-9 cursor-pointer">
                    {item.subItems.map((subItem) => (
                      <li
                        className="text-xs text-[#6B788E] font-[350] hover:text-[#5866DD] hover:font-medium mb-1"
                        key={subItem.id}
                      >
                        {subItem.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;
