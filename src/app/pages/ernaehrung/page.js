"use client"
import React from 'react'; 
import { CO2Provider, useCO2Context } from '@/app/context/CO2Context';
import kochenImage from '../../../images/kochenImage.png';
import veganeImage from '../../../images/veganeImage.png';
import fleischImage from '../../../images/fleischImage.png';
import mikrowelleImage from '../../../images/mikrowelleImage.png';
import ernaehrungHeader from '../../../images/foodHeader2.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Ernaehrung = () => {
    const router = useRouter();
    const { co2Value, incrementCO2, resetCO2 } = useCO2Context();

    return (
        <div>
            <header 
                className="relative border-b border-gray-200 h-64 overflow-hidden"
            >
                <div 
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: `url(${ernaehrungHeader.src})`, 
                        backgroundSize: '120%',
                        backgroundPosition: 'center', 
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        filter: 'blur(5px)'
                    }}
                ></div>
                <div className="relative z-10">
                    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl" style={{ textShadow: '0 0 1px black' }}>Ernährung</h2>

                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                                    type="button"
                                    onClick={() => router.push('/pages/start')}
                                >
                                    <span className="text-sm font-medium"> Home </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                                    type="button"
                                    onClick={() => router.push('/pages/about')} 
                                >
                                    About
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="max-w-auto mx-auto ml-12 mr-12">
                <div className="flex justify-center space-x-4">
                    <div className="group relative block bg-black mt-12 w-1/4">
                        <a href="#">
                            <Image
                                alt=""
                                src={kochenImage}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Ernährung</p>
                                <p className="text-xl font-bold text-white sm:text-2xl">Kochen 20 Minuten</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            20 Minuten Kochen setzen etwa 0,5 kg CO₂ frei. Mit energieeffizienten Methoden und Deckeln
                                            auf Töpfen kannst du den CO₂-Ausstoß deutlich reduzieren – ein kleiner Schritt
                                            mit großer Wirkung auf die Umwelt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="group relative block bg-black mt-12 w-1/4">
                        <a href="#">
                            <Image
                                alt=""
                                src={veganeImage}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Ernährung</p>
                                <p className="text-xl font-bold text-white sm:text-2xl">Vegane Mahlzeit 600 kcal</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Eine vegane Mahlzeit von 600 kcal setzt etwa 0,3 kg CO₂ frei. 
                                            Vegane Ernährung hat einen geringeren CO₂-Fußabdruck und hilft, d
                                            en Einfluss auf die Umwelt zu reduzieren – ein kleiner Schritt mit großer Wirkung.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="group relative block bg-black mt-12 w-1/4">
                        <a href="#">
                            <Image
                                alt=""
                                src={fleischImage}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Ernährung</p>
                                <p className="text-xl font-bold text-white sm:text-2xl">Mahlzeit mit Fleisch 600 kcal</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                         Eine Mahlzeit mit Fleisch von 600 kcal setzt etwa 2,5 kg CO₂ frei.
                                         Weniger Fleisch zu essen, reduziert deinen CO₂-Ausstoß deutlich – 
                                         ein kleiner Schritt mit großer Wirkung auf die Umwelt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="group relative block bg-black mt-12 w-1/4">
                        <a href="#">
                            <Image
                                alt=""
                                src={mikrowelleImage}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Ernährung</p>
                                <p className="text-xl font-bold text-white sm:text-2xl">Aufwärmen Mikrowelle</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                         Das Erwärmen einer Mahlzeit in der Mikrowelle für 5 Minuten setzt etwa 0,05 kg CO₂ frei.
                                         Eine energieeffiziente Wahl mit positiver Wirkung auf die Umwelt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div id='bottonsWrapper' className="flex justify-center space-x-81">
                    <a
                        className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4"
                        id='autoButton'
                        onClick={() => incrementCO2(0.5)}
                    >Hinzufügen</a>
                    <a
                        className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4"
                        id='flugButton'
                        onClick={() => incrementCO2(0.3)}
                    >Hinzufügen</a>
                    <a
                        className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4"
                        id='zugButton'
                        onClick={() => incrementCO2(2.5)}
                    >Hinzufügen</a>
                    <a
                        className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4"
                        id='schiffButton'
                        onClick={() => incrementCO2(0.05)}
                    >Hinzufügen</a>
                </div>
                <div id="co2-component" className="flex justify-center items-center mt-2">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-2 lg:px-8">
                    <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 justify-center">
                        <div className="flex flex-col rounded-lg border border-gray-100 px-5 py-6 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500 mt-4">Gesamter CO2-Ausstoß</dt>
                        <dd className="text-4xl font-extrabold text-blue-600 md:text-4xl">
                            {co2Value} kg CO₂ {/* Muestra el valor de co2Value */}
                        </dd>
                        </div>
                    </dl>
                    <div className="flex justify-center">
                        <a
                            className="inline-block rounded bg-[#f36d6d] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#f36d6d] mt-2"
                            id='resetButton'
                            href="#"
                            onClick={resetCO2}
                        >Zurücksetzen</a>
                    </div>
                </div>                
                </div>
                <div id='returnNextButtons' className="flex justify-between items-center mb-12"> {/* Cambiado mb-16 a mb-12 */}
                    <div id='returnButton' className="flex justify-start">
                        <a
                        className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        href="/pages/mobilitaet"
                        >
                            <span className="sr-only"> Return </span>
                            <svg
                                className="size-5 rtl:rotate-180 transform rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>
                    <div id='nextButton' className="flex justify-end">
                        <a
                            className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            href="/pages/konsum"
                        >
                            <span className="sr-only"> Next </span>
                            <svg
                                className="size-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Ernaehrung;


