function myLevels(){

    function keyUpFunction(){
        document.getElementById("searchBox").style.backgroundColor = "red";
    var searchBoxElement = document.getElementById("searchBox");
    searchBoxElement.value = searchBoxElement.value.toUpperCase();
    }    

// function keyUpFunction() {
//     var searchBoxElement = document.getElementById("searchBox");
//     searchBoxElement.value = searchBoxElement.value.toUpperCase();
//   }

  return {
    //   myFunction,
      keyUpFunction,
}
}
searchBoxElement.addEventListener('keyup', keyUpFunction);