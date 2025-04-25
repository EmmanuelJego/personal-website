<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-30" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 md:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="">
                    <div class="flex items-center gap-4 mb-6">
                      <img :src="icon" class="size-8">
                      <DialogTitle as="h3" class="mb-0">{{ name }}</DialogTitle>
                    </div>
                    <div class="mt-2">
                      <slot />
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 flex justify-end sm:px-6 gap-2">
                <button ref="cancelButtonRef" type="button" class="btn-secondary !text-sm" @click="open = false">Close</button>
                <a :href="url" target="_blank" class="btn-primary !text-sm flex items-center gap-2">
                  See project
                  <ArrowTopRightOnSquareIcon class="size-5" />
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

const open = defineModel({ type: Boolean })

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  // images: {
  //   type: String,
  //   required: true
  // }
})

</script>