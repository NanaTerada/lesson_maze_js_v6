(function () {
    //迷路を配列で用意

//     0 0 0
//     0 1 0
//     0 1 0
// 　0が道　1が壁
// map[x][y] 

    var map = [];
    map[0] = [0,0,0];
    map[1] = [0,1,1];
    map[2] = [0,0,0];

    //Canvasで描画

    var col = 3;
    var row = 3;

    var wallSize = 10;
    var wallColor = '#3261AB';

    var canvas = document.getElementById('mycanvas');
    if (!canvas || !canvas.getContext) {
        return;
    }

    var ctx = canvas.getContext('2d');

    canvas.width = (col + 2).wallSize;
    canvas.width = (row + 2).wallSize;

    // 上下の壁

    // 左右の壁


})();