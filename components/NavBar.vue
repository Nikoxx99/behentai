<script setup>

const drawer = ref(null)

const {  data , signOut  } = useAuth()

</script>

<template>
    <v-app-bar :elevation="1">
        <v-toolbar-title>Nuxt3-Vuetify3-Prisma-Auth Boilerplate!</v-toolbar-title>
        <v-spacer />
        <v-btn text @click="signOut">Sign Out</v-btn>
    </v-app-bar>
</template>