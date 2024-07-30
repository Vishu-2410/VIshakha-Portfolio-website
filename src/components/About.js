
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import img from '../assets/img/vish4.jpg';
const About = () => {
    return ( 
        <section id="about">
            <div className='about-bx'>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={img} alt=''></img>
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'></FaAward>
                            <h5>Experience</h5>
                            <small >1+ years of Experiance</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'></FiUsers>
                            <h5>Connections</h5>
                            <small >50+ Worldwide</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'></VscFolderLibrary>
                            <h5>Projects</h5>
                            <small >10+ Projects</small>
                        </article>
                    </div>

                    <p>
                    I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
                        .I have worked with a vareity of technologies including React,Node.js,MySQL,SQL server,MongoDB,etc..
                    </p>
                    <p>
                    My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where i continously strive to learn
                           and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
                             Outside of coding .I enjoy staying active,exploring new technologies,and contributing to open-source projects. 
                    </p>

                </div>
                </div>
            
                 </div>
                 <div className="about-achievements">
                 <div className="about-achievement">
                     <h1>1+</h1>
                     <p>Years Of Experience</p>
                     <h3>Internship:-At Excel Analytics Pvt Ltd, Bhopal</h3>
                     <h3>Role: Programming and Web Development Instructor</h3>
                 </div>
                 <hr />
                 <div className="about-achievement">
                     <h1>10+</h1>
                     <p>Projects Completed</p>
                 </div>
                 <hr/>

                 </div>
        </section>
     );
}
 
export default About;