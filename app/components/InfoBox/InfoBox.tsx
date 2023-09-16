import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

function InfoBox({
  information,
  style,
}: {
  information: string;
  style?: string;
}) {
  const [showInfo, setShowInfo] = useState(false);

  const handleIconClick = () => {
    setShowInfo(!showInfo);
  };

  const handleOutsideClick = (event: any) => {
    setShowInfo(false);
  };

  const renderInformationLines = () => {
    return information.split("\n").map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ));
  };

  return (
    <div className="relative inline-block">
      <div
        className={`absolute top-3 left-0.5 -translate-x-0.5  w-36 p-4 bg-teal-100
          border-2 border-slate-950 rounded-md text-sm font-medium opacity-0 duration-0 ${style} ${
          showInfo ? "visible opacity-95" : "hidden"
        }`}
        onMouseEnter={() => {
          if (window.innerWidth >= 768) {
            setShowInfo(true);
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768) {
            setShowInfo(false);
          }
        }}
      >
        {renderInformationLines()}
      </div>
      <div
        className="flex items-center cursor-pointer"
        onClick={handleIconClick}
        onMouseEnter={() => {
          if (window.innerWidth >= 768) {
            setShowInfo(true);
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768) {
            setShowInfo(false);
          }
        }}
      >
        <MdInfoOutline className="info-icon" />
      </div>
    </div>
  );
}

export default InfoBox;
