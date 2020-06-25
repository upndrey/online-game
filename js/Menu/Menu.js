import Game from '../Game/Game.js';
import Profile from '../Profile/Profile.js';
import Settings from '../Settings/Settings.js';
import Exit from '../Exit/Exit.js';

let Menu = function () {
    this.dom = document.getElementById("wrapper");
    let game = new Game();
    let profile = new Profile();
    let settings = new Settings();
    let exit = new Exit();

    this.links = {
        'game': game,
        'profile': profile,
        'settings': settings,
        'exit': exit
    };
};

Menu.prototype.open = function () {
    while(this.dom.firstChild) {
        this.dom.removeChild(this.dom.lastChild);
    }

    if(js_page !== "menu") {
        this.links[js_page].open.call(this.links[js_page]);
        return;
    }

    let menuDom = document.createElement("form");
    menuDom.className = "menu";
    menuDom.method = "post";
    menuDom.action = "../php/index.php";
    for(let elem in this.links) {
        let menuElemDom = document.createElement("input");
        menuElemDom.type = "submit";
        menuElemDom.className = "menu__elem";
        menuElemDom.name = elem;
        menuElemDom.value = elem;
        menuDom.appendChild(menuElemDom);
    }
    this.dom.appendChild(menuDom);
};

 export default Menu;