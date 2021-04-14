"use strict";
console.log("Let's get this party started!");

$("#submit").on("click", getGiphyInfo);
$("#remove").on("click", removeGif)

//gets form value to use axios.get on to search for gifs
async function getGiphyInfo(evt) {
    evt.preventDefault();
    console.log("I ran!")
    let q = $("#searchedTerm").val();
    console.log(q);
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", 
        { params: { q: q, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" } })
    console.log(response);
    let firstGif = response.data.data[0].images.preview_gif.url
    console.log(firstGif);
    appendToSection(firstGif);
}

//appends gifs to right section
function appendToSection(firstGif) {
    $("#all-gifs").append(`<img src="${firstGif}">`);
}

//removes all gifs when remove button is clicked
function removeGif() {
    $("#all-gifs").empty();
}

