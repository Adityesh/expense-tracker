<script>
	import '../app.pcss';
</script>

<div class="h-screen w-screen bg-slate-950">
	<div class="max-w-screen-sm h-screen m-auto bg-slate-800 text-white flex flex-col items-stretch justify-between">
		<div class="h-16 bg-slate-700">Header</div>
		<slot/>
		<div class="h-16 bg-slate-700">Footer</div>
	</div>
</div>
