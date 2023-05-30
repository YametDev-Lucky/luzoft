import { defineStore } from 'pinia';
import tppData from '@/plugins/tppdata';

const getRemoteUrl = async () => {
  const host = new URL(window.location.href);
  host.searchParams.append('getRemote', 1);
  const response = await fetch(host.toString());
  return await response.json();
};
const getTPPID = () => new URL(window.location.href).searchParams.get('tppId');

const devStore = {
  state: () => ({
    remoteUrl: null,
    error: "No error",
    loading: false,
    tpp: {}
  }),
  getters: {
  },
  actions: {
    clearError() {
      this.error = null;
    },
    async getRemoteUrl() {
      this.loading = true;

      try {
        const body = await (new Promise((resolve, reject) => setTimeout(() => resolve({ remoteUrl: window.location.href }), 500)));
        this.remoteUrl = body.remoteUrl;
        this.loading = false;
      } catch (error) {
        // this.error = error;
      }
    },
    async getTPPInfo(tppId) {
      this.loading = true;
      try {
        const body = tppData;
        console.log(body);
        this.tpp = body;
        setTimeout(() => {this.loading = false;}, 5000);
      } catch (error) {
        // this.error = error;
      }
    }

  }
};
const productionStore = {
  state: () => ({
    remoteUrl: null,
    error: "No error.",
    loading: false,
    tpp: {}
  }),
  getters: {

  },
  actions: {
    clearError() {
      this.error = null;
    },
    async getTPPInfo(tppId) {
      try {
        if (!this.remoteUrl) { this.remoteUrl = await getRemoteUrl(); }
        const host = new URL(this.remoteUrl);
        host.searchParams.append('operation', 'TPP');
        host.searchParams.append('id', getTPPID() ?? '9582694');
        this.loading = true;
        const response = await fetch(host.toString());
        const body = await response.json();
        this.tpp = body;
        this.loading = false;
      } catch (error) {
        // this.error = error;
      }
    }

  }
};

export const useGlobalStore = defineStore('global', import.meta.env.MODE === 'development' ? devStore : productionStore);
