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
    this.drawGrid(canvas, ctx);
    let xCount = 600 / 50;
    let yCount = 900 / 50;
    let promise = this.drawItems(canvas, ctx, xCount, yCount);
    promise.then((result) => {

    });
};

Inventory.prototype.drawGrid = function (canvas, ctx) {
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

Inventory.prototype.drawItems = async function (canvas, ctx, xCount, yCount) {
    let itemsList = [];
    for(let i = 0; i < xCount; i++) {
        itemsList.push([]);
        for(let j = 0; j < yCount; j++) {
            itemsList[i].push(0);
        }
    }

    let url = "../php/getItemList.php";
    let promise = fetch(url);
    return promise.then((response) => {
        return response.json();
    }).then((result) => {
        for(let i = 0; i < result.size(); i++) {
            if(result[i].pos_x == null) {
                let [pos_x, pos_y] = this.insertObject(itemsList, result[i][0].width, result[i][0].height);
            }
        }
    });
};

Inventory.prototype.insertObject = function (arr, width, height) {

};

export default Inventory;