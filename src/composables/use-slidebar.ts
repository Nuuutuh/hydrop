import { ref, watch } from 'vue';
import { RouteLocationNormalized } from 'vue-router';

export default function useSidebar(route: RouteLocationNormalized) {
  const isExpanded = ref(localStorage.getItem('is_expanded') === 'true');

  const toggleMenu = () => {
    isExpanded.value = !isExpanded.value;
    localStorage.setItem('is_expanded', String(isExpanded.value));
  };

  const routeChanged = () => {
    if (isExpanded.value) {
      isExpanded.value = false;
      localStorage.setItem('is_expanded', 'false');
    }
  };

  watch(route, routeChanged);

  return {
    isExpanded,
    toggleMenu,
  };
}
