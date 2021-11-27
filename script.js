
isLight = true;
document.getElementById("switch").addEventListener('click',function(){
    if (isLight) {
        document.body.style.backgroundColor = "black";
        var x = document.getElementsByClassName("cards")
        for(var i=0;i<x.length;i++) x[i].style.color = "#d81b60";
        document.getElementById("switch").style.backgroundColor = "#d81b60";
        document.getElementById("switch").innerHTML = "Light Theme";
        isLight = false;
    }
    else{
        document.body.style.backgroundColor = "#aa00ff";
          var x = document.getElementsByClassName("cards");
          for (var i = 0; i < x.length; i++) x[i].style.color = "white";
          document.getElementById("switch").style.backgroundColor = "white";
          document.getElementById("switch").innerHTML = "Dark Theme";
        isLight=true;
    }
})

youtubecount = 100000;
twittercount = 300000;
facebookcount = 200000;
var a=0,b=0,c=0;
var refresh = setInterval(function(){
          document.getElementById("youtube").innerHTML = a+=(youtubecount/100);
          document.getElementById("facebook").innerHTML = b +=(twittercount / 100);
          document.getElementById("twitter").innerHTML = c += (facebookcount/100);
          if (a == youtubecount && b == twittercount && c == facebookcount)
            clearInterval(refresh);
},20 )
if(a==youtubecount && b==twittercount  && c==facebookcount)
    clearInterval(refresh);
