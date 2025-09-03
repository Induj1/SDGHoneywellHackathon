import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const domains = [
  "Artificial Intelligence",
  "Internet of Things",
  "Machine Learning",
  "Edge Computing & Analytics"
];

export default function HackathonRegistrationForm() {
  const [numTeammates, setNumTeammates] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const [rulesChecked, setRulesChecked] = useState(false);
  const [showDeclaration, setShowDeclaration] = useState(false);
  const [form, setForm] = useState({
    name: "",
    year: "",
    college: "",
    registrationNumber: "",
    email: "",
    phone: "",
    teamName: "",
    domain: "",
    teammates: [
      { name: "", registrationNumber: "", year: "", college: "", email: "" },
      { name: "", registrationNumber: "", year: "", college: "", email: "" },
      { name: "", registrationNumber: "", year: "", college: "", email: "" },
    ],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [tncChecked, setTncChecked] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleTeammateChange(idx, field, value) {
    const updatedTeammates = form.teammates.map((tm, i) =>
      i === idx ? { ...tm, [field]: value } : tm
    );
    setForm({ ...form, teammates: updatedTeammates });
  }

  function handleNumTeammatesChange(e) {
    const n = parseInt(e.target.value, 10);
    setNumTeammates(n);
    // Resize teammates array
    setForm({
      ...form,
      teammates: Array(n)
        .fill({})
        .map((_, i) => form.teammates[i] || { name: "", registrationNumber: "", year: "", college: "", email: "" }),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.year || !form.college || !form.registrationNumber || !form.email || !form.phone || !form.teamName || !form.domain) {
      setError("Please fill all fields.");
      return;
    }
    // Optionally require at least one teammate
    // if (!form.teammates[0].name || !form.teammates[0].registrationNumber) {
    //   setError("Please enter at least one teammate's name and registration number.");
    //   return;
    // }
    if (!rulesChecked) {
      setError("You must acknowledge and agree to the Hackathon rules before registering.");
      return;
    }
    if (!tncChecked) {
      setError("You must agree to the Terms & Conditions and checklist before registering.");
      return;
    }
    setError("");

    // Save to Supabase
    supabase
      .from("registrations")
      .insert([
        {
          name: form.name,
          year: form.year,
          college: form.college,
          registration_number: form.registrationNumber,
          email: form.email,
          phone: form.phone,
          team_name: form.teamName,
          domain: form.domain,
          teammates: form.teammates,
        },
      ])
      .then(({ error }) => {
        if (error) {
          setError(`Submission failed: ${error.message}`);
          console.error('Supabase error:', error);
        } else {
          setSubmitted(true);
        }
      });
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] w-full flex items-center justify-center">
        <div className="p-8 w-full max-w-2xl bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-700 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold mb-6 text-white text-center tracking-tight">Thank you for registering!</h2>
          <p className="text-lg text-zinc-200 mb-4 text-center">Your registration has been received. We look forward to seeing you at Hackspace 2025!</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 w-full max-w-5xl bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 flex flex-col gap-5">
        <h2 className="text-3xl font-extrabold mb-2 text-white text-center tracking-tight drop-shadow-lg">Hackathon Registration</h2>
        {error && <div className="mb-2 text-red-400 text-center font-semibold animate-pulse">{error}</div>}
        <div className="space-y-3">
          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-zinc-100 text-lg">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-zinc-100 text-lg">Year</label>
            <input type="text" name="year" value={form.year} onChange={handleChange} className="w-full border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base" placeholder="e.g. 2nd Year" />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-zinc-100 text-lg">Registration Number</label>
            <input type="text" name="registrationNumber" value={form.registrationNumber} onChange={handleChange} className="w-full border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base" placeholder="Enter your registration number" />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-zinc-100 text-lg">College</label>
            <select name="college" value={form.college} onChange={handleChange} className="w-full border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150 shadow-sm text-base">
              <option value="">Select your college</option>
              <option value="MAHE Bengaluru">MAHE Bengaluru</option>
              <option value="MAHE Manipal">MAHE Manipal</option>
              <option value="Manipal University Jaipur">Manipal University Jaipur</option>
              <option value="Sikkim Manipal Institute of Technology">Sikkim Manipal Institute of Technology</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-zinc-100 text-lg">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-zinc-100 text-lg">Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base" placeholder="Enter your phone number" />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-zinc-100 text-lg">Team Name</label>
            <input type="text" name="teamName" value={form.teamName} onChange={handleChange} className="w-full border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base" placeholder="Enter your team name" />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-zinc-100 text-lg">Domain</label>
            <select name="domain" value={form.domain} onChange={handleChange} className="w-full border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150 shadow-sm text-base">
              <option value="">Select a domain</option>
              {domains.map((domain) => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="font-semibold text-zinc-100 text-lg mb-1">Number of Team Members (excluding yourself)</label>
            <select value={numTeammates} onChange={handleNumTeammatesChange} className="w-full md:w-1/4 border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-base">
              {[1,2,3].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            {form.teammates.slice(0, numTeammates).map((tm, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-2 items-center">
                <input
                  type="text"
                  value={tm.name}
                  onChange={e => handleTeammateChange(idx, "name", e.target.value)}
                  className="w-full md:w-1/5 border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base"
                  placeholder={`Name`}
                />
                <input
                  type="text"
                  value={tm.registrationNumber}
                  onChange={e => handleTeammateChange(idx, "registrationNumber", e.target.value)}
                  className="w-full md:w-1/5 border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base"
                  placeholder={`Reg. No.`}
                />
                <input
                  type="text"
                  value={tm.year}
                  onChange={e => handleTeammateChange(idx, "year", e.target.value)}
                  className="w-full md:w-1/5 border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base"
                  placeholder={`Year`}
                />
                <input
                  type="text"
                  value={tm.college}
                  onChange={e => handleTeammateChange(idx, "college", e.target.value)}
                  className="w-full md:w-1/5 border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base"
                  placeholder={`College`}
                />
                <input
                  type="email"
                  value={tm.email}
                  onChange={e => handleTeammateChange(idx, "email", e.target.value)}
                  className="w-full md:w-1/5 border border-zinc-700 bg-zinc-900 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-150 shadow-sm placeholder-zinc-500 text-base"
                  placeholder={`Email`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Hackathon Rules Accordion (before Consent & Declaration) */}
        <div className="mt-3">
          <button
            type="button"
            className={`w-full flex items-center justify-between px-3 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg border border-zinc-800 shadow-lg font-bold text-base text-white hover:scale-[1.01] hover:from-red-600 hover:to-pink-600 transition-all duration-200 drop-shadow focus:outline-none focus:ring-2 focus:ring-pink-400/40 ${showRules ? 'ring-2 ring-pink-400' : ''}`}
            onClick={() => setShowRules((prev) => !prev)}
            aria-expanded={showRules}
          >
            <span className="flex items-center gap-3">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
              Hackathon Rules
            </span>
            <span className="ml-2 text-3xl">{showRules ? '▲' : '▼'}</span>
          </button>
          {showRules && (
            <div className="p-4 bg-zinc-900 rounded-b-xl border-x border-b border-zinc-800 shadow-xl flex flex-col gap-3 mt-1 animate-fade-in">
              <ul className="pl-2 text-zinc-300 text-base space-y-2 mb-1">
                <li>👩‍💻 <b>Open to all UG & PG students across India</b> (teams of 2-4 members).</li>
                <li>📅 <b>48-hour hackathon</b> → 25–27 Sept 2025 at MIT Bengaluru.</li>
                <li>🔒 <b>Problem statements by Honeywell</b> (confidential, given on Day 1).</li>
                <li>💡 <b>All work must be original</b> and created during the hackathon.</li>
                <li>🛠️ <b>No use of AI/LLM tools</b> (ChatGPT, Copilot, etc.) unless permitted.</li>
                <li>🏛️ <b>Respect MIT Bengaluru campus rules</b> & maintain discipline.</li>
                <li>🏆 <b>Prizes worth ₹1.5 Lakhs</b> (Top 3 + Consolation awards).</li>
                <li>📝 <b>Jury’s decision is final and binding.</b></li>
              </ul>
              <label className="flex items-center gap-2 text-zinc-100 font-bold text-base bg-zinc-800 rounded-lg px-2 py-2 shadow border border-zinc-700">
                <input type="checkbox" checked={rulesChecked} onChange={e => setRulesChecked(e.target.checked)} className="w-6 h-6 accent-red-500" />
                <span>I acknowledge and agree to the Hackspace 2025 Quick Rules.</span>
              </label>
            </div>
          )}
        </div>
        {/* Consent & Declaration Accordion */}
        <div className="mt-4 mb-2">
          <button
            type="button"
            className={`w-full flex items-center justify-between px-3 py-2 bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-lg border border-zinc-800 shadow-lg font-bold text-base text-white hover:scale-[1.01] hover:from-zinc-800 hover:to-zinc-900 transition-all duration-200 drop-shadow focus:outline-none focus:ring-2 focus:ring-zinc-400/40 ${showDeclaration ? 'ring-2 ring-zinc-400' : ''}`}
            onClick={() => setShowDeclaration((prev) => !prev)}
            aria-expanded={showDeclaration}
          >
            <span className="flex items-center gap-3">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 01-8 0m8 0a4 4 0 00-8 0" /></svg>
              Consent & Declaration
            </span>
            <span className="ml-2 text-3xl">{showDeclaration ? '▲' : '▼'}</span>
          </button>
          {showDeclaration && (
            <div className="p-4 bg-zinc-900 rounded-b-xl border-x border-b border-zinc-800 shadow-xl flex flex-col gap-3 mt-1 animate-fade-in" style={{borderLeft: '4px solid #ef4444'}}>
              <p className="text-zinc-200 text-base mb-1 bg-zinc-800 rounded px-2 py-2">
                I hereby declare that the information provided is true to the best of my knowledge. I agree to abide by the rules and regulations of Hackspace 2025, including:
              </p>
              <ul className="list-disc pl-5 text-zinc-300 text-base space-y-2 mb-1">
                <li>All submissions will be original and created during the event.</li>
                <li>Problem statements provided by Honeywell are confidential and will not be shared outside my team.</li>
                <li>All ideas, prototypes, and code developed during the hackathon will be the property of Honeywell.</li>
                <li>I will follow the MIT Bengaluru campus code of conduct and respect fellow participants.</li>
                <li>I accept that the decisions of the Honeywell jury will be final and binding.</li>
                <li>I consent to my personal data (name, email, student ID, contact details) being used by MIT Bengaluru and Honeywell only for event-related purposes.</li>
              </ul>
              <label className="flex items-center gap-2 text-zinc-100 font-bold text-base bg-zinc-800 rounded-lg px-2 py-2 shadow border border-zinc-700">
                <input type="checkbox" checked={tncChecked} onChange={e => setTncChecked(e.target.checked)} className="w-6 h-6 accent-red-500" />
                <span className="leading-snug"> By ticking this box, I confirm my acceptance of the above terms and conditions and agree to participate in Hackspace 2025 in good faith.</span>
              </label>
            </div>
          )}
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-base font-bold py-2 rounded-lg shadow-xl hover:from-red-600 hover:to-pink-600 transition-all duration-150 drop-shadow-lg" disabled={!tncChecked}>Register</button>
      </form>
    </div>
  );
}
