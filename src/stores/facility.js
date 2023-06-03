import { defineStore } from 'pinia'

export const useFacilityStore = defineStore({
    id:'facility',
    state: () => ({
        facility: null,
        error: null
    }
    ),
    getters: {
        getFacility: (state) => {
            return state.facility
        }
    },
    actions:{
        setFacility(facility){
            console.log('tes')
            this.facility = facility
        }
    }
})
