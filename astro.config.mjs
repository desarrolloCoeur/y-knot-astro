import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import Swiper from 'swiper';
import SwiperCore, { Pagination } from 'swiper/core';
import partytown from "@astrojs/partytown";
SwiperCore.use([Pagination]);


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), preact(), partytown({
    config: {
      forward: ['dataLayer.push'],
    },
  })],
  base: '/',
  trailingSlash: 'ignore'
});