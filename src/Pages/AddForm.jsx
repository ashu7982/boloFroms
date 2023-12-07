import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import CreateForm from "../Components/CreateForm";

function AddForm() {
  return (
    <div>
      <h1 className="text-blue-500 text-center text-[30px] font-semibold">
        New Form
      </h1>
      <div className="w-[80%] m-auto">
        <CreateForm />
      </div>
    </div>
  );
}

export default AddForm;