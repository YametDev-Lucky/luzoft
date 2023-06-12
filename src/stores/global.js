import { defineStore } from 'pinia';
import tppData from '@/plugins/tppdata';
import tppDiData from '@/plugins/designatedinvoicesdata';
import copData from '@/plugins/clientoverpaymentdata';

const getRemoteUrl = async () => {
  const host = new URL(window.location.href);
  host.searchParams.append('getRemote', 1);
  const response = await fetch(host.toString());
  return await response.json();
};
const parseTableData = data => {
  return data.map(val => ({
    ...val,
    collapsed: false,
  }))
}
const getTPPID = () => new URL(window.location.href).searchParams.get('tppId');

const devStore = {
  state: () => ({
    remoteUrl: null,
    error: null,
    loading: false,
    tpp: {},
    appliedInvoices: [],
    clientOverpayments: [],
  }),
  getters: {
  },
  actions: {
    clearError () {
      this.error = null;
    },
    async getRemoteUrl () {
      this.loading = true;

      try {
        const body = await (new Promise((resolve, reject) => setTimeout(() => resolve({ remoteUrl: window.location.href }), 500)));
        this.remoteUrl = body.remoteUrl;
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    },
    async getTPPInfo (tppId) {
      this.loading = true;
      try {
        const body = tppData;
        this.tpp = body;
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    },
    async getClientOverpayments (params) {
      this.loading = true;
      try {
        const body = copData;
        this.clientOverpayments = parseTableData(body);
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    },
    async getDesignatedInvoices (params) {
      this.loading = true;
      try {
        const body = tppDiData;
        this.appliedInvoices = parseTableData(body);
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    }

  }
};
const productionStore = {
  state: () => ({
    remoteUrl: null,
    error: null,
    loading: false,
    tpp: {}
  }),
  getters: {

  },
  actions: {
    clearError () {
      this.error = null;
    },
    async getTPPInfo () {
      try {
        if (!this.remoteUrl) { const response = await getRemoteUrl(); this.remoteUrl = response.remoteUrl; }
        const host = new URL(this.remoteUrl);
        host.searchParams.append('operation', 'TPP');
        host.searchParams.append('id', getTPPID());
        this.loading = true;
        const response = await fetch(host.toString());
        const body = await response.json();
        this.tpp = body;
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    },
    async getDesignatedInvoices (params) {
      const { limit, offset, group, sortingField, sortingDirection } = params;
      try {
        if (!this.remoteUrl) { const response = await getRemoteUrl(); this.remoteUrl = response.remoteUrl; }
        const host = new URL(this.remoteUrl);
        host.searchParams.append('operation', 'TPPDI');
        host.searchParams.append('tppId', getTPPID());
        if (limit) host.searchParams.append('limit', limit);
        if (offset) host.searchParams.append('offset', offset);
        if (group) host.searchParams.append('group', group);
        if (sortingField) host.searchParams.append('sort', sortingField);
        if (sortingDirection) host.searchParams.append('direction', sortingDirection);
        this.loading = true;
        const response = await fetch(host.toString());
        const body = await response.json();
        this.appliedInvoices = body;
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    }

  }
};

export const useGlobalStore = defineStore( 'global', import.meta.env.MODE === 'development' ? devStore : devStore );
