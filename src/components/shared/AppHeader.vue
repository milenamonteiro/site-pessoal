<script>

export default {
    components: {
        // Button,
    },
    data() {
        return {
            isOpen: false,
            modal: false,
        };
    },
    methods: {
        showModal() {
            if (this.modal) {
                // Stop screen scrolling
                document
                    .getElementsByTagName('html')[0]
                    .classList.remove('overflow-y-hidden');
                this.modal = false;
            } else {
                document
                    .getElementsByTagName('html')[0]
                    .classList.add('overflow-y-hidden');
                this.modal = true;
            }
        },
    },
    updated() {
    },
};
</script>

<template>
    <nav id="nav" class="sm:container sm:mx-auto content-center">
        <!-- Header start -->
        <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
            <!-- Header menu links and small screen hamburger menu -->
            <div class="flex justify-between items-center px-4 sm:px-0">
                <!-- Header logos -->
                <div>
                    <router-link to="/" class="router-link-active router-link-exact-active text-3xl font-general-medium">Milena Monteiro
                    </router-link>
                </div>
                <!-- Small screen hamburger menu -->
                <div class="sm:hidden">
                    <button @click="isOpen = !isOpen" type="button" class="focus:outline-none" aria-label="Hamburger Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
                            <path v-if="isOpen" fill-rule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                clip-rule="evenodd"></path>
                            <path v-if="!isOpen" fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Header links -->
            <div :class="isOpen ? 'block' : 'hidden'"
                class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                <router-link to="/"
                    class="font-general-medium block text-left text-3xl font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300  sm:mx-4 mb-2 sm:py-2"
                    aria-label="Início">Início</router-link>
                <router-link to="/projects"
                    class="font-general-medium block text-left text-3xl font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                    aria-label="Projetos">Projetos</router-link>
                <router-link to="/about"
                    class="font-general-medium block text-left text-3xl font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                    aria-label="Sobre">Sobre</router-link>
                <router-link to="/contact"
                    class="font-general-medium block text-left text-3xl font-medium text-primary-dark dark:text-ternary-light hover:text-pink-600 dark:hover:text-pink-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                    aria-label="Contato">Contato</router-link>
                <div class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                    
                </div>
            </div>
            <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
            </div>
        </div>

    </nav>
</template>

<style scoped>

#nav a.router-link-exact-active {
    @apply text-pink-700;
    @apply dark:text-pink-400;
    @apply font-medium;
}
</style>
