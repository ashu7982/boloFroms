
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import Categorize from "./Categorize.jsx";

function QuestionCard({ data, ind, questions, setQuestions }) {
  function handleDelete() {
    if (questions.length === 1) {
      return;
    }
    setQuestions((prev) => prev.filter((el, i) => i !== ind));
  }

  function handleTypeChange(type) {
    let newData = [...questions];
    if (type === "Categorize") {
      newData[ind] = {
        type: "Categorize",
        question: "",
        image: "",
        categories: ["sample category"],
        items: [{ value: "example", belong: "sample category" }],
      };
    } else if (type === "Cloze") {
      newData[ind] = { type: "Cloze", question: "", option: [] };
    } else {
      newData[ind] = {
        type: "Comprehension",
        passage: "",
        questions: [{ question: "", option: ["", ""], answer: "" }],
      };
    }
    setQuestions(newData);
  }

  return (
    <div className="questionCard relative border-2 border-gray-300 border-l-8 border-l-blue-500 p-[20px] my-5 rounded-lg">
      <div className="flex gap-5 justify-center">
        <select
          id="category"
          className="bg-blue-200 rounded-md py-1 px-3 font-semibold"
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option
            className="bg-white"
            selected={data.type === "Categorize"}
            value="Categorize"
          >
            Categorize
          </option>
          <option
            className="bg-white"
            selected={data.type === "Cloze"}
            value="Cloze"
          >
            Cloze
          </option>
          <option
            className="bg-white"
            selected={data.type === "Comprehension"}
            value="Comprehension"
          >
            Comprehension
          </option>
        </select>
      </div>

      <Categorize data={data} ind={ind} questions={questions} setQuestions={setQuestions} />

      <button
        onClick={handleDelete}
        className="py-5 px-5 absolute right-[-50px] top-[50%] translate-y-[-50%]"
      >
        <MdDeleteOutline size={"25px"} />
      </button>
    </div>
  );
}

export default QuestionCard;
