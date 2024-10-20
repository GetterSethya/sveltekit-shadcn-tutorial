<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { PageData } from './$types';
	import RegisterForm from './registerForm.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<Card.Root class="m-auto w-full">
	<Card.Header>
		<Card.Title>Register</Card.Title>
		<Card.Description>Enter your details to continue</Card.Description>
	</Card.Header>
	<Card.Content>
		<RegisterForm data={data.form}/>
	</Card.Content>
	<Card.Footer>
		<p class="text-sm font-medium">
			Already have an account?
			<a href="/login" class="text-primary">Login</a>
		</p>
	</Card.Footer>
</Card.Root>
