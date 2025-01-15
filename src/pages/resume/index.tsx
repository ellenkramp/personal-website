import { Caprasimo } from "next/font/google";
import Script from "next/script";
import "./styles.css";
import resume from "../../resume.json";

const caprasimo = Caprasimo({
  weight: ["400"],
  subsets: ["latin"],
});

const ResumePage = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href = "/EllenKramp-SoftwareEngineer_FullResume_2024.pdf";
    link.setAttribute("download", "EllenKramp_FullStack_Resume_2025.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="section flex flex-col items-center justify-items-center p-8 pb-20 sm:p-10">
      <h1 className={`text-2xl sm:text-4xl ${caprasimo.className}`}>Summary</h1>
      <div>
        <p className="sm:text-3xl text-xl">{resume.summary}</p>
      </div>
      <h1 className={`text-2xl sm:text-4xl ${caprasimo.className}`}>
        Certifications
      </h1>
      <div className="iframe-container">
        <iframe
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="d71dc6b3-e463-4b0a-ac6b-d9678468f474"
          data-share-badge-host="https://www.credly.com"
        ></iframe>
        <Script
          type="text/javascript"
          async
          src="//cdn.credly.com/assets/utilities/embed.js"
        />
      </div>
      <h1 className={`text-2xl md:text-4xl ${caprasimo.className}`}>
        Previous Roles
      </h1>
      {resume.positions.map((position) => {
        return (
          <div key={position.company}>
            <h1 className="md:text-4xl text-2xl font-bold pb-1">
              {position.title}
            </h1>
            <h2 className="md:text-3xl text-xl decoration-slate-500">
              {position.company}
            </h2>
            <h3 className="pb-2">
              {position.start_date} - {position.end_date}
            </h3>
            <p className="md:text-2xl text-lg pt-2 border-t-4">
              {position.description}
            </p>
          </div>
        );
      })}

      <button
        className="download-button md:text-4xl text-2xl p-24"
        onClick={download}
      >
        download full pdf
      </button>
    </div>
  );
};

export default ResumePage;
