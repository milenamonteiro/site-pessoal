<script>
import feather from 'feather-icons';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Milena Monteiro, São Paulo, Brasil',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'milenamonteiro@protonmail.com',
					icon: 'mail',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse flex-row py-5 py-10 mt-10"
	>
		<ContactDetails :contacts="contacts" />
	</div>
</template>
