"use client";

import React, { useEffect, useState } from 'react';
import Globe from 'globe.gl';
import NumberTicker from "@/components/magicui/number-ticker";

const GlobeVisualization = ({ setLoading }) => {
    const [arcsLoaded, setArcsLoaded] = useState(false);
    const [tickerLoaded, setTickerLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const canvas = document.createElement('canvas');
            const webglContext = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

            if (!webglContext) {
                console.error('WebGL not supported');
                return;
            }

            const cities = [
                { name: 'Paris', lat: 48.8566, lng: 2.3522 },          // 🥖 Paris
                { name: 'Lyon', lat: 45.7640, lng: 4.8357 },           // 🗻 Lyon
                { name: 'Le Havre', lat: 49.4944, lng: 0.1079 },       // 🚢 Le Havre
                { name: 'Perpignan', lat: 42.6887, lng: 2.8948 },      // 🏰 Perpignan
                { name: 'Nice', lat: 43.7102, lng: 7.2620 },           // ⛱️ Nice
                { name: 'Angoulême', lat: 45.6484, lng: 0.1563 },      // ⛪️ Angoulême
                { name: 'Mulhouse', lat: 47.7508, lng: 7.3359 },       // 🏠 Mulhouse
                { name: 'Barcelona', lat: 41.3851, lng: 2.1734 },      // ☀️ Barcelona
                { name: 'Madrid', lat: 40.4168, lng: -3.7038 },        // 🏛️ Madrid
                { name: 'Málaga', lat: 36.7213, lng: -4.4214 },        // 🍾 Málaga
                { name: 'Urduliz', lat: 43.3774, lng: -2.9642 },       // 🌳 Urduliz
                { name: 'Berlin', lat: 52.5200, lng: 13.4050 },        // 🥨 Berlin
                { name: 'Wolfsburg', lat: 52.4227, lng: 10.7865 },     // 🏭 Wolfsburg
                { name: 'Heilbronn', lat: 49.1427, lng: 9.2109 },      // 🌲 Heilbronn
                { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },      // 🌷 Amsterdam
                { name: 'London', lat: 51.5074, lng: -0.1278 },        // 🌉 London
                { name: 'Lausanne', lat: 46.5197, lng: 6.6323 },       // ⛷️ Lausanne
                { name: 'Brussels', lat: 50.8503, lng: 4.3517 },       // 🍺 Brussels
                { name: 'Antwerp', lat: 51.2194, lng: 4.4025 },        // 💎 Antwerp
                { name: 'Lisboa', lat: 38.7223, lng: -9.1393 },        // 🏄🏻‍♂️ Lisboa
                { name: 'Porto', lat: 41.1579, lng: -8.6291 },         // 🌊 Porto
                { name: 'Roma', lat: 41.9028, lng: 12.4964 },          // 🤺 Roma
                { name: 'Firenze', lat: 43.7696, lng: 11.2558 },       // 🍕 Firenze
                { name: 'Milano', lat: 45.4642, lng: 9.1900 },         // 🍝 Milano
                { name: 'Prague', lat: 50.0755, lng: 14.4378 },        // 🃏 Prague
                { name: 'Vienna', lat: 48.2082, lng: 16.3738 },        // 🎆 Vienna
                { name: 'Warsaw', lat: 52.2297, lng: 21.0122 },        // 🪆 Warsaw
                { name: 'Helsinki', lat: 60.1695, lng: 24.9355 },      // ⛸️ Helsinki
                { name: 'Yerevan', lat: 40.1792, lng: 44.4991 },       // ⛰️ Yerevan
                { name: 'Med', lat: 35.5888, lng: -5.3625 },           // 🍵 Med
                { name: 'Ben Guerir', lat: 32.2330, lng: -7.9538 },    // 🐪 Ben Guerir
                { name: 'Khouribga', lat: 32.8811, lng: -6.9063 },     // 🏜️ Khouribga
                { name: 'Luanda', lat: -8.8390, lng: 13.2894 },        // 🐘 Luanda
                { name: 'Antananarivo', lat: -18.8792, lng: 47.5079 }, // 🍦 Antananarivo
                { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },        // 🍣 Tokyo
                { name: 'Singapore', lat: 1.3521, lng: 103.8198 },     // 🏝️ Singapore
                { name: 'Bangkok', lat: 13.7563, lng: 100.5018 },      // 🥊 Bangkok
                { name: 'Adelaide', lat: -34.9285, lng: 138.6007 },    // 🦘 Adelaide
                { name: 'Kuala Lumpur', lat: 3.1390, lng: 101.6869 },  // 🗼 Kuala Lumpur
                { name: 'Iskandar Puteri', lat: 1.4225, lng: 103.6470 },// 🌾 Iskandar Puteri
                { name: 'Penang', lat: 5.4164, lng: 100.3327 },        // 🍚 Penang
                { name: 'Seoul', lat: 37.5665, lng: 126.9780 },        // 🚄 Seoul
                { name: 'Gyeongsan', lat: 35.8256, lng: 128.7415 },    // ⛩️ Gyeongsan
                { name: 'Istanbul', lat: 41.0082, lng: 28.9784 },      // 💈 İstanbul
                { name: 'Kocaeli', lat: 40.8533, lng: 29.8815 },       // 🍀 Kocaeli
                { name: 'Abu Dhabi', lat: 24.4539, lng: 54.3773 },     // 🦂 Abu Dhabi
                { name: 'Beirut', lat: 33.8938, lng: 35.5018 },        // 🍰 Beirut
                { name: 'Nablus', lat: 32.2211, lng: 35.2544 },        // 🕊️ Nablus
                { name: 'Amman', lat: 31.9539, lng: 35.9106 },         // 🛕 Amman
                { name: 'Quebec', lat: 46.8139, lng: -71.2082 },       // ❄️ Quebec
                { name: 'Rio', lat: -22.9068, lng: -43.1729 },         // 🚠 Rio
                { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },   // ⚽️ São Paulo
                { name: 'Belo Horizonte', lat: -19.9167, lng: -43.9345 }// 💃🏻 Belo Horizonte
            ];

            const generateRandomArcs = (cities) => {
                const arcs = [];
                cities.forEach((city, index) => {
                    const randomIndex = Math.floor(Math.random() * cities.length);
                    if (randomIndex !== index) {
                        arcs.push({
                            srcCity: city,
                            dstCity: cities[randomIndex]
                        });
                    }
                });
                return arcs;
            };

            const showName = (d) => {
                console.log(d);
            };

            const arcsData = generateRandomArcs(cities);

            const myGlobe = Globe()(document.getElementById('globeViz'))
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .pointOfView({ lat: 25, lng: -10, altitude: 1.5 })
                .arcStartLat(d => d.srcCity.lat)
                .arcStartLng(d => d.srcCity.lng)
                .arcEndLat(d => d.dstCity.lat)
                .arcEndLng(d => d.dstCity.lng)
                .arcDashLength(0.25)
                .arcDashGap(0.5)
                .arcDashInitialGap(() => Math.random())
                .arcDashAnimateTime(4000)
                .arcColor(() => "rgba(156, 255, 0, 0.5)")
                .arcsTransitionDuration(0)
                .pointRadius(0.1)
                .pointsMerge(true)
                .pointLabel(d => d.name)
                .pointLat(d => d.lat)
                .pointLng(d => d.lng)
                .pointAltitude(0.01)
                .pointColor(() => '#FFFFFF');

            myGlobe.pointsData(cities);
            setTimeout(() => {
                myGlobe.arcsData(arcsData);
                setArcsLoaded(true);
            }, 0);

            setLoading(false);

            setTimeout(() => {
                setTickerLoaded(true);
            }, 3000);

            const controls = myGlobe.controls();
            controls.enableZoom = false;
            controls.autoRotate = true;
            controls.autoRotateSpeed = -0.5;
        }
    }, [setLoading]);

    return (
        <div className="relative" style={{ width: '100%', height: '100vh' }}>
            <div id="globeViz" className="absolute inset-0"></div>
{/*             {tickerLoaded && (
                <p className="absolute top-0 left-0 whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white p-4">
                    <NumberTicker value={100} />
                </p>
            )} */}
        </div>
    );
};

export default GlobeVisualization;
