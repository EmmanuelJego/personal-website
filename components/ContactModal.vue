<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-30" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 md:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="">
                    <DialogTitle as="h3" class="mb-0">Let's talk about your project</DialogTitle>
                    
                    <template v-if="sentStatus !== 'ok'">
                      <div class="relative mt-6 mb-6">
                        <label for="email" class="absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-medium text-slate-600">Your e-mail address</label>
                        <input id="email" v-model="address" type="text" name="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-0 border-0 ring-1 ring-slate-300 placeholder:text-gray-400 focus:ring-primary sm:text-sm/6">
                      </div>
                      <div class="relative">
                        <label for="content" class="absolute -top-3 left-2 inline-block rounded-lg bg-white px-1 text-sm font-medium text-slate-600">About you and your project</label>
                        <textarea id="content" v-model="content" rows="4" name="content" class="bblock w-full rounded-md bg-white px-3 py-1.5 text-base outline-0 border-0 ring-1 ring-slate-300 placeholder:text-gray-400 focus:ring-primary sm:text-sm/6" />
                      </div>
                      <div v-if="sentStatus === 'ko'" class="mt-2 text-red-600 leading-5">
                        A problem occurred when sending the email. Please try again, or contact me on LinkedIn.
                      </div>
                    </template>
                    <template v-else>
                      <div class="mt-4">
                        Thank you for your message! I'll get back to you as soon as possible.
                      </div>
                    </template>
                  </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 flex justify-end sm:px-6 gap-2">
                <template v-if="sentStatus !== 'ok'">
                  <button ref="cancelButtonRef" type="button" class="btn-secondary !text-sm" @click="open = false">Cancel</button>
                  <button class="btn-primary !text-sm flex items-center gap-2" :disabled="!canSend" @click="send">
                    Send
                    <PaperAirplaneIcon class="size-5" />
                  </button>
                </template>
                <template v-else>
                  <button ref="cancelButtonRef" type="button" class="btn-secondary !text-sm" @click="open = false">Close</button>
                </template>
              </div>

              <div v-if="isSending" class="absolute top-0 left-0 size-full z-10 bg-slate-700/20 flex">
                <div class="m-auto">
                  <svg class="animate-spin size-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'

const open = defineModel({ type: Boolean })

const address = ref('')
const content = ref('')
const isSending = ref(false)
const sentStatus = ref<'ok' | 'ko' | undefined>(undefined)
const postUrl = 'https://formspree.io/f/mlezvzqw'

const canSend = computed(() => address.value.length && content.value.length)

const send = async () => {
  if (canSend.value) {
    const body = new FormData()
    body.append('email', address.value)
    body.append('message', content.value)

    isSending.value = true

    try {
      const res = await fetch(postUrl, {
        method: 'POST',
        body,
        headers: {
          'Accept': 'application/json'
        },
      })
      if (res.ok) {
        sentStatus.value = 'ok'
      } else {
        sentStatus.value = 'ko'
      }
    } catch {
      sentStatus.value = 'ko'
    } finally {
      isSending.value = false
    }
  }
}

</script>