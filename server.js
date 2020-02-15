// Зависимости
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

// Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
server.listen(5000, function() {
    console.log('Запускаю сервер на порте 5000');
});

// Обработчик веб-сокетов
io.on('connection', function(socket) {
});

let players = {};
const playerWidth = 48;
const playerHeight = 64;
const playerStep = 10;
io.on('connection', function(socket) {
    socket.on('new player', function() {
        players[socket.id] = {
            x: 300,
            y: 300,
            imgStats: [0, 0, playerWidth, playerHeight, this.x, this.y, playerWidth, playerHeight]
        };
    });
    socket.on('movement', function(data) {
        let player = players[socket.id] || {};
        let outFlag = 0;
        if (data.left) {
            player.x -= playerStep;
            if(player.imgStats[0] < playerWidth * 3) {
                player.imgStats[0] += playerWidth;
            }
            else
                player.imgStats[0] = 0;
            player.imgStats[1] = playerHeight;
        }
        if (data.up) {
            player.y -= playerStep;
            if(player.imgStats[0] < playerWidth * 3) {
                player.imgStats[0] += playerWidth;
            }
            else
                player.imgStats[0] = 0;
            player.imgStats[1] = playerHeight * 3;
        }
        if (data.right) {
            player.x += playerStep;
            if(player.imgStats[0] < playerWidth * 3) {
                player.imgStats[0] += playerWidth;
            }
            else
                player.imgStats[0] = 0;
            player.imgStats[1] = playerHeight * 2;
        }
        if (data.down) {
            player.y += playerStep;
            if(player.imgStats[0] < playerWidth * 3) {
                player.imgStats[0] += playerWidth;
            }
            else
                player.imgStats[0] = 0;
            player.imgStats[1] = 0;
        }
    });
});
setInterval(function() {
    io.sockets.emit('state', players);
}, 1000 / 60);