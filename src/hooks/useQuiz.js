import { useState, useCallback, useMemo } from 'react';
import { questions as initialQuestions } from '../data/questions';

export function useQuiz() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [hintsUsed, setHintsUsed] = useState(new Set());

  // Randomize questions and options on initial load
  const randomizedQuestions = useMemo(() => {
    try {
      return [...initialQuestions]
        .sort(() => Math.random() - 0.5)
        .map(question => ({
          ...question,
          options: [...question.options].sort(() => Math.random() - 0.5)
        }));
    } catch (err) {
      setError('Failed to load questions');
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleAnswerSelect = useCallback((answer) => {
    setCurrentAnswer(answer);
  }, []);

  const handleNextQuestion = useCallback(() => {
    const isCorrect = currentAnswer === randomizedQuestions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, { 
      question: randomizedQuestions[currentQuestion].question,
      userAnswer: currentAnswer,
      correctAnswer: randomizedQuestions[currentQuestion].correctAnswer,
      isCorrect,
      usedHint: hintsUsed.has(currentQuestion)
    }];
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers(newAnswers);

    if (currentQuestion + 1 < randomizedQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer('');
    } else {
      setShowResults(true);
    }
  }, [currentAnswer, currentQuestion, randomizedQuestions, score, answers, hintsUsed]);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setScore(0);
    setCurrentAnswer('');
    setShowResults(false);
    setAnswers([]);
    setHintsUsed(new Set());
  }, []);

  return {
    currentQuestion,
    score,
    currentAnswer,
    showResults,
    answers,
    isLoading,
    error,
    totalQuestions: randomizedQuestions.length,
    question: randomizedQuestions[currentQuestion],
    handleAnswerSelect,
    handleNextQuestion,
    handleRestart
  };
}