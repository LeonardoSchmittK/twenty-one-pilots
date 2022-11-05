const news = [
    {
        title:"The Killers e twenty one pilots fazem show em Sao Paulo em novembro",
        poster:"../src/img/news1.png"
    },
    {
        title:"Twenty One Pilots faz mashup de Heathens com hit de Stranger Things",
        poster:"../src/img/news.png"
    },
    {
        title:"Twenty One Pilots revela que foi demitido por Tom Cruise da trilha de Top Gun",
        poster:"../src/img/news2.png"
    },
    {
        title:"Acustico MTV: edicao especial tera apresentaao de Twenty One Pilots",
        poster:"../src/img/news3.png"
    },
    {
        title:"Acustico MTV: edicao especial tera apresentaao de Twenty One Pilots",
        poster:"../src/img/news3.png"
    },
    {
        title:"Acustico MTV: edicao especial tera apresentaao de Twenty One Pilots",
        poster:"../src/img/news3.png"
    },
    {
        title:"Acustico MTV: edicao especial tera apresentaao de Twenty One Pilots",
        poster:"../src/img/news3.png"
    },
    {
        title:"Acustico MTV: edicao especial tera apresentaao de Twenty One Pilots",
        poster:"../src/img/news3.png"
    },
    {
        title:"Acustico MTV: edicao especial tera apresentaao de Twenty One Pilots",
        poster:"../src/img/news3.png"
    },
    {
        title:"Acustico MTV: edicao especial tera apresentaao de Twenty One Pilots",
        poster:"../src/img/news3.png"
    },
    {
        title:"Acustico MTV: edicao especial tera apresentaao de Twenty One Pilots",
        poster:"../src/img/news3.png"
    }
    
]

const wrapper = document.querySelector(".news__cells")
const btnLoadMore = document.querySelector(".getticket__button.news")
const btnContainer = document.querySelector(".container-button")
let isOpened= false;
function printNews () {
    for(let i in news){
            const newsEl = document.createElement("div")
            const newsElTitle = document.createElement("h1")
            const newsElHeader = document.createElement("header")

        newsEl.className="news__cell"
        newsElHeader.className="news__header"
        newsElTitle.className="news__title"
        newsElHeader.style.background=`url(${news[i].poster})`
        newsElHeader.style.backgroundSize="cover"
        newsElHeader.style.backgroundRepeat="no-repeat"

        newsElTitle.innerHTML=news[i].title

            newsEl.appendChild(newsElHeader)
            newsEl.appendChild(newsElTitle)

            wrapper.appendChild(newsEl)

            newsEl.onclick = ()=> window.location.href ="http://g1.globo.com"

    }
    
}

printNews()


function loadMoreNews(){
    console.log(isOpened);
    if(isOpened){
        wrapper.style.height=  "50vh"
        btnLoadMore.innerHTML="Load More"
    }else {
        
        wrapper.style.height=  "auto"
        btnLoadMore.innerHTML="Close"
    }
    isOpened = !isOpened
   
}