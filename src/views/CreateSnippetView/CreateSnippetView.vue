<script setup lang="ts">
import { reactive } from "vue";
import InputForText from "../../components/InputForText/InputForText.vue";
import InputForRichText from "../../components/InputForRichText/InputForRichText.vue";
import { useFormData } from "../../composables/useFormData";

const snippetData = reactive({
  name: "",
  description: "",
  tag: "",
  code: "",
});

const { formData, handleUpdateData } = useFormData(snippetData);
</script>

<template>
  <div class="flex min-h-full sm:mt-20 flex-1 flex-col justify-center">
    <div class="px-4 sm:px-0 sm:mx-auto sm:w-full sm:max-w-[720px]">
      <div
        class="bg-background px-6 py-12 sm:rounded-xl sm:px-12 shadow-neumorphic"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h3
            class="pb-11 text-center text-2xl font-bold leading-9 tracking-tight text-primary"
          >
            Create Snippet
          </h3>
        </div>
        <form class="space-y-6" action="#" method="POST">
          <div>
            <InputForText
              label="Snippet Name"
              required
              :data="formData.name"
              @update:data="(value: string) => handleUpdateData(value, 'name')"
            />
          </div>

          <div>
            <InputForText
              label="Description"
              :data="formData.description"
              @update:data="
                (value: string) => handleUpdateData(value, 'description')
              "
            />
          </div>
          <div>
            <InputForText
              label="Tag"
              :data="formData.tag"
              required
              @update:data="(value: string) => handleUpdateData(value, 'tag')"
            />
          </div>
          <div>
            <InputForRichText
              label="Code"
              :data="formData.code"
              required
              @update:data="(value: string) => handleUpdateData(value, 'code')"
            />
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center text-base rounded-md shadow-neumorphic hover:shadow-inner-neumorphic bg-button px-3 py-3 font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
