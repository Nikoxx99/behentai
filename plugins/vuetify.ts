// @ts-nocheck

import { createVuetify } from "vuetify"
import { fa } from "vuetify/iconsets/fa"
import { aliases, mdi } from "vuetify/lib/iconsets/mdi"

// import from vuetify/locale to specify vuetify language
// Example for Spanish language:
// import { es } from 'vuetify/locale'

import "@mdi/font/css/materialdesignicons.css"
import "@fortawesome/fontawesome-free/css/all.css"

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        //Use your custom vuetify themes:
        theme: {
            defaultTheme: "dark",
            themes: {
                customDark: {
                    dark: true,
                    colors: {
                        primary: "#AA00FF",
                        secondary: "#03dac6",
                        error: "#f44336",
                        info: "#2196F3",
                        success: "#4caf50",
                        warning: "#fb8c00",
                    },
                },
              },
        },
        Icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
              mdi,
              fa,
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})