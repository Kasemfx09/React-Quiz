import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "./QuizItem.css";

const QuizItem = ({ quizItem }) => {
  const { name, logo, id } = quizItem;
  return (
    <div className="quiz-container w-full bg-gray-800 p-2 rounded-xl flex flex-col">
      <img className="quiz-image bg-sky-800 rounded-lg " src={logo} alt="" />
      <div className=" flex flex-col text-center rounded-b-lg">
        <div className="text-white font-semibold text-xl p-2">{name}</div>
        <Link
          className="rounded-lg py-2 bg-sky-900 text-slate-100 text-base text-center"
          to={`/quiz/${id}`}
        >
          <button className="w-full flex flex-row justify-center items-center gap-2">
            <span>Start Quiz</span>
            <ArrowRightIcon class="h-4 w-4 text-white font-bolder " />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizItem;
