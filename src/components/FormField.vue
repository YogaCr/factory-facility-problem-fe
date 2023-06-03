<template>
  <form @submit.prevent="submitForm">
    <div class="flex flex-col">
      <label class="text-white text-xl font-bold" for="gap">Gap</label>
      <input type="number" name="gap" id="gap" step="any" v-model="gap" class="bg-black border border-white rounded p-2 my-4" min="0">
      <label class="text-white text-xl font-bold" for="file">File Excel</label>
      <input type="file" name="file" id="file" @change="uploadFile" class="text-white border border-white rounded p-2 my-4">
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" style="height:fit-content">Upload</button>
    </div>
  </form> 
</template>

<script>
import {useFacilityStore} from '../stores/facility'
import {mapActions} from 'pinia'
import axios from 'axios'

export default{
  data(){
    return {
      file:null,
      gap:0,
    }
  },
  methods:{
    ...mapActions(useFacilityStore, ['setFacility']),
    uploadFile(e){
      this.file = e.target.files[0]
    },
    submitForm(){
      let formData = new FormData()
            formData.append('file', this.file)
            formData.append('sij', this.gap)
            axios.post(import.meta.env.VITE_API_ENDPOINT+'/upload', formData, {
                headers:{
                'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                this.setFacility(res.data)
            })
            .catch(err => {
                this.error = err
            })
    }
  }
}
</script>