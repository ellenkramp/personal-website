import React from "react";
import NavItem from "../NavItem";
import "./styles.css";

const Nav = ({ className }: { className: string }) => {
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
    <nav
      className={`${className} flex justify-center md:gap-8 gap-4 md:py-8 py-4 max-w-full min-w-fit nav`}
    >
      {navItems.map((item) => (
        <NavItem key={item.title} title={item.title} link={item.link} />
      ))}
    </nav>
  );
};

export default Nav;
