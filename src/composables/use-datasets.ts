import { computed } from 'vue';
import { useData } from '@/composables/use-data';

export function useDatasets(){
    const { pHData } = useData();
    const datasets = computed(() => [
        {
          label: 'pH Level',
          data: pHData.value.map((entry) => entry.ph),
          borderColor: 'blue',
          borderWidth: 1,
          fill: false,
        },
      ]);

  return {
    datasets,
  };
}