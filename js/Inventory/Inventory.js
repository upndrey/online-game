import items from '../Item/items.js';

let Inventory = function (user, inventory) {
    this.dom = document.getElementById("wrapper");
    this.items = items;
};

Inventory.prototype.open = function () {
    let canvas = document.createElement("canvas");
    canvas.className = "inventory";
    this.dom.appendChild(canvas);
    let ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 900;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for(let i = 0; i <= canvas.height; i += 50) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }
    for(let i = 0; i <= canvas.width; i += 50) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }
    ctx.stroke();
};

export default Inventory;