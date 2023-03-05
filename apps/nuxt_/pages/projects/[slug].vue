<template>
    <div v-if="project" class="flex flex-col items-center mt-8">
  <h1 class="text-4xl font-bold">{{ project.name }}</h1>
  <div class="flex flex-col sm:flex-row mt-4">
    <img :src=" project.image.url " alt="{{ project.name }}" class="w-full sm:w-1/3">
    <div class="flex flex-col sm:ml-8 mt-4 sm:mt-0 sm:w-2/3 justify-center">
      <p class="text-lg">{{ project.description }}</p>
      <div class="mt-4 flex flex-wrap">
        <div v-for="technology in project.technologies" :key="technology.id" class="m-2">
            <p class="text-center">{{ technology.name }}</p>
          <img :src="technology.logo.url" alt="{{ technology.name }}" class="w-16 h-16 object-contain">
        </div>
      </div>
      <div v-if="project.link" class="flex justify-center mt-4">
        <a :href=" project.link " class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Lien vers le site
        </a>
    </div>  
    <div class="flex justify-center mt-4" v-else>
        <button class="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded cursor-not-allowed">
            Pas de site!
         </button>
    </div>
    </div>
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