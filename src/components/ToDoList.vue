<template>

        <div class="container">
        <br>
        <br>
        <button @click="getJson" type="button" class="btn btn-primary">Carregar Tabela</button>
        <br>
        <br>
		<table class="table">
			<thead class="thead-dark">
				<tr>
					<th> ID</th>
					<th> COUNTRY</th>
					<th> LANGUAGE</th>
					<th> GENDER</th>
				</tr>
			</thead>
			<tr v-for="files in jsonFile" :key="files">
				<td v-for="item in files" :key="item">{{item}}</td>
        
			</tr>


		</table>
    </div>
</template>

<script>
import axios from 'axios'
// const http = axios.create();

export default {
   
    name:"ToDoList",
    data(){
        return {
            jsonFile: [],
        }
    },
    methods: {
        getJson(){
            this.jsonFile = require("../assets/MOCK_DATA.json")
            //   http.get('/MOCK_DATA.json')
            //     .then(response => this.jsonFile = response.data)
        }

    },
}
</script>

<style type="text/css">
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>