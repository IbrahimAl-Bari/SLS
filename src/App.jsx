import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {flavors} from "./constants"

gsap.registerPlugin(ScrollTrigger);

const App = () => {


    // flavor state
    const [currentFlavor, setCurrentFlavor] = useState(0);
    // get current flavor
    const flavor = flavors[currentFlavor];


    // change flavor
    const changeFlavor = (index) => {
        if (index === currentFlavor) return;

        const nextFlavor = flavors[index];

        const tl = gsap.timeline({
            defaults: { ease: "power3.inOut" }
        });

        tl.to([".hero2-inner", ".hero3-inner",".hero-inner"], {
            x: -200,
            opacity: 0,
            duration: 0.35,
        });

        tl.add(() => {
            setCurrentFlavor(index);
        });

        tl.set([".hero2-inner", ".hero3-inner",".hero-inner"], {
            x: 200,
        });

        tl.to([".hero3" , ".hero2", ".hero"], {
            "--inner": nextFlavor.bg.inner,
            "--outer": nextFlavor.bg.outer,
            duration: 0.45,
        }, "<");

        tl.to([".hero2-inner", ".hero3-inner", ".hero-inner"], {
            x: 0,
            opacity: 1,
            duration: 0.45,
        }, "<");
    };

    useEffect(() => {
        gsap.set([".hero3" , ".hero2" , ".hero"], {
            "--inner": flavor.bg.inner,
            "--outer": flavor.bg.outer,
        });
    }, []);


    // handle change
    useEffect(() => {
        console.log('Flavor changed to:', currentFlavor, flavor.name);

        gsap.set([".juice", ".img1","img2" , ".name"], {
            opacity: 0,
        });

        gsap.to([".juice", ".img1","img2" , ".name"], {
            opacity: 1,
            duration: 0.3,
            delay: 0.05,
            onComplete: () => console.log('Fade in complete')
        });
    }, [currentFlavor]);

    // arrow nav
    const nextFlavor = () => {
        const next = (currentFlavor + 1) % flavors.length;
        changeFlavor(next);
    };
    const prevFlavor = () => {
        const prev = (currentFlavor - 1 + flavors.length) % flavors.length;
        changeFlavor(prev);
    };

    // keyboard nav
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowRight') nextFlavor();
            if (e.key === 'ArrowLeft') prevFlavor();
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentFlavor]);

    // scroll top
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);




    useGSAP(() => {
        // juice animation
        const juiceTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".juice",
                start: "top top",
                end: "bottom top",
                scrub: 2,
            },
        });
        juiceTl.to(".juice", {
            y: 700,
            xPercent: 50,
            yPercent: -10,
            rotation: 30,
            scale: 1,
        });
        juiceTl.to(".juice", {
            rotation: -10,
            scrollTrigger: {
                trigger: ".juice",
                start: "+=1800",
                scrub: 1,
            }
        });


        // hero2
        gsap.timeline({
            scrollTrigger: {
                trigger: ".hero2",
                start: "top bottom",
                end: "center center",
                scrub: 2,
            },
        }).fromTo(".first", { x: -700, opacity: 0 }, { x: 0, opacity: 1 });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".second",
                start: "top bottom",
                end: "center center",
                scrub: 2,
            },
        }).fromTo(".second", { x: 700, opacity: 0 }, { x: 0, opacity: 1 });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".third",
                start: "top bottom",
                end: "center center",
                scrub: 2,
            },
        }).fromTo(".third", { x: -700, opacity: 0 }, { x: 0, opacity: 1 });

        // scale animations
        gsap.timeline({
            scrollTrigger: { trigger: ".first", start: "center center", scrub: 2 },
        }).to(".first", { scale: 0.7 });

        gsap.timeline({
            scrollTrigger: { trigger: ".second", start: "center center", scrub: 2 },
        }).to(".second", { scale: 0.7 });

        gsap.timeline({
            scrollTrigger: { trigger: ".third", start: "center center", scrub: 2 },
        }).to(".third", { scale: 0.7 });

        // h4 animation
        gsap.timeline({
            scrollTrigger: { trigger: "h4", start: "center center", scrub: 2 },
        }).from("h4", { x: -50, opacity: 0, stagger: 0.3 });

        // Images
        gsap.timeline({
            scrollTrigger: { trigger: ".img1", start: "center center", scrub: 2 },
        }).from(".img1", { x: -500, opacity: 0, stagger: 0.3 });

        gsap.timeline({
            scrollTrigger: { trigger: ".img2", start: "center center", scrub: 2 },
        }).from(".img2", { x: 700, opacity: 0, stagger: 0.3 });

        // pin
        ScrollTrigger.create({
            trigger: ".hero2",
            start: "center center",
            end: "+=1200",
            pin: ".hero2",
            pinSpacing: true,
        });

        ScrollTrigger.create({
            trigger: ".juice-wrapper",
            start: "bottom top",
            end: "+=1850",
            pin: ".juice",
            scrub: 1,
        });
    }, []);


    return (
        <main>
            <div className={"flex main-content"}>

            <NavBar />


                <div className="juice-wrapper">
                    <img
                        className="juice h-full drop-shadow-2xl"
                        src={flavor.image}
                        alt={flavor.name}
                    />
                </div>


                <div className={"hero"}>
            </div>

            <div className={"hero"}>
                <div className={"w-full h-[50%] hero-inner "}>
                    <h1 className={"absolute"}>Fresh Taste</h1>
                    <h1 className={"absolute top-25 opacity-60"}>Fresh Taste</h1>
                    <h1 className={"absolute top-50 opacity-20"}>Fresh Taste</h1>
                </div>

                <div className={"w-full h-[50%] flex justify-center items-center"}>
                <h2 className={'mb-15'}>try now</h2>
                    <div style={{backgroundColor: flavor.c }} className={"w-30 h-15 hover:scale-110 transition-all cursor-pointer absolute bottom-15 rounded-4xl flex justify-center items-center"}>
                        <h5 className={"text-3xl text-white"}>Buy</h5>
                    </div>
                </div>


            </div>
            </div>



            <div className={"hero2 flex justify-center"}>
                <div className={"w-full h-screen hero2-inner text-center items-center grid grid-cols-1 grid-rows-3 z-0 text-[300px]"}>
                    <h3 className={"first"}>Taste It.</h3>
                    <h3 className={'second'}>Feel It.</h3>
                    <h3 className={"third"}>Live It.</h3>
                </div>


                    <div className={"con-text1 grid justify-center items-center gap-10 h-screen absolute  w-[30%] left-0"}>
                        <img className={"img1 absolute -left-40 bottom-0"} src={flavor.smphoto1} alt=""/>
                        <img  className={"img1 absolute rotate-45 scale-50 top-0 z-0"} src={flavor.smphoto2 ? flavor.smphoto2 : flavor.smphoto1} alt=""/>
                    <h4 className={"z-2"}>1- Taste It. Feel It. Live It.</h4>
                    <h4 className={"z-2"}>2- No Sugar.</h4>
                    <h4>3- Pure. Fresh. Yours.</h4>
                    </div>


                    <div className={"con-text2 h-screen grid justify-center items-center gap-10 absolute w-[30%] right-0"}>
                        <img className={"img2 absolute -left-70 -z-2"}  src={flavor.bigImage} alt=""/>
                        <img className={"img2 absolute rotate-45 -bottom-20 z-0"} src={flavor.smphoto1} alt=""/>
                        <img  className={"img2 absolute scale-75 -rotate-12 top-0"} src={flavor.smphoto2 ? flavor.smphoto2 : flavor.smphoto1} alt=""/>
                    <h4>4- Real Juice. Real Energy.</h4>
                    <h4>5- No BS.</h4>
                    <h4 className={'z-2'}>6- Sip Nature. Feel Alive.</h4>
                    </div>


            </div>


            <div className={"hero3 w-full h-screen flex overflow-hidden"}>

                <div className={'w-full flex justify-between items-center h-screen absolute z-1'}>
                    <img onClick={prevFlavor} className={"rotate-180 w-21 h-21 cursor-pointer hover:scale-110 transition-all duration-200"} src="/arrow-right.svg" alt=""/>
                    <img onClick={nextFlavor} className={"w-21 cursor-pointer h-21 hover:scale-110 transition-all duration-200"} src="/arrow-right.svg" alt=""/>
                </div>


                <div className={"hero3-inner overflow-hidden w-full h-full flex"}>


                <h6 className={"name p-5 absolute"}>SLS {flavor.name}</h6>




                <div className={"con-text1 z-0  gap-10 h-screen w-[30%]"}>
                <img className={"img1 relative -left-20 rotate-90 bottom-0"} src={flavor.smphoto1} alt=""/>
                <img  className={"img1 relative rotate-45 z-0"} src={flavor.smphoto2 ? flavor.smphoto2 : flavor.smphoto1} alt=""/>
                </div>


                <div className={"w-[40%] h-screen flex items-center justify-center "}>
                    <img className={"img2 w-[40%] absolute z-2"}  src={flavor.bigImage} alt=""/>
                </div>


                <div className={"con-text2 h-screen w-[30%]"}>
                    <img  className={"img1 relative scale-75 -rotate-12 "} src={flavor.smphoto2 ? flavor.smphoto2 : flavor.smphoto1} alt=""/>
                    <img className={"img1 relative rotate-12 top-20 z-0"} src={flavor.smphoto1} alt=""/>
                </div>

                </div>
                <div className={"w-full h-screen absolute flex items-end"}>
                    <div className={"w-full h-20 z-3 flex justify-evenly items-center "}>

                        <div className={"flex gap-5 z-40"}>
                            {flavors.map((f, index) => (
                                <img
                                    key={index}
                                    className={`cursor-pointer z-10 transition-all ${
                                        currentFlavor === index
                                            ? 'scale-110 opacity-100 rounded-full'
                                            : 'scale-100 opacity-60 hover:opacity-100 hover:scale-110'
                                    }`}
                                    src={f.icon}
                                    alt={f.name}
                                    onClick={() => changeFlavor(index)}
                                />
                            ))}
                        </div>


                        {/* Tagline */}
                        <h6 className=" pl-20 text-center transition-opacity duration-300">
                            {flavor.tagline}
                        </h6>

                        {/* Description */}
                        <div className="flex justify-end">
                            <p className=" w-[60%] transition-opacity duration-300">
                                {flavor.description}
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}
export default App