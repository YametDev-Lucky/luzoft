<template>
  <v-card style="padding: 20px;">
    <v-card-title>
      <b><span class="text-h5">Client Overpayment</span></b>
    </v-card-title>

    <div class="d-flex">
      <v-btn class="btn_over btn_blue" @click="close">Save</v-btn>
      <v-btn class="btn_over btn_white" @click="close">Cancel</v-btn>
    </div>

    <v-card-text class="sec_title">Primary Information</v-card-text>
    <div class="sec_body">
      <v-row>
        <v-col cols="6">
          <v-card-text>CLIENT OVERPAYMENT NUMBER</v-card-text>
          <b>To Be Generated</b>
        </v-col>
        <v-col cols="6">
          <v-checkbox>
            INACTIVE
          </v-checkbox>
        </v-col>
      </v-row>
    </div>

    <v-card-text class="sec_title">Additional Funds</v-card-text>
    <div class="sec_body">
      <v-row>
        <v-col cols="6">
          <v-card-text>ADDITIONAL FUNDS TRANSACTION</v-card-text>
        </v-col>
        <v-col cols="6">
          <v-card-text>ADDITIONAL FUNDS CLIENT</v-card-text>
        </v-col>
      </v-row>
    </div>
    
    <v-card-text class="sec_title">Overpaid Transaction</v-card-text>
    <div class="sec_body">
      <v-row>
        <v-col cols="6">
          <v-card-text>
            OVERPAID INVOICE
            <span :color="red">
              *
            </span>
          </v-card-text>
          <v-combobox density="compact" variant="outlined"/>

          <v-card-text>OVERPAID TRAVELLER</v-card-text>
          <br><br>
          
          <v-card-text>OVERPAID WEEKLY SCHEDULE</v-card-text>
          <br><br>
          
          <v-card-text>OVERPAID FACILITY</v-card-text>
          <br><br>
        </v-col>
        <v-col cols="6">
          <v-card-text>
            OVERPAID AMOUNT
            <span :color="red">
              *
            </span>
          </v-card-text>
          <v-text-field density="compact" variant="outlined"/>
          
          <v-card-text>OVERPAID AMOUNT REMAINING</v-card-text>
          <v-card-text>{{ "0.00" }}</v-card-text>
          <br>
          
          <v-card-text>OVERPAID WEEK ENDING</v-card-text>
          <v-card-text>{{ " " }}</v-card-text>
          <br>
        </v-col>
      </v-row>
    </div>
    
    <v-card-text class="sec_title">Resolution</v-card-text>
    <div class="sec_body">
      <v-row>
        <v-col cols="6">
          <v-card-text>RESOLUTION TYPE</v-card-text>
          <b>Unknown</b>
          <br><br>

          <v-card-text>RESOLUTION REFUND AMOUNT</v-card-text>
          <b>0.00</b>
          <br><br>

          <v-card-text>CUSTOMER REFUND TRANSACTION NUMBER</v-card-text>
          <v-combobox density="compact" variant="outlined"/>
        </v-col>
        <v-col cols="6">
          <v-card-text>RESOLUTION APPLIED AMOUNT</v-card-text>
          <b>0.00</b>
        </v-col>
      </v-row>
    </div>

  </v-card>
</template>

<script>
  export default {
    name: 'AddOverpay',
    props: ['close'],
    data: (props) => ({
    }),
  }
</script>

<style>
.v-card-text {
  margin-top: 10px;
}
.sec_title{
  color: rgb(96, 119, 164);
  background-color: rgb(224, 230, 239);
  margin-top: 5px;
  padding: 5px;
  font-weight: 300;
}
.sec_body{
  color: black;
  font-weight: 100;
  padding: 10px;
}
.btn_over {
  margin : 5px;
  border-radius: 0px;
}
.btn_blue {
  background-color: dodgerblue;
}
.btn_white {
  background-color: white;
}
</style>