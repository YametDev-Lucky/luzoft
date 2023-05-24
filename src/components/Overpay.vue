<template>
  <v-card style="padding: 20px;">
    <v-card-title>
      <span class="text-h5">Client Overpay</span>
    </v-card-title>
    <v-card-text>
      <v-container>
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
  export default {
    name: 'Overpay',
    props: ['showbox', 'rejected', 'accepted'],
    data: (props) => ({
      dialog: props.showbox,
      cancelClicked: false,
      addValue: {
        inactive: false,
        amount: null,
        invoice: null,
        refund: null,
      }
    }),
    watch: {
      dialog (state) {
        if(!state){
          if ( this.cancelClicked ) {
            this.$props.accepted();
          }else {
            this.$props.rejected();
          }
        }
      }
    },
  }
</script>

<style>
.sec_title{
  color: rgb(96, 119, 164);
  background-color: rgb(224, 230, 239);
  padding: 5px;
  font-weight: 300;
}
.sec_body{
  color: black;
  font-weight: 100;
  padding: 10px;
}
</style>