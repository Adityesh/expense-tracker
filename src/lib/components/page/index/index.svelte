<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Login from './login.svelte';
	import Signup from './signup.svelte';
</script>

<Tabs.Root value="login" class="m-auto w-[400px]">
	<Tabs.List class="text-center">
		<Tabs.Trigger value="login">Login</Tabs.Trigger>
		<Tabs.Trigger value="signup">Signup</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="login"><Login /></Tabs.Content>
	<Tabs.Content value="signup"><Signup /></Tabs.Content>
</Tabs.Root>
