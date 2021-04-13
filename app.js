console.log("Let's get this party started!");

let formValue;
$("#submit").on("click", )
//$("#remove").on("click", removeGif)

//gets form value to use axios.get on to search for gifs
function getGiphyInfo() {

    let q = $("#api-giphy").val();
    axios.get("http://api.giphy.com/v1/gifs/search", {params:{q:formValue,api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
    appendToSection();
}

//appends gifs to right section
function appendToSection(){

}

//function removeGif(){}

