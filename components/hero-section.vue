<script lang="ts" setup>

const user = useUser()

</script>

<template>
  <div class="w-full h-screen flex flex-col gap-4 items-center justify-center">
    <HeroNavbar />
    <LogoutComp v-if="user" />
    <NuxtLink v-else to="/login" class="absolute p-4 rounded-full top-4 right-4 bg-slate-800 text-white">
      Login
    </NuxtLink>

    <h1 class="text-6xl font-semibold text-balance">Start to find your true one with a twist</h1>
    <p>
      find your niche not just in job but also in love
    </p>
    <button class="p-4 text-center rounded-full bg-pink-400">
      Find Now
    </button>
  </div>
</template>
