<script lang="ts">
	import Icon from '@iconify/svelte';
	import ContactForm from './ContactForm.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.contact',
				toggleActions: 'restart none none none'
			}
		});
		tl.from('.contact-section-title', { duration: 0.7, opacity: 0.2 })
			.from('.contact-title', {
				duration: 0.8,
				opacity: 0,
				top: -50,
				stagger: 1
			})
			.from('.form-info', {
				opacity: 0,
				duration: 0.6,
				height: 0
			})
			.from('.form', {
				opacity: 0,
				duration: 0.6,
				height: 0
			});
	});
</script>

<section class="  space-y-20 contact">
	<div class="space-y-5">
		<h3 class="font-medium text-brand contact-section-title">CONTACT US</h3>
		<h4 class="text-xl font-semibold contact-title">Get in touch, let&apos;s help you.</h4>
	</div>

	<div class="lg:flex lg:px-10 gap-x-10 space-y-8 lg:space-y-0">
		<div class="space-y-10 bg-bg-darker/20 p-6 font-light form-info overflow-hidden">
			<p class="font-bold">
				For enquiries, please fill out the form below and we will reach you shortly.
			</p>

			<div class=" space-y-4">
				<p class="text-lg font-semibold">Head Offices:</p>

				<div class="space-y-1">
					<p class="font-bold">ENUGU</p>
					<p>70 Nza Street, Independence Layout Enugu, Enugu State, Nigeria</p>
				</div>

				<div class="space-y-1">
					<p class="font-bold">ABUJA</p>
					<p>12 S. O. Williams Crescent, Off Anthony Enahoro Street, Utako, Abuja, Nigeria</p>
				</div>
			</div>

			<div class="space-y-4">
				<p class="text-lg font-semibold">Reach Us At:</p>

				<div class="space-y-2">
					<div class="flex items-center gap-2">
						<Icon icon="solar:phone-outline" />
						<p>+234-808-2215-556</p>
					</div>
					<div class="flex items-center gap-2">
						<Icon icon="solar:phone-outline" />
						<p>+234-803-3417-396</p>
					</div>
					<div class="flex items-center gap-2">
						<Icon icon="quill:mail" />
						<p>contactus@llnbassociates.com</p>
					</div>
					<div class="flex items-center gap-2">
						<Icon icon="quill:mail" />
						<p>nzubenwankwo@llnbassociates.com</p>
					</div>
				</div>
			</div>
		</div>

		<div class="form lg:w-[60%] overflow-hidden">
			<ContactForm />
		</div>
	</div>
</section>
