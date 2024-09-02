import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import projImg1 from '../assets/img/chatapp-img.jpg';
import projImg2 from '../assets/img/book-mag-img.jpg';
import projImg3 from '../assets/img/invoice-mag-img.jpg';
import projImg5 from '../assets/img/expenseTracker.jpg'
import projImg4 from '../assets/img/todolist.jpg';
import projImg6 from '../assets/img/tic-tac-toe1.jpg';
import projImg7 from '../assets/img/weatherapp.jpg';
import projImg8 from '../assets/img/job-portal.jfif';
import projImg9 from '../assets/img/quiz-img.jfif';
export const Projects = () => {


  const projects = [
    {
      title: "Job Portal Website",
      description: " This project is a job board website that allows employers to post job openings and job seekers to search and apply for jobs. It is built using React, Node.js, and a database like MongoDB.",
      imgUrl:projImg8,
    },
    {
      title: "Online Quiz platform",
      description: "The Online Quiz Maker allows users to create, take, and manage quizzes with immediate feedback, supporting user authentication and mobile responsiveness. This platform includes quiz creation, taking, results display, and quiz listing functionalities.",
      imgUrl:projImg9,
    },
    {
      title: "Invoice Management System",
      description: "The Invoice Management System is a robust web application developed using the MERN  stack. It is designed to simplify the process of creating, sending, and tracking invoices.",
      imgUrl:projImg3,
    },
  ];

  const project1 = [
    {
      title: "TodoList",
      description: "The To-Do List System is a user-friendly web application developed using the MERN stack. It is designed to help users manage their daily tasks efficiently.",
      imgUrl: projImg4,
    },
    {
      title: "ChatApp Project",
      description: " ChatApp is a sophisticated real-time messaging application built using the MERN stack. This project showcases the following features and functionalities:",
      imgUrl:projImg1,
    },
    {
      title: "Book Management System",
      description: "The Book Management System is a comprehensive web application developed using the MERN stack. It is designed to manage book inventories, track borrowed books, and handle user accounts efficiently.",
      imgUrl:projImg2,
    },
  ];

  const project2= [
    {
      title: "Weather-App",
      description: "The Weather App is a React-based application designed to provide real-time weather information. Users can search for any city worldwide and get current weather conditions along with a forecast.",
      imgUrl: projImg7,
    },
    {
      title: "Expense Traker",
      description: "The Expense Tracker System is a user-friendly web application developed using React. It is designed to help users track and manage their expenses efficiently.",
      imgUrl:projImg5,
    },
    {
      title: "Tic-Tac-toe Game",
      description: "The Tic-Tac-Toe Game is a classic two-player game built using HTML, CSS, and JavaScript. This project aims to provide an engaging and fun user experience through a simple yet interactive game.",
      imgUrl: projImg6,
    },
  ];
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is a selection of projects that demonstrate my full stack development skills, showcasing my proficiency in front-end and back-end technologies, database management, and performance optimization.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project1.map((project1, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          project2.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  )
}