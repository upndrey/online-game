import Menu from './Menu/Menu.js';
let App = function (menu) {
    this.menu = menu;
    this.menu.open();
};


let menu = new Menu();
let app = new App(menu);
