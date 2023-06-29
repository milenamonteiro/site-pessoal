<script>
import feather from 'feather-icons';

export default {
    name: 'HomePage',
    methods: {},
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script>

<template>
    <section class="">
        <div class="grid grid-flow-row-dense items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">

            <!-- Banner left contents -->
            <h1
                class="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl font-general-medium text-4xl md:text-4xl xl:text-6xl text-center sm:text-left text-ternary-dark dark:text-primary-light">
                Olá! Sou
                <span class="text-teal-500 dark:text-teal-400">Milena Monteiro</span>, sou desenvolvedora Full Stack.
            </h1>

            <div class="order-1 md:order-2 place-content-center self-center">
                <img class="col-span-1 rounded-full object-contain w-16 md:w-32 lg:w-48" src="@/assets/images/profile.jpeg" alt="Developer" />
            </div>

        </div>
        <div class="space-y-6 items-center text-center md:text-left md:space-y-0 md:space-x-4 content-center">
            <div
                class="group inline-flex items-center rounded-full px-6 py-1.5 font-general-medium bg-dark text-light dark:bg-gray-200 dark:text-light hover:bg-slate-700">
                <button download="Milena-CV.pdf" href="/files/cv.pdf"
                    class="group inline-flex items-center rounded-full px-6 py-1.5 font-general-medium transition bg-dark text-white dark:bg-gray-200 dark:text-ternary-dark hover:bg-slate-700"
                    aria-label="Download CV">
                    <i data-feather="arrow-down-circle"
                        class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100 text-ternary-dark"></i>
                    <span class="text-md sm:text-xl font-general-medium duration-100 dark:text-ternary-dark text-2xl">Baixar
                        currículo</span></button>
            </div>
            <div
                class="items-center  group items-baseline inline-flex content-center rounded-full px-4 py-1.5 text-xl sm:text-xl font-general-medium transition text-white">
                <router-link to="/about"
                    class="button group inline-flex items-center px-6 py-1.5 font-general-medium transition dark:text-ternary-light"
                    aria-label="Sobre">
                    <span class="text-xl sm:text-2xl font-general-regular duration-100 text-ternary-light text-3xl">Mais
                        sobre
                        mim
                    </span>
                    <i data-feather="chevron-right"
                        class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100 text-ternary-light">
                    </i>
                </router-link>
            </div>

        </div>


    </section>
</template>

<style scoped></style>
