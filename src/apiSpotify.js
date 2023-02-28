// =====  parametres pour l'API de spotify ===== 

// -- nb de résultats par page
export const nbResParPage = 20 
// -- url de recherche d'albums
export const spotifyUrlSearchAlbum = `https://api.spotify.com/v1/search?type=album&market=FR&limit=${nbResParPage}&q=`;
// -- token
const token = "BQAUgu0EyndiNvxYOWtflJ3kHxN8DsqtBAxrmk__HzhlU-LFAgdt4Y3WWdylE1mo04FJXtxGVnuSvFTyAf3SrnN7uxUSjfmIN34j7pXSvo1DsHODpZdV9MXzPbQ1gpACjfUNp8EnKogFdJLKCajhct-RnIbBkioqZbqa_yUOHNo"
// -- entête http pour envoyer le token au serveur
export const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
}