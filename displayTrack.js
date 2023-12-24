async function fetchTrack(){
    let url = "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc"
    try {
        let respones = await fetch(url, {
            headers: {
                authorization: "Bearer BQAEEmYBcu2ADCf5ekHJQQv6UxES79uUs804rziNIiPNtYGCzU0ns0LHktpN6OXaqpsOEUMIuu5hNtBxwsW_6vOeGLEKCL5s0fSRqKxxoDRvHvl7WMU"

            }
            
        })

        let data = await respones.json()
        // console.log(data)

        // let getTrack = data.albums[0].tracks.items
        // console.log(getTrack)
        let getTheWholeTrack = data.albums
        console.log(getTheWholeTrack)
        for (let i = 0; i < getTheWholeTrack.length; i++ ){
            let curwholeTrack = getTheWholeTrack[i]
            // console.log("get curwholeTrack", curwholeTrack)

            let getTrack = curwholeTrack.tracks.items
            // console.log('get track', getTrack)

            return getTrack
        }
       
        
    } catch (error) {
        console.log("some error")
    }
}

    
function displayTrack (getTrack){
    const trackWrapper = document.querySelector('.track-wrapper')

    trackWrapper.innerHTML = ``
    for(let i = 0 ; i < getTrack.length ; i++){
    
        console.log(getTrack.length)
        let curTrack = getTrack[i]
        trackWrapper.innerHTML += `
        <div class="bounderyFrame">
                <div class="description">
                    <div class="detail">
                        
                        <div>
                            <h3>${curTrack.name}</h3>

                            <a href="${curTrack.external_urls.spotify}" target="_blank">${curTrack.artists[0].name} ft ${curTrack.artists[1].name}</a>
                           
                        </div>
                       
                    </div>

                    <div class="duration">
                        <h3>${curTrack.duration_ms} ms</h3>
                    </div>
                </div>
            </div>
        
        `

    }

  
    
}


window.addEventListener('DOMContentLoaded', async (e) => {
    let gettrack = await fetchTrack()
    displayTrack(gettrack)
  
  })



