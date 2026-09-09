import { useState } from "react";

// Cta means Call to action
const Cta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isFormValid = name.trim() !== "" && email.trim() !== "";

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the page from reloading

    console.log("Form submitted:", { name, email, message });

    setSubmitted(true);

    // reset fields after "sending"
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-slate-900">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to start building?
        </h2>
        <p className="text-slate-400 text-lg mb-8">
          Reach out to enroll your class or ask about the curriculum.
        </p>

        {submitted ? (
          <div className="bg-slate-800 border border-teal-400 rounded-md p-6 text-teal-300 font-medium">
            Thanks! Your message has been sent — we'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your class..."
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-teal-400 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-teal-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-teal-400"
            >
              Get in Touch
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
export default Cta;