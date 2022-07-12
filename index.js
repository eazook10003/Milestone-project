const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

var love = document.getElementsByClassName("liked")[0];
var size = document.getElementById("display-image");
var times = document.getElementsByClassName("times")[0];
let count = 0;

love.addEventListener('dblclick', function(e){
    count++
    times.innerHTML = count
})