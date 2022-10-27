import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import Hero from "../Hero/Hero";

const Statistics = () => {
  const totalQuestions = useLoaderData();

  return (
    <>
      <Hero></Hero>
      <div className="py-8 bg-sky-300 my-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            className="mx-auto res-chart"
            width={600}
            height={300}
            data={totalQuestions.data}
          >
            <Line type="monotone" dataKey="total" stroke="#0b0d79" />
            <CartesianGrid stroke="#7173f8" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* <ResponsiveContainer width="100%" height="100%">
        <div className="py-6 bg-sky-300 my-chart">
          <BarChart
            className="mx-auto"
            width={600}
            height={300}
            data={totalQuestions.data}
          >
            <XAxis dataKey="name" stroke="#0b0d79" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#7173f8" strokeDasharray="5 5" />
            <Bar dataKey="total" fill="#0b0d79" barSize={30} />
          </BarChart>
        </div>
      </ResponsiveContainer> */}
    </>
  );
};

export default Statistics;
