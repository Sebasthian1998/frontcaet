<template>
  <div >
    <h1>Autor</h1>

    <div class="row">
        <form class="col s12">
        <div class="row">
            <div class="input-field col s6">
                <input v-model="nombre" type="text" >
                <label >Nombre</label>
            </div>
            <div class="input-field col s6">
                <input v-model="texto" type="text" >
                <label >Texto</label>
            </div>
            <div v-if="tipoFormulario==='ADD'">
                <button @click="crearAutor" class="btn">Crear</button>
            </div>
             <div v-else>
                <button @click="crearAutor" class="btn">Editar</button>
                <button @click="cancelar" class="btn red accent-2">Cancelar</button>
            </div>
        </div>
        </form>
    </div>
       <table>
        <thead>
          <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Texto</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(autor,index) in autores" :key="index">
            <td>{{autor.id}}</td>
            <td>{{autor.nombre}}</td>
            <td>{{autor.texto}}</td>
            <button @click="obtener(autor.id)" class="btn">Editar</button>
            <button @click="eliminar(autor.id)" class="btn red accent-4">Eliminar</button>
          </tr>
        </tbody>
      </table>

    <input @change="cambiarState" name="cambioEstado" type="text" >
    <p>{{autorStore.estadoValor}}- Hola</p>

    <ArrayStore :arrayStoreState="autorStore.estadoArray"></ArrayStore>
  </div>
</template>
<script>
import {clientApi} from '../config/url'; //Para llamar al prop:
import ArrayStore from '../components/arrayStore' //Importacion del componente
import axios from 'axios';
import {mapState} from 'vuex'
export default {
  name: 'autor',
  components:{
    ArrayStore //Registro del componente
  },
  computed:mapState(['autorStore']), //tenemos nuestro state el cual tiene 3 propiedads por el momento
  methods:{
    cambiarState(e){
        e.preventDefault();
        this.$store.commit('autorStore/autorValorMutation',e.target.value)
    },
    cancelar(){
        this.tipoFormulario = 'ADD'
        this.nombre= ''
        this.texto= ''
    },
    eliminar(id){
        axios.delete(clientApi+'autor/eliminar/'+`${id}`).then(res=>{
            console.log(res,'RESPONSE')
            this.obtenerTodos()
        })
    },
    crearAutor(e){
        e.preventDefault();
        console.log('Hola')
        let FORM = new FormData()
        FORM.append('nombre',this.nombre)
        FORM.append('texto',this.texto)
        console.log(this.nombre,this.texto,'AQUI')
        if(this.tipoFormulario === 'ADD'){
            axios.post(clientApi+'autor/crear',FORM).then(res=>{
                console.log(res,'RESPONSE')
                this.obtenerTodos()
            })
        }else{
            axios.post(clientApi+'autor/actualizar/'+`${this.id}`,FORM).then(res=>{
            console.log(res,'RESPONSE')
            this.obtenerTodos()
        })
        }
       
    },
    obtenerTodos(){
        axios.get(clientApi+'autor/obtenerAll').then(res=>{
            console.log(res)
            this.autores = res.data
        })
    },
    obtener(id){
        this.id = id
        axios.get(clientApi+'autor/obtener/'+`${id}`).then(res=>{
            console.log(res)
            let data = res.data[0]
            this.nombre = data.nombre
            this.texto = data.texto
        })
        this.tipoFormulario = 'EDIT'
    }
  },
  data(){
      return {
          nombre:'',
          texto:'',
          autores:[],
          tipoFormulario: 'ADD',
          id:0
      }
  },
  mounted(){
      console.log('MONTADO')
      this.obtenerTodos()
      this.$store.dispatch('autorStore/autorArrayAction')
  }


}
</script>

