import { UserButton } from "@clerk/nextjs";
import { faTaxi, faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function Header() {
  const headerMenu = [
    {
      id: 1,
      name: "Ride",
      icon: (
        <FontAwesomeIcon color="black" icon={faTaxi} width={17} height={17} />
      ),
    },
    {
      id: 1,
      name: "Package",
      icon: <FontAwesomeIcon icon={faBox} width={17} height={17} />,
    },
  ];

  return (
    <div className="p-5 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between">
      <div className="flex gap-24 items-center ">
        <Image src="/uber-logo.png" width={70} height={70} alt="logo" />
        <div className="flex gap-6 items-center">
          {headerMenu.map((item) => (
            <div className="flex gap-2 items-center">
              {item.icon}
              <h2 className="text-[14px] font-medium">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <UserButton />
    </div>
  );
}

export default Header;
