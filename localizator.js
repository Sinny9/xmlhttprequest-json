    const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
    var data

    async function getISS(){
        var xmlhtpp = new XMLHttpRequest();
        await xmlhtpp.open('GET', api_url, true);
        xmlhtpp.send()
        xmlhtpp.onload = function () {
            data = JSON.parse(xmlhtpp.responseText);
            document.getElementById('prova').innerHTML = data.latitude     
            console.log('Dati',data)
        }
        
    }

    getISS()
    console.log('prova2', data) //Dice UNDEFINED boh da vedere
        