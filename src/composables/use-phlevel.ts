import { ref, computed } from 'vue';
import { useData } from '@/composables/use-data';

export function usePhlevel(){
    const { pHData } = useData();
    const chartOptions = ref({
     scales: {
        x: {
         title: {
             display: true,
            text: 'Time',
            },
        },
        y: {
            title: {
            display: true,
            text: 'pH Level',
            },
            suggestedMin: 0,
            suggestedMax: 14,
         },
        },
    });

    const chartData = computed(() => ({
    labels: pHData.value.map((entry) => entry.time),
    datasets: [
      {
        label: 'pH Level',
        data: pHData.value.map((entry) => entry.ph),
        borderColor: 'blue',
        borderWidth: 1,
        fill: false,
      },
    ],
  }));

  return {
    chartData,
    chartOptions,
  };
}