let containPlay = document.createElement("div")
containPlay.setAttribute("class","container")
let rowPlay = document.createElement("div")
rowPlay.setAttribute("class","row")
async function playList(){
    let dataPlay = await fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyBIdalRlrvRiZ0xhMsDvthO7it-rbdRh54")
    let dataPlay1 = await dataPlay.json()
    console.log(dataPlay1)
    for(let i=0;i<dataPlay1.items.length;i++){
        let colPlay = document.createElement("div");
        colPlay.setAttribute("class","col-md-3 yt-feed")
        colPlay.style.margin="25px 0px"
        colPlay.style.width='100%'
        colPlay.innerHTML=
        `<a href='https://youtube.com/watch?v=${dataPlay1.items[i].id}' target="_blank">
        <img src="${dataPlay1.items[i].snippet.thumbnails.high.url}" class="thumbnails">
        </a>
        <div class="channel-logo-name">
        <a href='https://youtube.com/user/${dataPlay1.items[i].snippet.channelTitle}' target="_blank">
                <img src="${dataPlay1.items[i].snippet.thumbnails.high.url}" class="channel-icon">
                </a>
                <div class="about">
                    <h4 class="channelTitle">${dataPlay1.items[i].snippet.title}</h4>
                    <p class="channelName">${dataPlay1.items[i].snippet.channelTitle}</p>
                </div>
            </div>`
            
            rowPlay.append(colPlay)
    }
containPlay.append(rowPlay)
    document.body.append(containPlay)
}
playList()
// for (let j=0;j<)
// let rowPlay = document.createElement("div");
// rowPlay.setAttribute("class","row")