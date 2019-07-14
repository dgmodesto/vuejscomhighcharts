<template>
    <div class="container">
       
        <div class="well">
            <filters></filters>
        </div>

        <div class="row">
            <div class="col-md-6">
                <countries></countries>
          </div>
        
            <div class="col-md-6">
                <languages></languages>
            </div>
        </div>

    </div>
</template>


<script>
import filters from '../charts/filters.vue'
import countries from '../charts/countries.vue'
import languages from '../charts/languages.vue'
import axios from 'axios'

const http = axios.create();

export default {
    jsonFile: [],
    components: {
        filters, countries, languages
    },
    name: "Charts",
    mounted() {
        // http.get('MOCK_DATA.json')
        // .then(response => window.console.log(response.data))
        this.jsonFile = require("../assets/MOCK_DATA.json")
        console.log(this.jsonFile)
        this.$store.commit('SET_LIST', this.jsonFile)
    },
}


</script>

<style type="text/css">
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

#container {
    max-width: 800px;
    margin: 1em auto;
}
</style>