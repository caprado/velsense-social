<template>
  <div class="module__container">
      <div class="stats__graph">
        <div class="likes__graph">
          <h4>Recent Hashtags</h4>
            <v-data-table
              :headers="headers"
              :items="hashtags"
              hide-actions
              class="elevation-0"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
              </template>
            </v-data-table>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Hashtags',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Percent',
            align: 'right',
            value: 'Percent'
          }
        ],
        hashtags: [
          {
            value: false,
            name: '#yogurt',
            calories: '22%'
          },
          {
            value: false,
            name: '#icecream',
            calories: '15.1%'
          },
          {
            value: false,
            name: '#eclair',
            calories: '5.8%'
          },
          {
            value: false,
            name: '#cupcake',
            calories: '5.1%'
          },
          {
            value: false,
            name: '#gingerbread',
            calories: '1.45%'
          },
          {
            value: false,
            name: '#jellybean',
            calories: '1.14%'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.stats__graph {
  background-color: #FFFEFE;
  padding: 4%;
  border: 1px solid #dcdcdc;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
  -moz-box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
  box-shadow: 0px 0px 5px 5px rgba(232,231,231,1);
}
</style>