import React from "react";
import Image from "next/image";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://linkedin.com/in/ellenkramp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          className="symbol"
          src="/linkedin-symbol.svg"
          alt="Linkedin icon"
          width={32}
          height={32}
        />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="mailto:ellenkramp@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          className="symbol"
          src="/email-symbol.svg"
          alt="Email icon"
          width={32}
          height={32}
        />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/ellenkramp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          className="symbol github"
          src="/github-symbol.svg"
          alt="Github icon"
          width={32}
          height={32}
        />
      </a>
    </footer>
  );
};

export default Footer;
