import User from "../User/User.js";

let Exit = function (user, inventory) {
    this.dom = document.getElementById("wrapper");
    this.user = user;
    this.inventory = inventory;
};

Exit.prototype.open = function () {
    while(this.dom.firstChild) {
        this.dom.removeChild(this.dom.lastChild);
    }
    let profileDom = document.createElement("div");
};

export default Exit;