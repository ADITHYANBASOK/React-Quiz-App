# Quiz App

A responsive and interactive quiz application built with React and Framer Motion. This app supports progress tracking, question navigation, hints, and a results summary with detailed feedback.

## Features

- **Dynamic Questions**: Displays a series of questions with multiple-choice answers.
- **Progress Tracking**: Displays current progress with a progress bar.
- **Hint System**: Provides optional hints for questions.
- **Interactive Animations**: Animations powered by Framer Motion for a smooth user experience.
- **Results Summary**: Detailed summary of answers after completing the quiz.
- **Restart Functionality**: Option to retake the quiz.

## Technologies Used

- **React**: Frontend framework for building the UI.
- **Framer Motion**: For animations and transitions.
- **Tailwind CSS**: For styling components.

## Components

1. **App**: Main entry point that manages the quiz flow.
2. **ProgressBar**: Displays the user's current progress in the quiz.
3. **Question**: Renders the current question and handles answer selection.
4. **Results**: Shows the user's final score and percentage.
5. **QuizSummary**: Provides a detailed breakdown of each question, including correctness and hints used.
6. **LoadingSpinner**: Displays a loading animation while fetching data.
7. **ErrorMessage**: Shows an error message if there are issues fetching data.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/ADITHYANBASOK/quiz-app.git
   cd quiz-app

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev
