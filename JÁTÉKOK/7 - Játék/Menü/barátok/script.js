window.onload = function() {
    let friend = null;
    if(localStorage.getItem("Friends"))
    {
        console.log("Vannak Barátaid!")
    } else {
      friend = false;
      console.log("Nincsenek Barátaid!")
    }
    if(friend == false)
    {
        No_friend();
    }
}

function No_friend() {
    

const friendlist = document.getElementById("friendlist");


friendlist.innerHTML = "Egyetlen barátod sincs :("

}