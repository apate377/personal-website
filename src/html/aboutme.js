import aboutme from './../images/about_me.jpg';
import uiuc from './../images/uiuc.jpg';


function Aboutme(){
    return(
        <div>
            <div id="aboutme" class="aboutme">
            <div class="aboutmedisplay group">
          <div class="self">
            <img src={aboutme} alt="Amar's_image"></img>
            <img src={uiuc} alt="uiuc"></img>
          </div>
        <div class="description">
          <h1>About Me</h1>
          <p>Student at the University of Illinois at Urbana-Champaign</p>
          <h2>Languages: </h2>
          <p>Java -- C# -- C++ -- C -- HTML -- CSS -- SystemVerilog</p>
          <h2>Skills: </h2>
          <p>Arduino -- Unity Game Engine -- Ethernet -- Relays -- Git -- 3-D Printing -- Soldering -- Inventor -- Revit</p>
        </div>
      </div>
      <div class="gradient4"></div>
    </div>
    <div class="gradient5"></div>
        </div>
    );
}

export default Aboutme;