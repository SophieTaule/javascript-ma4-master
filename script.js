fetch('https://jsonplaceholder.typicode.com/todos?format=json')
    .then(result => result.json())
  .then((res) => {
    createBox(res);
  })
.catch(err => console.log(err))


function createBox(result){
var txt = "";
for (var list in result) {

    if(result[list].completed == true){
        txt += "<div style=\"background-color:#C5FFAE;\" class=\"[ information ]\">"; 
    }
    else{
        txt += "<div style=\"background-color:#EEF9FF;\" class=\"[ information ]\">"; 
    }
     
    txt += "<span>ID: " + result[list].id + "</span>";
    txt += "<span>Title:   " + result[list].title + "</span>";
    txt += "<span>completed: " + result[list].completed + "</span>";
    txt += "</div>"; 
}
document.getElementById("list").innerHTML = txt;
}