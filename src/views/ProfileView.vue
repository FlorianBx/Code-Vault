<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/solid";
import InputForText from "../components/InputForText.vue";
import InputForRichText from "../components/InputForRichText.vue";
</script>

<template>
  <form>
    <div class="space-y-12">
      <div class="border-b pb-12">
        <h2 class="text-base font-semibold leading-7 text-primary">Profile</h2>
        <p class="mt-1 text-sm leading-6 text-primary">
          This information will be displayed publicly so be careful what you
          share.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label
              for="photo"
              class="block text-sm font-medium leading-6 text-primary"
              >Photo</label
            >
            <div class="mt-2 col-span-full flex items-center gap-x-3">
              <UserCircleIcon class="h-20 w-20 text-vue" aria-hidden="true" />
              <button
                type="button"
                class="rounded-md bg-transparent px-2.5 py-1.5 text-sm font-semibold text-vue shadow-neumorphic ring-0 hover:bg-vue hover:text-primary"
              >
                Change
              </button>
            </div>
          </div>

          <div class="sm:col-span-4">
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-0 ring-inset sm:max-w-md"
              >
                <InputForText label="Username" type="text" />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <div class="mt-2">
              <InputForRichText label="About" />
            </div>
            <p class="mt-3 text-sm leading-6 text-primary">
              Write a few sentences about yourself.
            </p>
          </div>
        </div>
      </div>

      <div class="border-b border-black pb-12">
        <h2 class="text-base font-semibold leading-7 text-primary">
          Personal Information
        </h2>
        <p class="mt-1 text-sm leading-6 text-primary">
          Use a permanent address where you can receive mail.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <div class="mt-2">
              <InputForText label="First name" type="text" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <div class="mt-2">
              <InputForText label="Last name" type="text" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <div class="mt-2">
              <InputForText label="Email address" type="email" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="country"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Country</label
            >
            <div class="mt-2">
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                class="block bg-transparent w-full rounded-md border-0 py-1.5 text-primary shadow-neumorphic sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>France</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div class="col-span-full">
            <div class="mt-2">
              <InputForText label="Street address" type="text" />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <div class="mt-2">
              <InputForText label="City" type="text" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <div class="mt-2">
              <InputForText label="Province" type="text" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <div class="mt-2">
              <InputForText label="Postal code" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>
