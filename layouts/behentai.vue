<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="BH" elevation="0">
      <v-spacer />
      <NuxtLink to="/register">
        <v-btn v-if="isNotRegisterPage" color="primary" variant="tonal" rounded="xl" class="mr-2" >
          Registrate
        </v-btn>
      </NuxtLink>
      <NuxtLink to="/login">
        <v-btn v-if="isNotLoginPage" color="primary" variant="text" rounded="xl">
          Ingresa
        </v-btn>
      </NuxtLink>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <slot />
    </v-main>
  </v-layout>
</template>
<script setup>
const router = useRouter();
let isNotLoginPage = ref(false);
let isNotRegisterPage = ref(false);
isNotLoginPage = router.currentRoute.value.path !== "/login";
isNotRegisterPage = router.currentRoute.value.path !== "/register";

</script>
