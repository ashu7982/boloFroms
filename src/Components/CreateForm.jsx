import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { IoCloudUploadOutline } from "react-icons/io5";

function CreateForm() {
  const [formData, setFormData] = useState({
    header: {},
    questions: [
      {
        type: "Categorize",
        question: "",
        image: "",
        categories: ["sample category"],
        items: [{ value: 'example', belong: 'sample category' }]
      },
    ],
  });

  const { header, questions } = formData;

  const addQuestion = () => {
    setFormData((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          type: "Categorize",
          question: "",
          image: "",
          categories: ["sample"],
          items: [{ value: 'example', belong: 'sample' }],
        },
      ],
    }));
  };

  const saveForm = () => {
    console.log(formData.questions);
    
  };

  return (
    <div>
      <div className="border-b-2 border-gray-300 pb-5 mb-5">
        <Input
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, header: { title: e.target.value } }))
          }
          type="text"
          className="outline-none border-none"
          placeholder="Enter form Name"
        />
      </div>
      <div
        onClick={() => document.getElementById("getFile").click()}
        className="text-center h-[100px] border-4 border-gray flex flex-col justify-center rounded-xl cursor-pointer"
      >
        <h4 className="font-bold text-blue-500 text-[20px] flex justify-center items-center gap-3">
          <IoCloudUploadOutline size={"25px"} /> <span>Select Header Image ( Optional )</span>
        </h4>
        <p>{header?.file}</p>
        <input type="file" id="getFile" style={{ display: "none" }} />
      </div>

      {questions.map((el, ind) => (
        <QuestionCard key={ind} data={el} ind={ind} questions={questions} setQuestions={setFormData} />
      ))}

      <div className="flex gap-5 justify-center my-5">
        <button
          className="px-3 py-1 font-bold text-[25px] text-white bg-blue-500 rounded-lg"
          onClick={addQuestion}
        >
          Add Question
        </button>
        <button
          className="px-3 py-1 font-bold text-[25px] text-white bg-purple-500 rounded-lg"
          onClick={saveForm}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateForm;
