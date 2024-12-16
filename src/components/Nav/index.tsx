import React from "react";
import { useRouter } from "next/router";
import NavItem from "../NavItem";
import "./styles.css";

const Nav = ({ className }: { className: string }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const getClassName = (link: string) => {
    const isCurrentLocation = currentPath === link;
    return `nav__item ${isCurrentLocation && "nav__item-underline"}`;
  };

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Resume",
      link: "/resume",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className={`${className} nav`}>
      {navItems.map((item) => (
        <NavItem id={item.title} title={item.title} link={item.link} />
      ))}
    </nav>
  );
};

export default Nav;
