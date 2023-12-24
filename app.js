
// // dislay album
async function fetchdata(){
    let url = "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc"
    try {
        let respones = await fetch(url, {
            headers: {
                authorization: "Bearer BQAEEmYBcu2ADCf5ekHJQQv6UxES79uUs804rziNIiPNtYGCzU0ns0LHktpN6OXaqpsOEUMIuu5hNtBxwsW_6vOeGLEKCL5s0fSRqKxxoDRvHvl7WMU"

            }
            
        })

        let data = await respones.json()
        // console.log(data)

        let getalbum = data.albums

        console.log("album data:", getalbum)
        return getalbum
        
    } catch (error) {
        console.log("some error")
    }
}

async function fetchArtist(){
    let url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6"
    try {
        let respones = await fetch(url, { 
            headers:{
                authorization: "Bearer BQAEEmYBcu2ADCf5ekHJQQv6UxES79uUs804rziNIiPNtYGCzU0ns0LHktpN6OXaqpsOEUMIuu5hNtBxwsW_6vOeGLEKCL5s0fSRqKxxoDRvHvl7WMU"
            }
        })

        let data = await respones.json()
        console.log(data)

        let getartist = data.artists
        console.log(getartist)

        return getartist

    } catch (error) {
        console.log("some error")
    }
}



function displayAlbum(getalbum){
    const artistsAlbumWrapper = document.querySelector('.art_album_wrapper')
        artistsAlbumWrapper.innerHTML = ``

    
        for(let i = 0; i< getalbum.length ; i++){
            let curAlbum = getalbum[i]
            artistsAlbumWrapper.innerHTML += `
                <a role="button" class="btn btn-main" id="showTrack" href="track.html?id=${curAlbum.id}" >
                
                    <div class="art_album">
                    <img src="${curAlbum.images[1].url}" alt="">
                    <h3>${curAlbum.name}</h3>
                    <h4 class="descrip">${curAlbum.release_date}</h4>
            
                    <a href="${curAlbum.external_urls.spotify}" target="_blank">${curAlbum.artists[0].name}</a>
                    
                    
                </a>
             </div>`
    
            
          
       
    
        }
   
   
 
}



function displayArtist(getartist){
    const artistsWrapper = document.querySelector('.artists_wrapper')
    artistsWrapper.innerHTML = ``

    for(let i = 0; i< getartist.length ; i++){
        let curartist = getartist[i]
        artistsWrapper.innerHTML += `
        <div class="artists">
            <img src="${curartist.images[1].url}" alt="">

            <a herf="${curartist.external_urls.spotify}" target="_blank">${curartist.name}</a>
            <p>${curartist.type}</p>
            <p>Followers: ${curartist.followers.total}</p>
        </div>
        
        `
    }

}

window.addEventListener('DOMContentLoaded', async (e) => {
    let getalbum = await fetchdata()
    displayAlbum(getalbum)
    let getartist = await fetchArtist()
    displayArtist(getartist)


    const showTrack = document.querySelector('#showTrack')
    showTrack.addEventListener('click', (e) => {
       const params = new URLSearchParams(window.location.search)
       const trackId = params.get('id')

       let foundTrack = curAlbum.find((curAlbum) => curAlbum.id == trackId)
        displayTrack(foundTrack)
    })
})
