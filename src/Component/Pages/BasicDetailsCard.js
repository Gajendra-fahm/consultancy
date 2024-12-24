import React from "react";
import { Text } from "../ui/Text";

const BasicDetailsCard = () => {
  return (
    <div className="">
      <div className=" flex max-md:flex-col gap-4  ">
        <Text as="h4" className=" whitespace-nowrap ">
          Mobile No:
        </Text>
        <div className="flex items-center">
          <Text as="p">{"98383838"}</Text>
        </div>
      </div>

      <div className=" flex max-md:flex-col gap-4  ">
        <Text as="h4" className=" whitespace-nowrap ">
          Address:
        </Text>
        <div className="flex items-center">
          <Text as="p" >{"Gokul Dham Socity, Vejalpur, Ahmedabad"}</Text>
        </div>
      </div>

      <div className=" flex max-md:flex-col gap-4  ">
        <Text as="h4" className=" whitespace-nowrap ">
          Rating:
        </Text>
        <div className="flex items-center">
          <Text as="p" >{"☆ ☆ ☆ ☆"}</Text>
        </div>
      </div>

      <div className=" flex max-md:flex-col gap-4  ">
        <Text as="h4" className=" whitespace-nowrap ">
          Contact Number:
        </Text>
        <div className="flex items-center">
          <Text as="p" >{"8987656787"}</Text>
        </div>
      </div>

      <div className=" flex max-md:flex-col gap-4  ">
        <Text as="h4" className=" whitespace-nowrap ">
          Email:
        </Text>
        <div className="flex items-center">
          <Text as="p" >{"gajendrakp903@gmail.com"}</Text>
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsCard;
