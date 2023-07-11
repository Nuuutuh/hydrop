<template>
  <div class="ph-graph">
    <Chart type="line" :options="chartOptions" :data="chartData" />
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { Chart, registerables } from 'chart.js';
import PrimeVueChart from 'primevue/chart';
import { usePhlevel } from '@/composables/use-phlevel';

Chart.register(...registerables);

export default defineComponent({
  name: 'pHGraph',
  components: {
    Chart: PrimeVueChart,
  },
  setup() {
    const { chartData, chartOptions, } = usePhlevel();

    return {
      chartData,
      chartOptions,
    };
  },
});
</script>

  