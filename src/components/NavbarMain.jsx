import { useState } from "preact/hooks";

const NavbarMain = ({inicio, pesca, tours, ubicaciones, nosotros, contacto}) => {
    const [isTourOpen, setTourOpen] = useState();
    const [isTourOpenMobile, setTourOpenMobile] = useState();
    const [isMenuOpen, setMenuOpen] = useState();

    const toggleMenu = () => {
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
                    <div>ENG | ESP</div>
                    <div class="flex gap-2 text-lg" >
                        {/* <FaFacebook class="text-white"/>
                        <FaInstagram class="text-white"/>
                        <FaTripadvisor class="text-white"/>
                        <FaGoogle class="text-white"/> */}
                        
                    </div>
                </div>
            </div>

            <header class="w-full relative text-blue-950 bg-slate-100">
                <div class="flex justify-between px-2 py-2 items-center container w-full mx-auto">
                    <div>
                        <a href="/">
                            <img
                                src="/img/logo-knot.webp"
                                alt="Knot Fishing & Jetski Rental Logo"
                                width={150}
                                height={80}
                            />
                        </a>
                    </div>
                    <div class="md:flex items-center gap-7 uppercase hidden ">
                        <a href="/">{inicio}</a>
                        <a href="/pesca-deportiva">{pesca}</a>
                        <button onClick={toggleTours} class="uppercase">{tours}</button>
                        <a href="/ubicaciones">{ubicaciones}</a>
                        <a href="/nosotros">{nosotros}</a>
                        <a href="/contacto">{contacto}</a>
                    </div>
                    <div class="md:hidden">
                        {/* <FaBars
                            class="text-white bg-blue-950 px-2 py-1 text-4xl mr-2 rounded-md"
                            onClick={toggleMenu}
                        /> */}
                    </div>
                </div>

                {isMenuOpen && (
                    <div class="flex flex-col items-center">
                        <a
                            href="/"
                            class="text-blue-900 hover:text-blue-950 uppercase"
                            onClick={toggleMenu}
                        >
                            Inicio
                        </a>
                        <a href="/pesca-deportiva" onClick={toggleMenu}>Pesca</a>

                        <button
                            onClick={toggleTourMobile}
                            class="text-blue-900 hover:text-blue-950 uppercase"
                        >
                            TOURS
                        </button>
                        {isTourOpenMobile && <Tours toggleTours={toggleMenu} />}
                        <a
                            href="/ubicaciones"
                            class="text-blue-900 hover:text-blue-950 uppercase"
                            onClick={toggleMenu}
                        >
                            Ubicaciones
                        </a>
                        <a
                            href="/nosotros"
                            class="text-blue-900 hover:text-blue-950 uppercase"
                            onClick={toggleMenu}
                        >
                            Nosotros
                        </a>
                        <a
                            href="/contacto"
                            class="text-blue-900 hover:text-blue-950 uppercase"
                            onClick={toggleMenu}
                        >
                            Contacto
                        </a>
                    </div>
                )}

                {isTourOpen && <Tours toggleTours={toggleTours} />}
            </header>
        </>
    );
};

export default NavbarMain;
