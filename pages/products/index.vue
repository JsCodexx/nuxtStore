<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="item in products" :key="item.id">
      <productCard :product="item"/>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
//fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
    title:'this is merch',
    meta:[
        {name:'description' , content:'nuxt 3'}
    ]
})
</script>

<style scoped></style>
