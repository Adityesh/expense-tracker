<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<form class="m-auto flex flex-col items-center justify-center" method="post" action="?/signup">
	<Input placeholder="Name*" class="mt-4 text-black" id="signup-name" required name="name" />
	<Input
		placeholder="Username*"
		class="mt-4 text-black"
		id="signup-username"
		required
		name="username"
	/>
	<Input
		placeholder="Password*"
		class="mt-4 text-black"
		type="password"
		id="signup-password"
		required
		name="password"
	/>
	<div class="mt-4">
		<Button class="bg-red-500" type="reset">Reset</Button>
		<Button class="bg-green-500" type="submit">Signup</Button>
	</div>
</form>
