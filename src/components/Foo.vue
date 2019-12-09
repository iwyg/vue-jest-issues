<template>
<div>
  <v-container>
    <v-btn>{{name}}</v-btn>
  </v-container>
</div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String as () => string,
      default: () => 'foo',
    },
  },
});
</script>