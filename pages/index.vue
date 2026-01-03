<template>
  <div class="min-h-screen flex flex-col bg-bg-primary">
    <AppHeader />
    
    <main class="flex-1">
      <!-- Hero Section -->
      <section class="relative py-32 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-display font-bold text-text-primary mb-6 leading-tight">
            Créez votre portfolio en quelques minutes
          </h1>
          
          <p class="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            La plateforme idéale pour les designers et créatifs
          </p>
          
          <NuxtLink 
            to="/login" 
            class="inline-block px-8 py-4 bg-accent text-text-primary font-medium rounded-lg hover:shadow-glow-accent-strong transition-all"
          >
            Commencer gratuitement
          </NuxtLink>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-24 px-6">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-display font-bold text-center text-text-primary mb-16">
            Pourquoi choisir Monfolio ?
          </h2>
          
          <div class="grid md:grid-cols-3 gap-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-bg-surface rounded-xl flex items-center justify-center mx-auto mb-6 border border-border-subtle">
                <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-text-primary mb-3">
                Rapide
              </h3>
              <p class="text-text-secondary leading-relaxed">
                Créez votre portfolio en moins de 5 minutes
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-bg-surface rounded-xl flex items-center justify-center mx-auto mb-6 border border-border-subtle">
                <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-text-primary mb-3">
                Personnalisable
              </h3>
              <p class="text-text-secondary leading-relaxed">
                Choisissez parmi plusieurs thèmes
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-bg-surface rounded-xl flex items-center justify-center mx-auto mb-6 border border-border-subtle">
                <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-text-primary mb-3">
                Responsive
              </h3>
              <p class="text-text-secondary leading-relaxed">
                Parfait sur mobile, tablette et desktop
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
// Landing page dark premium
</script>