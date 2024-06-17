<script setup lang="ts">

const route = useRoute()

const user = useUser()

</script>

<template>
  <div v-if="user">
    Hello {{ user.name }}
    <div class="">
      <LogoutComp />
    </div>
  </div>
  <div v-else>
    Not Logged In
  </div>
</template>
