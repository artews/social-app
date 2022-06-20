import { Auth } from 'aws-amplify';
import { defineStore } from 'pinia';

type User = {
  id: number;
  name: string;
};

export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({
    user: undefined as User | undefined,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    // TODO: Actually authenticate a user and store the data in localStorage
    async authenticate(username: string, password: string) {
      try {
        const user = await Auth.signIn(username, password);

        this.user = user;
      } catch (error) {
        console.log('[AUTHENTICATE]', { error });
      }
    },
  },
});
