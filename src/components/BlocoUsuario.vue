<script>
export default {
  data() {
    return {
      name: 'BlocoUsuario'
    }
  },
  props: ['colaborador']
}
</script>


<template>
  <li>
    <div class="bloco info">
      <div class="nome">
        <strong>{{ colaborador.id }} - {{ colaborador.nome_completo }}</strong>
      </div>
      <div class="nascimento">
        Nascimento: <strong>{{ colaborador.data_nascimento }}</strong>
      </div>
    </div>
    <div class="bloco options">
      <router-link class="btn editar" :to="'editar/' + colaborador.id">Editar</router-link>
      <button @click="this.$store.dispatch('excluirColaborador', this.colaborador.id)" class="btn excluir">
        Excluir
      </button>
    </div>
  </li>
</template>


<style scoped>
li {
  width: 100%;
  display: flex;
  height: 70px;
  border: 2px solid #C8D3DC;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
}

.bloco {
  padding: 0 20px;
}

.nome {
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  margin: 0 8px;
  background-color: transparent;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
  box-shadow: none;
  border-style: solid;
  cursor: pointer;
  transition: all ease 0.3s;
  text-decoration: none;
  font-size: 14px;
}

.editar {
  border: 2px solid #3E92DC;
  border-color: #3E92DC;
  color: #3E92DC;
}

.excluir {
  border-color: #D7556A;
  color: #D7556A;
}

.editar:hover {
  border-color: #3E92DC;
  background-color: #3E92DC;
  color: #fff;
}

.excluir:hover {
  background-color: #D7556A;
  border-color: #D7556A;
  color: #FFF;
}
</style>