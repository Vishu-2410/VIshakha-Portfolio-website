import React from 'react';
import './ProjectSection.css';
// import bgimg from '../assets/img/footer-bg.png';
import img1 from '../assets/img/Invoice-pro1.jpeg';
import img2 from '../assets/img/Invoice-pro2.jpeg';
import img3 from '../assets/img/Invoice-pro3.jpeg';
import ticimg1 from '../assets/img/tictoe-pro1.png';
import ticimg2 from '../assets/img/tictoe-pro2.png';
import ticimg3 from '../assets/img/tictoe-pro3.png';
import todoimg1 from '../assets/img/todolist-pro1.jpeg';
import todoimg2 from '../assets/img/todolist-pro2.jpeg';
import todoimg3 from '../assets/img/todolist-pro3.jpeg';
import weatherimg1 from '../assets/img/weather-pro1.jpeg';
import expimg1  from '../assets/img/expense-pro1.png';
import expimg2  from '../assets/img/expense-pro2.png';
import expimg3  from '../assets/img/expense-pro3.png';
const Slider = () => {
  return (
    <div id='blogs'>
      <h1 className='blg'>My blogs</h1>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
  </div>
  <div className="carousel-inner">

    {/* section for invoice management */}
    <div className="carousel-item active">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section" id='blogs'>
      <h2 className="project-title">Invoice Management System - MERN Stack</h2>
      <div className="project-content">
        <div className="project-images">
          <a href="https://github.com/yourusername/invoice-management-system" target="_blank" rel="noopener noreferrer">
            <img
              src={img1}
              alt="Invoice Management System Screenshot 1"
              className="project-image"
            />
          </a>
          <a href="https://github.com/yourusername/invoice-management-system" target="_blank" rel="noopener noreferrer">
            <img
              src={img2}
              alt="Invoice Management System Screenshot 2"
              className="project-image"
            />
          </a>
          <a href="https://github.com/yourusername/invoice-management-system" target="_blank" rel="noopener noreferrer">
            <img
              src={img3}
              alt="Invoice Management System Screenshot 3"
              className="project-image"
            />
          </a>
        </div>
        <div className="project-description">
          <p>
            The Invoice Management System is a robust web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It is designed to simplify the process of creating, sending, and tracking invoices.
          </p>
          <h3>Project Overview</h3>
          <p>
            This system allows businesses to manage their invoices efficiently. Users can create new invoices, track payment statuses, and manage clients all within a single platform. The application ensures a smooth and user-friendly experience.
          </p>
          <h3>Features</h3>
          <ul>
            <li><strong>Create Invoices:</strong> Easily create and customize invoices with client details and line items.</li>
            <li><strong>Manage Clients:</strong> Store and manage client information for quick invoice generation.</li>
        
            <li><strong>Search and Filter:</strong> Advanced search and filter options to find invoices and clients quickly.</li>
            <li><strong>Responsive Design:</strong> Fully responsive interface for both mobile and desktop users.</li>
          </ul>
          <h3>Technical Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js with Hooks and Context API for state management.</li>
            <li><strong>Backend:</strong> Node.js and Express.js for building RESTful APIs.</li>
            <li><strong>Database:</strong> MongoDB for data storage and Mongoose for data modeling.</li>
            
          </ul>
          <h3>Project Implementation</h3>
          <p>
            The Invoice Management System is built following best practices in modern web development. The frontend utilizes React.js for a dynamic and responsive user interface. The backend is powered by Node.js and Express.js, ensuring a robust and scalable server-side architecture. MongoDB is used for efficient data storage and retrieval.
          </p>
          <a
            href="https://github.com/Vishu-2410/Invoice-Management-System-MERN"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
    </div>
      </div>
    
    {/* section for job portal */}
    <div class="carousel-item">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section">
      <h2 className="project-title">Job Portal - React</h2>
      <div className="project-content">
        <div className="project-images">
          
            <img
              src="job-portal-screenshot1.png"
              alt="Job Portal Screenshot 1"
              className="project-image"
            />
        
            <img
              src="job-portal-screenshot2.png"
              alt="Job Portal Screenshot 2"
              className="project-image"
            />
          
            <img
              src="job-portal-screenshot3.png"
              alt="Job Portal Screenshot 3"
              className="project-image"
            />
         
        </div>
        <div className="project-description">
          <p>
            The Job Portal is a React-based application designed to connect job seekers with employers. Users can search for jobs, apply for positions, and manage their job applications.
          </p>
          <h3>Project Overview</h3>
          <p>
            This platform allows job seekers to browse and apply for job listings posted by employers. Employers can create and manage job listings, review applications, and communicate with potential candidates.
          </p>
          <h3>Features</h3>
          <ul>
            <li><strong>Job Search:</strong> Users can search for jobs by keywords, location, and category.</li>
            <li><strong>Job Application:</strong> Users can apply for jobs directly through the platform.</li>
            <li><strong>Employer Dashboard:</strong> Employers can post job listings, review applications, and communicate with candidates.</li>
            <li><strong>User Authentication:</strong> Secure login and registration for both job seekers and employers.</li>
            <li><strong>Responsive Design:</strong> Fully responsive interface for both mobile and desktop users.</li>
          </ul>
          <h3>Technical Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js for building the user interface.</li>
            <li><strong>Backend:</strong> Node.js and Express.js for handling API requests.</li>
            <li><strong>Database:</strong> MongoDB for storing job listings and user information.</li>
            <li><strong>State Management:</strong> React Hooks for managing component state.</li>
            <li><strong>Styling:</strong> CSS Modules for component-level styling.</li>
          </ul>
          <h3>Project Implementation</h3>
          <p>
            The Job Portal is implemented using React for the frontend. The backend is powered by Node.js and Express.js, with MongoDB as the database. The platform uses JWT for user authentication and ensures secure access to job listings and applications.
          </p>
          <a
            href="https://github.com/yourusername/job-portal"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>

    {/* section for quiz app */}
    <div class="carousel-item">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section">
      <h2 className="project-title">Online Quiz Platform - React</h2>
      <div className="project-content">
        <div className="project-images">
    
            <img
              src="online-quiz-platform-screenshot1.png"
              alt="Online Quiz Platform Screenshot 1"
              className="project-image"
            />
        
            <img
              src="online-quiz-platform-screenshot2.png"
              alt="Online Quiz Platform Screenshot 2"
              className="project-image"
            />
    
            <img
              src="online-quiz-platform-screenshot3.png"
              alt="Online Quiz Platform Screenshot 3"
              className="project-image"
            />
       
        </div>
        <div className="project-description">
          <p>
            The Online Quiz Platform is a comprehensive web application built using React. It allows users to create, take, and manage quizzes efficiently. The platform supports various question types and provides detailed results and analytics.
          </p>
          <h3>Project Overview</h3>
          <p>
            This platform enables users to create quizzes with multiple question types, take quizzes, and view results. It supports user authentication and authorization, ensuring that only authorized users can create or modify quizzes.
          </p>
          <h3>Features</h3>
          <ul>
            <li><strong>Create Quizzes:</strong> Users can create quizzes with different types of questions (multiple choice, true/false, short answer).</li>
            <li><strong>Take Quizzes:</strong> Users can take quizzes and submit their answers.</li>
            <li><strong>View Results:</strong> Users can view their quiz results, including scores and detailed feedback.</li>
            <li><strong>User Authentication:</strong> Secure login and registration for users.</li>
            <li><strong>Responsive Design:</strong> Fully responsive interface for both mobile and desktop users.</li>
          </ul>
          <h3>Technical Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js for building the user interface.</li>
            <li><strong>Backend:</strong> Node.js and Express.js for handling API requests.</li>
            <li><strong>Database:</strong> MongoDB for storing quiz data and user information.</li>
            <li><strong>State Management:</strong> React Hooks for managing component state.</li>
            <li><strong>Styling:</strong> CSS Modules for component-level styling.</li>
          </ul>
          <h3>Project Implementation</h3>
          <p>
            The Online Quiz Platform is implemented using React for the frontend. The backend is powered by Node.js and Express.js, with MongoDB as the database. The platform uses JWT for user authentication and ensures secure access to quiz creation and management functionalities.
          </p>
          <a
            href="https://github.com/yourusername/online-quiz-platform"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>

    {/* section for tic-tac-toe game */}
    <div class="carousel-item">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section">
      <h2 className="project-title">Tic-Tac-Toe Game - HTML, CSS, JavaScript</h2>
      <div className="project-content">
        <div className="project-images">

          <img
            src={ticimg1}
            alt="Tic-Tac-Toe Game Screenshot 1"
            className="project-image"
          />
          <img
            src={ticimg2}
            alt="Tic-Tac-Toe Game Screenshot 2"
            className="project-image"
          />
          <img
            src={ticimg3}
            alt="Tic-Tac-Toe Game Screenshot 3"
            className="project-image"
          />

        </div>
        <div className="project-description">
          <p>
            The Tic-Tac-Toe Game is a classic two-player game built using HTML, CSS, and JavaScript. This project aims to provide an engaging and fun user experience through a simple yet interactive game.
          </p>
          <h3>Project Overview</h3>
          <p>
            This game allows two players to take turns marking the spaces in a 3×3 grid with their respective symbols (X and O). The first player to get three of their marks in a horizontal, vertical, or diagonal row wins the game.
          </p>
          <h3>Features</h3>
          <ul>
            <li><strong>Interactive Gameplay:</strong> Players can click on grid cells to make their move.</li>
            <li><strong>Win Detection:</strong> Automatically detects and announces the winner.</li>
            <li><strong>Reset Functionality:</strong> Players can reset the game to start a new match.</li>
            <li><strong>Responsive Design:</strong> Fully responsive interface for both mobile and desktop users.</li>
          </ul>
          <h3>Technical Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> HTML for structure, CSS for styling, and JavaScript for game logic.</li>
            <li><strong>State Management:</strong> JavaScript handles the game state and win detection.</li>
          </ul>
          <h3>Project Implementation</h3>
          <p>
            The Tic-Tac-Toe Game is implemented using plain HTML, CSS, and JavaScript. The HTML provides the structure of the game board, CSS styles the game, and JavaScript handles the game logic including player turns, win detection, and resetting the game.
          </p>
          <a
            href="https://github.com/Vishu-2410/Tic-Tak-Toe-Game"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>

    {/* section for todolist */}
    <div class="carousel-item">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section">
      <h2 className="project-title">To-Do List System - MERN Stack</h2>
      <div className="project-content">
        <div className="project-images">
         
            <img
              src={todoimg1}
              alt="To-Do List System Screenshot 1"
              className="project-image"
            />
         
            <img
              src={todoimg2}
              alt="To-Do List System Screenshot 2"
              className="project-image"
            />
    
            <img
              src={todoimg3}
              alt="To-Do List System Screenshot 3"
              className="project-image"
            />
        
        </div>
        <div className="project-description">
          <p>
            The To-Do List System is a user-friendly web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It is designed to help users manage their daily tasks efficiently.
          </p>
          <h3>Project Overview</h3>
          <p>
            This system allows users to create, update, and delete tasks. Users can also categorize tasks, set deadlines, and mark them as complete. The application provides an intuitive interface that ensures a seamless user experience.
          </p>
          <h3>Features</h3>
          <ul>
            <li><strong>Create Tasks:</strong> Add new tasks with details such as title, description, and deadline.</li>
            <li><strong>Update Tasks:</strong> Edit existing tasks to update their details.</li>
            <li><strong>Delete Tasks:</strong> Remove tasks that are no longer needed.</li>
            <li><strong>Mark as Complete:</strong> Mark tasks as complete or incomplete.</li>
            <li><strong>Search and Filter:</strong> Advanced search and filter options to find tasks quickly.</li>
            <li><strong>Responsive Design:</strong> Fully responsive interface for both mobile and desktop users.</li>
          </ul>
          <h3>Technical Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js with Hooks and Context API for state management.</li>
            <li><strong>Backend:</strong> Node.js and Express.js for building RESTful APIs.</li>
            <li><strong>Database:</strong> MongoDB for data storage and Mongoose for data modeling.</li>
           
          </ul>
          <h3>Project Implementation</h3>
          <p>
            The To-Do List System is built following best practices in modern web development. The frontend utilizes React.js for a dynamic and responsive user interface. The backend is powered by Node.js and Express.js, ensuring a robust and scalable server-side architecture. MongoDB is used for efficient data storage and retrieval.
          </p>
          <a
            href="https://github.com/Vishu-2410/TodoList-MERN"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div class="carousel-item">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section">

<h2 className="project-title">Weather App - React</h2>
<div className="project-content">
  <div className="project-images">
      <img

        src={weatherimg1}
        alt="Weather App Screenshot 1"
        className="project-image"
      />
   
  </div>
  <div className="project-description">
    <p>
      The Weather App is a React-based application designed to provide real-time weather information. Users can search for any city worldwide and get current weather conditions along with a forecast.
    </p>
    <h3>Project Overview</h3>
    <p>
      This app allows users to enter a city name to retrieve weather information including temperature, humidity, wind speed, and weather conditions. The app uses a third-party weather API to fetch the data.
    </p>
    <h3>Features</h3>
    <ul>
      <li><strong>Search Functionality:</strong> Users can search for any city to get weather information.</li>
      <li><strong>Current Weather:</strong> Displays current temperature, humidity, wind speed, and weather conditions.</li>
      <li><strong>Weather Forecast:</strong> Provides a forecast for the next few days.</li>
      <li><strong>Responsive Design:</strong> Fully responsive interface for both mobile and desktop users.</li>
    </ul>
    <h3>Technical Stack</h3>
    <ul>
      <li><strong>Frontend:</strong> React.js for building the user interface.</li>
      <li><strong>API:</strong> Uses a third-party weather API to fetch weather data.</li>
      <li><strong>Styling:</strong> CSS Modules for component-level styling.</li>
    </ul>
    <h3>Project Implementation</h3>
    <p>
      The Weather App is implemented using React. The app fetches weather data from a third-party API and displays it to the user. State management is handled using React Hooks, ensuring a dynamic and responsive user experience.
    </p>
    <a
      href="https://github.com/Vishu-2410/Weather-App"
      className="github-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub
    </a>
  </div>
</div>
</div>
      </div>
    </div>

    {/* section for expense tracker */}
    <div class="carousel-item">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section">
      <h2 className="project-title">Expense Tracker System - React</h2>
      <div className="project-content">
        <div className="project-images">
         
            <img
              src={expimg1}
              alt="Expense Tracker System Screenshot 1"
              className="project-image"
            />
        
            <img
              src={expimg2}
              alt="Expense Tracker System Screenshot 2"
              className="project-image"
            />
            <img
              src={expimg3}
              alt="Expense Tracker System Screenshot 3"
              className="project-image"
            />
         
        </div>
        <div className="project-description">
          <p>
            The Expense Tracker System is a user-friendly web application developed using React. It is designed to help users track and manage their expenses efficiently.
          </p>
          <h3>Project Overview</h3>
          <p>
            This system allows users to add, edit, and delete expenses. Users can categorize expenses, view summaries, and analyze their spending habits. The application ensures a smooth and user-friendly experience.
          </p>
          <h3>Features</h3>
          <ul>
            <li><strong>Add Expenses:</strong> Easily add new expenses with details such as amount, category, and date.</li>
            <li><strong>Edit Expenses:</strong> Update existing expenses to reflect changes.</li>
            <li><strong>Delete Expenses:</strong> Remove expenses that are no longer needed.</li>
            <li><strong>View Summary:</strong> View a summary of expenses categorized by month, category, etc.</li>
            <li><strong>Responsive Design:</strong> Fully responsive interface for both mobile and desktop users.</li>
          </ul>
          <h3>Technical Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js with Hooks for state management.</li>
            <li><strong>Backend:</strong> N/A (Frontend-only project).</li>
            <li><strong>State Management:</strong> Context API for global state management.</li>
            <li><strong>Styling:</strong> CSS Modules for component-level styling.</li>
          </ul>
          <h3>Project Implementation</h3>
          <p>
            The Expense Tracker System is built following best practices in modern web development. The frontend utilizes React.js for a dynamic and responsive user interface. State management is handled using React Hooks and Context API, ensuring a seamless user experience.
          </p>
          <a
            href="https://github.com/Vishu-2410/Expense-Tracker-App"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>

    {/* section for chatapp */}
    <div class="carousel-item">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section">
      <h2 className="project-title">ChatApp - MERN Stack</h2>
      <div className="project-content">
        <div className="project-images">
         
            <img
              src="chatapp-screenshot1.png"
              alt="ChatApp Screenshot 1"
              className="project-image"
            />
        
            <img
              src="chatapp-screenshot2.png"
              alt="ChatApp Screenshot 2"
              className="project-image"
            />
         
            <img
              src="chatapp-screenshot3.png"
              alt="ChatApp Screenshot 3"
              className="project-image"
            />
         
        </div>
        <div className="project-description">
    
          <h3>Project Overview</h3>
          <p>
          ChatApp is a sophisticated real-time messaging application built using the MERN.The ChatApp allows users to create accounts, log in, and engage in real-time conversations . The application leverages modern web technologies and provides a seamless user experience on both desktop and mobile devices.
          </p>
          <h3>Features</h3>
          <ul>
            <li><strong>User Authentication:</strong> Secure signup and login functionality using JWT tokens.</li>
            <li><strong>Real-Time Messaging:</strong> Instant messaging capabilities powered by Socket.io.</li>
            <li><strong>Responsive Design:</strong> Fully responsive design ensures usability on various devices and screen sizes.</li>
            <li><strong>RESTful API:</strong> Backend services implemented using Express.js and MongoDB.</li>
            <li><strong>Notifications:</strong> Real-time notifications for incoming messages and other events.</li>
          </ul>
          <h3>Technical Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js with Hooks and Context API for state management.</li>
            <li><strong>Backend:</strong> Node.js and Express.js for building RESTful APIs.</li>
            <li><strong>Database:</strong> MongoDB for data storage and Mongoose for data modeling.</li>
            <li><strong>Real-Time Communication:</strong> Socket.io for real-time bidirectional communication.</li>
            {/* <li><strong>Authentication:</strong> JWT (JSON Web Tokens) for secure user authentication.</li> */}
          </ul>
          <h3>Project Implementation</h3>
          <p>
            The development of ChatApp followed best practices in modern web development. The frontend was built using React.js, ensuring a responsive and dynamic user interface. The backend was developed using Node.js and Express.js, providing a robust and scalable server-side architecture. MongoDB was used as the database, ensuring efficient data storage and retrieval. Socket.io was integrated to facilitate real-time communication between users.
          </p>
          <a
            href="https://github.com/Vishu-2410/ChatApp"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>

    {/*section book management system  */}
    <div class="carousel-item">
      {/* <img src={bgimg} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block">
      <div className="project-section">
      <h2 className="project-title">Book Management System - MERN Stack</h2>
      <div className="project-content">
        <div className="project-images">
          
            <img
              src="book-management-screenshot1.png"
              alt="Book Management System Screenshot 1"
              className="project-image"
            />
        
            <img
              src="book-management-screenshot2.png"
              alt="Book Management System Screenshot 2"
              className="project-image"
            />
         
            <img
              src="book-management-screenshot3.png"
              alt="Book Management System Screenshot 3"
              className="project-image"
            />
        
        </div>
        <div className="project-description">
          <p>
            The Book Management System is a comprehensive web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It is designed to manage book inventories, track borrowed books, and handle user accounts efficiently.
          </p>
          <h3>Project Overview</h3>
          <p>
            This system allows library administrators to manage books and users seamlessly. Users can browse the catalog, borrow books, and return them with ease. The application ensures a streamlined and user-friendly experience.
          </p>
          <h3>Features</h3>
          <ul>
            <li><strong>Book Inventory Management:</strong> Add, update, and remove books from the inventory.</li>
            <li><strong>User Management:</strong> Register and manage user accounts with role-based access.</li>
            <li><strong>Search and Filter:</strong> Advanced search and filter options to find books quickly.</li>
            <li><strong>Responsive Design:</strong> Fully responsive interface for both mobile and desktop users.</li>
          </ul>
          <h3>Technical Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js with Hooks and Context API for state management.</li>
            <li><strong>Backend:</strong> Node.js and Express.js for building RESTful APIs.</li>
            <li><strong>Database:</strong> MongoDB for data storage and Mongoose for data modeling.</li>
            <li><strong>Authentication:</strong> JWT (JSON Web Tokens) for secure user authentication.</li>
          </ul>
          <h3>Project Implementation</h3>
          <p>
            The Book Management System is built following best practices in modern web development. The frontend utilizes React.js for a dynamic and responsive user interface. The backend is powered by Node.js and Express.js, ensuring a robust and scalable server-side architecture. MongoDB is used for efficient data storage and retrieval, while JWT provides secure user authentication.
          </p>
          <a
            href="https://github.com/yourusername/book-management-system"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
);
};

export default Slider;