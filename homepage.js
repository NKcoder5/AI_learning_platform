import React from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-purple-900 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8">
        <h1 className="text-3xl font-bold">PSE2 Gamified Learning</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="cursor-pointer hover:text-yellow-400">Dashboard</li>
            <li className="cursor-pointer hover:text-yellow-400">Challenges</li>
            <li className="cursor-pointer hover:text-yellow-400">Leaderboard</li>
            <li className="cursor-pointer hover:text-yellow-400">Profile</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold">Level Up Your Learning!</h2>
        <p className="mt-4 text-lg">Complete challenges, earn rewards, and track your progress.</p>
      </motion.div>

      {/* Challenges Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="p-6 bg-purple-800 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold">Beginner Challenges</h3>
          <p className="mt-2">Start with easy challenges and build confidence.</p>
        </motion.div>
        
        <motion.div 
          className="p-6 bg-purple-700 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold">Intermediate Challenges</h3>
          <p className="mt-2">Take it up a notch with moderate-level tasks.</p>
        </motion.div>

        <motion.div 
          className="p-6 bg-purple-600 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold">Advanced Challenges</h3>
          <p className="mt-2">Test your skills with difficult challenges.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
