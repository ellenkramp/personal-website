import Image from "next/image";
import "./styles.css";
import { NextPageWithLayout } from "../_app";

const AboutPage: NextPageWithLayout = () => {
  return (
    <div className="section p-8 pb-20 gap-16 sm:p-20 box-border">
      <h2 className="lg:text-6xl text-3xl pb-8">A little about me...</h2>
      <div className="lg:text-3xl text-xl">
        <Image
          aria-hidden
          className="image__piano"
          src="/hands-over-piano.png"
          alt="Image of hands playing piano"
          width={800}
          height={455}
        />
        <p className="indent-8">
          In 2018, after seven years in the marketing industry, I decided it was
          time for a change. I had dabbled in some minor web design in the past,
          but I wanted to go further and become a full-stack software engineer.
          So I quit my job and went to bootcamp! 🏋️‍♀️
        </p>
        <p className="indent-8">
          It wasn&apos;t easy to make such a big career change, but I was
          completely committed to pursuing my dreams. Shortly after I completed
          my four-month training at DigitalCrafts, I landed my first gig! Now,
          nearly seven years later, I can safely say I have zero regrets. 😇
        </p>
        <span>
          <Image
            aria-hidden
            className="image__legos"
            src="/legos-drawn.png"
            alt="Lego pieces"
            width={920}
            height={438}
          />
        </span>
        <p className="indent-8">
          When I&apos;m not engineering seamless web experiences, I&apos;m
          assembling epic Lego creations, tickling the ivories with impromptu
          piano tunes, or conquering the competition in board games. I am a
          serial hobbyist, so you might catch me doing anything from learning
          Japanese to crocheting.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
