import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMap } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function InputItem({ type }) {
  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
      <FontAwesomeIcon
        icon={type == "source" ? faLocationDot : faMap}
        width={15}
        height={15}
      />
      <input
        className="bg-transparent w-full outline-none"
        type="text"
        placeholder={type == "source" ? "Pickup Location" : "DropOff Location"}
      />
    </div>
  );
}

export default InputItem;
