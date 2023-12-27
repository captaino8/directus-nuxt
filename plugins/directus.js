import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

const directus = createDirectus('http://106.55.99.175:8055').with(rest());

export default defineNuxtPlugin(() => {
  return {
    provide: { directus, readItem, readItems },
  };
});
