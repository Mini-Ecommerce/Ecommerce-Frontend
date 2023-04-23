<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <div class="card">
        <img :src="product.imageUrl" alt="Product image">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { Product } from "~/types/Products";

const { pending, data: products } = await useLazyAsyncData<Product[]>(
  "products",
  () => $fetch("http://localhost:3333/products")
);
</script>


<style scoped>
.card{
  border:1px solid red;
}


</style>
