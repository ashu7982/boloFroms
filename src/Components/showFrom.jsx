import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ShowForm() {
    
  const Navigate = useNavigate();

  return (
    <div className="max-w-[1170px] mx-auto mt-5">
      <div className="flex items-start flex-col  sm:flex-row sm:justify-between sm:items-center mb-[20px]">
        <h2 className="text-[#7E22CE] text-[60px] font-bold">Forms</h2>
        <button
          onClick={() => Navigate("/New")}
          className="flex items-center gap-3  text-white  px-[15px] py-[7px] rounded-[10px] text-[22px] bg-black hover:text-black hover:bg-white hover:border-[2px] border-black"
        >
          <FiPlusCircle size={"25px"} />
          Create New Form
        </button>
      </div>
      <div className="flex flex-col gap-x-[4%] gap-y-[40px] sm:grid sm:grid-cols-2 lg:grid-cols-3"></div>
    </div>
  );
}

export default ShowForm;
