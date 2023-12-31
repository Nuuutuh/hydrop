<template>
  <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Vue">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <i class="pi pi-angle-double-right"></i>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <i class="pi pi-home"></i> 
        <span class="text">Home</span>
      </router-link>
      <router-link to="/about" class="button">
        <i class="pi pi-info-circle"></i> 
        <span class="text">About</span>
      </router-link>
      <router-link to="/team" class="button">
        <i class="pi pi-users"></i> 
        <span class="text">Team</span>
      </router-link>
      <router-link to="/contact" class="button">
        <i class="pi pi-envelope"></i> 
        <span class="text">Contact</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/settings" class="button">
        <i class="pi pi-cog icon"></i> 
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { RouteLocationNormalized } from 'vue-router';
import useSidebar from '@/composables/use-slidebar';

export default defineComponent({
  name: 'SideBar',
  components: {
    RouterLink,
  },
  setup() {
    const route: RouteLocationNormalized = useRoute();
    const { isExpanded, toggleMenu } = useSidebar(route);
    const logoURL = '/assets/logo.png';

    return {
      isExpanded,
      logoURL,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;
  .flex {
    flex: 1 1 0%;
  }
  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }
  .pi-angle-double-right {
    font-size: 2.5rem;
    color: green;
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;
    .menu-toggle {
      transition: 0.2s ease-in-out;
      .pi-angle-double-right {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .pi-angle-double-right {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;
      .pi {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .pi,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .pi,
        .text {
          color: var(--primary);
        }
      }
    }
  }
  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }
  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }
    .button {
      .pi {
        margin-right: 1rem;
      }
    }
    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>