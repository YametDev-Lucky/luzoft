<template>
  <v-app-bar>
    <v-app-bar-title>
      <div class="d-flex" style="justify-content: space-between;">
        <div>
          <v-icon icon="mdi-circle-slice-4" />

          Base Preset
        </div>
        <p style="padding-right: 20px; color: red;">
          {{ errorString }}
        </p>
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>

export default {
  name: "AppBar",
  props: {
    errorString: {
      type: String,
      default: "",
    }
  },
  data(props) {
    return {
      error: props.errorString,
    }
  }
}

</script>
