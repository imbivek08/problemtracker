// pages/index.tsx or your main page
"use client"
import React, { useEffect, useState } from "react";

import Quote from "@/components/Quote";
import Problem from "@/components/Problem";

const HomePage = () => {
  const [todayProblems, setTodayProblems] = useState([]);
  const [upcomingProblems, setUpcomingProblems] = useState([]);
  console.log(todayProblems)
  useEffect(() => {
    // Simulating a fetch from your API
    fetch("/api/problems")
      .then((response) => response.json())
      .then((data) => {
        setTodayProblems(data.slice(0, 4)); // First 4 problems for today
        setUpcomingProblems(data.slice(4, 8)); // Next 4 problems for upcoming
      })
      .catch((error) => console.error("Error fetching problems:", error));
  }, []);

  return (
    <div>
      <Quote />
      <div className="mx-20">
        <h1 className="text-xl font-semibold">Today Problems</h1>
        <div className="flex gap-3 flex-col">
          {todayProblems.map((problem, index) => (
            <Problem key={index} problem={problem} />
          ))}
        </div>
      </div>
      <div className="mx-20 mt-10">
        <h1 className="text-xl font-semibold">Upcoming Problems</h1>
        <div className="flex gap-3 flex-col">
          {upcomingProblems.map((problem, index) => (
            <Problem key={index} problem={problem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
