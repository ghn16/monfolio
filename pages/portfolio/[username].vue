<template>
  <div class="min-h-screen flex flex-col bg-bg-primary">
    <AppHeader />
    
    <main class="flex-1 py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- En-tête du portfolio -->
        <div class="text-center mb-20">
          <h1 class="text-5xl font-display font-bold text-text-primary mb-6">
            Portfolio de {{ username }}
          </h1>
          <p class="text-xl text-text-secondary max-w-2xl mx-auto">
            Designer graphique passionné par l'interface utilisateur et l'expérience utilisateur
          </p>
        </div>
        
        <!-- Grille de projets -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard
            title="Application mobile moderne"
            description="Une application mobile moderne avec une interface épurée et intuitive"
            image-url="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
          />
          
          <PortfolioCard
            title="Refonte e-commerce"
            description="Refonte complète d'un site e-commerce avec focus sur la conversion"
            image-url="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
          />
          
          <PortfolioCard
            title="Design system startup"
            description="Design system complet pour une startup en pleine croissance"
            image-url="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop"
          />
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
const route = useRoute()
const username = route.params.username
</script>