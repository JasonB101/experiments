var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        appendEach(data)
    }
};



xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();



function appendEach(data) {
    var pokeList = document.getElementById('pokelist')
    var newArray = data.objects[0].pokemon

    for (let i = 0; i < newArray.length; i++) {
        var newPokemon = document.createElement('li')
        newPokemon.textContent = newArray[i].name
        pokeList.appendChild(newPokemon)
    }

}