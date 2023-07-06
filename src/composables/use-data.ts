import { ref } from 'vue';
import DataEntry from '@/interface/interface'

export function useData() {
  const pHData = ref<DataEntry[]>([
    { time: '09:00 am', ph: 7.0 },
    { time: '10:00 am', ph: 6.5 },
    { time: '11:00 am', ph: 7.2 },
    { time: '12:00 pm', ph: 8.5 },
    { time: '01:00 pm', ph: 5.5 },
    { time: '02:00 pm', ph: 6.0 },
    { time: '03:00 pm', ph: 6.2 },
    { time: '05:00 pm', ph: 6.5 },
  ]);

  return {
    pHData,
  };
}