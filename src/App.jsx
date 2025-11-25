import React from "react";
import "./index.css";

export default function App() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="light relative">
        <div className="relative">
          <p className="text-5xl faculty-glyphic-regular">Inbox of the City</p>
          <img src="/underline.png" className="absolute -bottom-5 right-0 w-28"/>
        </div>
        
        <p className="text-2xl mt-6 text-[#847E72] max-w-md hanken-grotesk-400">Keep up with what's hot in Philly with simple email alerts.</p>
        <a href="https://ifttt.com/applets/mnYi4Tvk-keep-up-w-philly" target="_blank">
        <div 
          className="lexend-exa text-lg mt-6 py-2 px-4 bg-[#3f342f] text-white rounded-md"
         >
          JOIN US
        </div>
        </a>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl">
          <img src="/together.png" />
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="dark">
        <div className="grid grid-cols-2 max-w-6xl mx-auto gap-20 px-10 items-center">
          <div className="text-left">
            <p className="text-4xl faculty-glyphic-regular">Let Philly email you when something cool is happening.</p>
            <p className="text-xl mt-6 text-[#B9AF9D] hanken-grotesk-400">
              Inbox of the City turns hot posts from r/Philadelphia into simple email alerts, so you can follow marathons, Eagles games, and neighborhood happenings without doomscrolling your feed.
            </p>
          </div>

            {/* Right column optional image */}
            <img src="/bird.png" className="max-h-70 mx-auto"/>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="light relative">
        <div className="max-w-lg">
          <p className="text-4xl faculty-glyphic-regular">Have you ever felt like everyone else just “knows what's going on”?</p>
          <p className="text-xl mt-6 text-[#847E72] hanken-grotesk-400">
            Living in Philadelphia means there's always something happening. But staying in the loop is sometimes difficult.
          </p>
        </div>
          <img src="/emojis.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl"/>
        
      </section>

      {/* SECTION 3 */}
      <section className="dark">
        <div className="grid grid-cols-2 max-w-6xl mx-auto gap-10 px-10">
          <div className="text-left">
            <p className="text-4xl faculty-glyphic-regular">How it works</p>
            <p className="text-xl mt-6 text-[#B9AF9D] hanken-grotesk-400">
              Inbox of the City turns hot posts from r/Philadelphia into simple email alerts.
            </p>
          </div>

          <div>
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-1 lexend-exa text-[#463D2F]">
                <p className="bg-[#EBEADE] w-fit px-2 py-1">IF</p>
              </div>
              <img src="/reddit.png" className="h-8"/>
              <div class="col-span-3 text-left">
                <p className="lexend-exa">NEW HOT POST IN SUBREDDIT</p>
                <p className="lexend-exa bg-[#847E72] px-2 py-1 mt-2 w-fit">POLLING TRIGGER</p>
                <p className="hanken-grotesk-400 text-[#B9AF9D] mt-2">This trigger fires every time a new post becomes one of the ten hottest posts in the subreddit you specify.</p>
                <p className="lexend-exa mt-4">TRIGGER INGREDIENTS</p>
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
            <div class="grid grid-cols-5 gap-4 mt-8">
              <div class="col-span-1 lexend-exa text-[#463D2F]">
                <p className="bg-[#EBEADE] w-fit px-2 py-1">THEN</p>
              </div>
              <img src="/mail.png" className="h-8"/>
              <div class="col-span-3 text-left">
                <p className="lexend-exa">SEND ME AN EMAIL</p>
                <p className="lexend-exa mt-2 bg-[#847E72] px-2 py-1 w-fit">ACTION</p>
                <p className="hanken-grotesk-400 text-[#B9AF9D] mt-2">This action will send you an HTML based email. Images and links are supported.</p>
                <p className="lexend-exa mt-4">ACTION FIELDS</p>

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
          <p className="text-4xl faculty-glyphic-regular">Let the city reach out to you</p>
          <p className="text-xl mt-6 text-[#847E72] hanken-grotesk-400">
            Sign up for Inbox of the City today.
          </p>
        </div>
        
        <img src="/city.png" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-3xl max-w-5xl"/>
        <img src="/plane.png" className="absolute top-20 right-0 w-full max-w-6xl"/>
      </section>

    </div>
  );
}
