import Menu from '../Menu/Menu.js';
import Inventory from '../Inventory/Inventory.js';
import User from '../User/User.js';

let Profile = function (user, inventory) {
    this.dom = document.getElementById("wrapper");
    this.user = user;
    this.inventory = inventory;
};

Profile.prototype.open = function () {
    while(this.dom.firstChild) {
        this.dom.removeChild(this.dom.lastChild);
    }
    let profileDom = document.createElement("div");
    let backDom = document.createElement("div");
    backDom.className = "menu__elem";
    backDom.innerText = "menu";
    backDom.addEventListener("click", this.back);
    profileDom.appendChild(backDom);
    this.dom.appendChild(profileDom);

    let inventory = new Inventory();
    inventory.open();
};

Profile.prototype.back = function () {
    let menu = new Menu();
    menu.open();
};

export default Profile;