// function change(){
//   document.getElementById("image1").src="assets/image1_2.jpg";
//   document.getElementById("image2").src="assets/image2_2.jpg";
//   document.getElementById("image3").src="assets/image3_2.jpg";
//   document.getElementById("image4").src="assets/image4_2.jpg";
//   document.getElementById("image5").src="assets/image5_2.jpg";
// }

// function change(image) {
//   image.src = 'assets/' + image.id + '_2.jpg';
// }

function change() {
  this.src = 'assets/' + this.id + '_2.jpg';
}
