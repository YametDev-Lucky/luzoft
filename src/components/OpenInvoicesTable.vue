
<template>
        <TableExtended v-if="index == tabletab" :addPossible="index == 3" :headersData="item.headers"
          :dessertsData="item.desserts" :pageCount="Math.ceil(item.desserts.length / 10)" />
</template>

<script setup>

import { ref } from "vue";
import {  } from "module";
</script>