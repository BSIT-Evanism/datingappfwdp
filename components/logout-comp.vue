<script lang="ts" setup>
async function logout() {
  await $fetch("/api/logout", {
    method: "POST"
  });
  await navigateTo("/login");
}
</script>

<template>
  <form @submit.prevent="logout">
    <button class="absolute p-4 rounded-full top-4 right-4 bg-slate-800 text-white">Sign out</button>
  </form>
</template>
