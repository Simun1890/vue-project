<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/tasks">Tasks</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f6f8;
  }

  nav {
    background-color: #2c3e50;
    padding: 1rem;
  }

    nav a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      font-weight: bold;
    }

      nav a.router-link-active {
        text-decoration: underline;
      }

  main {
    padding: 2rem;
  }
</style>
