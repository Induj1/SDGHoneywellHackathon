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

  // Commented out Hackathon rules and signup form section
  // Section commented out, return null
  return null;
}
