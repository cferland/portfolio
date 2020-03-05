import React from 'react';

function Home() {
  return (
    <main>
      <div className="about">
        <div className="headshot-wrapper">
          <img className="headshot" src="/images/headshot.png" alt="headshot" />
        </div>
        <div className="about-text">
          <p>
            Welcome to my portfolio!
          </p>
          <p>
            My name is Corey Ferland and I am a Full Stack Web Developer with a background in graphic design,
            digital marketing, content management, and client services.
            While my career and studies have taken me into a variety of fields,
            I began learning the basics of web development in high school and have continued to build on that knowledge over the past 10 years.
          </p>
          <p>
            I strive to incorporate efficiency and best practices in all the applications that I develop,
            while maintaining a user experience that is straightforward and intuitive.
            I am familiar with Agile methodologies and have experience working as part of a team as both a designer and a developer,
            providing me with a unique perspective that allows me to seamlessly integrate design concepts into the
            applications I create.
          </p>
          <p>
            My current skills include such technologies as:
          </p>
          <ul>
            <li>• <span className="no-gradient">HTML</span></li>
            <li>• <span className="no-gradient">CSS</span></li>
            <li>• <span className="no-gradient">JavaScript</span></li>
            <li>• <span className="no-gradient">React</span></li>
            <li>• <span className="no-gradient">Node</span></li>
            <li>• <span className="no-gradient">Express</span></li>
            <li>• <span className="no-gradient">SQL</span></li>
            <li>• <span className="no-gradient">Ruby on Rails</span></li>
            <li>• <span className="no-gradient">Python</span></li>
            <li>• <span className="no-gradient">JSON</span></li>
            <li>• <span className="no-gradient">CLI</span></li>
            <li>• <span className="no-gradient">Git / GitHub</span></li>
            <li>• <span className="no-gradient">REST APIs</span></li>
            <li>• <span className="no-gradient">...and more!</span></li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Home;