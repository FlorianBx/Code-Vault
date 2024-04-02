import { useSupabaseClient } from "~~/use/supabase";

export const useAuth = () => {
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

  return { signInWithOAuth, signOut };
};