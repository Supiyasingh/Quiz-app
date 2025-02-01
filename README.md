# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Quiz Application
Build a Quiz Application Using React.js
Build a Quiz Application using React.js, integrating it with a mock API for fetching questions, submitting answers, and retrieving quiz results. It should allow users to take a quiz by fetching multiple-choice questions from an API, submit answers, and view their score on a results page.

Quiz App Demo
The Quiz Application will consist of the following pages:

Home Page (/)
Quiz Page (/quiz)
Result Page (/result)
Each of these pages will interact with different API endpoints to fetch data, submit answers, and display results.

Github Repo for Books API
Fork this Quiz API Repository.
Read the API document provided in the Readme File.
Login to you glitch account
click on new project
select import from github
paste your forked github url and submit
You will get your own Quiz API glitch URL and use the endpoints mentioned in the Document.
Pages and API Endpoints
1. Home Page (/)
 Description:

Displays a welcoming message and a "Login" button.
User must log in before starting the quiz.
Once logged in, the user can navigate to the Quiz Page.
Features:

Log in using a predefined username and password.
Upon successful login, navigate to the Quiz Page.
API Endpoint:

Login Endpoint:
URL: /login
Method: POST


2. Quiz Page (/quiz)


Description:

Displays multiple-choice questions fetched from the API.
Allows users to select answers for each question and receive immediate feedback (correct/incorrect).
You can have Show/Hide answer button for each question clicking on it should show this message ✅ Correct! The answer is <correct answer> / ❌ Incorrect! The correct answer is <corect answer>
Use some styling to high light the selected correct/incorrect option.
Once all questions are answered, the user can click the "Submit Quiz" button to submit answers and proceed to the Result Page.
Features:

Fetch quiz questions from the API.
Track user responses using React's state management (useState).
Show whether the selected answer is correct or incorrect immediately after selection.
After all questions are answered, display a "Submit Quiz" button.
API Endpoint:

Fetch All Quiz Questions Endpoint:
URL: /api/questions
Method: GET
Submit Quiz Answers Endpoint:
URL: /api/submit
Method: POST
3. Result Page (/result)


Description:

Displays the user's quiz score after they submit the quiz.
Shows how many answers were correct and the overall score.
Features:

After submitting the quiz, display the user's score (number of correct answers).
Display a performance summary (e.g., "You answered 7 out of 10 questions correctly").
API Endpoint:

Get User Quiz Result Endpoint:
URL: /api/result/:userId
Method: GET
Folder Structure:
 `

Components:
Home.jsx:
Displays the welcome message and login button.
On successful login, redirects to /quiz page.
Quiz.jsx:
Fetches quiz questions using the /api/questions API.
Displays each question with options and allows the user to select answers.
Tracks answers and gives immediate feedback.
After answering all questions, the user can click "Submit Quiz" to navigate to the Result Page.
2.1 QuizItem.jsx :

    It will be a reusable component to render individual quiz questions and options.

     It will receive props from Quiz.jsx (like question text, options, and selected answer handling). 
    
Result.jsx:
Displays the user's score after submitting the quiz.
Fetches the result from the /api/result/:userId API.