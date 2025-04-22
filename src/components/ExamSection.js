'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCheckCircle } from 'react-icons/fa';

const demoMCQPaper = {
  title: 'JavaScript Fundamentals Demo Quiz',
  duration: 30, // in minutes
  questions: [
    {
      id: 1,
      question: 'What is the output of typeof null?',
      options: ['undefined', 'object', 'null', 'number'],
      correctAnswer: 'object'
    },
    {
      id: 2,
      question: 'Which method is used to add elements to the end of an array?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      correctAnswer: 'push()'
    },
    {
      id: 3,
      question: 'What is the result of 2 + "2"?',
      options: ['4', '22', 'NaN', 'TypeError'],
      correctAnswer: '22'
    },
    {
      id: 4,
      question: 'Which operator is used for strict equality comparison?',
      options: ['==', '===', '=', '!='],
      correctAnswer: '==='
    },
    {
      id: 5,
      question: 'What is the scope of a variable declared with let?',
      options: ['Global scope', 'Function scope', 'Block scope', 'Module scope'],
      correctAnswer: 'Block scope'
    }
  ]
};

export default function ExamSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(demoMCQPaper.duration * 60);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!examSubmitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [examSubmitted, timeLeft]);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    demoMCQPaper.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore((correctAnswers / demoMCQPaper.questions.length) * 100);
    setExamSubmitted(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (examSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Exam Results</h2>
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-blue-500 mb-2">{Math.round(score)}%</div>
          <p className="text-dark-700">
            You answered {demoMCQPaper.questions.filter(
              (q) => selectedAnswers[q.id] === q.correctAnswer
            ).length} out of {demoMCQPaper.questions.length} questions correctly
          </p>
        </div>
        <div className="space-y-6">
          {demoMCQPaper.questions.map((question) => (
            <div key={question.id} className="bg-dark-300 p-4 rounded-lg">
              <p className="font-semibold mb-2">{question.question}</p>
              <div className="grid grid-cols-1 gap-2">
                {question.options.map((option) => (
                  <div
                    key={option}
                    className={`p-2 rounded ${option === question.correctAnswer ? 'bg-green-500/20 border-green-500' : selectedAnswers[question.id] === option ? 'bg-red-500/20 border-red-500' : 'bg-dark-400'} ${option === selectedAnswers[question.id] ? 'border-2' : 'border border-transparent'}`}
                  >
                    {option}
                    {option === question.correctAnswer && (
                      <FaCheckCircle className="inline ml-2 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-200 rounded-lg shadow-lg p-6 mb-8"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{demoMCQPaper.title}</h2>
        <div className="flex items-center gap-2 text-lg">
          <FaClock className="text-yellow-500" />
          <span className={`font-mono ${timeLeft < 60 ? 'text-red-500' : ''}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm text-dark-700 mb-2">
          <span>Question {currentQuestion + 1} of {demoMCQPaper.questions.length}</span>
          <span>{Object.keys(selectedAnswers).length} answered</span>
        </div>
        <div className="w-full bg-dark-400 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / demoMCQPaper.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4">{demoMCQPaper.questions[currentQuestion].question}</p>
        <div className="space-y-3">
          {demoMCQPaper.questions[currentQuestion].options.map((option) => (
            <label
              key={option}
              className={`relative flex items-center w-full p-4 cursor-pointer rounded-lg transition-all transform hover:scale-[1.01] ${selectedAnswers[demoMCQPaper.questions[currentQuestion].id] === option ? 'bg-blue-500/20 border-2 border-blue-500' : 'bg-dark-300 hover:bg-dark-400 border border-transparent'}`}
            >
              <input
                type="radio"
                name={`question-${demoMCQPaper.questions[currentQuestion].id}`}
                value={option}
                checked={selectedAnswers[demoMCQPaper.questions[currentQuestion].id] === option}
                onChange={() => handleAnswerSelect(demoMCQPaper.questions[currentQuestion].id, option)}
                className="hidden"
              />
              <div className={`w-5 h-5 mr-4 rounded-full border-2 flex items-center justify-center ${selectedAnswers[demoMCQPaper.questions[currentQuestion].id] === option ? 'border-blue-500 bg-blue-500' : 'border-gray-400'}`}>
                {selectedAnswers[demoMCQPaper.questions[currentQuestion].id] === option && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className={`flex-1 ${selectedAnswers[demoMCQPaper.questions[currentQuestion].id] === option ? 'text-blue-500 font-medium' : 'text-gray-200'}`}>
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
          className="flex-1 py-2 px-4 rounded bg-dark-300 hover:bg-dark-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        {currentQuestion === demoMCQPaper.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="flex-1 py-2 px-4 rounded bg-green-500 hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestion((prev) => Math.min(demoMCQPaper.questions.length - 1, prev + 1))}
            className="flex-1 py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </motion.div>
  );
}