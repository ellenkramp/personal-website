import { Caprasimo } from "next/font/google";
import "./styles.css";

const caprasimo = Caprasimo({
  weight: ["400"],
  subsets: ["latin"],
});

const HomePage = () => {
  return (
    <div className="md:text-7xl text-3xl flex flex-col justify-center align-middle md:p-16 p-8 gap-8 sm:p-20 box-border">
      <h1 className={caprasimo.className}>
        <span className="color-subtitle">Hi! I'm </span>
        <br />
        <span className="color-blue-800 name accent-text-shadow-title">
          ellen kramp
        </span>
        <br />
        <span className="color-subtitle accent-shadow-text">
          a full stack software developer with expertise in JavaScript and React
        </span>
      </h1>
      <h1 className="tldr">tldr; I build things</h1>
    </div>
  );
};

export default HomePage;
