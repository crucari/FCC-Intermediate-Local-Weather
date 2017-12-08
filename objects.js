$(document).ready(function(){
    
    var api = 'http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bb7e46d051ba9f78edc5f3fc0b38532d';
    
    $.getJSON(api, function(data){ 
        alert(data.coord.lat);
    });
}); 