import { ref } from 'vue';

export function useScales(){
    
  const scales = ref({
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
  });

  return {
    scales,
  };
}