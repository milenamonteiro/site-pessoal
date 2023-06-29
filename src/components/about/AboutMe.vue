<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Sou estudante de Ciência da Computação na USP de Ribeirão Preto e possuo formação profissional em desenvolvimento de software. Meu principal foco é o desenvolvimento web e de APIs, e estou sempre aberta a novas experiências de aprendizado.',
				},
				{
					id: 2,
					bio:
						'Desde minha formação técnica em informática no ensino médio, a programação se tornou uma das minhas grandes paixões. Como uma pessoa artística e exploradora, encontro uma forma de me expressar e me conectar com os outros através da aprendizagem e desenvolvimento de novas coisas nesse vasto campo da tecnologia.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
