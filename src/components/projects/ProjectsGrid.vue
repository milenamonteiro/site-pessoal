<script>
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';

export default {
    components: { ProjectSingle },
    data: () => {
        return {
            projects,
            projectsHeading: 'Projetos Desenvolvidos',
        };
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    },
};
</script>

<template>
    <!-- Projects grid -->
    <section class="pt-10 sm:pt-14">
        <!-- Projects grid title -->
        <div class="text-center">
            <p
                class="font-general-medium text-2xl sm:text-4xl font-medium mb-4 text-ternary-dark dark:text-ternary-light">
                {{ projectsHeading }}
            </p>
        </div>
        <!-- Projects grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:gap-10">
            <ProjectSingle v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<style scoped></style>
