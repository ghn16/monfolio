<template>
  <div class="min-h-screen flex flex-col bg-bg-primary">
    <AppHeader />
    
    <main class="flex-1 flex items-center justify-center py-12 px-6">
      <div class="max-w-md w-full">
        <div class="bg-bg-surface rounded-2xl border border-border-subtle p-8">
          <h2 class="text-2xl font-display font-bold text-center text-text-primary mb-8">
            Créer un compte
          </h2>
          
          <form class="space-y-6" @submit.prevent="handleRegister">
            <div>
              <label for="username" class="block text-sm font-medium text-text-primary mb-2">
                Nom d'utilisateur
              </label>
              <input
                id="username"
                v-model="form.username"
                type="text"
                class="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-lg text-text-primary placeholder-text-disabled focus:outline-none focus:border-accent focus:shadow-glow-accent transition-all"
                placeholder="johndoe"
              >
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
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
                v-model="form.password"
                type="password"
                class="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-lg text-text-primary placeholder-text-disabled focus:outline-none focus:border-accent focus:shadow-glow-accent transition-all"
                placeholder="••••••••"
              >
            </div>
            
            <div v-if="error" class="text-error text-sm">
              {{ error }}
            </div>
            
            <button
              type="submit"
              :disabled="loading"
              class="w-full py-3 bg-accent text-text-primary font-medium rounded-lg hover:shadow-glow-accent-strong transition-all disabled:opacity-50"
            >
              {{ loading ? 'Inscription...' : 'Créer mon compte' }}
            </button>
          </form>
          
          <p class="text-center text-sm text-text-secondary mt-6">
            Déjà un compte ? 
            <NuxtLink to="/login" class="text-accent hover:underline">
              Se connecter
            </NuxtLink>
          </p>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const form = ref({
  username: '',
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

const handleRegister = async () => {
  loading.value = true
  error.value = ''
  
  try {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: form.value
    })
    
    // Rediriger vers la page de connexion
    navigateTo('/login')
  } catch (e: any) {
    error.value = e.data?.message || 'Erreur lors de l\'inscription'
  } finally {
    loading.value = false
  }
}
</script>