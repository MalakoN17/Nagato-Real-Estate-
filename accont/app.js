let btnAdd = document.querySelector(".add-btn"); // add div btn
let containerProperty = document.querySelector(".user-property"); //property container
// create container with property data container function
function previewImage(){
    let file = document.getElementById("input-file").files;
    if(file.length > 0){
      let fileReader = new FileReader();
      fileReader.onload = function (event){
        document.getElementById('preview').setAttribute("src", event.target.result);
      };
      fileReader.readAsDataURL(file[0])
    }
}
function displayData() {
  let priceInput = document.querySelector(".price").value;
  let addresInput = document.querySelector(".addres").value;
  let statesInput = document.querySelector(".states").value;
  let phoneInput = document.querySelector(".phone-number").value;
  let emailInput = document.querySelector(".email").value;
  let propertyInput = document.querySelector(".property-status").value;
  // let fileInput = document.getElementById("input-file").value;
  console.log(priceInput);
// condition on the inputs
  if (
    priceInput == "" ||
    addresInput == "" ||
    statesInput == "" ||
    phoneInput == "" ||
    emailInput == "" ||
    propertyInput == ""
    // fileInput == ""
  ) {
    return alert("fill all the inputs");
  }

  containerProperty.innerHTML += ` <div class="card text-center" style="width: 18rem;">
 <div class="card-body">
 <img id="preview" width="100px" height="100px">
   <h5>adders:${addresInput}</h5>
   <h5>states:${statesInput}</h5>
   <h5>${emailInput}</h5>
   <h5>phone Number:${phoneInput}</h5>
   <h5>status${propertyInput}</h5>
   <h5>price:${priceInput} $</h5>
 </div>
</div>`;

const inputUploadImg = document.querySelector("#inputUploadImg");
let uploadedImg = "";
inputUploadImg.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImg = reader.result;
    document.querySelector(
      "#userBgImg"
    ).style.backgroundImage = `url(${uploadedImg})`;
  });
  reader.readAsDataURL(this.files[0]);
});
{/* <div class="property-data bg-light d-flex flex-column col-md-8"><h4 class="">price:$</h4>
 <h4 class=""> </h4>
 <h4 class=""></h4>
 <h4 class=""></h4>
 <h4 class=""></h4>
 <h4 class="">$</h4></div> */}
}
// event on the add div btn
btnAdd.addEventListener("click", function(){
  previewImage();
  displayData();
});
