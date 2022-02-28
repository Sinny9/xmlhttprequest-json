    const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
    var data


    async function getISS(){
        var xmlhtpp = new XMLHttpRequest();
        await xmlhtpp.open('GET', api_url, true);
        xmlhtpp.send()
        xmlhtpp.onload = function () {
            data = JSON.parse(xmlhtpp.responseText);
            console.log('prova2', data) 
            document.getElementById('lat').innerHTML = 'Latitudine '+ data.latitude
            document.getElementById('lon').innerHTML = 'Longitudine '+ data.longitude     

            mostraMappa(data)
        }
        
    }

    function mostraMappa(data) {
        var lat = data.latitude
        var lon = data.longitude

        var img_url = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5597.589571534285!2d'+lon+'00000002!3d'+lat+'0000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1553594193579" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

        document.getElementById('mappa').innerHTML = img_url
    }

    getISS()
  //Dice UNDEFINED boh da vedere
    setTimeout(function(){
        window.location.reload(1);
    }, 10000);