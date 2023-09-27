<template>
  <div>
    <h1>Register page</h1>
    <p>{{ allUsers }}</p>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: "behentai",
  });
  const prisma = usePrisma()
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
</script>