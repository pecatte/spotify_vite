<template>
    <div class="detail">
      <h1>Detail de l'album d'id {{ $route.params.idAlbum }}</h1>
      <input type="button" @click="$router.back()" value="back"/>
    </div>
  </template>
  
  <style>
    .detail{
      min-height: 100vh;
      text-align: center;
    }
  </style>
  