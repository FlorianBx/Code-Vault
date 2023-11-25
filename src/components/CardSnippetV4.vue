<script setup lang="ts">
import { RouterLink } from "vue-router";
import Prism from "prismjs";
import "../assets/highlight-syntax.css";
import { onMounted } from "vue";

defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: "",
  },
  code: {
    type: String,
    default: "",
  },
  tags: {
    type: String,
    default: "",
  },
  createdAt: {
    type: String,
    default: "",
  },
  updatedAt: {
    type: String,
    default: "",
  },
});

const authorId = "Florian";

const splitTags = (tags: string) => {
  return tags.split(",");
};

function timeAgo(
  input: { seconds: number; nanoseconds: number } | string,
): string {
  let date: Date;

  if (typeof input === "string") {
    date = new Date(input);
  } else {
    const timestampMs = input.seconds * 1000 + input.nanoseconds / 1000000;
    date = new Date(timestampMs);
  }

  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)} secondes ago`;
  }
  const minutesPast = secondsPast / 60;
  if (minutesPast < 60) {
    return `${Math.round(minutesPast)} minutes ago`;
  }
  const hoursPast = minutesPast / 60;
  if (hoursPast < 24) {
    return `${Math.round(hoursPast)} hours ago`;
  }
  const daysPast = hoursPast / 24;
  if (daysPast < 7) {
    return `${Math.round(daysPast)} days ago`;
  }
  const weeksPast = daysPast / 7;
  if (weeksPast < 4) {
    return `${Math.round(weeksPast)} weeks ago`;
  }
  const monthsPast = daysPast / 30;
  if (monthsPast < 12) {
    return `${Math.round(monthsPast)} months ago`;
  }
  const yearsPast = daysPast / 365;
  return `${Math.round(yearsPast)} years ago`;
}

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div class="flex mt-8">
    <section class="flex flex-col gap-2">
      <h3 class="text-2xl font-bold text-primary/90">{{ title }}</h3>
      <p class="text-sm font-semibold italic">@{{ authorId }}</p>
      <p class="text-sm font-semibold line-clamp-3 text-primary/70">
        {{ description }}
      </p>
      <div class="flex flex-wrap gap-1">
        <p
          v-for="(tag, index) in splitTags(tags)"
          :key="index"
          class="bg-vue py-0 px-1.5 rounded text-sm"
        >
          {{ tag }}
        </p>
      </div>
      <div class="flex justify-between gap-3 items-end pt-4">
        <div class="flex gap-4">
          <p class="flex gap-2 items-center text-sm">
            <span
              v-if="language === 'vue'"
              class="bg-vue w-4 h-2 rounded-full"
            ></span>
            <span
              v-if="language === 'react'"
              class="bg-react w-4 h-2 rounded-full"
            ></span>
            <span
              v-if="language === 'angular'"
              class="bg-angular w-4 h-2 rounded-full"
            ></span>
            {{ language }}
          </p>
          <p class="text-sm">Updated {{ timeAgo(updatedAt) }}</p>
        </div>
        <router-link
          :to="`/snippet/${id}`"
          class="text-center font-semibold text-sm transition-color duration-300 bg-btn hover:bg-secondary hover:text-darktext rounded py-0.5 px-4 text-primary"
        >
          Read more...
          <span class="sr-only">, {{ title }}</span>
        </router-link>
      </div>
    </section>
  </div>
</template>
