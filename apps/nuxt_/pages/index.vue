<template>
   <div class="flex items-center justify-center mt-10">
        <img class="rounded-full w-32 h-32 object-cover object-center mr-4" src="https://myuhziihakeikxhaporj.supabase.co/storage/v1/object/public/strapi-uploads/moi.jpg-1aab2f28577dbe6af5bb058ccd1f4d4f.jpg?updated_at=2023-03-03T19:25:10.927Z" alt="Photo de profil">
        <div class="text-center">
            <p class="text-3xl font-bold">Madi Steven</p>
            <p lass="text-3xl">Developpeur full-stack junior</p>
            <div class="mt-2">
                <a href="https://oxyzal.github.io/Portfolio/" class="text-gray-500 hover:text-black transition duration-500">Mon site internet</a>
            </div>
        </div>
    </div>
    <h2 class="text-center mt-20 text-2xl">Tous mes projets</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-20">
        <div v-for="project in projects.data" :key="project.id" class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
            <nuxt-link :to=" '/projects/' + project.slug">
            <div class="relative overflow-hidden">
                <img :src="project.image.url" alt="" class="w-full h-48 sm:h-56 md:h-64 object-cover object-center">
                <div class="absolute bottom-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-90 transition duration-300 ease-in-out">
                <div class="px-4 py-2 sm:px-6">
                    <h3 class="text-white font-bold text-lg sm:text-xl mb-2">{{ project.name }}</h3>
                    <p class="text-gray-200 text-sm sm:text-base">{{ project.description }}</p>
                    <div class="mt-4">
                    <div v-for="technology in project.technologies" :key="technology.id" class="inline-block mr-2">
                        <img :src="technology.logo.url" alt="" class="w-4 h-4 sm:w-6 sm:h-6 object-contain">
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </nuxt-link>
        </div>
    </div>

    <div v-if="projectsPerso">
        <h2 class="text-center mt-20 text-2xl">Projet Perso</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-20">
            <div v-for="projectPerso in projectsPerso.data" :key="projectPerso.id" class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
                <nuxt-link :to="'/projects/' + projectPerso.slug">
                <div class="relative overflow-hidden">
                    <img :src="projectPerso.image.url" alt="" class="w-full h-48 sm:h-56 md:h-64 object-cover object-center">
                    <div class="absolute bottom-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-90 transition duration-300 ease-in-out">
                    <div class="px-4 py-2 sm:px-6">
                        <h3 class="text-white font-bold text-lg sm:text-xl mb-2">{{ projectPerso.name }}</h3>
                        <p class="text-gray-200 text-sm sm:text-base">{{ projectPerso.description }}</p>
                        <div class="mt-4">
                        <div v-for="technology in projectPerso.technologies" :key="technology.id" class="inline-block mr-2">
                            <img :src="technology.logo.url" alt="" class="w-4 h-4 sm:w-6 sm:h-6 object-contain">
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </nuxt-link>
            </div>
        </div>
    </div>

    <div class="iim" v-if="projectsPro">
        <h2 class="text-center mt-20 text-2xl">Projet Pro</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-20">
            <div v-for="projectPro in projectsPro.data" :key="projectPro.id" class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
                <nuxt-link :to="'/projects/' + projectPro.slug">
                <div class="relative overflow-hidden">
                    <img :src="projectPro.image.url" alt="" class="w-full h-48 sm:h-56 md:h-64 object-cover object-center">
                    <div class="absolute bottom-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-90 transition duration-300 ease-in-out">
                    <div class="px-4 py-2 sm:px-6">
                        <h3 class="text-white font-bold text-lg sm:text-xl mb-2">{{ projectPro.name }}</h3>
                        <p class="text-gray-200 text-sm sm:text-base">{{ projectPro.description }}</p>
                        <div class="mt-4">
                        <div v-for="technology in projectPro.technologies" :key="technology.id" class="inline-block mr-2">
                            <img :src="technology.logo.url" alt="" class="w-4 h-4 sm:w-6 sm:h-6 object-contain">
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </nuxt-link>
            </div>
        </div>
    </div>

    <div v-if="projectsIIM">
        <h2 class="text-center mt-20 text-2xl">Projet IIM</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-20">
            <div v-for="projectIIM in projectsIIM.data" :key="projectIIM.id" class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
                <nuxt-link :to="'/projects/' + projectIIM.slug">
                <div class="relative overflow-hidden">
                    <img :src="projectIIM.image.url" alt="" class="w-full h-48 sm:h-56 md:h-64 object-cover object-center">
                    <div class="absolute bottom-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-90 transition duration-300 ease-in-out">
                    <div class="px-4 py-2 sm:px-6">
                        <h3 class="text-white font-bold text-lg sm:text-xl mb-2">{{ projectIIM.name }}</h3>
                        <p class="text-gray-200 text-sm sm:text-base">{{ projectIIM.description }}</p>
                        <div class="mt-4">
                        <div v-for="technology in projectIIM.technologies" :key="technology.id" class="inline-block mr-2">
                            <img :src="technology.logo.url" alt="" class="w-4 h-4 sm:w-6 sm:h-6 object-contain">
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </nuxt-link>
            </div>
        </div>
    </div>

</template>

<script setup>
    const {find} = useStrapi();
    const projects = await find('projects', {populate:'deep'});
    console.log(projects);

    const projectsPerso = ref();
    const projectsPro = ref();
    const projectsIIM = ref();

onMounted(async () => {

  projectsPerso.value = await find('projects',  {filters: {type: {$eq: "Perso"}}, populate: 'deep'});
  projectsPro.value = await find('projects',  {filters: {type: {$eq: "Pro"}}, populate: 'deep'});
  projectsIIM.value = await find('projects',  {filters: {type: {$eq: "IIM"}}, populate: 'deep'});
});


    
</script>