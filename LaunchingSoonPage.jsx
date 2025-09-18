import React, { useState } from "react";
import { Database, Mail, ArrowRight, CheckCircle } from "lucide-react";

// For a more professional look, we'll use a Google Font.
// Make sure to add this link to your public/index.html file:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

const LaunchingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: connect to email service
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex items-center justify-center px-4 py-16 font-poppins text-white animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo & Tagline */}
        <div className="flex justify-center items-center mb-8">
          <Database className="h-16 w-16 text-purple-400 drop-shadow-lg" />
          <h1 className="ml-4 text-5xl font-bold tracking-tight text-white drop-shadow-xl">VestaMinds</h1>
        </div>
        <p className="text-xl text-gray-400 mb-12 animate-fade-in-up">
          Data solutions that drive intelligent business decisions.
        </p>

        {/* Main Heading */}
        <h2 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight animate-slide-in-up">
          Launching
          <span className="text-purple-400 drop-shadow-lg"> Soon</span>
        </h2>
        <p className="text-lg md:text-xl text-indigo-200 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
          We're building the next generation of data solutions. Transform your
          data into actionable insights with our expert team.
        </p>

        {/* Email Signup with blur effect */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:shadow-purple-500/30">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold mb-6 animate-fade-in-delay-2">
                Get Notified When We Launch
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Notify Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center animate-scale-up">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Thank You!</h3>
              <p className="text-indigo-200">
                We'll notify you as soon as we launch.
              </p>
            </div>
          )}
        </div>

        {/* What We Offer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/5 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-semibold text-purple-400 mb-2">
              Data Architecture
            </h4>
            <p className="text-sm text-indigo-200">
              Scalable data infrastructure design
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-semibold text-purple-400 mb-2">
              Data Engineering
            </h4>
            <p className="text-sm text-indigo-200">
              ETL pipelines and data processing
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-semibold text-purple-400 mb-2">
              Business Intelligence
            </h4>
            <p className="text-sm text-indigo-200">
              Analytics and visualization solutions
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-semibold text-purple-400 mb-2">
              Project Management
            </h4>
            <p className="text-sm text-indigo-200">
              Data project delivery excellence
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-indigo-200 mb-4">
            Have questions? We'd love to hear from you.
          </p>
          <a
            href="mailto:contact@vestaminds.com"
            className="inline-flex items-center text-purple-400 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            contact@vestaminds.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default LaunchingSoonPage;