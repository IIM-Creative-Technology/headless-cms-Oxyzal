<template>
    <div v-if="project">
        {{ project.name }}
    
        <div v-for="technology in project.technologies" :key="technology.id">
            <img :src="technology.logo.url" alt="">
        </div>
</div>
</template>

<script setup>    
    const {findOne} = useStrapi();
    const route = useRoute()
    const project = ref()

    onMounted(async () => {
        project.value = await findOne(`projects?filters[slug]=${route.params.slug}&populate=deep`);
        project.value = project.value.data[0]
    })
    console.log(project)
</script>