import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Hero from "../Hero/Hero";
import Question from "../Question/Question";

const Quiz = () => {
  const quizs = useLoaderData();
  const signleQuiz = quizs.data;
  const { name, questions } = signleQuiz;
  console.log(signleQuiz);
  return (
    <div>
      <Hero></Hero>
      <ToastContainer />
      <h3 className="text-center text-3xl font-bold py-3">Quiz of {name}</h3>
      {questions.map((singleQuestion, index) => (
        <Question
          key={singleQuestion.id}
          singleQuestion={singleQuestion}
          serial={index}
        ></Question>
      ))}
    </div>
  );
};

export default Quiz;
