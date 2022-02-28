

<<<<<<< HEAD
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
=======
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success_callback, error_callback, { enableHighAccuracy: false });
        }else{
        alert('La geo-localizzazione NON � possibile');
>>>>>>> 1228d048bc90ee2ca03533ea95b400d03ff02feb
        }
    
        function success_callback(position) {
        // var lat = 37.233333;
        // var lon = -115.808333
        var lat = position.coords.latitude
        var lon = position.coords.longitude 
        document.getElementById('posizione').innerHTML = 'La tua posizione: ' + lat + ',' + lon;  
        var latlon=lat+","+lon;
        
<<<<<<< HEAD
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
=======
        //var img_url = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.7467779716194!2d'+lon+'!3d'+lat+'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c20f910f92e9%3A0x420264665573cbfb!2s!5e0!3m2!1sit!2sit!4v1553636141680" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
        var img_url = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5597.589571534285!2d'+lon+'00000002!3d'+lat+'0000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1553594193579" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
        //  var img_url = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.7466861559524!2d+lon+!3d+lat+!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMyJzA3LjEiTiA5wrAwMycxOC42IkU!5e0!3m2!1sit!2sit!4v1579089108270!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
        // var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";
    
        // document.getElementById("mappa").innerHTML = "<img src='"+img_url+"'>";
        document.getElementById("mappa").innerHTML = img_url;
        }
    
        function error_callback(position) {
        document.getElementById('posizione').innerHTML = "geolocalizzazione non disponibile";
        }
    
>>>>>>> 1228d048bc90ee2ca03533ea95b400d03ff02feb
