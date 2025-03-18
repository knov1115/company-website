<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import 'filepond/dist/filepond.min.css';
	let { children } = $props();
</script>

<Navbar />
{@render children()}
