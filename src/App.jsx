import React from 'react'
import NavBar from './components/NavBar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

    useGSAP(() => {
        // Juice animation
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
            xPercent: 74,
            yPercent: -10,
            rotation: 18,
            scale: 1,
        });
        juiceTl.to(".juice", {
            rotation: -18,
            scrollTrigger: {
                trigger: ".juice",
                start: "+=2000",
                end : "+=100",
                scrub: 2,
            }
        });

        // First section
        const firstTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero2",
                start: "top bottom",
                end: "center center",
                scrub: 2,
            },
        });

        firstTl.fromTo(
            ".first",
            { x: -700, opacity: 0 },
            { x: 0, opacity: 1 }
        );

        // Second section
        const secondTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".second",
                start: "top bottom",
                end: "center center",
                scrub: 2,
            },
        });

        secondTl.fromTo(
            ".second",
            { x: 700, opacity: 0 },
            { x: 0, opacity: 1 }
        );

        // Third section
        const thirdTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".third",
                start: "top bottom",
                end: "center center",
                scrub: 2,
            },
        });

        thirdTl.fromTo(
            ".third",
            { x: -700, opacity: 0 },
            { x: 0, opacity: 1 }
        );

        // Scale timelines
        gsap.timeline({
            scrollTrigger: {
                trigger: ".first",
                start: "center center",
                scrub: 2,
            },
        }).to(".first", { scale: 0.7 });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".second",
                start: "center center",
                scrub: 2,
            },
        }).to(".second", { scale: 0.7 });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".third",
                start: "center center",
                scrub: 2,
            },
        }).to(".third", { scale: 0.7 });

        // h4 animation
        gsap.timeline({
            scrollTrigger: {
                trigger: "h4",
                start: "center center",
                scrub: 2,
            },
        }).from("h4", {
            x: -50,
            opacity: 0,
            stagger: 0.3,
        });

        // Images
        gsap.timeline({
            scrollTrigger: {
                trigger: ".img1",
                start: "center center",
                scrub: 2,
            },
        }).from(".img1", {
            x: -500,
            opacity: 0,
            stagger: 0.3,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".img2",
                start: "center center",
                scrub: 2,
            },
        }).from(".img2", {
            x: 700,
            opacity: 0,
            stagger: 0.3,
        });

        // Pinning (unchanged)
        ScrollTrigger.create({
            trigger: ".hero2",
            start: "center center",
            end: "+=1200",
            pin: ".hero2",
            pinSpacing: true,
        });

        ScrollTrigger.create({
            trigger: ".juice",
            start: "bottom top",
            end: "+=2200",
            pin: ".juice",
            scrub: 1,
        });
    }, []);


    return (
        <main>
            <div className={"flex main-content"}>
            <NavBar />
                <img className={"juice h-full drop-shadow-2xl"} src="/orangejuice.svg" alt="juice"/>
            <div className={"hero"}>
            </div>

            <div className={"hero"}>

                <div className={"w-full h-[50%] "}>
                    <h1 className={"absolute"}>Fresh Taste</h1>
                    <h1 className={"absolute top-25 opacity-60"}>Fresh Taste</h1>
                    <h1 className={"absolute top-50 opacity-20"}>Fresh Taste</h1>
                </div>

                <div className={"w-full h-[50%] flex justify-center items-center"}>
                <h2 className={'mb-15'}>try now</h2>
                    <div className={"w-30 h-15 hover:bg-[#FF9F1C] transition-all cursor-pointer bg-[#FFB627] absolute bottom-15 rounded-4xl flex justify-center items-center"}>
                        <h5 className={"text-3xl text-white"}>Buy</h5>
                    </div>
                </div>
            </div>
            </div>



            <div className={"hero2 flex justify-center"}>
                <div className={"w-full h-screen text-center items-center grid grid-cols-1 grid-rows-3 z-0 text-[300px]"}>

                    <h3 className={"first"}>Taste It.</h3>
                    <h3 className={'second'}>Feel It.</h3>
                    <h3 className={"third"}>Live It.</h3>

                </div>

                    <div className={"con-text1 grid justify-center items-center gap-10 h-screen absolute  w-[30%] left-0"}>
                        <img className={"img1 absolute -left-40 bottom-0"} src="/orange.png" alt=""/>
                        <img  className={"img1 absolute rotate-45 scale-50 top-0 z-0"} src="/carrot.png" alt=""/>
                    <h4 className={"z-2"}>1- Taste It. Feel It. Live It.</h4>
                    <h4 className={"z-2"}>2- No Sugar.</h4>
                    <h4>3- Pure. Fresh. Yours.</h4>
                    </div>
                    <div className={"con-text2 h-screen grid justify-center items-center gap-10 absolute w-[30%] right-0"}>
                        <img className={"img2 absolute -left-70 -z-2"}  src="/orangebig.png" alt=""/>
                        <img className={"img2 absolute rotate-45 -bottom-20 z-0"} src="/orange.png" alt=""/>
                        <img  className={"img2 absolute scale-75 -rotate-12 top-0"} src="/carrot.png" alt=""/>
                    <h4>4- Real Juice. Real Energy.</h4>
                    <h4>5- No BS.</h4>
                    <h4 className={'z-2'}>6- Sip Nature. Feel Alive.</h4>
                    </div>
            </div>

            <div className={"hero3 flex"}>

                <h6 className={"p-5 absolute"}>SLS Orange & carrots</h6>
                <img className={"p-5 rotate-180 w-21"} src="/arrow-right.svg" alt=""/>




                <div className={"con-text1 grid justify-center items-center z-0  gap-10 h-screen  w-[30%]"}>
                <img className={"img1 relative -left-40 rotate-90 bottom-0"} src="/orange.png" alt=""/>
                <img  className={"img1 relative rotate-45 scale-50 bottom-30 z-0"} src="/carrot.png" alt=""/>
                </div>
                <div className={"w-[40%] h-screen flex items-center justify-center "}>
                    <img className={"img2 w-[40%] absolute z-2"}  src="/orangebig.png" alt=""/>
                </div>
                <div className={"con-text2 h-screen w-[30%]"}>
                    <img  className={"img2 relative bottom-10 scale-75 -rotate-12 "} src="/carrot.png" alt=""/>
                    <img className={"img2 relative rotate-12 bottom-20 z-0"} src="/orange.png" alt=""/>
                </div>


            </div>
        </main>
    )
}
export default App