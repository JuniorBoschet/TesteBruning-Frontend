<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
    computed: mapState(['api']),
    created() {
        this.$store.dispatch('mudaPagina', 'registro')
    },
    methods: {

        async adicionarColaborador(colaborador) {

            try {
                await axios.post(`${this.api}/adicionar`, colaborador);
                this.limparCampos();
                alert('Colaborador criado com sucesso.');
            } catch (error) {
                console.log('Erro ao criar colaborador: ', error);
                alert('Erro ao criar colaborador');
            }
        },

        limparCampos() {
            this.novoColaborador = {
                'nome_completo': "",
                'apelido': "",
                'nome_pai': "",
                'nome_mae': "",
                'cpf': "",
                'data_nascimento': "",
                'cargo': ""
            }
        },


    },
    data() {
        return {
            name: 'RegistroView',
            novoColaborador: {
                'nome_completo': "",
                'apelido': "",
                'nome_pai': "",
                'nome_mae': "",
                'cpf': "",
                'data_nascimento': "",
                'cargo': ""
            },
        };
    },
}
</script>

<template>
    <div class="home">
        <div class="title"> Formulário de Cadastro</div>

        <form @submit.prevent="adicionarColaborador(novoColaborador)" class="formsection">
            <div class="row">
                <div class="input--item col-1">
                    <label for="">Código</label>
                    <input disabled type="text">
                </div>
                <div class="input--item col-2">
                    <label for="nome_completo">Nome completo</label>
                    <input v-model="novoColaborador.nome_completo" type="text" id="nome_completo" />
                </div>
                <div class="input--item col-1">
                    <label for="apelido">Apelido</label>
                    <input v-model="novoColaborador.apelido" id="apelido" type="text" />
                </div>
            </div>
            <div class="row">
                <div class="input--item col-2">
                    <label for="nome_pai">Nome do pai</label>
                    <input v-model="novoColaborador.nome_pai" id="nome_pai" type="text" />
                </div>
                <div class="input--item col-2">
                    <label for="nome_mae">Nome da mãe</label>
                    <input v-model="novoColaborador.nome_mae" id="nome_mae" type="text" />
                </div>
            </div>
            <div class="row">
                <div class="input--item col-1">
                    <label for="cpf">CPF</label>
                    <MaskInput v-model="novoColaborador.cpf" mask="###.###.###-##" id="cpf" type="text" />
                </div>
                <div class="input--item col-1">
                    <label for="data_nascimento">Data de nascimento</label>
                    <MaskInput v-model="novoColaborador.data_nascimento" mask="##/##/####" id="data_nascimento"
                        type="text" />
                </div>
                <div class="input--item col-2">
                    <label for="cargo">Cargo</label>
                    <input v-model="novoColaborador.cargo" id="cargo" type="text">
                </div>
            </div>
            <div class="row btn--row">
                <div @click="$router.back()" class="option">Voltar</div>
                <div @click="limparCampos" class="option">Limpar</div>

                <button type="submit" class="submit">Salvar</button>
            </div>

        </form>
    </div>
</template>


<style scoped>
.formsection {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
}

.row {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.input--item {
    display: flex;
    flex-direction: column;
}

.col-1 {
    width: 24%;
}

.col-2 {
    width: 49%;
}

label {
    font-size: 12px;
    font-weight: 600;
}

input {
    height: 30px;
    border: 2px solid #cecece;
    border-radius: 4px;
}

.btn--row {
    justify-content: flex-start;
}

.option,
.submit {
    border: 2px solid #cecece;
    background-color: transparent;
    color: #cecece;
    padding: 8px 15px;
    border-radius: 4px;
    margin-right: 10px;
    margin-left: 0;
    cursor: pointer;
    font-size: 14px;
    transition: all ease 0.3s;
}

.option:hover {
    border: 2px solid #6dffa5;
    background-color: #6dffa5;
    color: #fff;
}

.submit {
    border: 2px solid #1AAE9F;
    background-color: transparent;
    color: #1AAE9F;
    margin-left: auto;
    margin-right: 0;
}
.submit:hover {
    border: 2px solid #1AAE9F;
    background-color: #1AAE9F;
    color: #FFF;
}
</style>