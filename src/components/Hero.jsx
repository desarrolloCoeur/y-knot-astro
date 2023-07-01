import { h } from 'preact';
import { useEffect } from "preact/hooks";

import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default function MySwiper() {

    useEffect(() => {
      new Swiper('.swiper-container', {
        // Configuración de Swiper
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }, []);
  
    return (
      <div class="swiper-container overflow-hidden">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    );
  }
