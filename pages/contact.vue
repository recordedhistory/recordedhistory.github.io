<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact Us</template>
      <template v-slot:desc>If you have questions or you would like to book an appointment, please use the contact form below.</template>
    </LandingSectionhead>

    <div class="mx-auto max-w-4xl mt-16">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5nYW_tRrtx1b30kNHwof-YHAtIB0vRvWQv5QU0G-WPQ5j_g/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  </LandingContainer>
</template>
