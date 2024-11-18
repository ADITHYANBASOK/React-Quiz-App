import { motion } from 'framer-motion';

export default function QuizSummary({ answers }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Question Summary:</h3>
      {answers.map((answer, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            answer.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}
        >
          <p className="font-medium">{answer.question}</p>
          <div className="mt-2 text-sm">
            <p className={answer.isCorrect ? 'text-green-600' : 'text-red-600'}>
              Your answer: {answer.userAnswer}
              {answer.usedHint && ' (Hint used)'}
            </p>
            {!answer.isCorrect && (
              <p className="text-gray-600">
                Correct answer: {answer.correctAnswer}
              </p>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
}