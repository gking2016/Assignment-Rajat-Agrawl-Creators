const cards = [
    {
        "id":1,
        "heading":"1Lorem ipsum dolor sit amet.",
        "heading2":"Lorem ipsum",
        "src":"./videos/1.mp4",
    },
    {
        "id":2,
        "heading":"2Lorem ipsum dolor sit amet.",
        "heading2":"Lorem ipsum",
        "src":"./videos/2.mp4",
    },
    {
        "id":3,
        "heading":"3Lorem ipsum dolor sit amet.",
        "heading2":"Lorem ipsum",
        "src":"./videos/3.mp4",
    },
    {
        "id":4,
        "heading":"4Lorem ipsum dolor sit amet.",
        "heading2":"Lorem ipsum",
        "src":"./videos/4.mp4",
    },
    {
        "id":5,
        "heading":"5Lorem ipsum dolor sit amet.",
        "heading2":"Lorem ipsum",
        "src":"./videos/5.mp4",
    },
    {
        "id":6,
        "heading":"6Lorem ipsum dolor sit amet.",
        "heading2":"Lorem ipsum",
        "src":"./videos/6.mov",
    },

]

// function to render cards based on search 

function render_cards(){
    let i = 0;
    let sf = 0;
    var new_text = "";
    var old_text;
    var search = document.getElementById("search").value;
    for(i=0;i<cards.length;i++){
        if(search == '' || search ==null){
        old_text = `<div class="card">
        <div class="top_video" id="video">
        <button class="btn_play fa fa-play" id="${"btn"+i+"pl"}" onclick="playPause(${i})"></button>
        <button class="btn_pause fa fa-pause" id="${"btn"+i+"pa"}" onclick="playPause(${i})"></button>
        <video id="${"video" + i}" width="300">
        <source src="${cards[i].src}" type="video/mp4">
        Your browser does not support HTML video.
        </video>
        </div>
        <div class="card_content">
            <h5 class="card_heading" id="heading">
            ${cards[i].heading}<br>
            ${cards[i].heading2}
            </h5>
            <p class="card_info">
                <span class="card_info_date">12/04/2021</span id="date">
                <span class="card_info_by">
                    by Admin
                </span>
            </p>
            <div class="btn_center">
            <button class="btn">start</button></div>
            </div>
        </div>`;
    new_text+=old_text;
    }
    else
    {
        for(var m = 0;m<cards.length;m++){
            var name = cards[m].heading;
            if(name.search(search) == 0)
            {  sf++;
                if(sf<=1){
                    old_text = `<div class="card">
                <div class="top_video" id="video">
                <button class="btn_play fa fa-play" id="${"btn"+m+"pl"}" onclick="playPause(${m})"></button>
                <button class="btn_pause fa fa-pause" id="${"btn"+m+"pa"}" onclick="playPause(${m})"></button>
            <video id="${"video" + m}" width="300">
                <source src="${cards[m].src}" type="video/mp4">
                Your browser does not support HTML video.
            </video>
                </div>
                <div class="card_content">
                    <h5 class="card_heading" id="heading">
                    ${cards[m].heading}<br>
                    ${cards[m].heading2}
                    </h5>
                    <p class="card_info">
                        <span class="card_info_date">12/04/2021</span id="date">
                        <span class="card_info_by">
                            by Admin
                        </span>
                    </p>
                    <div class="btn_center">
                    <button class="btn">start</button></div>
                </div>
            </div>`;
            new_text+=old_text;
            console.log(sf);
                }
                
        }
            else{
                continue;
            }
        }
}}
    document.getElementById("main").innerHTML=new_text;
}
