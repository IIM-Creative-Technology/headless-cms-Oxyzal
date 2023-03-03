// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/strapi" , "@nuxtjs/tailwindcss"],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: "/api",
        version: "v4",
    }
}); 
