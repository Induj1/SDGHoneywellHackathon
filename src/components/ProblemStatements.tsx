import React from 'react';

const PROBLEM_STATEMENTS = [
  {
    title: 'Problem Statement 1',
    description: 'Describe the first challenge here.'
  },
  {
    title: 'Problem Statement 2',
    description: 'Describe the second challenge here.'
  }
  // Add more as needed
];

export default function ProblemStatements() {
  return (
    <section className="w-full flex justify-center py-12">
      <div className="w-full max-w-4xl bg-[#18181b] rounded-2xl shadow-2xl border border-[#27272a] p-10">
        <h2 className="text-4xl font-extrabold mb-8 text-[#f87171] tracking-tight">Problem Statements</h2>
        <div className="space-y-8">
          {PROBLEM_STATEMENTS.map((ps, idx) => (
            <div key={idx} className="bg-[#232326] p-7 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-[#f87171]">{ps.title}</h3>
              <p className="text-lg text-[#e5e7eb]">{ps.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
