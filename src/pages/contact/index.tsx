import Image from "next/image";
import { Caprasimo } from "next/font/google";
import "./styles.css";

const caprasimo = Caprasimo({
  weight: ["400"],
  subsets: ["latin"],
});

const ContactPage = () => {
  return (
    <div className="section flex flex-col items-center justify-items-center p-8 pb-20 lg:gap-16 sm:gap-8 sm:p-10 box-border">
      <h1 className={`accent-shadow-text ${caprasimo.className}`}>
        Keep in touch
      </h1>
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
        <span>connect on linkedin</span>
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
        <span>email me</span>
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
        <span>check out my github</span>
      </a>
    </div>
  );
};

export default ContactPage;
