import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    api: 'http://127.0.0.1:8000/api/colaboradores',
    pagina: 'lista',
    colaboradores: [],
    colaboradorEditar: []
  },
  getters: {
  },
  mutations: {
    //Faz com que o menu fique selecionado
    mudaPagina(state, pagina) {
      state.pagina = pagina;
    },
    //Carrega os dados dos colaboradores no state Colaboradores
    pegaColaborador(state, colaboradores) {
      state.colaboradores = colaboradores;
    },
    //Deleta os dados do colaborador excluido no state Colaboradores
    excluirColaborador(state, id) {
      state.colaboradores = state.colaboradores.filter((colaborador) => colaborador.id !== id);
    },
    buscarColaboradorID(state, id) {
      state.colaboradorEditar = state.colaboradores.filter((colaborador) => colaborador.id == id);
    }

  },
  actions: {
    //Ação que ativa a mutation de pagina
    mudaPagina({ commit }, pagina) {
      commit('mudaPagina', pagina);
    },



    //Ação que faz a requisição para buscar os colaboradores
    async pegaColaborador({ commit }) {
      try {
        await axios.get(this.state.api).then(resposta => {
          //Executa a mutation de pegar colaboradores
          commit('pegaColaborador', resposta.data);
        })
      } catch (error) {
        console.error("Erro ao tentar buscar Colaboradores: ", error);
      }
    },

    //Ação que faz a requisição de exclusão do Colaborador
    async excluirColaborador({ commit }, id) {
      if (confirm("Você realmente deseja deletar esse colaborador?")) {
        try {
          await axios.delete(`${this.state.api}/deletar/${id}`);

          //Executa a mutation que remove o colaborador do array
          commit('excluirColaborador', id);
          alert("Colaborador excluido com sucesso!")
        } catch (error) {
          console.error("Erro ao tentar excluir colaborador", error);
          alert("Erro ao tentar excluir colaborador, tente novamente.")
        }
      }
    },

    //BuscarColaboradorID para view editar colaborador
    buscarColaboradorID({ commit }, id) {
      commit('buscarColaboradorID', id);
    }
  },
  modules: {
  }
})
