<template>
    <h1 class="bg-red-200">Hello world</h1>
    <nuxt-link :to=" '/projects/' + project.slug" v-for="project in projects.data" :key="project.id"> 
        <pre>{{  project.name }}</pre>
    </nuxt-link>
</template>

<script setup>
    const {find} = useStrapi();
    const projects = await find('projects', {populate:'deep'});
    console.log(projects);
</script>