<template>
  <div class="bg-bg-surface rounded-xl border border-border-subtle overflow-hidden hover:border-accent/30 transition-all group">
    <div class="aspect-video overflow-hidden">
      <img 
        :src="imageUrl" 
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      >
    </div>
    
    <div class="p-6">
      <h3 class="text-lg font-semibold text-text-primary mb-2">
        {{ title }}
      </h3>
      
      <p class="text-text-secondary text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})
</script>