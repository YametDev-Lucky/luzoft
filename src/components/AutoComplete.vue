<template>
  <v-autocomplete
    v-model="query"
    :items="labels"
    append-inner-icon="mdi-magnify"
    auto-select-first
    class="flex-full-width"
    density="comfortable"
    item-props
    menu-icon=""
    placeholder="Search"
    hide-no-data
    rounded
    theme="light"
    variant="outlined"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "Autocomplete",
  props: {
    items: {
      type: Array,
      default: [],
    },
    payor: {
      type: String
    }
  },
  data(props) {
    return {
      itmes: props.items,
      labels: [],
      query: "",
    };
  },
  methods: {
    handleInput(event) {
      this.labels = event.target.value.length ? this.items : [];
    },
  }
};
</script>

<style>
  .autocomplete ul {
    border: 1px solid #ccc;
    background-color: white;
    border-top: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    list-style-type: none;
    margin: 0;
    padding: 0px;
    position: absolute;
    width: auto;
    z-index: 1020;
  }
  .autocomplete p:only-of-type {
    padding: 5px;
  }
  .autocomplete li {
    padding: 5px;
  }
  .autocomplete ul:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .autocomplete li:hover {
    background-color: lightgrey;
  }
  .v-input__details{
    min-height: 0px;
    height: 0px;
    padding: 0px;
  }
</style>