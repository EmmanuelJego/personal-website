<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-30" @close="open = false">
      <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-300 sm:duration-500" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-300 sm:duration-500" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto relative w-screen max-w-xs">
                <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                    <button type="button" class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                      <span class="absolute -inset-2.5" />
                      <span class="sr-only">Close panel</span>
                      <XMarkIcon class="size-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex h-full flex-col overflow-y-scroll bg-white p-6 shadow-xl">
                  <nav class="flex flex-col gap-2 text-lg underline underline-offset-2">
                    <a class="transition hover:text-slate-600" href="#projects" @click="open = false">Projects</a>
                    <a class="transition hover:text-slate-600" href="#skills" @click="open = false">Skills</a>
                    <a class="transition hover:text-slate-600" href="#journey" @click="open = false">Journey</a>
                  </nav>
                  <div class="relative flex flex-col mt-auto gap-2">
                    <span class="w-max inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-base font-medium ring-1 ring-inset ring-gray-200">
                      <svg class="size-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                      Available for work
                    </span>
                    <button v-tooltip="'Send me an e-mail'" class="btn-primary w-max flex items-center gap-2" @click="openContactForm">
                      <EnvelopeIcon class="size-5" />
                      Let's talk
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const open = defineModel({ type: Boolean })
const emit = defineEmits(['contact'])

const openContactForm = () => {
  open.value = false
  emit('contact')
}
</script>