<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Our work</template>
      <template v-slot:desc>Recorded History is based in Austin, Texas. Our mission is to preserve the sound of you and your loved ones' memories.</template>
    </LandingSectionhead>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div class="flex gap-4 items-start">
        <div>
          <img title="David Lapier" class="mb-4" src="/assets/img/IMG_1024.jpg"/>
          <iframe title="David Lapier" width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1197840955%3Fsecret_token%3Ds-1mcca0gwGFV&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div>
          <img title="Janet Dunkelberg" class="mb-4" src="/assets/img/IMG_0093.jpeg"/>
          <iframe title="Janet Dunkelberg" width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1197841225%3Fsecret_token%3Ds-gLGGvpTRiFs&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div>
          <img title="Steven Wright" class="mb-4" src="/assets/img/IMG_0146-2.jpg"/>
          <iframe title="Steven Wright" width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1197841135%3Fsecret_token%3Ds-IQYz4O69Bwq&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
