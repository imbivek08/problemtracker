// components/Problem.tsx
import React from "react";

interface TypeProblem {
  title: string;
  link: string;
  medium: string;
  status: boolean;
  date: string;
}

const Problem: React.FC<{ problem: TypeProblem }> = ({ problem }) => {
  console.log(problem);
  return (
    <div>
      <div className="flex gap-5 h-16 items-center bg-slate-800 ml-20 w-[60%] justify-between rounded-2xl ">
        <div className="flex gap-10 ml-3">
          <p>{problem.title}</p>
        </div>
        <div className="flex gap-10 mr-3">
          <a href={problem.link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
          <strong>{problem.medium}</strong>
        </div>
      </div>
    </div>
  );
};

export default Problem;
