
var p = Math.floor(Math.random() * 6)  + 1;
image1 = 'images/dice' + p + '.png';
console.log(image1);
$('.img1').attr('src',image1);
var q = Math.floor(Math.random() * 6)  + 1;
image2 = 'images/dice' + q + '.png';
console.log(image2);
$('.img2').attr('src',image2);
if( p > q)
{
  $('h1').text("Player 1 WON !!");
}
else if (p < q){
  $('h1').text("Player 2 WON !!");
}
else {
  $('h1').text("DRAW !!");
}
