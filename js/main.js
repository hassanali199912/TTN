console.log("This Is Work");

// window.onload =  play_song();
{/* <audio preload="auto" src="audio/lofi-study-112191.mp3" loop="true" autobuffer webkit-playsinline="true"
playsinline="true" autoplay="" controls>
  Unsupported in Firefox
  
</audio> */}
// function setCookie(c_name,value,exdays)
//         {
//             // var exdate=new Date();
//             // exdate.setDate(exdate.getDate() + exdays);
//             // var c_value=value + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
//             // console.log(c_value);
//             // console.log(value);
//             document.cookie=c_name + "=" + value;
//         }
        
//         function getCookie(c_name)
//         {
           
//             var x,y;
//             let ARRcookies=document.cookie.split(";");
//             for (let i=0;i<ARRcookies.length;i++)
//             {
//               x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
//               y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
//               console.log("x = ",x);
//               console.log("y = ",y);
//               x=x.replace(/^\s+|\s+$/g,"");
//               console.log("after x = ",x);
//               if (x==c_name)
//                 {
//                 return y;
//                 }
//               }
//         }
        
//         var song = document.getElementsByTagName('audio')[0];
//         song.play();
//         var played = false;
//         var tillPlayed = getCookie('timePlayed');
//         function update()
//         {
//             if(!played){
//                 if(tillPlayed){
//                 song.currentTime = tillPlayed;
//                 song.play();
//                 played = true;
//                 }
//                 else {
//                         song.play();
//                         played = true;
//                 }
//             }
        
//             else {
//             setCookie('timePlayed', song.currentTime);
//             }
//         }
//         setInterval(update,1000);