import { useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign up submitted:", { name, email, password });
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-900 min-h-[70vh] flex items-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full border border-slate-600 rounded">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          Create your account
        </h1>
        <p className="text-slate-400 text-center mb-8">
          Sign up to start learning React with us.
        </p>

        {submitted ? (
          <div className="bg-slate-800 border border-teal-400 rounded-md p-6 text-teal-300 font-medium text-center">
            Welcome aboard! Your account has been created.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Full name
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
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-teal-400 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-teal-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-teal-400"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SignUpPage;