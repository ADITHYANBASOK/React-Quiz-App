import { motion } from 'framer-motion';

export default function Results({ score, totalQuestions, onRestart }) {
  const percentage = (score / totalQuestions) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Quiz Complete!</h2>
      <div className="mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-6xl font-bold text-blue-600 mb-2"
        >
          {Math.round(percentage)}%
        </motion.div>
        <p className="text-xl">
          You scored {score} out of {totalQuestions} questions correctly
        </p>
      </div>
      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold
          hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </motion.div>
  );
}