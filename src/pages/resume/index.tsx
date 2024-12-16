import type { ReactElement } from "react";
import PageLayout from "@/components/page-layout";

const ResumePage = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href = "/EllenKramp_SoftwareEngineer_FullResume_2024.pdf";
    link.setAttribute(
      "download",
      "EllenKramp_SoftwareEngineer_FullResume_2024.pdf"
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="section flex flex-col items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <button onClick={download}>download pdf</button>
      <p className="max-w-md text-xl section__content">
        Hi there! I’m Ellen, a <span className="text-4xl">crafty coder</span>{" "}
        with a love of learning. When I’m not engineering seamless web
        experiences, I’m assembling epic Lego creations, tickling the ivories
        with impromptu piano tunes, or conquering the competition in board
        games. I delight in puzzling challenges, tinkering with new concepts,
        and embracing the joy of building—whether it’s digital marvels or
        tabletop victories.
      </p>
      <p className="max-w-md text-xl section__content">
        Hi there! I’m Ellen, a <span className="text-4xl">crafty coder</span>{" "}
        with a love of learning. When I’m not engineering seamless web
        experiences, I’m assembling epic Lego creations, tickling the ivories
        with impromptu piano tunes, or conquering the competition in board
        games. I delight in puzzling challenges, tinkering with new concepts,
        and embracing the joy of building—whether it’s digital marvels or
        tabletop victories.
      </p>
    </div>
  );
};

ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default ResumePage;
