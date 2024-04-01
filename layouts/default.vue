<template>
  <div class="min-h-screen flex flex-col p-4">
    <header>
      <Navbar />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <FooterBro />
    </footer>
  </div>
</template>
