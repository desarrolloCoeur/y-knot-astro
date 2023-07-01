import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import Swiper from 'swiper';
import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({applyBaseStyles: false}), preact()],
  base: '/',
  trailingSlash: 'ignore'

});