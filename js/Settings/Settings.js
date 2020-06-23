import User from "../User/User.js";

let Settings = function (user, inventory) {
    this.dom = document.getElementById("wrapper");
    this.user = user;
    this.inventory = inventory;
};

Settings.prototype.open = function () {
    while(this.dom.firstChild) {
        this.dom.removeChild(this.dom.lastChild);
    }
    let profileDom = document.createElement("div");
};

export default Settings;