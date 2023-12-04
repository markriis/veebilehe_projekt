// Kokkade info, nimi, pilti allikas ja lühike tutvustus nende kohta
const kokad_list = [ 
    { nimi : 'Aston Randén', pilt : 'https://yt3.googleusercontent.com/ytc/APkrFKYfurXmlq8CV6mfo17vP3sgy07jtO440bhv616BVQ=s176-c-k-c0x00ffffff-no-rj', luhijutt : 'Kodumaine kokk, kes spetsialiseerub odavatele ja maitsvatele toitudele. Aston ühines meiega 2023. aasta alguses.', link : 'https://www.youtube.com/@astonranden2911' },
    { nimi : 'Harold Arató', pilt : './pildid/kokk1.jpeg', luhijutt : 'Tuntud ungari kokk Harold, kes alustas oma kokanduskarjääri Inglismaal, lõi selle lehe 2019. aastal ja siiamaani tegutseb selle nimel, et tudengid saaksid võimalikult odavalt süüa võimalikult head toitu.  ', link : '#' },
    { nimi : 'Wolfgang Schmidt', pilt : './pildid/kokk2.jpg', luhijutt : 'Austria kokk Wolfgang liitus meie lehega 2022. aastal ja eelnevalt töötas oma sõbra restoraanis Viinis. Ta on suur maiasmokk ja loodab meie kõigiga jagada oma saladusi. ', link : '#' },
    { nimi : 'Laura Gianna', pilt : './pildid/kokk3.jpg', luhijutt : 'Itaaliast pärit kokk Laura on meie lehe kõige uuem toimetaja ja ta on väga usinalt tööl, et lihtsaid ja odavaid, kuid äärmiselt häid retsepte välja mõelda ja jagada meie kõigiga.', link : '#' },

]

const kokad = document.getElementById( 'kokad' ) // Kokkade vanem (parent) element

for ( let i = 0; i < kokad_list.length; i++ ) {
    const koka_info = kokad_list[ i ]
    // <a href="#">
    //     <div class="kokk">
    //         <img src="./kokk1.png" alt="">
    //         <p class="nimi">Nimi Perenimi</p>
    //         <p class="luhijutt">Luhijutt</p>
    //     </div>
    // </a>

    // Loome vajalikud elemendid naite jargi ja taidame need vastavalt
    let link = document.createElement( 'a' )
    link.href = koka_info.link

    let konteiner = document.createElement( 'div' )
    konteiner.className = 'kokk'

    let pilt = document.createElement( 'img' )
    pilt.src = koka_info.pilt
    pilt.alt = koka_info.nimi

    let nimi = document.createElement( 'p' )
    nimi.innerText = koka_info.nimi

    let luhijutt = document.createElement( 'p' )
    luhijutt.innerText = koka_info.luhijutt

    // lisame lapselemendid konteinerisse
    konteiner.appendChild( pilt )
    konteiner.appendChild( nimi )
    konteiner.appendChild( luhijutt )

    // anname konteinerile lingi, nt kui soovime saata kasutaja klikkimisel koka lehele (youtube, nami nami etc)
    link.appendChild( konteiner )

    // lisame koka kaardi kokkade listi DOMis
    kokad.appendChild( link ) // Lisame koka kokkade listi
}
