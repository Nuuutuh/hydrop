<template>
  <div class="home">
    <dl>
      <router-link to="/ph" class="button">
        <div v-ripple class="p-ripple card shadow-2 styled-box-green">
          <i class="fa-solid fa-droplet">
            <span class="text">PhLevel</span> 
          </i>
      </div>
      </router-link>
    </dl>
    <dl>
      <router-link to="/dont" class="button2">
        <div v-ripple class="p-ripple card shadow-2 styled-box-orange">
          <i class="pi pi-times-circle">
            <span class="text">Dont Click!</span>
          </i>
        </div>
      </router-link>
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',

});
</script>

<style lang="scss" scoped>
.button {
      .card {
        margin-top: 3rem;
      }
      .styled-box-green{
        background: rgb(195, 243, 192);
      }
      .fa-solid {
        color: rgb(71, 168, 81);
        margin-top: 3rem;
        margin-right: 1rem;
        font-size: 5rem;
      }
      .text{
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      }

}

.button2{
      .card{
        background: rgb(195, 243, 192);
      }
      .card{
        margin-top: 3rem;
      }
      .pi-times-circle{
        color: red;
        margin-top: 3rem;
        margin-left: 0.1rem;
        margin-right: 1rem;
        font-size: 5rem;
      }
        .text{
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      }
}
</style>