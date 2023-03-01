// =====  parametres pour l'API de spotify ===== 

// -- nb de résultats par page
export const nbResParPage = 20 
// -- url de recherche d'albums
export const spotifyUrlSearchAlbum = `https://api.spotify.com/v1/search?type=album&market=FR&limit=${nbResParPage}&q=`;
// -- token
const token = "BQCnW6BvgHaFCdYUS_KRGsR4mvwJy0oJZ7nqh4tvTt0LiDQ-8Uh-zkpTY61rLvFroS47ndyRpbAXvf22HjES2MAGPs72IV3jDoARIMHUms7FuPYAwHoIfoy4Z_C9KYSyqvNhRb4ZIyu6pz0iuChlsdQh2Fxuyb2PpqXCazNTWU8"
// -- entête http pour envoyer le token au serveur
export const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
}