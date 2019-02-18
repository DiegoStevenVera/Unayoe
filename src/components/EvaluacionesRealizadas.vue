<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
            <v-flex xs12 sm8>
            
                <div>
                    Evaluaciones psicológicas realizadas
                </div>
                <v-card>

                    <v-card-title>
                        Description:
                    </v-card-title>
                    <p>Contenido de todas las evaluaciones psicologicas realizadas y asignadas por la encargada de UNAYOE</p>

                    <v-data-table
                        :headers="headers"
                        :items="tests"
                        class="elevation-1"
                    >
                        <template slot="items" slot-scope="props">
                        <td>{{ props.item.id }}</td>
                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.date }}</td>
                        <td class="text-xs-right">
                            <div>
                                <v-btn flat small color="blue">Ver resultados</v-btn>
                            </div>
                        </td>
                        </template>
                    </v-data-table>

                </v-card>
            </v-flex>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'N° ORDEN',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'NOMBRE DE LA EVALUACIÓN PSICOLÓGICA', value: 'nombre' },
          { text: 'FECHA DE ENVÍO', value: 'fecha' },
          { text: 'ACCIÓN', value: 'accion' },
        ],
        tests: [
          {
            id: '01',
            name: 'INVENTARIO DE HABITOS DE ESTUDIO',
            date: '01/01/19'
          },
          {
            id: '02',
            name: 'INVENTARIO DE DEPRESIÓN DE BECK',
            date: '02/01/19',
          },
          {
            id: '03',
            name: 'INVENTARIO DE INTERESES PROFESIONALES',
            date: '02/01/19',
          }
        ]
      }
    }
  }
</script>