"use client";
import Problem from "@/components/Problem";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <div>
      <Quote />
      <div className="mx-20">
        <h1 className="text-xl font-semibold">Today Problems</h1>
        <div className="flex gap-3 flex-col">
          <Problem />
          <Problem />
          <Problem />
          <Problem />
        </div>
      </div>
      <div className="mx-20 mt-10">
        <h1 className="text-xl font-semibold">Upcoming Problems</h1>
        <div className="flex gap-3 flex-col">
          <Problem />
          <Problem />
        </div>
      </div>
    </div>
  );
}
