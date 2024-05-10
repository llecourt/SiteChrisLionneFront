import type { PresentationDTO } from "@/models/Prestation";
import { defineStore } from "pinia";
import axios from "axios";

export const usePrestations = defineStore('prestations', {
    state: () => ({
        _prestations: [] as PresentationDTO[],
        _init: false
      }),
    getters: {
        getAll(state) {
            return state._prestations as PresentationDTO[];
        },
    },
    actions: {
        init() {
            if(this._init) return;
            axios('https://localhost:7258/prestations')
            .then((res) => {
                this._prestations = res.data
                this._init = true;
            });
        },
    }
})