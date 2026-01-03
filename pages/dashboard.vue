<template>
  <div class="min-h-screen flex flex-col bg-bg-primary">
    <AppHeader />
    
    <main class="flex-1 py-12 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          <h1 class="text-3xl font-display font-bold text-text-primary mb-2">
            Mon Dashboard
          </h1>
          <p class="text-text-secondary">
            Gérez votre portfolio et vos projets
          </p>
        </div>
        
        <!-- Stats Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-bg-surface border border-border-subtle rounded-xl p-6">
            <div class="text-sm text-text-secondary mb-2">
              Projets publiés
            </div>
            <div class="text-4xl font-bold text-text-primary">
              0
            </div>
          </div>
          
          <div class="bg-bg-surface border border-border-subtle rounded-xl p-6">
            <div class="text-sm text-text-secondary mb-2">
              Vues totales
            </div>
            <div class="text-4xl font-bold text-text-primary">
              0
            </div>
          </div>
          
          <div class="bg-bg-surface border border-border-subtle rounded-xl p-6">
            <div class="text-sm text-text-secondary mb-2">
              Abonnement
            </div>
            <div class="text-2xl font-semibold text-accent">
              Gratuit
            </div>
          </div>
        </div>
        
        <!-- Projects Section -->
        <div class="bg-bg-surface border border-border-subtle rounded-xl overflow-hidden">
          <div class="p-6 border-b border-border-subtle">
            <h2 class="text-xl font-semibold text-text-primary">
              Mes projets
            </h2>
          </div>
          
          <div class="p-12">
            <div class="text-center">
              <p class="text-text-secondary mb-6">
                Aucun projet pour le moment
              </p>
              <button class="px-6 py-3 bg-accent text-text-primary font-medium rounded-lg hover:shadow-glow-accent transition-all">
                Créer mon premier projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
// Dashboard avec stats lisibles
</script>