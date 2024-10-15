<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { PageData } from './$types';
	import LoginForm from './loginForm.svelte';

	export let data: PageData;
</script>

<Card.Root class="m-auto w-full">
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Enter your email and password to continue</Card.Description>
	</Card.Header>
	<Card.Content>
		<LoginForm data={data.form}/>
	</Card.Content>
	<Card.Footer>
		<p class="text-sm font-medium">
			Dont have an account yet?
			<a href="/register" class="text-primary">Register</a>
		</p>
	</Card.Footer>
</Card.Root>
