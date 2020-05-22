
(function () {
console.log('test')
    //手順1.迷路を配列で用意

//     0 0 0
//     0 1 0
//     0 1 0
// 　0が道　1が壁
// map[x][y] 

    var map = [];
    map[0] = [0,0,0];
    map[1] = [0,1,1];
    map[2] = [0,0,0];

    //手順2.Canvasで描画

    var col = 3;
    var row = 3;

    var wallSize = 10;
    var wallColor = '#3261AB';

    var canvas = document.getElementById('mycanvas');

    if (!canvas || !canvas.getContext) {
        return false;
    }
    console.log(canvas.getContext)

    var ctx = canvas.getContext('2d');

    canvas.width = (col + 2) * wallSize;
    canvas.height = (row + 2) *wallSize;

    // 手順4.上下の壁
    for (var x = 0;x <col + 2; x++) {
        drawWall(x,0);
        drawWall(x,row + 1);
    }

    // 手順4.左右の壁
    for (var y = 0;y <col + 2; y++) {
        drawWall(0,y);
        drawWall(col + 1,y);
    }

    //手順5.壁の内部
    for (var x = 0; x < col ;x++) {
        for (var y = 0; y <row ;y++) {
            if (map[x][y] === 1) {
                drawWall(x+1,y+1);
            }
        }
    }


    // 手順3.壁を描画する
    function drawWall(x,y) {
        ctx.fillStyle = wallColor;
        ctx.fillRect(
            x * wallSize,
            y * wallSize,
            wallSize,
            wallSize);
    }

})();