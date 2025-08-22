import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const HACKATHON_RULES = `
1. All participants must adhere to the event code of conduct.
2. Projects must be original and developed during the hackathon.
3. Teams must submit their projects before the deadline.
4. Plagiarism will result in disqualification.
5. Decisions by judges are final.
`;

export default function HackathonRulesSignup() {
  // Accept onSignupComplete prop
  const props = arguments[0] || {};
  // Initialize EmailJS with public key
  React.useEffect(() => {
    emailjs.init('z_AKXEdkii1XGxJ2Y');
  }, []);
  const [form, setForm] = useState({ name: '', email: '', agreed: false });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.agreed) {
      setError('Please fill all fields and agree to the rules.');
      return;
    }
    // Send email using EmailJS
    try {
      await emailjs.send(
        'service_d999plg',
        'template_iinnvu8',
        {
          name: form.name,
          email: form.email,
          to_email: 'indujgupta@gmail.com',
          message: `Participant ${form.name} (${form.email}) has acknowledged the Hackathon rules.`
        },
        'z_AKXEdkii1XGxJ2Y'
      );
      setSubmitted(true);
      if (props.onSignupComplete) props.onSignupComplete();
    } catch (err) {
      setError('Failed to send. Please try again later.');
    }
  };

  if (submitted) {
    return <div className="p-6 text-center">Thank you for signing up and acknowledging the rules!</div>;
  }

  return (
    <section className="w-full flex justify-center py-8 px-2">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 md:gap-10 bg-[#18181b] rounded-2xl shadow-2xl border border-[#27272a] p-4 md:p-10 items-stretch">
        <div className="flex-1 flex flex-col justify-center mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-[#f87171] tracking-tight">Hackathon Rules</h2>
          <div className="bg-[#232326] p-5 md:p-7 rounded-xl whitespace-pre-wrap text-base md:text-lg text-[#e5e7eb] font-mono opacity-95 shadow-md">
            {HACKATHON_RULES}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center gap-5 md:gap-7 bg-[#232326] rounded-xl p-4 md:p-8 shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 md:p-4 bg-[#18181b] border border-[#27272a] rounded-lg text-white placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#f87171] text-base md:text-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 md:p-4 bg-[#18181b] border border-[#27272a] rounded-lg text-white placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#f87171] text-base md:text-lg"
            required
          />
          <label className="flex items-center text-[#e5e7eb] text-sm md:text-base gap-2 md:gap-3">
            <input
              type="checkbox"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
              className="accent-[#f87171] w-4 h-4 md:w-5 md:h-5"
              required
            />
            <span>I acknowledge and agree to the Hackathon rules.</span>
          </label>
          {error && <div className="text-[#f87171] text-sm md:text-base font-semibold text-center">{error}</div>}
          <button type="submit" className="w-full bg-[#f87171] hover:bg-[#ef4444] text-white font-bold py-3 md:py-4 rounded-lg transition-colors duration-200 shadow text-base md:text-lg">Sign Up & Acknowledge</button>
        </form>
      </div>
    </section>
  );
}
