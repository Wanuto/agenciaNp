const menuList = document.getElementById('menu-list');
menuList.style.maxHeight = "0px";

function showMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "150px"
    }
    else{
        menuList.style.maxHeight = "0px"
    } 
}