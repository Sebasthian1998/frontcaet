<template>
  <div >
    <table>
        <thead>
          <tr>

              <th>Nombre</th>
              <th>Texto</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(autor,index) in arrayStoreState" :key="index">
            <td>{{autor.nombre}}</td>
            <td>{{autor.texto}}</td>

          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>

export default {
  name: 'arrayStore',
  props:['arrayStoreState']
}
</script>
