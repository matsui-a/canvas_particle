window.requestAnimationFrame = 
  window.requestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var canvas = document.getElementById( "canvas");
var ctx = canvas.getContext( "2d" );
var NUM = 20;
var particles = [];

canvas.width = canvas.height = 500;

for(var i = 0; i < NUM; i++) {
	positionX = Math.random() * 120;
	positionY = Math.random() * 20;
	particle = new Particle(ctx, positionX, positionY);
	particles.push( particle );
}

function Particle(ctx, x, y) {
	this.ctx = ctx;
	this.x = x || 0;
	this.y = y || 0;
}

Particle.prototype.render = function() {
  this.updatePosition();
  this.draw();
}

Particle.prototype.draw = function() {
  //描画
  ctx = this.ctx;
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect( this.x, this.y, 4, 4 ); // 位置指定
  ctx.fill();
  ctx.closePath();
}

Particle.prototype.updatePosition = function() {
	this.x += 5;
	this.y += 5;
}

//図形を描画する
render();

function render() {
  //一度図形を消去
  ctx.clearRect( 0, 0, 500, 500 );

  particles.forEach(function(e) { e.render(); });

  //一定時間おく
  requestAnimationFrame( render );
}