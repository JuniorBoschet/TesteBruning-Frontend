<script>
import { mapState } from 'vuex';

export default {

  computed: mapState([
    'pagina'
  ])


}


</script>


<template>
  <header>
    <h3>Bruning Sistemas</h3>
  </header>
  <nav>
    <div class="title">
      Colaboradores da Bruning
    </div>
    <div class="options">
      <router-link class="option" :class="{ active: this.pagina == 'lista' }" to="/">Lista</router-link>
      <router-link class="option" :class="{ active: this.pagina == 'registro' }" to="Registro">Cadastro</router-link>
    </div>
  </nav>
  <div class="router-view">
    <router-view />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  color: #273643;
}

header {
  height: 60px;
  width: 80%;
  margin: 20px auto;
}

header.h3 {
  font-size: 12px;
}

nav {
  height: 40px;
  width: 80%;
  margin: 10px auto;
  border: 2px solid #C8D3DC;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}

.title {
  font-size: 24px;
  font-weight: 600;
}

.option {
  font-weight: 500;
  color: #999;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  padding: 0px 3px 5px 3px;
  margin-left: 20px;
}

.option.active {
  font-weight: 500;
  color: #2685D8;
  border-bottom: 2px solid #2685D8;
  text-decoration: none;
  padding: 0px 3px 5px 3px;
  margin-left: 20px;
}

.router-view {
  width: 80%;
  margin: 10px auto;
  border: 2px solid #C8D3DC;
  padding: 20px;
  min-height: 450px;
}
</style>