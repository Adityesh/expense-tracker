<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<form class="m-auto flex flex-col items-center justify-center" method="post" action="?/login">
	<Input
		placeholder="Username*"
		class="mt-4 text-black"
		id="login-username"
		name="username"
		required
	/>
	<Input
		placeholder="Password*"
		class="mt-4 text-black"
		type="password"
		name="password"
		id="login-password"
		required
	/>
	<div class="mt-4">
		<Button class="bg-red-500" type="reset">Reset</Button>
		<Button class="bg-green-500" type="submit">Login</Button>
	</div>
</form>
