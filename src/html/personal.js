import coffee1 from './../images/coffee1.jpg';
import coffee2 from './../images/coffee2.jpg';
import coffee3 from './../images/coffee3.jpg';


function Personal() {
    return(
        <div id="hardware" class="hardware group">
      <div class="group">
      <div class="display">
        <h1><a>Arduino Ethernet</a></h1>
        <div class="slideshow">
        <div class="cycle-slideshow images" >

          {/* <span class="cycle-prev">&laquo;</span>
          <span class="cycle-next">&raquo;</span> */}

          <img src={coffee1} alt="coffee1"></img>
          {/* <img src={coffee2} alt="coffee2"></img>
          <img src={coffee3} alt="coffee3"></img> */}
        </div>
      </div>
      </div>
      <div class="content">
        <h1 class= "skills top">About:</h1>
        <p>Toggle on and off a coffee machine through a web server</p>
        <h1>Skills: </h1>
        <p>Arduino/ DHCP Protocol</p>
        <h1>Links: </h1>
        <h2><a href="https://github.com/apate377/WebServer-CoffeeMachine">Github</a></h2>
        <h2><a href="https://docs.google.com/document/d/1GePLlAVqz8GhiM_j0ITI4EoIlcQht7g0aM7wUgZcLP0/edit?usp=sharing">Documentation</a></h2>
      </div>
    </div>
    <div class="gradient3"></div>
  </div>
    );
}

export default Personal;