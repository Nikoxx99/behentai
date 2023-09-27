<script setup>

const drawer = ref(null)

const {  data , signOut  } = useAuth()

</script>

<template>
    <v-app-bar :elevation="1">
        <v-toolbar-title>BH</v-toolbar-title>
        <v-spacer />
        <v-btn text @click="signOut">Salir</v-btn>
    </v-app-bar>
</template>