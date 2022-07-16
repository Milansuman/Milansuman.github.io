(()=>{"use strict";var t,i={927:(t,i)=>{i.__esModule=!0,i.update=i.Ball=i.Color=i.Vector=void 0;var o=[],n=function(){function t(t,i){this.x=t,this.y=i}return t.prototype.add=function(i){return new t(this.x+i.x,this.y+i.y)},t.prototype.subtract=function(i){return new t(this.x-i.x,this.y-i.y)},t.prototype.magnitude=function(){return Math.sqrt(this.x^2+this.y^2)},t}();i.Vector=n;var r=function(){function t(t,i,o,n){this.r=t,this.g=i,this.b=o,this.a=n}return t.prototype.toString=function(){return"rgba("+this.r+","+this.g+","+this.b+","+this.a+")"},t}();i.Color=r;var s=function(){function t(t,i,s,e,a){this.visible=!0,this.radius=t,this.position=i,this.fillColor=void 0===s?new r(0,0,0,1):s,this.strokeColor=void 0===e?new r(0,0,0,1):e,this.velocity=void 0===a?new n(0,0):a,o.push(this)}return t.prototype.contains=function(t){return t.x>this.position.x-this.radius&&t.x<this.position.x+this.radius&&t.y>this.position.y-this.radius&&t.y<this.position.y+this.radius},t.prototype.distance=function(t){return t.subtract(this.position).magnitude()},t.prototype.draw=function(t){this.visible&&(t.fillStyle=this.fillColor.toString(),t.strokeStyle=this.strokeColor.toString(),t.beginPath(),t.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI),t.fill(),t.stroke())},t}();i.Ball=s,i.update=function(t,i){void 0===i&&(i=!1),o.forEach((function(o,n){i&&((o.position.x+o.radius>window.innerWidth||o.position.x-o.radius<0)&&(o.velocity.x=-o.velocity.x),(o.position.y+o.radius>window.innerHeight||o.position.y-o.radius<0)&&(o.velocity.y=-o.velocity.y)),o.position=o.position.add(o.velocity),o.draw(t)}))}}},o={};t=function t(n){var r=o[n];if(void 0!==r)return r.exports;var s=o[n]={exports:{}};return i[n](s,s.exports,t),s.exports}(927),window.onload=function(){var i=document.getElementById("canvas"),o=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight;for(var n=[],r=0;r<30;r++){var s=new t.Ball(10*Math.random(),new t.Vector(Math.max(20,Math.random()*i.width),Math.max(20,Math.random()*i.height)),new t.Color(0,0,0,0),new t.Color(0,0,0,.5));s.velocity=new t.Vector(Math.random(),Math.random()),n.push(s)}!function i(){o.clearRect(0,0,window.innerWidth,window.innerHeight),t.update(o,!0),requestAnimationFrame(i)}()}})();