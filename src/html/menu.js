

function Menu() {
    return(
        <div class="menu">
      <div class="menubtn">
        <span data-toggle-target="togglemenu" class="toggle-btn">MENU</span>
      </div>
      <ul class="togglemenu">
        <li><a href="#home" class="btn1">HOME</a></li>
        <li><a href="#software" class="btn2">SOFTWARE</a></li>
        <li><a href="#hardware" class="btn3">HARDWARE</a></li>
        <li><a href="#aboutme" class="btn4">ABOUT ME</a></li>
      </ul>
    </div>
    );
}

export default Menu;