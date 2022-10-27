//////////////FOR NAVIGATION//////////////

let openMenu = document.querySelector("#show-menu");
let hideMenu = document.querySelector("#hide-menu");
let sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click",function(){
    sideMenu.classList.add('active')
})



hideMenu.addEventListener("click",function(){
    sideMenu.classList.remove('active')
})
//////////////////FOR FETCHING////////////


////////////BY USING  ASYNC AND AWAIT SEARCH/////////////////
/////////WHEN TITLE IS PASTED IN THE SEARCHBAR IT WILL THE PARTICULAR VIDEO /////
//////////TITLE CAN BE COPIED FROM THE CONSOLE LOG TO AVOID ERRORS///////////
function submit(){
    var inputVal = document.getElementById("Search")
    let seValue = inputVal.value
   searchTopics(seValue)
}
let btn = document.getElementById("button");
btn.addEventListener("click",submit)
async function searchTopics(seValue){
    let sdata = await fetch ("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyBO7n30WsOjr9dJIxcUCg2xKT-gWF2LLps")
    let sdata1= await sdata.json();
try {
    if (sdata == ReferenceError){
        throw new Error ("Check whether URL is correct or check the QUOTA  of the API")
    }
    for (let i=0;i<sdata1.items.length;i++){
        console.log(sdata1.items[i].snippet.title)
        
        if (seValue == sdata1.items[i].snippet.title){
            console.log(seValue)
            let sbox = document.getElementById("searchFeed")
            sbox.innerHTML=
            `<a href='https://youtube.com/watch?v=${sdata1.items[i].id.videoId}' target="_blank">
            <img src="${sdata1.items[i].snippet.thumbnails.high.url}" class="thumbnails">
            </a>
            <div class="channel-logo-name">
            <a href='https://youtube.com/user/${sdata1.items[i].snippet.channelTitle}' target="_blank">
                    <img src="${sdata1.items[i].snippet.thumbnails.high.url}" class="channel-icon">
                    </a>
                    <div class="about">
                        <h4 class="channelTitle">${sdata1.items[i].snippet.title}</h4>
                        <p class="channelName">${sdata1.items[i].snippet.channelTitle}</p>
                    </div>
                </div>`
            let dbox = document.getElementById("description-Feed")
            dbox.innerHTML
        }   
        
    }
} catch (error) {
    console.log(error)
}
    

}
searchTopics()



////////////BY USING  ASYNC AND AWAIT SAMPLE ID/////////////////
////////////AMOUNT OF SUBSCRIBERS , VIEWS AND VIDEO COUNT DISPLAYED BY USING BELOW FUNCITON//////
///////////FROM THE SMAPLE ID GIVEN BY THE YOUTTUBE API//////////////



async function sampleId(){
let data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyBO7n30WsOjr9dJIxcUCg2xKT-gWF2LLps")
let data1= await data.json()
console.log(data1)
let subCount = document.getElementById("sub-count");
let videoCount= document.getElementById("video-count");
let viewCount = document.getElementById("view-count");
subCount.value=data1.items[0].statistics.subscriberCount;
videoCount.value=data1.items[0].statistics.videoCount;
viewCount.value=data1.items[0].statistics.viewCount;

}
sampleId()

////////////////////ASYNC AWAIT FOR YOUTUBE FEED/////////////////
////////ABOUT 50 MOST POPULAR VIDEOS WERE FETCHED FROM THE API AND DISPLAYED ON THE WEB PAGE///////////



let container = document.querySelector("#contain")
let row = document.createElement("div");
row.setAttribute("class",'row');

async function yout(){
    let res = await fetch ("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBIdalRlrvRiZ0xhMsDvthO7it-rbdRh54")
    let res1 = await res.json();
    for (let i=0;i<res1.items.length;i++){
    let thumbColumn = document.createElement("div");
    thumbColumn.setAttribute("class","col-md-4 yt-feed");

    thumbColumn.innerHTML=
    `<a href='https://youtube.com/watch?v=${res1.items[i].id}' target="_blank">
    <img src="${res1.items[i].snippet.thumbnails.high.url}" class="thumbnails">
    </a>
    <div class="channel-logo-name">
    <a href='https://youtube.com/user/${res1.items[i].snippet.channelTitle}' target="_blank">
            <img src="${res1.items[i].snippet.thumbnails.high.url}" class="channel-icon">
            </a>
            <div class="about">
                <h4 class="channelTitle">${res1.items[i].snippet.title}</h4>
                <p class="channelName">${res1.items[i].snippet.channelTitle}</p>
            </div>
        </div>`
    
    row.append(thumbColumn)
    
    }
 
    container.append(row);
    
}

yout()








