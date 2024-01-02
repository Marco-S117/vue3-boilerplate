<template>
  <section class="flex flex-col items-start gap-4 py-8">
    <p class="text-h4 case-upper">
      Typography
    </p>
    <p class="text-hero">
      This is HERO text
    </p>
    <p class="text-h1">
      this is H1 text
    </p>
    <p class="text-h2">
      this is H2 text
    </p>
    <p class="text-h3">
      this is H3 text
    </p>
    <p class="text-h4">
      this is H4 text
    </p>
    <p class="text-h5">
      this is H5 text
    </p>
    <p class="text-h6">
      this is H6 text
    </p>
    <p class="text-base tablet:text-h4 laptop:text-h2">
      Different font size based on breakpoint<br>
      <strong class="font-bold">Resize your screen</strong><br>
      and see
      <em class="italic">what happen</em>.
    </p>
    <RouterLink to="/">
      CTA
    </RouterLink>
  </section>
</template>
