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
    authenticate() {
      this.user = { id: 1, name: 'Test User' };
    },
  },
});
