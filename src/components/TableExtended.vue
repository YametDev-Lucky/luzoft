<template>
  <VTable class="text-no-wrap" style="font-size: 0.8rem;">
    <thead>
      <tr>
        <td class="text-center">
          <v-btn v-if="possible"
            rounded="0"
            color="primary"
            style="min-width: 0px;"
            @click="addFunction"
          >
            +
          </v-btn>
        </td>
        <td v-for="header in headers" @click="sortArray(header.key)">
          {{ header.title }}
        </td>
      </tr>
    </thead>

    <tbody>
      <template
        v-for="(product, index) in desserts.filter(v => isValidItem(v))"
        :key="product.facility"
      >
        <template v-if="index >= pageCapacity * (page - 1) && index < pageCapacity * page">
          <tr>
            <td @click="collapse(index)" class="text-center">
              <v-icon v-if="!product.collapsed">mdi-plus</v-icon>
              <v-icon v-if="product.collapsed">mdi-minus</v-icon>
            </td>
            <td v-for="header in headers">
              {{ product[header.key] }}
            </td>
          </tr>
          
          <template v-if="product.collapsed == undefined">
            <tr class="text-center">
              <td
                :colspan="headers.length + 1"
                class="text-center"
                style="padding: 10px !important;margin: auto;"
              >
                <p>Loading...</p>
              </td>
            </tr>
          </template>

          <template v-if="product.collapsed">
            <tr
              v-for="child in product.children"
              :key="child.facility"
            >
              <td></td>
              <td v-for="header in headers">
                {{ child[header.key] }}
              </td>
            </tr>
          </template>
        </template>
      </template>
    </tbody>
    
    <tfoot v-show="!desserts.filter(v => isValidItem(v)).length">
      <tr>
        <td :colspan="headers.length + 1" class="text-center">
          <p>No data available</p>
        </td>
      </tr>
    </tfoot>
  </VTable>
  
  <!-- Pagination Controller -->
  <v-row justify="center">
    <v-col cols="8">
      <v-container class="max-width">
        <v-pagination
          v-model="page"
          :length="pages"
          rounded="circle"
        ></v-pagination>
      </v-container>
    </v-col>
  </v-row>

</template>

<script>

  export default {
    props: [
      'pageCount',
      'headersData',
      'dessertsData',
      'addPossible',
      'addFunction',
      'dispFunction',
      'searchOption'
    ],
    data: (props) => ({
      tab: null,
      headers: props.headersData,
      desserts: props.dessertsData,
      possible: props.addPossible,

      page: 1,
      pageCapacity: 10,
      pages: props.pageCount,
    }),
    methods: {
      isNumber (val){
        val = val.replace(',','');
        return (Number(val) != NaN);
      },
      sortArray (key) {
        this.desserts = this.desserts.sort((a, b) => {
          if(this.isNumber(a[key]) && this.isNumber(b[key]))
            return Number(a[key].replace(',','')) - Number(b[key].replace(',',''));
          if(a[key] > b[key])
            return 1;
          if(a[key] < b[key])
            return -1;
          return 0;
        });
      },
      collapse (index){
        if (this.desserts[index].collapsed == undefined)
          return;

        if (this.desserts[index].collapsed == true){
          this.desserts[index].collapsed = 
            !this.desserts[index].collapsed;
        }
        else {
          this.desserts[index].collapsed = undefined;
          this.$props.dispFunction(true);
          setTimeout(() => {
            this.desserts[index].collapsed = true;
          this.$props.dispFunction(false);
          }, 2000);
        }
      },
      isValidItem( item ) {
        for (const key in this.searchOption) {
          if(key in item
            && this.searchOption[key]!=undefined
            && this.searchOption[key].length
            && item[key].indexOf(this.searchOption[key]) < 0
          ) return false;
        }
        return true;
      },
    },
  }

</script>

<style>
table {
  border : 1px solid lightgrey;
}
thead {
  border-bottom: 1px solid lightgrey;
}
td {
  padding: 0px 5px !important;
  height: 38px !important;
}
tr {
  height: 38px !important;
}
tbody tr:hover {
  background-color: lightgray;
}
</style>