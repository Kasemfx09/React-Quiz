import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Question.css";

const Question = ({ singleQuestion, serial }) => {
  const { question, options, correctAnswer } = singleQuestion;
  let ques = question.replace(/(<([^>]+)>)/gi, "");
  const correctAns = () => {
    toast.success(`Correct answer: ${correctAnswer}`, {
      toastId: "success1",
      position: "top-center",
      theme: "dark",
    });
  };
  const handleAnswer = (event) => {
    const answer = event.target.value;

    if (answer === correctAnswer) {
      toast.success("You answer is correct!", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      toast.warn("Your answer is incorrect!", {
        position: "top-center",
        theme: "dark",
      });
    }
  };
  return (
    <div className="w-3/4 mx-auto">
      {/* <ToastContainer /> */}
      <div className="mb-4 p-4 bg-gray-800 rounded-lg drop-shadow-lg">
        <div className=" flex flex-row justify-between w-full text-white">
          <div>
            <h4 className="text-lg font-semibold">
              Quiz {serial + 1}:{ques}
            </h4>
          </div>
          <div>
            <EyeIcon
              onClick={correctAns}
              className=" h-5 text-white cursor-pointer justify-items-end"
            ></EyeIcon>
          </div>
        </div>

        <div>
          <div className="question-responsive grid grid-cols-2 sm:grid-cols-1 gap-2 cursor-pointer text-white mt-2">
            {options.map((option, index) => (
              <div
                className="border-2 p-4 cursor-pointer rounded-lg"
                key={index}
              >
                <div>
                  <label htmlFor={option}>
                    <input
                      className="m-2 cursor-pointer"
                      type="radio"
                      id={option}
                      name={ques}
                      onChange={handleAnswer}
                      value={option}
                    />
                    {option}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
