handleSearch = async() => {
    const input = document.getElementById('searchBar').value
    const whatToSearchTo = specialCharacters(input)

    const apiURL = 'https://api.iextrading.com/1.0'
    const response = await fetch(apiURL + `/stock/${whatToSearchTo}/quote`);
    const myJson = await response.json()
    console.log(myJson)
    const latestPrice = myJson.latestPrice
    console.log(latestPrice)

}


specialCharacters = (whatToSearchTo) => {

    var input = whatToSearchTo.toLowerCase();
    input = input.replace(new RegExp("\\s", 'g'), "");
    input = input.replace(new RegExp("[àáâãäå]", 'g'), "a");
    input = input.replace(new RegExp("æ", 'g'), "ae");
    input = input.replace(new RegExp("ç", 'g'), "c");
    input = input.replace(new RegExp("[èéêë]", 'g'), "e");
    input = input.replace(new RegExp("[ìíîï]", 'g'), "i");
    input = input.replace(new RegExp("[òóôõö]", 'g'), "o");
    input = input.replace(new RegExp("œ", 'g'), "oe");
    input = input.replace(new RegExp("[ùúûü]", 'g'), "u");
    input = input.replace(new RegExp("[ýÿ]", 'g'), "y");
    return input;
}