<template>
  <v-navigation-drawer
    v-model="display"
    style="padding: 20px;"
    class="d-flex sidebar"
    location="right"
    temporary
    width="364"
  >
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
        <p>Designated Invoices - Total Count:</p>
        <p>2</p>
      </v-col>

      <v-col>
        <p>Total Designated Amount:</p>
        <p>6,965.00</p>
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
            <p>$10,328.40</p>
          </div>
        </v-card-item>
        
        <v-card-item>
          <div class="d-flex justify">
            <b>Amount Applied: </b>
            <p>($7,055.00)</p>
          </div>
        </v-card-item>
        
        <v-card-item>
          <div class="d-flex justify">
            <b>MSF Free Sum: </b>
            <p>($73.20)</p>
          </div>
        </v-card-item>

        <v-divider />
        
        <v-card-item>
          <div class="d-flex justify">
            <b>Payment Amount Remaining: </b>
            <p>$3,200.20</p>
          </div>
        </v-card-item>
      </v-card>
    </div>

<!-- TABS -->
    <div style="margin-top: 20px; border: 1px solid grey;">
      <v-tabs
        direction="vertical"
        color="primary"
        v-model="tab"
      >
        <v-tab value="one" direction="horizontal">A/R ACCOUNT</v-tab>
        <v-tab value="two" direction="horizontal">CASH ACCOUNT</v-tab>
        <v-tab value="three" direction="horizontal">ORIGINAL PAYMENT</v-tab>
      </v-tabs>
      <v-window>
        <v-window-item
          v-for="i in 3"
          :key="i"
          :value="i"
        >
          <v-card>
            <v-card-text>
              11010 Accounts Receivable: Accounts Receivable Trade
            </v-card-text>
          </v-card>
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
        <v-text-field variant="underlined"></v-text-field>
      </v-card>
    </div>
  </v-navigation-drawer>
  
  <v-btn
    rounded="0"
    color="primary"
    @click.stop="display = !display"
    style="
      padding-left: 8px;
      padding-right: 8px;
      min-width: 0px;
      position: fixed;
      right: 0px;
    "
  >
    <v-icon v-if="display"> mdi-chevron-right </v-icon>
    <v-icon v-if="!display"> mdi-chevron-left </v-icon>
  </v-btn>
      
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      display: false,
    }
  },
  name: 'Sidebar',
  methods: {
    toggle() {
      this.display = !this.display;
    }
  }
}
</script>

<style>
/* .sidebar {
  width: 364px !important;
} */

.sidebartitle{
  font-size: 24px;
  justify-content: space-between;
}

.justify{
  font-size: 14px;
  justify-content: space-between;
}

.speccombobox {
  width: fit-content;
}

.speccombobox .v-field__input{
  color: white !important;
}
</style>