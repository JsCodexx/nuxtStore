<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4">
      <NuxtLink to="/products" class="font-bold">Nuxt dojo Merch</NuxtLink>
    </nav>
  </header>

  <div class="container mx-auto p-4"><slot /></div>

  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">HOME</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products" class="rounded-full">Products</NuxtLink></li>

    </ul>
  </footer>
</template>

<style>
.router-link-exact-active {
  color: green;
}
</style>
