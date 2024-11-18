import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Question({ question, currentAnswer, onAnswerSelect }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-lg"
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold">{question.question}</h2>
        <button
          onClick={() => setShowHint(!showHint)}
          className="ml-4 px-3 py-1 text-sm rounded-md bg-yellow-100 hover:bg-yellow-200 
            text-yellow-800 transition-colors focus:outline-none focus:ring-2 
            focus:ring-yellow-500 focus:ring-opacity-50"
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
      </div>

      {showHint && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800"
        >
          💡 {question.hint}
        </motion.div>
      )}

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`block p-4 rounded-lg border-2 cursor-pointer transition-all
              ${currentAnswer === option
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'}`}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={currentAnswer === option}
              onChange={(e) => onAnswerSelect(e.target.value)}
              className="mr-3"
            />
            {option}
          </label>
        ))}
      </div>
    </motion.div>
  );
}