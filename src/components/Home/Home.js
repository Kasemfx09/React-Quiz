import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import QuizItem from "../QuizItem/QuizItem";
import "./Home.css";

const Home = () => {
  const quizItems = useLoaderData();
  // console.log(quizItems);
  return (
    <div>
      <Hero></Hero>
      <div className="quizitem flex flex-row gap-4 pt-4 pb-4">
        {quizItems.data.map((quizItem) => (
          <QuizItem key={quizItem.id} quizItem={quizItem}></QuizItem>
        ))}
      </div>
    </div>
  );
};

export default Home;
