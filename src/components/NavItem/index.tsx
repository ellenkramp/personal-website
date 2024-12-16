"use client";
import React from "react";
import "./styles.css";
import { useRouter } from "next/router";

type NavItemProps = {
  id: string;
  title: string;
  link: string;
};

const NavItem = ({ title, link }: NavItemProps) => {
  const router = useRouter();
  const className =
    router.pathname === link
      ? "nav-item__button nav-item__button-current"
      : "nav-item__button";

  return (
    <button
      className={className}
      onClick={(event) => {
        event.preventDefault();
        router.push({ pathname: link });
      }}
    >
      <h3 className="text-2xl nav-item__title">{title}</h3>
    </button>
  );
};

export default NavItem;