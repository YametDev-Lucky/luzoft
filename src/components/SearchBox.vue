<template>
  <v-card style="padding: 5px;">
    <v-card-title>
      <span class="text-h5">Search Invoices</span>
    </v-card-title>
    <v-card-text>
      <v-container class="searchbar">
        <p>MSP Reference #:</p>
        <v-text-field variant="outlined" density="compact"/>

        <p>Traveler's Week Ending:</p>
        <VueDatePicker
          v-model="date"
          placeholder="Start Typing ..."
          text-input
          text-input-options="textInputOptions"
        />
        
        <p>Traveler:</p>
        <v-combobox :items="items" variant="outlined" density="compact"/>
        
        <p>Invoice #:</p>
        <v-text-field variant="outlined" density="compact"/>
        
        <p>Facility #:</p>
        <v-combobox :items="items" variant="outlined" density="compact"/>
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
      >
        SEARCH
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import { ref } from 'vue';
  
  export default {
    props: ['showbox', 'closed'],
    data: (props) => ({
      date: ref(),
      textInputOptions: ref({
        format: 'MM/dd/yyyy'
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
    },
    watch: {
      dialog (state) {
        if(!state) this.$props.closed();
        console.log("New Dialog Status", state);
      }
    },
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