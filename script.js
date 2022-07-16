$(init);
function init(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setinterval(60000)
}






// $(document).ready(function(event){
    $("#submit").click(function(){
        var inputData = $("#comment").textContent;
       localStorage.setItem("schedule1", JSON.stringify(inputData))
    console.log(inputData); 
    });

// var testData = document.querySelector("#test").value;
// var testButton = document.querySelector("#press")


// testButton.addEventListener('click', function(){
//     localStorage.setItem("test", testData)
// })


