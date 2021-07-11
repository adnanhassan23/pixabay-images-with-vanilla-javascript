const getEl = document.getElementById("get");
const ppEl = document.getElementById("pp");

function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = getEl.value;

  fetch(
    `https://pixabay.com/api/?key=22450736-9ea47c4284124c7fa4e58f88f&q=${inputVal}&per_page=50&image_type=photo&pretty=true`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   for (var i = 0; i < data.length; i++) {
      let json = data.hits;
      var img = "";
      for (var i = 0; i < json.length; i++) {
        // console.log(json[i].previewURL);
        img += `<img src="${json[i].largeImageURL}" width="auto" height="auto" alt="" />`;
        ppEl.innerHTML = img;
      }
      //   }
    });
}

window.onload = function () {
  /* event listener */
  document
    .getElementsByName("Thing")[0]
    .addEventListener("change", getInputValue);

  /* function */
  getInputValue();
};
