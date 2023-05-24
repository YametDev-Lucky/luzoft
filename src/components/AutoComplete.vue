<template>
  <div class="autocomplete">
    <v-text-field
      v-model="query"
      v-on:input="handleInput"
      v-on:focus="showSuggestions"
      v-on:blur="hideSuggestions"
      density="compact"
      placeholder="Search"
      style="z-index: 1000; overflow: hidden;"
    >
      <template v-slot:prepend-inner>
        <div style="position: fixed; width: 100000px; padding-left: 6px">
          <span>
            {{ query }}
          </span>
          <span style="background-color: gray">
            {{ fillQuery }}
          </span>
        </div>
      </template>
    </v-text-field>

    <ul v-show="suggestions">
      <!-- <p>You are searching for {{ query }}</p> -->
      <li v-for="suggestion in suggestions" v-on:click="handleSelect(suggestion)">
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Autocomplete",
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      headers: [
        'autoCompleted',
        'query',
        'tempQuery',
        'willQuery',
      ],
      query: "",
      focus: false,
      tempQuery: "",
      fillQuery: "",
      target: null,
      suggestions: [],
    };
  },
  methods: {
    handleInput(event) {
      this.target = event.target;

      const newSuggestion = this.items.filter((item) =>
        item.toLowerCase().startsWith(this.query.toLowerCase())
      );

      if(newSuggestion.length){
        const flag = this.tempQuery.includes(this.query);
        this.suggestions = newSuggestion;
        if(flag){
          if(this.fillQuery.length)
            this.query = this.tempQuery;
          this.fillQuery = "";
          this.tempQuery = this.query;
          return;
        }
        this.tempQuery = this.query;
        this.fillQuery = newSuggestion[0].slice(this.query.length);
      } else {
        this.fillQuery = "";
        this.tempQuery = this.query;
      }
    },
    handleSelect(suggestion) {
      this.query = suggestion;
      this.hideSuggestions();
    },
    showSuggestions() {
      this.focus = true;
    },
    hideSuggestions() {
      this.query += this.fillQuery;
      this.fillQuery = "";
      this.focus = false;
      setTimeout(() => {
        this.suggestions = [];
      }, 200);
    },
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