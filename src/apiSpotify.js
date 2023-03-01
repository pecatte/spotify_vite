// =====  parametres pour l'API de spotify ===== 

// -- nb de résultats par page
export const nbResParPage = 20 
// -- url de recherche d'albums
export const spotifyUrlSearchAlbum = `https://api.spotify.com/v1/search?type=album&market=FR&limit=${nbResParPage}&q=`;
// -- token
const token = "BQAVk_R80xZaplC5id30a4iQM2ia6NcUkhP7ujgYhJrp6MlC3-W0xaexQH0zpy1iZgKBJr0yeVPoUKXO1-QLe6fbSFbOcpFEErIBVfrkf6tCaWrf3qFy9Wwzgo6Aidq7f-X0lsu8AWbGB2rg8jI5RTU6ZcKolPhsG_vZ85fgUxU"
// -- entête http pour envoyer le token au serveur
export const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
}