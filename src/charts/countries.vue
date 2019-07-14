<template>
    <div id="container-for-countries"></div>
</template> 

<script>
import _ from 'lodash'
import Highcharts from 'highcharts'
import base from './base.vue'

export default {

    extends: base,
    methods: {
        /** 
            * Utilizado para ler a lista e calcular a fonte de dados do gráfico
        */

        dataSource(){

            /**
             * Extrair os paises - ok
             * contar a quantidade de ocorrência de cada país - ok
             * transformar objetos em arrays - ok
             * ordenar a lista de forma ascendente
             */

             
                const countries = this.localList.map(item => item.country)
                
                const base = _(countries)
                .countBy()

                .map((value, key) => ({key,value}) )

                .orderBy(['value'],['desc'])

                .value()

                const categories = base.map(item => item.key);

                const values = base.map(item => item.value);

               if(this.chart === null){
                   this.chart =  this.setup({categories, values});
               }else{
                   this.chart.series[0].setData(values)
               }
        },

            /**
            * 
            * Utilizado para montar o gráfico e exibilo na tela
            * obs: este método só poderá ser chamdo quando  afonte de dados estiver prontoa
            * 
            *  */   
        setup(obj){

                const { categories, values} = obj;
                
                return Highcharts.chart('container-for-countries', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Countries'
                    },
                    subtitle: {
                        text: 'Source: Teste Itau IBBA - Resource It'
                    },
                    xAxis: {
                        categories: categories,
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Quantity'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: 'Quantity',
                        data: values
                    }]
                });
        }
    },
}
</script>