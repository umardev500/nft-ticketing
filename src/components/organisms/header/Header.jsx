import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Logo from "../../../../public/images/Logo.svg";
import Image from "next/image";
import { MenuList } from "../menuList/MenuList";
import { Sidebar } from "../sidebar/Sidebar";
import { Trigger } from "../../atoms";

export const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header>
      <div className="w-full container mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" />
        </div>
        <MenuList />

        <Trigger setStatus={setNav} />

        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side Drawer Menu */}
        {/* <Sidebar status={nav} setStatus={setNav} /> */}
      </div>
    </header>
  );
};
