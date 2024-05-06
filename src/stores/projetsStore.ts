import type { ProjectDTO } from '@/models/Project'
import { defineStore } from 'pinia'
import axios, { type AxiosResponse } from 'axios';

export const useProjects = defineStore('projects', {
  state: () => ({
    _projects: [] as ProjectDTO[],
    _init: false
  }),
  getters: {
    getAll(state) {
        return state._projects as ProjectDTO[]
    },
    getAllFrontPageOnly(state) {
        return state._projects.filter(i => i.is_front_page == true) as ProjectDTO[];
    },
    getById(state) {
        return (id : string) : ProjectDTO | undefined => state._projects.find(i => i.id == id);
    },
    getNext(state) {
        return (id : string) : ProjectDTO | undefined => {
            const item = state._projects.find(i => i.id == id);
            if(!item) return undefined;
            const index = state._projects.indexOf(item)
            const nextIndex = index + 1;
            if(nextIndex > state._projects.length - 1)
                return undefined;
            return state._projects[nextIndex];
        }
    },
    getPrevious(state) {
        return (id : string) : ProjectDTO | undefined => {
            const item = state._projects.find(i => i.id == id);
            if(!item) return undefined;
            const index = state._projects.indexOf(item)
            const prevIndex = index - 1;
            if(prevIndex <= -1)
                return undefined;
            return state._projects[prevIndex];
        }
    },
    getTags(state) {
        const tmp = [] as string[][];
        state._projects.forEach(e => tmp.push(e.tags));
        return [... new Set(tmp.flat())];
    },
    getFiltered(state) {
        return(filters: string[]): ProjectDTO[] => {
            let filtered = [] as ProjectDTO[];
            if(filters.length == 0)
                return state._projects;
            state._projects.forEach(project => {
                if(filters.every(filter => project.tags.includes(filter)))
                    filtered.push(project);
            });
            return filtered;
        }
    }
  },
  actions: {
    init() {
        if(this._init) return;
        axios('https://localhost:7258/projects')
        .then((res) => {
            this._projects = res.data
            this._init = true;
        });
    }
  },
})