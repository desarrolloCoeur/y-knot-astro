import { useState } from "preact/hooks";

const NavbarMain = ({inicio, pesca, tours, ubicaciones, nosotros, contacto, lang, linkPesca, linkTour, linkLocation, linkAbout, linkContact}) => {
    const [isTourOpen, setTourOpen] = useState(false);
    const [isTourOpenMobile, setTourOpenMobile] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isMenuOpen);
        setMenuOpen(!isMenuOpen);
    };

    const toggleTourMobile = () => {
        setTourOpenMobile(!isTourOpenMobile);
    };

    const toggleTours = () => {
        setTourOpen(!isTourOpen);
    };

    return (
        <>
            <div class="bg-blue-950 text-white">
                <div class="container mx-auto flex w-full justify-between items-center font-normal px-3">
                    <div> <a href="/en">ENG</a> | <a href="/es"> ESP </a></div>
                    <div class="flex gap-2 text-lg" >
                    <a href="https://goo.gl/maps/xEaoRxfodMBrhNvy5" target="_blank">
                        <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9c0 .66.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49Z"/></svg>        
                    </a>
                    <a href="https://www.tripadvisor.com/Attraction_Review-g499443-d7717525-Reviews-Y_Knot_Fishing-Punta_de_Mita_Pacific_Coast.html" target="_blank">
                        <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43a5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598a6 6 0 0 0 6-5.998a5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118a4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115a4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256a2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256a2.128 2.128 0 0 0 0-4.256z"/></svg>

                    </a>
                    <a href="https://www.instagram.com/yknotfishingpunta/" target="_blank">
                        <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/Y-Knot-Fishig-PUNTA-MITA-243570115800059" target="_blank">
                        <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                    </a>

                        
                    </div>
                </div>
            </div>

            <header class="w-full relative text-blue-950 bg-slate-100">
                <div class="flex justify-between px-2 py-2 items-center container w-full mx-auto">
                    <div>
                        <a href={`/${lang}`}>
                            <img
                                src="/img/logo-knot.webp"
                                alt="Knot Fishing & Jetski Rental Logo"
                                width={150}
                                height={80}
                            />
                        </a>
                    </div>
                    <div class="md:flex items-center gap-7 uppercase hidden ">
                        <a href={`/${lang}`}>{inicio}</a>
                        <a href={linkPesca}>{pesca}</a>
                        <a href={linkTour}>{tours}</a>
                        <a href={linkLocation}>{ubicaciones}</a>
                        <a href={linkAbout}>{nosotros}</a>
                        <a href={linkContact}>{contacto}</a>
                    </div>
                    <div class="md:hidden">
                        <a class="menu-btn" onClick={() => toggleMenu()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white bg-blue-950 px-1 py-1 text-4xl mr-2 rounded-md">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </a>
                    </div>
                </div>

                {isMenuOpen && (
                    <div class="flex flex-col items-center uppercase gap-3 text-xl pb-5">
                        <a href={`/${lang}`}>{inicio}</a>
                        <a href={linkPesca}>{pesca}</a>
                        <a href={linkTour}>{tours}</a>
                        <a href={linkLocation}>{ubicaciones}</a>
                        <a href={linkAbout}>{nosotros}</a>
                        <a href={linkContact}>{contacto}</a>
                    </div>
                )}

            </header>
        </>
    );
};

export default NavbarMain;
