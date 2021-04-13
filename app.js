console.log("Let's get this party started!");

let formValue;
$("#submit").on("click", getGiphyInfo);
//$("#remove").on("click", removeGif)

//gets form value to use axios.get on to search for gifs
async function getGiphyInfo() {
console.log("I ran!")
    let q = $("#api-giphy").val();
    console.log(q);
    let searchedGif = await axios.get("http://api.giphy.com/v1/gifs/search", {params:{q:q,api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
    console.log(searchedGif);
    appendToSection(searchedGif);
}

//appends gifs to right section
function appendToSection(){

}

//function removeGif(){}

