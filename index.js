const searchBox = document.querySelector(".search_box");

document.querySelector(".bx-search").onClick = (e) =>{
    e.preventDefault();
    searchBox.classList.toggle('active');
}