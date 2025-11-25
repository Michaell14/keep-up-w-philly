import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  const shakeAnimation = {
    rotate: [-6, 6, -6, 6, 0],
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  };

  return (
    <div>

      {/* HERO SECTION */}
      <section className="light relative">
        <div className="relative -translate-y-1/2">
          <p className="text-4xl md:text-6xl faculty-glyphic-regular">Inbox of the City</p>
          <img src="/underline.png" className="absolute -bottom-3 md:-bottom-5 right-0 w-20 md:w-32"/>
        </div>
        
        <p className="text-xl md:text-2xl px-8 mt-10 md:mt-6 text-[#847E72] max-w-md hanken-grotesk-400 -translate-y-1/2">Keep up with what's hot in Philly with simple email alerts.</p>
        <a href="https://ifttt.com/applets/mnYi4Tvk-keep-up-w-philly" target="_blank">
        <div 
          className="lexend-exa text-base md:text-lg mt-6 py-2 px-4 bg-[#3f342f] text-white rounded-md -translate-y-1/2"
         >
          JOIN US
        </div>
        </a>

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 max-w-6xl min-w-3xl"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img src="/together.png" className="w-full" />
        </motion.div>
  

      </section>

      {/* SECTION 1 */}
      <section className="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-20 items-center">
          <div className="text-left">
            <p className="text-3xl md:text-4xl faculty-glyphic-regular">Let Philly email you when something cool is happening.</p>
            <p className="text-lg md:text-xl mt-6 text-[#B9AF9D] hanken-grotesk-400">
              Inbox of the City turns hot posts from r/Philadelphia into simple email alerts, so you can follow marathons, Eagles games, and neighborhood happenings without doomscrolling your feed.
            </p>
          </div>

            {/* Right column optional image */}
            <motion.img 
              src="/bird.png" 
              className="max-h-70 mx-auto hidden md:block cursor-pointer"
              whileInView={shakeAnimation}
              whileHover={shakeAnimation}
              viewport={{ amount: 1, once: true, margin: "0px 0px -200px 0px" }}
            />

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="light relative">
        <div className="max-w-lg">
          <p className="text-3xl md:text-4xl faculty-glyphic-regular">Have you ever felt like everyone else just “knows what's going on”?</p>
          <p className="text-lg md:text-xl mt-6 text-[#847E72] hanken-grotesk-400">
            Living in Philadelphia means there's always something happening. But staying in the loop is sometimes difficult.
          </p>
        </div>

        <img src="/emojis.png" className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl"/>

        
      </section>

      {/* SECTION 3 */}
      <section className="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-10 py-20 md:py-0">
          <div className="text-left">
            <p className=" text-3xl md:text-4xl faculty-glyphic-regular">How it works</p>
            <p className="text-lg md:text-xl mt-6 text-[#B9AF9D] hanken-grotesk-400">
              Inbox of the City turns hot posts from r/Philadelphia into simple email alerts.
            </p>
          </div>

          <div>
            <div class="grid grid-cols-4 md:grid-cols-5 gap-4">
              <div class="col-span-1 lexend-exa text-[#463D2F]">
                <p className="text-sm md:text-base bg-[#EBEADE] w-fit px-2 py-1">IF</p>
              </div>
              <img src="/reddit.png" className="h-8 hidden md:block"/>
              <div class="col-span-3 text-left">
                <p className="text-sm md:text-base lexend-exa">NEW HOT POST IN SUBREDDIT</p>
                <p className="text-sm md:text-base lexend-exa bg-[#847E72] px-2 py-1 mt-2 w-fit">POLLING TRIGGER</p>
                <p className="text-sm md:text-base hanken-grotesk-400 text-[#B9AF9D] mt-2">This trigger fires every time a new post becomes one of the ten hottest posts in the subreddit you specify.</p>
                <p className="text-sm md:text-base lexend-exa mt-4">TRIGGER INGREDIENTS</p>
                <div className="flex mt-2 gap-2 flex-wrap text-xs lexend-exa">
                  <p className="bg-[#847E72] px-2 py-1 w-fit">TITLE</p>
                  <p className="bg-[#847E72] px-2 py-1 w-fit">IMAGEURL</p>
                  <p className="bg-[#847E72] px-2 py-1 w-fit">CONTENT</p>
                  <p className="bg-[#847E72] px-2 py-1 w-fit">POSTURL</p>
                  <p className="bg-[#847E72] px-2 py-1 w-fit">CONTENTHTML</p>
                  <p className="bg-[#847E72] px-2 py-1 w-fit">SUBREDDIT</p>
                  <p className="bg-[#847E72] px-2 py-1 w-fit">AUTHOR</p>
                  <p className="bg-[#847E72] px-2 py-1 w-fit">POSTDATE</p>

                </div>
              </div>
              
            </div>
            <div class="grid grid-cols-4 md:grid-cols-5 gap-4 mt-8">
              <div class="col-span-1 lexend-exa text-[#463D2F]">
                <p className="text-sm md:text-base bg-[#EBEADE] w-fit px-2 py-1">THEN</p>
              </div>
              <img src="/mail.png" className="h-8 hidden md:block"/>
              <div class="col-span-3 text-left">
                <p className="text-sm md:text-base lexend-exa">SEND ME AN EMAIL</p>
                <p className="text-sm md:text-base lexend-exa mt-2 bg-[#847E72] px-2 py-1 w-fit">ACTION</p>
                <p className="text-sm md:text-base hanken-grotesk-400 text-[#B9AF9D] mt-2">This action will send you an HTML based email. Images and links are supported.</p>
                <p className="text-sm md:text-base lexend-exa mt-4">ACTION FIELDS</p>

                <div className="flex mt-2 gap-2 flex-wrap text-xs lexend-exa">
                  <p className="bg-[#847E72] px-2 py-1 w-fit">TITLE</p>
                  <p className="bg-[#847E72] px-2 py-1 w-fit">BODY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <section className="light relative overflow-x-hidden">
        <div className="max-w-lg">
          <p className="text-3xl md:text-4xl faculty-glyphic-regular">Let the city reach out to you</p>
          <p className="text-lg md:text-xl mt-6 text-[#847E72] hanken-grotesk-400">
            Sign up for Inbox of the City today.
          </p>
        </div>
        
        <img src="/city.png" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 min-w-3xl"/>
        <img src="/plane.png" className="absolute top-20 right-0 w-2/3"/>
      </section>

    </div>
  );
}
