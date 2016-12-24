$(function() {
  var users = ["FreeCodeCamp", "Syndicate", "Test_Channel"];
  
  for (var i = 0; i < users.length; i++) {
    (function(i) {
    $.getJSON("https://api.twitch.tv/kraken/streams/"+users[i]+"?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?", function(data) {
      
      var status, game = '';
      
      if (data.stream == null) { 
        status='offline';
      } else {
        status='online';
        game = data.stream.game;
      }
      
      $('.stream').append("<div class='subcontainer'><div class='picture'></div><div class='move'><a href='http://www.twitch.tv/" + users[i] + "' target='_blank'>" + users[i] + "</div><span class="+status+">"+status+"</span><div><div>"+game+"</div></a></div>");
        
    });
   })(i);
  }
  console.log(status);
});