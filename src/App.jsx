import { useQuiz } from './hooks/useQuiz';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import QuizSummary from './components/QuizSummary';

function App() {
  const {
    currentQuestion,
    score,
    currentAnswer,
    showResults,
    answers,
    isLoading,
    error,
    totalQuestions,
    question,
    handleAnswerSelect,
    handleNextQuestion,
    handleRestart
  } = useQuiz();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        {!showResults ? (
          <>
            <ProgressBar
              current={currentQuestion + 1}
              total={totalQuestions}
            />
            <Question
              question={question}
              currentAnswer={currentAnswer}
              onAnswerSelect={handleAnswerSelect}
            />
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNextQuestion}
                disabled={!currentAnswer}
                className={`px-6 py-2 rounded-lg font-semibold transition-all
                  ${currentAnswer
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <div>
            <Results
              score={score}
              totalQuestions={totalQuestions}
              onRestart={handleRestart}
            />
            <QuizSummary answers={answers} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;