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
    let profileDom = document.createElement("form");
    profileDom.className = "menu";
    profileDom.method = "post";
    profileDom.action = "../php/index.php";
    let backDom = document.createElement("input");
    backDom.className = "menu__elem";
    backDom.type = "submit";
    backDom.value = "menu";
    backDom.name = "menu";
    profileDom.appendChild(backDom);
    this.dom.appendChild(profileDom);

    let inventory = new Inventory();
    inventory.open();
};


export default Profile;