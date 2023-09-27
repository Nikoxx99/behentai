<script setup>

const showToast = inject('showToast')

definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    }
})

const username = ref('')
const email = ref('')
const password = ref('')

const form = ref(false)
const rules = ref({
    required: v => !!v || 'Field is required',
    email: v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
})

const register = async () => {
    const { data, error } = await useFetch(`/api/auth/register`, {
        method: "POST",
        body: {
            name: username.value,
            email: email.value,
            password: password.value
        }
    })

    if (error.value) {
        showToast(error.value.statusMessage, 'error')
        return
    }
    showToast(data.value.message)
    await navigateTo('/auth/login')
}
</script>

<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-hover v-slot="{ isHovering, props }">
      <v-card 
        title="Crear cuenta"
        theme="customDark"
        v-bind="props"
        :elevation="isHovering ? 24 : 6"
        rounded="xl"
        width="400"
        class="mx-auto pa-10"
      >
        <v-form v-model="form" @submit.prevent="register">
          <v-text-field
            v-model="username"
            label="Username"
            variant="solo-filled"
            :rules="[rules.required]"
          />

          <v-text-field
            v-model="email"
            variant="solo-filled"
            label="Email"
            type="email"
            :rules="[rules.required, rules.email]"
          />

          <v-text-field
            v-model="password"
            variant="solo-filled"
            label="Password"
            type="password"
            :rules="[rules.required]"
          />

          <v-btn
            :disabled="!form"
            type="submit"
            color="primary" 
            block
            class="mt-2"
          >
            Crear Cuenta
          </v-btn>
        </v-form>
        <v-btn color="primary" variant="text" block class="mt-2" to="/auth/login" nuxt>Ingresa</v-btn>
      </v-card>
    </v-hover>
  </div>
</template>