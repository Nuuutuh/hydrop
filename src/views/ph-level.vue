<template>
     <div class="phgraph">
    <phlevel-graph/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import phlevelGraph from '@/components/phlevel-graph.vue';

export default defineComponent({
    name: "PhLevel",
    components: { 
      phlevelGraph
    },
});
</script>
