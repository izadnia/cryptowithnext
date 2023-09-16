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
      <p key={index} className="p-1 text-white float-left">
        {line}
      </p>
    ));
  };

  return (
    <div className="relative inline-block">
      <div
        className={`absolute top-3 left-0.5 -translate-x-0.5  w-36 p-4 bg-neutral-600
          text-sm font-light opacity-0 duration-0 rounded-lg ${style} ${
          showInfo ? "visible opacity-100" : "hidden"
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
        <div className="text-white sticky border-2 border-white rounded-md w-16 p-1" onClick={()=>setShowInfo(false)}>CLOSE</div>
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
