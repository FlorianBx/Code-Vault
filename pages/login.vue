<script setup lang="ts">
const isLoggedIn = useSupabaseUser();
const supabase = useSupabaseClient();

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/confirm",
    },
  });
  if (error) console.log(error);
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
};
</script>

<template>
  <section>
    <h1>Login</h1>
    <CustomBtn @click="signInWithOAuth">Sign in with GitHub</CustomBtn>
    <button v-if="isLoggedIn" @click="signOut">Sign out</button>
  </section>
</template>
