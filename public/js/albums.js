const wrapper = document.querySelector(".albums__cells")

const albums = [
    {title:"Blurryface",poster:"../src/img/blurryface.png"},
    {title:"Trench",poster:"../src/img/trench.png"},
    {title:"Twenty One Pilots",poster:"../src/img/twentyonepilots.png"},
    {title:"Scaled & Icy",poster:"../src/img/scaled&icy.png"},
    {title:"Vessel",poster:"../src/img/vessel.png"},
    {title:"Regional at Best",poster:"../src/img/regionalatbest.png"},
]

function printAlbums(){
    for(let index in albums){
        const albumContainer = document.createElement("div")
        const albumInfo = document.createElement("div");
        const albumTitle = document.createElement("h5");
        albumInfo.className="album__info"
        albumTitle.className="album__title"
        albumTitle.innerHTML=albums[index].title;
        albumInfo.appendChild(albumTitle)
        albumContainer.style.background=`url(${albums[index].poster})`
        albumContainer.style.backgroundSize="cover"

        albumContainer.className="album__cell"
        
        wrapper.appendChild(albumContainer)
        albumContainer.appendChild(albumInfo)


        albumContainer.onclick = () => window.location.href=`http://127.0.0.1:5500/public/html/${albums[index].title.toLocaleLowerCase()}.html`

    }
}

printAlbums()