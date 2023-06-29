<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import { useRoute } from "vue-router";
import projects from '../data/projects';

export default {
    name: 'ProjectsPage',
    components: {
        ProjectHeader,
        ProjectGallery,
        ProjectInfo
    },
    setup() {
    },
    created() {
    },
    data: () => {
        const route = useRoute();
        const id = route.params.id;
        const project = projects[id-1];
        console.log(project);
        return {
            project,
        };
    },
    mounted() {
        feather.replace();
        console.log(this.$route.params.id);
    },
    updated() {
        feather.replace();
    },
    methods: {},
};
</script>

<template>
    <div v-if="project !== undefined">
        <div class="container mx-auto mt-10 sm:mt-20">
            <!-- Project header -->
            <ProjectHeader :singleProjectHeader="project.singleProjectHeader" />

            <!-- Project gallery -->
            <ProjectGallery :projectImages="project.projectImages" />

            <!-- Project information -->
            <ProjectInfo :projectInfo="project.projectInfo" />
        </div>
    </div>
    <div v-else class="p-5">
        <p class="p-5 text-ternary-light text-3xl">Projeto não encontrado!</p>
    </div>
</template>

<style scoped></style>
