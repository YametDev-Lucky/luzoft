<template>
  <div class="fill-height align-center d-flex">
    <v-responsive class="d-flex fill-height padding">
      <div
        class="d-flex justify-between"
        style="margin-bottom: 10px;"
      >
        <h2>Third Party Payment</h2>
        <v-btn
          size="large"
          color="blue-grey"
          append-icon="mdi-menu-down"
        >
          Research Hold
        </v-btn>
      </div>

      <!-- TopView -->
      <v-row align="start">

        <v-col cols="3">
          <v-row>
            <v-btn class="mg" flat color="primary" rounded="0" >
              TPP10002
            </v-btn>
            <v-btn class="mg" flat color="primary" rounded="0" >
              MSp
            </v-btn>
          </v-row>

          <v-row align="center">
            <v-col cols="3">
              <b>Payor:</b>
            </v-col>
            <v-col cols="9">
              <AutoComplete :items="items" />
            </v-col>
          </v-row>
          
          <v-row align="center">
            <v-col cols="3">
              <b>Payment #:</b>
            </v-col>
            <v-col cols="9">
              <v-text-field
                model-value="IA000125765115"
                variant="outlined"
                density="compact"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="9">
          <v-row>
            <v-col cols="2">
              <p>Date: </p>
              <VueDatePicker 
                v-model="date"
                placeholder="Start Typing ..."
                text-input
                :text-input-options="textInputOptions"
              />

              <p><b>Designated Invoices - Total Count:</b></p>
              <p>2</p>
              <p />

              <p><b>Total Designated Amount: </b></p>
              <p>6,965.00</p>
            </v-col>
            
            <v-col cols="4">
              <div style="border: 1px solid grey; height: 100%;">
                <v-tabs
                  v-model="texttab"
                  color="primary"
                >
                  <v-tab
                    v-for="(item, i) in textData"
                    :value="i"
                    class="text-uppercase"
                  >
                    {{ item.tabName }}
                  </v-tab>
                </v-tabs>
                <v-window v-model="texttab">
                  <v-window-item
                    v-for="(item, i) in textData"
                    :key="i"
                    :value="i"
                  >
                    <v-textarea
                      :model-value="getContentText(item)"
                      bg-color="white"
                      style="height: 100%;"
                    />
                  </v-window-item>
                </v-window>
              </div>
            </v-col>

            <v-col cols="3">
              <div class="bordered">
                <v-card-title>
                  Memo
                </v-card-title>
                <v-card-text>
                  You can write your text here...
                </v-card-text>
                <v-textarea
                  model-value=""
                  maxlength="120"
                  bg-color="white"
                ></v-textarea>
              </div>
            </v-col>

            <v-col cols="3">
              <div style="border: 2px solid rgb(25, 118, 210);">
                <v-card style="padding: 10px;">
                  <v-card-title>Summary</v-card-title>

                  <v-divider />

                  <v-card-item>
                    <div class="d-flex justify carditem">
                      <b>Subtotal: </b>
                      <p>$10,328.40</p>
                    </div>
                  </v-card-item>
                  
                  <v-card-item>
                    <div class="d-flex justify carditem">
                      <b>Amount Applied: </b>
                      <p>($7,055.00)</p>
                    </div>
                  </v-card-item>
                  
                  <v-card-item>
                    <div class="d-flex justify carditem">
                      <b>MSF Free Sum: </b>
                      <p>($73.20)</p>
                    </div>
                  </v-card-item>

                  <v-divider />
                  
                  <v-card-item>
                    <div class="d-flex justify carditem">
                      <b>Payment Amount Remaining: </b>
                      <p>$3,200.20</p>
                    </div>
                  </v-card-item>
                </v-card>
              </div>
            </v-col>
            
          </v-row>
        </v-col>
      </v-row>

      <!-- TabView -->
      <v-tabs
        v-model="tabletab"
        color="blue"
        align-tabs="start"
      >
        <v-tab v-for="(item, index) in tableData" :key="index" :value="index">{{ item.tabName }}</v-tab>

        <v-btn
          class="right-side"
          variant="plain"
          :ripple="false"
          flat size="xsmall"
          rounded="0"
          @click="dialogOpened = true"
        >
          <v-icon
            color="primary"
            icon="mdi-filter"
          ></v-icon>
        </v-btn>
      </v-tabs>
      
      <!-- TableView -->
      <template v-for="(item, index) in tableData">
        <TableExtended v-if="index==tabletab"
          :addPossible="index == 3"
          :headersData="item.headers"
          :dessertsData="item.desserts"
          :pageCount="Math.ceil( item.desserts.length / 10 )"
        />
      </template>
    </v-responsive>
    
    <Sidebar />


    <v-dialog
      v-model="dialogOpened"
      width="365"
    >
      <SearchBox />
    </v-dialog>
  </div>

</template>

<script>
  import Sidebar  from '@/components/Sidebar.vue';
  import TableExtended from './TableExtended.vue';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import AutoComplete from './AutoComplete.vue';
  import SearchBox from './SearchBox.vue';
  import '@vuepic/vue-datepicker/dist/main.css'
  import { ref } from 'vue';
  import table from '@/plugins/tabledata';
  import text from '@/plugins/tabdata';

  export default {
    data: () => ({
      input: null,
      dialogOpened: false,
      texttab: null,
      textData: text,
      tabletab: null,
      tableData: table,
      items: [
        'CL01632 Supplemental Healthcare',
        'Partially Designated',
        'Everything OK'
      ],
      date: ref(),
      textInputOptions: ref({
        format: 'MM/dd/yyyy'
      })
    }),
    components: {
      AutoComplete,
      Sidebar,
      TableExtended,
      VueDatePicker,
      SearchBox,
    },
    watch: {
      input(){
        console.log(this.input);
      },
      dialogOpened(state) {
        console.log("State sent", state);
      }
    },
    methods: {
      getContentText (item) {
        let result = '';
        item.content.forEach(val => {
          result = result + item.tabName + '\n' + val + '\n';
        })
        return result;
      },
    },
  }
</script>

<style>
.justify-between{
  justify-content: space-between;
}

.padding {
  padding: 20px;
}

.right-side{
  margin: auto;
  margin-right: 0px;
}

.mg {
  margin : 10px;
}

.v-responsive__sizer {
  max-width: 0px !important;
}

.bordered {
  border: 1px solid grey;
  height: 100%;
  padding: 10px;
}
</style>