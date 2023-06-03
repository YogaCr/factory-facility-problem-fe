<script setup>
import { storeToRefs } from 'pinia'
import {useFacilityStore} from '../stores/facility'

const { facility } = storeToRefs(useFacilityStore())
</script>
<template>
    <div v-if="facility">
      <h4 class="text-white text-2xl font-bold mb-2">Result</h4>
      <p class="text-white">Original : {{ facility.origin }}</p>
      <p class="text-white">GA Result : {{ facility.bestSol }}</p>
      <p class="text-white">Cost : {{ facility.cost }}</p>
      <p class="text-white text-xl mt-4 font-bold">Visualization</p>
      <div class="overflow-x-auto">
        <div class="flex flex-row bg-white p-2 items-end" style="width:fit-content">
          <div class="bg-blue-500 flex items-center justify-center text-white font-bold text-lg" v-for="f,i in facility.bestSol" v-bind:key="i" :style="{'height':f*3+'rem','width':f*3+'rem', 'margin-right':facility.gap*3+'rem'}">{{ f }}</div>
        </div>
      </div>
    </div>
</template>