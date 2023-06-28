import Form from "@/components/UI/form/Form";
import React from "react";

const page = () => {
  return (
    <div className="p-8 h-screen">
      <div className="flex flex-col sm:flex-row  sm:justify-center gap-8 items-center">
        <Form />
      </div>
    </div>
  );
};

export default page;
