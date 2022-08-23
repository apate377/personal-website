

function Menumobile() {
    return(
        <div class="menumobile">
      <div class="menubtnmobile">
        <span data-toggle-target="togglemenu" class="toggle-btn-mobile">MENU</span>
      </div>
      <ul class="togglemenu">
        <li><a href="#home" class="btn1-mobile">HOME</a></li>
        <li><a href="#software" class="btn2-mobile">SOFTWARE</a></li>
        <li><a href="#hardware" class="btn3-mobile">HARDWARE</a></li>
        <li><a href="#aboutme" class="btn4-mobile">ABOUT ME</a></li>
      </ul>
    </div>
    );
}

export default Menumobile;