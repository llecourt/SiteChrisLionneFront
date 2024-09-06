import type { PresentationDTO } from "@/models/Prestation";
import { defineStore } from "pinia";
import instance from "@/axiosInstance";

export const usePrestations = defineStore('prestations', {
    state: () => ({
        _prestations: [] as PresentationDTO[]
      }),
    getters: {
        getAll(state) {
            return state._prestations as PresentationDTO[];
        },
    },
    actions: {
        init() {
            instance('prestations')
            .then((res) => {
                this._prestations = res.data
            });
        },
    }
})