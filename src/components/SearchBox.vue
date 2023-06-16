<template>
  <v-card style="padding: 5px;">
    <v-card-title>
      <span class="text-h5">Search Invoices</span>
    </v-card-title>
    <v-card-text>
      <v-container class="searchbar">
        <p>MSP Reference #:</p>
        <v-text-field variant="outlined" density="compact" v-model="msp"/>

        <p>Traveler's Week Ending:</p>
        <VueDatePicker
          v-model="date"
          placeholder="Start Typing ..."
          text-input
          :text-input-options="textInputOptions"
          :format="format"
        />
        
        <p>Traveler:</p>
        <AutoComplete :items="items" v-model="traveler"/>
        
        <p>Invoice #:</p>
        <v-text-field variant="outlined" density="compact" v-model="invoice"/>
        
        <p>Facility #:</p>
        <AutoComplete :items="items" v-model="facility"/>
      </v-container>
    </v-card-text>
    <v-container>
      <v-row>
        <v-col cols="6">
          <p>Open Invoices</p>
          <v-switch inset color="primary" />
        </v-col>
        <v-col cols="6">
          <p>Designated Invoices</p>
          <v-switch inset color="primary" />
        </v-col>
      </v-row>
      <v-btn
        block
        class="text-none"
        color="blue-darken-2"
        size="large"
        variant="flat"
        @click="search"
      >
        SEARCH
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import AutoComplete from './AutoComplete.vue';
  import { ref } from 'vue';
  
  export default {
    props: ['showbox', 'closed', 'searchItem'],
    data: (props) => ({
      date: ref(),
      msp: "",
      traveler: "",
      invoice: "",
      facility: "",
      textInputOptions: ref({
        format: 'M/d/yyyy'
      }),
      dialog: props.showbox,
      items: [
        "Amy Avery",
        "Amy Bosco",
        "Amy Gheruja",
        "Amy Zepadao",
      ],
    }),
    components: {
      VueDatePicker,
      AutoComplete,
    },
    watch: {
      dialog (state) {
        if(!state) this.$props.closed();
        console.log("New Dialog Status", state);
      }
    },
    methods: {
      format(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
      },
      search() {
        this.searchItem({
          custrecord_cop_inv: this.invoice,
          custrecord_fc_tppdi_designatedinvoice_txt: this.invoice,
          custrecord_cop_fac: this.facility,
          custbody__pi_inv_traveler_txt: this.facility,
          custbody__pi_inv_traveler: this.traveler,
          trandate: this.date,
        })
      },
    }
  }
</script>

<style>
.searchbar p {
  margin-top: 20px;
  margin-bottom: 5px;
}

.v-card .v-card-title {
  margin-top: 20px;
}

.v-container {
  padding-top: 0px;
}

.v-card-text{
  padding : 0px;
}

.v-dialog > .v-overlay__content > .v-card > .v-card-text {
  padding: 0px !important;
}

</style>