<script>
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';
import { Transition } from 'vue';
import feather from 'feather-icons';

export default {
    components: {
        AppHeader,
        AppFooter,
        Transition
    },
    data: () => {
        return {
        };
    },
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
        <!-- App header -->
        <AppHeader />

        <!-- Render active component contents with vue transition -->
        <Transition name="fade" mode="out-in">
            <router-view />
        </Transition>
        
        <!-- App footer -->
        <AppFooter />
</template>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
