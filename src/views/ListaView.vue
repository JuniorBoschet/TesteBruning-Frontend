<script>
import BlocoUsuario from '@/components/BlocoUsuario.vue';
import { mapState } from 'vuex';
export default {
  components: {
    BlocoUsuario
  },

  created() {
    this.$store.dispatch('mudaPagina', 'lista')
    this.$store.dispatch('pegaColaborador')
  },
  computed: mapState([
    'pagina',
    'colaboradores'
  ]),
  data() {
    return {
      name: "ListaView",
    }
  }
}
</script>

<template>
  <div class="home">
    <div class="title"> Lista de Colaboradores</div>
    <ul v-for="(colaborador, id) in colaboradores" :key="id">
      <BlocoUsuario :colaborador="colaborador" />
    </ul>
  </div>
</template>


<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

h5 {
  text-align: center;
  color: #cecece;
  user-select: none;
}
</style>