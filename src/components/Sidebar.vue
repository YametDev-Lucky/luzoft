<template>
  <v-navigation-drawer
    v-model="display"
    class="d-flex sidebar"
    location="right"
    temporary
    width="364"
  >
    <div style="padding: 20px;">
      <div class="d-flex sidebartitle">
        <span>Sidebar Title</span>
        <v-btn flat color="primary" rounded="0" size="small">TPP10002</v-btn>
        <v-btn flat color="primary" rounded="0" size="small">MSp</v-btn>
      </div>

      <v-select
        density="compact"
        class="speccombobox"
        model-value="Partially Designated"
        :items="['Partially Designated', 'Partially Designated', 'Partially Designated']"
        variant="solo-filled"
        color="success"
        bg-color="orange"
        style="color: white !important;"
      />

      <p>Payor:</p>
      <v-select
        density="compact"
        model-value="CL01632 Supplemental Healthcare"
        :items="['CL01632 Supplemental Healthcare', 'Partially Designated', 'Partially Designated']"
        variant="underlined"
      />

      <v-row>
        <v-col>
          <p>Payment #:</p>
          <v-text-field
            model-value="IA000125765115"
            variant="outlined"
            density="compact"
          />
        </v-col>

        <v-col>
          <p>Date:</p>
          <p>02/01/2022</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p>
            Designated Invoices - Total Count:
            {{ totalDesignatedInvoices  }}
          </p>
        </v-col>

        <v-col>
          <p>
            Total Designated Amount:
            {{ totalDesignatedAmount }}
          </p>
        </v-col>
      </v-row>

      <v-row class="align-center">
        <v-col cols="5">
          <p>Posting Period: </p>
        </v-col>
        
        <v-col cols="auto">
          <v-select
            density="compact"
            model-value="February 2023"
            :items="['February 2023', 'February 2023', 'February 2023']"
            variant="underlined"
          />
        </v-col>
      </v-row>

  <!-- SUMMARY -->
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
            <div class="d-flex justify">
              <b>Amount Applied: </b>
              <p>(${{ totalDesignatedAmount }})</p>
            </div>
          </v-card-item>
          
          <v-card-item>
            <div class="d-flex justify">
              <b>MSF Free Sum: </b>
              <p>($.0.0)</p>
            </div>
          </v-card-item>

          <v-divider />
          
          <v-card-item>
            <div class="d-flex justify">
              <b>Payment Amount Remaining: </b>
              <p>${{ globalStore.tpp.custbody_fc_tpp_amount_remain }}</p>
            </div>
          </v-card-item>
        </v-card>
      </div>

  <!-- TABS -->
      <div style="margin-top: 20px; border: 1px solid grey;">
        <v-tabs v-model="texttab" color="primary">
          <v-tab v-for="(item, i) in textData" :value="i" class="text-uppercase">
            {{ item.tabName }}
          </v-tab>
        </v-tabs>
        <v-window v-model="texttab">
          <v-window-item v-for="(item, i) in textData" :key="i" :value="i">
            <span v-for="key in item.keys">{{ globalStore.tpp[key] }}</span><br />
          </v-window-item>
        </v-window>
      </div>

  <!-- MEMO -->
      <div style="margin-top: 20px; border: 1px solid grey;">
        <v-card style="padding: 10px;">
          <v-card-title>
            Memo
          </v-card-title>
          <v-card-text>
            You can write your text here...
          </v-card-text>
          <v-textarea :model-value="globalStore.tpp?.memo" maxlength="120" bg-color="white"></v-textarea>
        </v-card>
      </div>
    </div>
  </v-navigation-drawer>
  
  <v-btn
    rounded="0"
    color="primary"
    class="specbtn"
    @click.stop="display = !display"
  >
    <v-icon v-if="display"> mdi-chevron-right </v-icon>
    <v-icon v-if="!display"> mdi-chevron-left </v-icon>
  </v-btn>
      
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['globalStore', 'textData'],
  data () {
    return {
      tab: null,
      display: false,
      texttab: null,
    }
  },
  methods: {
    toggle() {
      this.display = !this.display;
    }
  },
  computed: {
    
    totalDesignatedInvoices(){
      return (
        this.globalStore.appliedInvoices ?
        this.globalStore.appliedInvoices.length :
        0
      );
    },

    totalDesignatedAmount(){
      return (
        this.globalStore.appliedInvoices ?
        this.globalStore.appliedInvoices.reduce((agg, curr) => {
          const temp = curr.custrecord_fc_tppdi_dp_net_applied;
          const q = temp === "" ? 0 : (typeof temp === "string" ? parseFloat(temp) : temp);
          return agg + q
        }, 0) :
        0
      );
    },
    
  },
}
</script>

<style>

.sidebartitle {
  font-size: 24px;
  justify-content: space-between;
}

.justify {
  font-size: 14px;
  justify-content: space-between;
}

.speccombobox {
  width: fit-content;
}

.speccombobox .v-field__input {
  color: white !important;
}

.specbtn {
  padding-left: 8px;
  padding-right: 8px;
  min-width: 0px;
  position: fixed;
  right: 0px;
  bottom: 100px;
}

</style>