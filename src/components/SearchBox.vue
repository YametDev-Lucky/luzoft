<template>
  <v-card style="padding: 20px;">
    <v-card-title>
      <span class="text-h5">Search Invoices</span>
    </v-card-title>
    <v-card-text>
      <v-container class="searchbar">
        <p>MSP Reference #:</p>
        <v-text-field />

        <p>Traveler's Week Ending:</p>
        <v-text-field />
        
        <p>Traveler:</p>
        <v-combobox />
        
        <p>Invoice #:</p>
        <v-text-field />
        
        <p>Facility #:</p>
        <v-combobox />
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn
        style="margin: auto; text-align: center;"
        append-icon="mdi-magnify"
        size="large"
        width="200px"
        color="primary"
      >
         Search 
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  console.log("Updated");
  export default {
    props: ['showbox', 'closed'],
    data: (props) => ({
      dialog: props.showbox,
    }),
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
</style>