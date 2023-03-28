 const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello Vue!', 
        image: 'https://picsum.photos/200/300', 
        isMainTitle: true,
      }
    }
  }).mount('#app')