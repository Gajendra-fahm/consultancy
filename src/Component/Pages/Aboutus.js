import React from "react";
import BasicCard from "./BasicInformation";
import BasicDetailsCard from "./BasicDetailsCard";
import Serives from "./Serives";

const Aboutus = () => {
  return (
    <div className="w-full p-1 ">
      <div className="w-full px-0 m-0 items-center box-border  flex gap-2 bg-slate-400 border rounded ">
        <img
          className="w-28 h-14 border rounded"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="w-full flex gap-4 justify-end">
          <h4 className="px-4">Home</h4>
        </div>
      </div>
      {/* Basic informtion */}
      <div className="  w-full ">
        <div className="w-full ">
          <div className=" w-full  mt-1 px-4 border border-blue-400 rounded">
            <div className="">
              <BasicCard cardTitle="Basic Informtion" cardSubtitle="">
                <BasicDetailsCard />
              </BasicCard>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="  w-full ">
        <div className="w-full  ">
          <div className=" w-full mt-1 px-4 border border-blue-400 rounded">
            <div className="">
              <BasicCard cardTitle="Services" cardSubtitle="">
               <Serives/>
              </BasicCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
