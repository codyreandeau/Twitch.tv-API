$(function() {
  var users = ["FreeCodeCamp", "Syndicate", "Test_Channel"];
  var images = ["https://ucarecdn.com/357ea30f-33e2-4db2-acc2-719c055891f6/","https://static-cdn.jtvnw.net/jtv_user_pictures/syndicate-profile_image-03bf1d6ad0025f86-300x300.png", "https://s3-us-west-2.amazonaws.com/web-design-ext-production/p/Glitch_474x356.png"]
  
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
      
      $('.stream').append("<div class='subcontainer'><img src ="+images[i]+" class='picture'/><div class='move'><a href='http://www.twitch.tv/" + users[i] + "' target='_blank'>" + users[i] + "</div><span class="+status+">"+status+"</span><div><div><div class='game'>"+game+"</div></div></a></div>");
        
    });
   })(i);
  }
  console.log(status);
});