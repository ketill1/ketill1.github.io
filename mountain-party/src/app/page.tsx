"use client";
import { Map1 } from "@/components/Map1";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const [showFoodInfo, setShowFoodInfo] = useState(false);
  const [showLivingInfo, setShowLivingInfo] = useState(false);

  const [food, setFood] = useState("");

  const collapseAll = () => {
    setShowLocationInfo(false);
    setShowFoodInfo(false);
    setShowLivingInfo(false);
  };

  const foodInfo = () => {
    return (
      <div>
        <ol>
          <li>Middag kommer serveras på plats.</li>
          <li>Anmäl specialkost här:</li>
          <input name="foodInput" onChange={(e) => setFood(e.target.value)} />
        </ol>
      </div>
    );
  };

  const LocationInfo = () => {
    return (
      <div style={{ height: "600px", width: "100%" }}>
        <h1>To be decided...</h1>
        <Map1 />
      </div>
    );
  };

  const livingInfo = () => {
    return (
      <div>
        <ol>
          <li>
            Boende kommer finns i militärtält, för att undelätta med plats så ta
            gärna med vintertält de som har. <br />
            Det kommer också vara möjligt att ta sig hem senare på kvällen för
            de som inte vill/kan sova över.
          </li>
          <li>Anmäl specialkost här:</li>
        </ol>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1>Fjäll fest</h1>
        <h2>
          Välkommen till Ketill's och Rasmus 60års kalas. För att fira denna
          <br />
          händelse tänkte vi att en fest på fjället passar både oss och de
          <br />
          vänner som hittils har stått ut med oss. Därför bjuder vi nu in till
          <br />
          Fjäll Rave på ett fjäll.
        </h2>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/snasahögarna.JPG"
          alt="Next.js logo"
          width={1080}
          height={720}
          priority
        />
        {showLocationInfo && LocationInfo()}
        {showFoodInfo && foodInfo()}
        {showLivingInfo && livingInfo()}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <button
          onClick={() => {
            collapseAll(), setShowLocationInfo(!showLocationInfo);
          }}
        >
          Plats
        </button>
        <button
          onClick={() => {
            collapseAll(), setShowFoodInfo(!showFoodInfo);
          }}
        >
          Mat
        </button>
        <button
          onClick={() => {
            collapseAll(), setShowLivingInfo(!showLivingInfo);
          }}
        >
          Boende
        </button>
      </footer>
    </div>
  );
}
