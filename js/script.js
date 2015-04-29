window.requestAnimationFrame = 
  window.requestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var x1 = 5;
var y1 = 5;
var x2 = 100;
var y2 = 5;

var canvas = document.getElementById( "canvas");
var ctx = canvas.getContext( "2d" );

//図形を描画する
render();

function render() {
  //一度図形を消去
  ctx.clearRect( 0, 0, 500, 500 );

  updateposition();
  draw( x1, y1 );
  draw( x2, y2 );

  //一定時間おく
  requestAnimationFrame( render );
}

function updateposition() {
  x1 += 5;
  y1 += 5;
  x2 += 5;
  y2 += 5;
}

function draw(posx, posy) {
  //描画
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect( posx, posy, 10, 20 ); // 位置指定
  ctx.fill();
  ctx.closePath();
}