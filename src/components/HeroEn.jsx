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

    
    const heroData = { "tours": [
        {
            "imageSlider":"/img/kayak-hero.jpg",
            "title": "Kayak in the Bay",
            "slug": "kayak-in-the-bay"
        },
        {
            "imageSlider":"/img/ballenas-hero.jpg",
            "title": "Whale Watching",
            "slug": "whale-watching"
        }, {
            "imageSlider":"/img/marietas.jpg",
            "title": "Marietas Islands",
            "slug": "marietas-islands"
        }
    ]}


    
  
    return (
      <div class="swiper-container overflow-hidden">
        <div class="swiper-wrapper">
        {heroData.tours.map((t, i) => {
                const divStyle = {
                    backgroundImage: `url(${t.imageSlider})`,
                };
                return (
                    <div
                        key={i}
                        class="bg-cover bg-center swiper-slide flex-[0_0_100%]"
                        style={divStyle}
                    >
                        <div class="container w-11/12 relative min-h-[90dvh] mx-auto">
                            <div class=" absolute bottom-10 flex items-center sm:items-start flex-col gap-1` mx-auto left-0 right-0">
                                <h2 class="md:text-6xl font-bold shadow-md bg-slate-50 py-1 px-2 rounded-md text-center">
                                    {t.title}
                                </h2>
                                <a
                                    href={`/en/tour/${t.slug}`}
                                    class="btn-primary w-fit text-xl text-center "
                                >
                                    BOOK NOW!
                                </a>
                            </div>
                        </div>
                    </div>
                );
              })}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    );
  }
