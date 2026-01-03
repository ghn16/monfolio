<template>
  <div class="min-h-screen flex flex-col bg-bg-primary">
    <AppHeader />
    
    <main class="flex-1 flex items-center justify-center py-12 px-6">
      <div class="max-w-md w-full">
        <div class="bg-bg-surface rounded-2xl border border-border-subtle p-8">
          <h2 class="text-2xl font-display font-bold text-center text-text-primary mb-8">
            Connexion
          </h2>
          
          <form class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                class="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-lg text-text-primary placeholder-text-disabled focus:outline-none focus:border-accent focus:shadow-glow-accent transition-all"
                placeholder="votre@email.com"
              >
            </div>
            
            <div>
              <label for="password" class="block text-sm font-medium text-text-primary mb-2">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                class="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-lg text-text-primary placeholder-text-disabled focus:outline-none focus:border-accent focus:shadow-glow-accent transition-all"
                placeholder="••••••••"
              >
            </div>
            
            <button
              type="submit"
              class="w-full py-3 bg-accent text-text-primary font-medium rounded-lg hover:shadow-glow-accent-strong transition-all"
            >
              Se connecter
            </button>
          </form>
          
          <p class="text-center text-sm text-text-secondary mt-6">
            Pas encore de compte ? 
            <a href="#" class="text-accent hover:underline">
              Créer un compte
            </a>
          </p>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
// Page de connexion avec glow system sur focus
</script>