import React from "react";

// interface TypeProblem {
//   Title: string;
//   Link: string;
//   status: boolean;
//   Date: Date;
// }

const problem = {
  Title: "Maximum Value of an Ordered Triplet I",
  Link: "https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i",
  Difficulty: "Easy",
  Status: false,
  Date: "",
};

const Problem = () => {
  return (
    <div>
      <div className="flex gap-5 h-16 items-center bg-slate-800 ml-20  w-[60%] justify-between rounded-2xl ">
        <div className="flex gap-10 ml-3">
          <input type="checkbox" value="" />
          <p>{problem.Title}</p>
        </div>
        <div className="flex gap-10 mr-3">
          <a href={problem.Link} target="_blank">
            Link
          </a>
          <strong>{problem.Difficulty}</strong>
        </div>
      </div>
    </div>
  );
};

export default Problem;
