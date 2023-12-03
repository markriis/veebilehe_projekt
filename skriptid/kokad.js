// Kokkade info, nimi, pilti allikas ja lühike tutvustus nende kohta
const kokad_list = [ 
    { nimi : 'Lorem Ipsum1', pilt : './pildid/kokk1.png', luhijutt : ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', link : '#' },
    { nimi : 'Lorem Ipsum2', pilt : './pildid/kokk1.png', luhijutt : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n', link : '#' },
    { nimi : 'Lorem Ipsum3', pilt : './pildid/kokk1.png', luhijutt : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', link : '#' },

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
