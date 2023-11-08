<script lang="ts">
	import Icon from '@iconify/svelte';
	import ContactForm from './ContactForm.svelte';
</script>

<section class="  space-y-20">
	<div class="space-y-5">
		<h3 class="font-medium text-brand">CONTACT US</h3>
		<h4 class="text-xl font-semibold">Get in touch, let&apos;s help you.</h4>
	</div>

	<div class="lg:flex px-10 gap-x-10 space-y-8 lg:space-y-0">
		<div class="space-y-10 bg-bg-darker/20 p-6 font-light">
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

		<ContactForm />
	</div>
</section>
