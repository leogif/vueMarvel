<template>
	<md-card class="card-default">
		<h2>{{titulo}}</h2>
		<img class="imagem-quadrinho" :src="imagem"/>
		<p>{{descricao}}</p>
	</md-card>
</template>

<script>
	export default {
		name:'quadrinho',
		props: {
			imagem: {
				
			}
		}
	}
</script>