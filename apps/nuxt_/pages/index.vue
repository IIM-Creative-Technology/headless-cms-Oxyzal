<template>
    <h1>Hello world</h1>
    <nuxt-link to="/" v-for="project in projects.data" :key="project.id"> 
        <pre>{{  project.name }}</pre>
    </nuxt-link>
</template>

<script setup>
    const {find} = useStrapi();
    const projects = await find('projects', {populate:'deep'});
    console.log(projects);
</script>