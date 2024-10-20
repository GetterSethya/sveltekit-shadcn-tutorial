<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { registerSchema, type RegisterSchema } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';

	interface Props {
		data: SuperValidated<Infer<RegisterSchema>>;
	}

	let { data }: Props = $props();

	const form = superForm(data, {
		validators: zodClient(registerSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form action="/register" method="post" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control >
			{#snippet children({ attrs })}
						<Form.Label>Email</Form.Label>
				<Input {...attrs} bind:value={$formData.email} />
								{/snippet}
				</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="name">
		<Form.Control >
			{#snippet children({ attrs })}
						<Form.Label>Name</Form.Label>
				<Input {...attrs} bind:value={$formData.name} />
								{/snippet}
				</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control >
			{#snippet children({ attrs })}
						<Form.Label>Password</Form.Label>
				<Input type="password" {...attrs} bind:value={$formData.password} />
								{/snippet}
				</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="passwordConfirm">
		<Form.Control >
			{#snippet children({ attrs })}
						<Form.Label>Confirm Password</Form.Label>
				<Input type="password" {...attrs} bind:value={$formData.passwordConfirm} />
								{/snippet}
				</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class="w-full">Register</Form.Button>
</form>
