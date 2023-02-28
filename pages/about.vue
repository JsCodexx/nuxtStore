<template>
    <div>
        hi hell0
     {{ data }}
    </div>
</template>

<script setup>
const {data} = await  useFetch('/api/currency/PKR')

</script>
<style></style>