import React from 'react';

function Projects() {
  return (
    <main>
      <a href="http://tarot-universe.surge.sh/" target="_blank" rel="noopener noreferrer">
        <h2>Tarot Card App</h2>
        <img src="/images/tarot-universe.png" alt="Tarot Card App" />
      </a>
      <p>
        Tarot Universe is a tarot card reading application I developed independently using HTML, CSS, and JavaScript,
        as well as a publicly available API for each of the card descriptions. 
        The project utilizes CSS animations, DOM manipulation through JavaScript, and API calls using axios.
      </p>
      <a href="http://dnd-char-creator.surge.sh/" target="_blank" rel="noopener noreferrer">
        <h2>Dungeons & Dragons Character Creator</h2>
        <img src="/images/dnd-char.png" alt="DnD Character Creator" />
      </a>
      <p>
        This is the first full React app I developed on my own, offering a quick and easy way for users
        to generate a character for the popular Dungeons and Dragons tabletop roleplaying game.
        The application relies on the <a href="http://www.dnd5eapi.co/" target="_blank" rel="noopener noreferrer">D&D 5e API</a> and makes use of
        conditional rendering, HTML forms, and stateful components all based in React.
      </p>
      <a href="http://pixel-pals.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
        <h2>Pixel Pals Website</h2>
        <img src="/images/pixel-pals.png" alt="Pixel Pals Website" />
      </a>
      <p>
        Pixel Pals is a small passion project of mine which features its own backend database.
        The website allows users to create an account, customize their own avatar, as well as view and comment
        on other users' profiles. All of the art featured on the site was created by me, and user data is saved
        to a backend using Ruby on Rails and a custom API. 
      </p>
      <a href="http://waverlyinn.surge.sh" target="_blank" rel="noopener noreferrer">
        <h2>Waverly Inn Website Redesign</h2>
        <img src="/images/waverly-inn.png" alt="Waverly Inn Restaurant" />
      </a>
      <p>
        The Waverly Inn is a popular yet exclusive restaurant in New York City.
        Their website was redesigned by a small team of UX designers as a learning opportunity,
        and I had the pleasure of building out their designs in React alongside a small team of other developers.
        This project relied on Agile methodologies, user stories, wireframes and mockups, 
        and was an excellent opportunity to work collaboritively with both designers and developers. 
      </p>
    </main>
  )
}

export default Projects;