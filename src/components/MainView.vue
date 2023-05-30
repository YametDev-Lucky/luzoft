<template>
  <div class="fill-height align-center">
    <AppBar :errorString="globalStore.error" />
    <v-responsive>
      <v-progress-linear
        v-if="globalStore.loading"
        indeterminate
        style="margin-bottom: auto;"
      />
    </v-responsive>

    <v-responsive 
      class="d-flex fill-height padding"
    >

      <div class="d-flex justify-between" style="margin-bottom: 10px;">
        <h2>Third Party Payment</h2>
        <v-btn size="large" color="blue-grey" append-icon="mdi-menu-down">
          Research Hold
        </v-btn>
      </div>

      <!-- TopView -->
      <v-row align="start">

        <v-col cols="5">
          <v-row>
            <v-col cols="8">
              <v-btn class="mg" flat color="primary" rounded="0">
                {{ globalStore.tpp.tranid }}
              </v-btn>
              <v-btn class="mg" flat color="primary" rounded="0">
                MSp
              </v-btn>
            </v-col>

            <v-col cols="4">
              <p>Date: </p>
              <VueDatePicker
                v-model="date"
                text-input
                :text-input-options="textInputOptions"
                :format="format"
              />

            </v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="2">
              <b>Payor:</b>
            </v-col>
            <v-col cols="6">
              <AutoComplete :items="items" :payor="globalStore.tpp.custbody_fc_tpp_payor" />
            </v-col>
            <v-col cols="4">
              <p><b>Designated Invoices - Total Count:</b></p>
              <p>2</p>
              <p />
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="2">
              <b>Payment #:</b>
            </v-col>
            <v-col cols="6">
              <v-text-field :model-value="globalStore.tpp.custbody_fc_tpp_paymentnum" variant="outlined"
                density="compact" />
            </v-col>
            <v-col cols="4">
              <p><b>Total Designated Amount: </b></p>
              <p>${{ globalStore.tpp.custbody_fc_tpp_paymentamount }}</p>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="7">
          <v-row>

            <v-col cols="5">
              <div style="border: 1px solid grey; height: 100%;">
                <v-tabs v-model="texttab" color="primary">
                  <v-tab v-for="(item, i) in textData" :value="i" class="text-uppercase">
                    {{ item.tabName }}
                  </v-tab>
                </v-tabs>
                <v-window v-model="texttab">
                  <v-window-item v-for="(item, i) in textData" :key="i" :value="i">
                    <span v-for="key in item.keys">{{ globalStore.tpp[key] }}</span>
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
                <v-textarea model-value="" maxlength="120" bg-color="white"></v-textarea>
              </div>
            </v-col>

            <v-col cols="4">
              <div style="border: 2px solid rgb(25, 118, 210);">
                <v-card style="padding: 10px;">
                  <v-card-title>Summary</v-card-title>

                  <v-divider />

                  <v-card-item>
                    <div class="d-flex justify carditem">
                      <b>Subtotal: </b>
                      <p>${{ globalStore.tpp.custbody_fc_tpp_paymentamount }}</p>
                    </div>
                  </v-card-item>

                  <v-card-item>
                    <div class="d-flex justify carditem">
                      <b>Amount Applied: </b>
                      <p>(${{ globalStore.applications?.totalApplied ?? "4159.81" }})</p>
                    </div>
                  </v-card-item>

                  <v-card-item>
                    <div class="d-flex justify carditem">
                      <b>MSF Free Sum: </b>
                      <p>($0)</p>
                    </div>
                  </v-card-item>

                  <v-divider />

                  <v-card-item>
                    <div class="d-flex justify carditem">
                      <b>Payment Amount Remaining: </b>
                      <p>$0</p>
                    </div>
                  </v-card-item>
                </v-card>
              </div>
            </v-col>

          </v-row>
        </v-col>
      </v-row>

      <!-- TabView -->
      <v-tabs v-model="tabletab" color="blue" align-tabs="start">
        <v-tab v-for="(item, index) in tableData" :key="index" :value="index">{{ item.tabName }}</v-tab>

        <v-btn class="right-side" variant="plain" :ripple="false" flat size="xsmall" rounded="0"
          @click="srcBoxOpened = true">
          <v-icon color="primary" icon="mdi-filter"></v-icon>
        </v-btn>
      </v-tabs>

      <!-- TableView -->
      <template v-for="(item, index) in tableData">
        <TableExtended v-if="index == tabletab"
          :addPossible="index == 3"
          :headersData="item.headers"
          :dessertsData="item.desserts"
          :pageCount="Math.ceil(item.desserts.length / 10)"
          :addFunction="openAppendBox"
          :dispFunction="display"
        />
      </template>
    </v-responsive>

    <Sidebar />

    <v-dialog v-model="srcBoxOpened" width="365" >
      <SearchBox />
    </v-dialog>

    
    <v-dialog v-model="addBoxOpened" >
      <AddOverpay :close="closeAppendBox"/>
    </v-dialog>

  </div>
</template>

<script>
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
import { mapStores } from 'pinia'
import { useGlobalStore } from "@/stores/global"
import Sidebar from '@/components/Sidebar.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import table from '@/plugins/tabledata';
import AppBar from '@/layouts/default/AppBar.vue';
import AutoComplete from './AutoComplete.vue';
import SearchBox from './SearchBox.vue';
import TableExtended from './TableExtended.vue';
import AddOverpay from './AddOverpay.vue';

export default {
  data: () => ({
    input: null,
    srcBoxOpened: false,
    addBoxOpened: false,
    texttab: null,
    textData: [
      {
        tabName: 'A/R Account',
        keys: ['custbody_fc_tpp_aracct'],
        content: []
      },
      {
        tabName: 'Cash Account',
        keys: ['custbody_fc_tpp_cashaccount'],
        content: [],
      },
      {
        tabName: 'Original Payment',
        keys: [
          'custbody_fc_tpp_paymentamount',
          'custbody_fc_tpp_original_pay_reference'
        ],
        content: [],
      },
    ],
    tabletab: null,
    tableData: table,
    items: [
      'CL01632 Supplemental Healthcare',
      'Partially Designated',
      'Everything OK'
    ],
    date: ref(),
    textInputOptions: ref({ format: 'M/d/yyyy' })
  }),
  components: {
    AutoComplete,
    Sidebar,
    TableExtended,
    VueDatePicker,
    SearchBox,
    AppBar,
    AddOverpay,
  },
  watch: {
    input() {
      console.log(this.input);
    },
    srcBoxOpened(state) {
      console.log("State sent", state);
    }
  },
  methods: {
    getContentText(item) {
      let result = '';
      item.content.forEach(val => {
        result = result + item.tabName + '\n' + val + '\n';
      })
      return result;
    },
    format(date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${month}/${day}/${year}`;
    },
    display(flag) {
      this.globalStore.loading = flag;
    },
    openAppendBox() {
      this.addBoxOpened = true;
    },
    closeAppendBox() {
      this.addBoxOpened = false;
    },
  },
  computed: {
    ...mapStores(useGlobalStore),
  },
  mounted() {
    this.globalStore.getTPPInfo({});
  }
}
</script>

<style>
.justify-between {
  justify-content: space-between;
}

.padding {
  padding: 20px;
}

.right-side {
  margin: auto;
  margin-right: 0px;
}

.mg {
  margin: 10px;
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