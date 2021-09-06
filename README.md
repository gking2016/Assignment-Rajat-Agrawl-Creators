<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VaidikWall</title>
    <link rel="shortcut icon" href="./images/farmer.png" type="image/x-icon">
    <link rel="stylesheet" href="./css/style.css">

<!-- google fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap" rel="stylesheet">

<!-- fontawsome icons -->
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

</head>
<body onload="render_cards()">
    <header class="increaseheight">
        <div class="header">
        <h4 class="greeting">Welcome to vaidik Agri Producer Company</h4>
        <h3 class="fbook">FarmBook</h3>
        <div>
            <span class="menu"><i class="fa fa-bars" onclick="openNav()"></i></span>
            <ul class="nav">
                <li><a href="#" id="nav">vaidik Wall</a></li>
                <li><a href="#" id="nav"class="active">Videos</a></li>
                <li><a href="#"   id="nav">images</a></li>
                <li><span class="search">
                    <span class="ico ico-mglass"></span><input class="search_blog"  type="text" id="search" placeholder="Search blogs" onkeyup="render_cards()"></span></li>
            </ul>
        </div>
        <img class="side_image" src="./images/leaves.png" alt="leaves">
    </div>
    <svg class="wave movedown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,138.7C672,149,768,203,864,218.7C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

    <div id="myNav" class="overlay">
        <button id="btn_close" onclick="closeNav()">&times;</button>
        <div class="overlay-content">
          <a href="#">vaidik Wall</a>
          <a href="#">Videos</a>
          <a href="#">Images</a>
        </div>
      </div>

    </header>


    <main id="main">
        
    </main>

    <script src="./js/index.js"></script>
    <script>
        
        function playPause(k) {
        var myVideo = document.getElementById(`${"video"+k}`);
        var btnpl = document.getElementById(`${"btn" + k + "pl"}`);
        var btnpa = document.getElementById(`${"btn" + k + "pa"}`);
        playVideo();
        btnpa.onclick = ()=>{
            // btnpa.style.visibility = "hidden";
            btnpl.style.visibility = "visible";
            playVideo();
        }
        // myVideo.onclick = playVideo();
        function playVideo(){
            if (myVideo.paused) 
            {
                myVideo.play();
                    btnpl.style.visibility = "hidden";
                    btnpa.style.visibility = "visible";
                    myVideo.style.opacity = "1";
        }
        else 
            {
                myVideo.pause();
                myVideo.style.opacity = "0.8";
            } 
 }
        }
        
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
    </script>
</body>
</html>
