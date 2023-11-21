import React from "react";
import Button from "./button";

const Footer: React.FC = () => {
  return (
    <div className=" flex justify-between items-center w-full  py-7">
      <img src="/images/logo.svg" className="h-4 w-24 md:h-9 md:w-60" />
      <Button variant="outline" color="primary">
        Try it free
      </Button>
    </div>
  );
};

export default Footer;
