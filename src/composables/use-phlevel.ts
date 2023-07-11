import { computed } from 'vue';
import { useData } from '@/composables/use-data';
import { useScales } from '@/composables/use-scales';
import { useDatasets } from '@/composables/use-datasets';
export function usePhlevel() {
  const { pHData } = useData();
  const {scales} = useScales();
  const {datasets} = useDatasets();

  const chartOptions = computed(() => ({
    scales: scales.value,
  }));

  const chartData = computed(() => ({
    labels: pHData.value.map((entry) => entry.time),
    datasets: datasets.value,
  }));

  return {
    scales,
    chartOptions,
    chartData,
  };
}