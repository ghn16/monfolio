<template>
  <header class="border-b border-border-subtle bg-bg-primary">
    <nav class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-display font-semibold text-text-primary">
          Monfolio
        </NuxtLink>
        
        <!-- Navigation -->
        <div class="flex items-center gap-8">
          <NuxtLink 
            to="/" 
            class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Accueil
          </NuxtLink>
          
          <NuxtLink 
            to="/login" 
            class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Connexion
          </NuxtLink>
          
          <NuxtLink 
            to="/register" 
            class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Inscription
          </NuxtLink>
          
          <NuxtLink 
            to="/dashboard" 
            class="px-4 py-2 bg-accent text-text-primary text-sm font-medium rounded-lg hover:shadow-glow-accent transition-all"
          >
            Dashboard
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Header minimal selon le design system
</script>