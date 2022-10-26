<template>
  <NotFound />
</template>
<script lang="ts" setup>
import { watch } from 'vue';
import { useRouter } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { watchRedirectRoutes } from './redirectRoutes';

const { NotFound } = DefaultTheme;
const router = useRouter();

watch(router.route, ({ path }) => {
  watchRedirectRoutes(path, router);
}, { immediate: true, deep: true });
</script>