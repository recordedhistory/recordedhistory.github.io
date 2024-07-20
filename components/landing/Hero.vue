<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full scale-125"
        src="~/assets/img/IMG_0132.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
        title="microphone"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        We record your stories in your voice
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Through a high-quality interview, you or your loved ones' memories are brought to life in curated candor
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/contact"
          rel="noopener"
          >Get started</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="/about"
          >Listen to our work</LandingLink
        >
      </div>
    </div>
  </main>
</template>
