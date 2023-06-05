<template>
  <v-app-bar height="40">
    <v-app-bar-title scroll-behavior="elevate">
      <div class="d-flex" style="justify-content: space-between;">
        <div>
          <v-icon icon="mdi-circle-slice-4" />

          
        </div>
        <p style="padding-right: 20px; color: red;">
          {{ errorString }}
        </p>
      </div>
    </v-app-bar-title>
    
    <v-progress-linear
      v-if="loading"
      indeterminate
      style="position: absolute; top: calc(100% - 4px); width: 100%;"
    />
  </v-app-bar>
</template>

<script>

export default {
  name: "AppBar",
  props: {
    errorString: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  data(props) {
    return {
      error: props.errorString,
    }
  }
}

</script>
