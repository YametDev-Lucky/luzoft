<template>
  <v-autocomplete
    v-model="query"
    :items="items"
    append-inner-icon="mdi-magnify"
    auto-select-first
    class="flex-full-width"
    density="comfortable"
    item-props
    menu-icon=""
    placeholder="Search Luzoft"
    rounded
    theme="light"
    variant="outlined"
  />
</template>

<script>
export default {
  name: "Autocomplete",
  props: ['items'],
  data(props) {
    return {
      labels: props.items,
      query: "",
    };
  },
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