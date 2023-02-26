// =====  parametres pour l'API de spotify ===== 

// -- nb de résultats par page
export const nbResParPage = 20 
// -- url de recherche d'albums
export const spotifyUrlSearchAlbum = `https://api.spotify.com/v1/search?type=album&market=FR&limit=${nbResParPage}&q=`;
// -- token
const token = "BQCxUKGfiukY9dZOFqLlX2cdZmIjeMutc6CS9EkUyZHi1SEqstsmaHP6AUTN5PyGdT513Xrft2rLzDScprgJH9IvL6aFhyb9TI5nzwbXUVIuQE0tK9zppeHxj62hLdtGwPh5sgkX_1XDUqLX9zZE528anL8Tq0Nw2ZCJbiQXVE8"
// -- entête http pour envoyer le token au serveur
export const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
}