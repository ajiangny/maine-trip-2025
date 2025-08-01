// src/components/GameMap.tsx
import React, { useEffect, useState, useMemo, useRef } from "react";
import { Car } from "./Car";
import day1 from "../assets/backgrounds/portland.jpg";
import day2 from "../assets/backgrounds/ogunquit.jpg";
import day3 from "../assets/backgrounds/day3.jpg";
import day4 from "../assets/backgrounds/day4.jpg";
import day5 from "../assets/backgrounds/day5.jpg";
import day6 from "../assets/backgrounds/day6.jpg";
import day7 from "../assets/backgrounds/day7.jpg";
import { PhotoViewer } from "./PhotoViewer";
import duckfat1 from "../assets/photos/day1/portland_duckfat1.jpg";
import duckfat2 from "../assets/photos/day1/portland_duckfat2.jpg";
import duckfat3 from "../assets/photos/day1/portland_duckfat3.jpg";
import duckfat4 from "../assets/photos/day1/portland_duckfat4.jpg";
import midday1 from "../assets/photos/day1/portland_midday1.jpg";
import midday2 from "../assets/photos/day1/portland_midday2.jpg";
import midday3 from "../assets/photos/day1/portland_midday3.jpg";
import midday4 from "../assets/photos/day1/portland_midday4.jpg";
import oysters1 from "../assets/photos/day1/portland_oysters1.jpg";
import oysters2 from "../assets/photos/day1/portland_oysters2.jpg";
import ogunquit1 from "../assets/photos/day2/ogunquit1.jpg";
import ogunquit2 from "../assets/photos/day2/ogunquit2.jpg";
import ogunquit3 from "../assets/photos/day2/ogunquit3.jpg";
import ogunquit4 from "../assets/photos/day2/ogunquit4.jpg";
import ogunquit5 from "../assets/photos/day2/ogunquit5.jpg";
import ogunquit6 from "../assets/photos/day2/ogunquit6.jpg";
import ogunquit7 from "../assets/photos/day2/ogunquit7.jpg";
import ogunquit8 from "../assets/photos/day2/ogunquit8.jpg";
import ogunquit9 from "../assets/photos/day2/ogunquit9.jpg";
import ogunquit10 from "../assets/photos/day2/ogunquit10.jpg";
import ogunquit11 from "../assets/photos/day2/ogunquit11.jpg";
import ogunquit12 from "../assets/photos/day2/ogunquit12.jpg";
import day3_1 from "../assets/photos/day3/day3_1.jpg";
import day3_2 from "../assets/photos/day3/day3_2.jpg";
import day3_3 from "../assets/photos/day3/day3_3.jpg";
import day3_4 from "../assets/photos/day3/day3_4.jpg";
import day3_5 from "../assets/photos/day3/day3_5.jpg";
import day3_6 from "../assets/photos/day3/day3_6.jpg";
import day3_7 from "../assets/photos/day3/day3_7.jpg";
import day3_8 from "../assets/photos/day3/day3_8.jpg";
import day3_9 from "../assets/photos/day3/day3_9.jpg";
import day3_10 from "../assets/photos/day3/day3_10.jpg";
import day3_11 from "../assets/photos/day3/day3_11.jpg";
import day3_12 from "../assets/photos/day3/day3_12.jpg";
import day4_1 from "../assets/photos/day4/day4_1.jpg";
import day4_2 from "../assets/photos/day4/day4_2.jpg";
import day4_3 from "../assets/photos/day4/day4_3.jpg";
import day4_4 from "../assets/photos/day4/day4_4.jpg";
import day4_5 from "../assets/photos/day4/day4_5.jpg";
import day4_6 from "../assets/photos/day4/day4_6.jpg";
import day4_7 from "../assets/photos/day4/day4_7.jpg";
import day4_8 from "../assets/photos/day4/day4_8.jpg";
import day5_1 from "../assets/photos/day5/day5_1.jpg";
import day5_2 from "../assets/photos/day5/day5_2.jpg";
import day5_3 from "../assets/photos/day5/day5_3.jpg";
import day5_4 from "../assets/photos/day5/day5_4.jpg";
import day5_5 from "../assets/photos/day5/day5_5.jpg";
import day5_6 from "../assets/photos/day5/day5_6.jpg";
import day5_7 from "../assets/photos/day5/day5_7.jpg";
import day5_8 from "../assets/photos/day5/day5_8.jpg";
import day5_9 from "../assets/photos/day5/day5_9.jpg";
import day5_10 from "../assets/photos/day5/day5_10.jpg";
import day5_11 from "../assets/photos/day5/day5_11.jpg";
import day5_12 from "../assets/photos/day5/day5_12.jpg";
import day5_13 from "../assets/photos/day5/day5_13.jpg";
import day5_14 from "../assets/photos/day5/day5_14.jpg";
import day5_15 from "../assets/photos/day5/day5_15.jpg";
import day6_1 from "../assets/photos/day6/day6_1.jpg";
import day6_2 from "../assets/photos/day6/day6_2.jpg";
import day6_3 from "../assets/photos/day6/day6_3.jpg";
import day6_4 from "../assets/photos/day6/day6_4.jpg";
import day6_5 from "../assets/photos/day6/day6_5.jpg";
import day6_6 from "../assets/photos/day6/day6_6.jpg";
import day6_7 from "../assets/photos/day6/day6_7.jpg";
import day6_8 from "../assets/photos/day6/day6_8.jpg";
import day6_9 from "../assets/photos/day6/day6_9.jpg";
import day6_10 from "../assets/photos/day6/day6_10.jpg";
import day6_11 from "../assets/photos/day6/day6_11.jpg";
import day7_1 from "../assets/photos/day7/day7_1.jpg";
import day7_2 from "../assets/photos/day7/day7_2.jpg";
import day7_3 from "../assets/photos/day7/day7_3.jpg";
import day7_4 from "../assets/photos/day7/day7_4.jpg";
import day7_5 from "../assets/photos/day7/day7_5.jpg";
import day7_6 from "../assets/photos/day7/day7_6.jpg";
import day7_7 from "../assets/photos/day7/day7_7.jpg";
import day7_8 from "../assets/photos/day7/day7_8.jpg";
import day7_9 from "../assets/photos/day7/day7_9.jpg";
import day7_10 from "../assets/photos/day7/day7_10.jpg";
import day7_11 from "../assets/photos/day7/day7_11.jpg";
import day7_12 from "../assets/photos/day7/day7_12.jpg";
import day7_13 from "../assets/photos/day7/day7_13.jpg";
import day7_14 from "../assets/photos/day7/day7_14.jpg";
import day7_15 from "../assets/photos/day7/day7_15.jpg";
import bgm from "../assets/audio/bgm.mp3";


const PHOTOS = [
    {
      id: "portland_duckfat1",
      image: duckfat1,
      zoneIndex: 0,         // Background index
      xPercent: 0.2,        // 40% across that background
      bottomPercent: 0.55,  // 15% up from bottom of screen
      caption: "Cutie with a crochet hat",
    },
    {
      id: "portland_duckfat2",
      image: duckfat2,
      zoneIndex: 0,
      xPercent: 0.260,
      bottomPercent: 0.55,
      caption: "Andrew geekin",
    },
    {
        id: "portland_duckfat3",
        image: duckfat3,
        zoneIndex: 0,
        xPercent: 0.175,
        bottomPercent: 0.40,
        caption: "POUTINE from DUCKFAT!",
      },
      {
        id: "portland_duckfat4",
        image: duckfat4,
        zoneIndex: 0,
        xPercent: 0.235,
        bottomPercent: 0.40,
        caption: "Best blueberry milkshake",
      },
      {
        id: "portland_midday1",
        image: midday1,
        zoneIndex: 0,
        xPercent: 0.4,
        bottomPercent: 0.36,
        caption: "Andrew gaming",
      },
      {
        id: "portland_midday2",
        image: midday2,
        zoneIndex: 0,
        xPercent: 0.46,
        bottomPercent: 0.36,
        caption: "Jess checking out vinyls",
      },
      {
        id: "portland_midday3",
        image: midday3,
        zoneIndex: 0,
        xPercent: 0.6,
        bottomPercent: 0.80,
        caption: "Found a nice view :)",
      },
      {
        id: "portland_midday4",
        image: midday4,
        zoneIndex: 0,
        xPercent: 0.8,
        bottomPercent: 0.30,
        caption: "Asserting dominance",
      },
      {
        id: "portland_oysters1",
        image: oysters1,
        zoneIndex: 0,
        xPercent: 0.64,
        bottomPercent: 0.20,
        caption: "(˶⚈Ɛ⚈˵)",
      },
      {
        id: "portland_oysters2",
        image: oysters2,
        zoneIndex: 0,
        xPercent: 0.7,
        bottomPercent: 0.20,
        caption: "Oysters! Jess ate a lot :)",
      },
      {
        id: "portland_midday3",
        image: midday3,
        zoneIndex: 0,
        xPercent: 0.6,
        bottomPercent: 0.80,
        caption: "Found a nice view :)",
      },
      {
        id: "portland_midday4",
        image: midday4,
        zoneIndex: 0,
        xPercent: 0.8,
        bottomPercent: 0.30,
        caption: "Asserting dominance",
      },
      {
        id: "ogunquit1",
        image: ogunquit1,
        zoneIndex: 1,
        xPercent: 0.1,
        bottomPercent: 0.30,
        caption: "Silky Selfie",
      },
      {
        id: "ogunquit2",
        image: ogunquit2,
        zoneIndex: 1,
        xPercent: 0.2,
        bottomPercent: 0.55,
        caption: "Acai Bowl!",
      },    
      {
        id: "ogunquit3",
        image: ogunquit3,
        zoneIndex: 1,
        xPercent: 0.3,
        bottomPercent: 0.57,
        caption: "Jess on a bridge :)",
      },
      {
        id: "ogunquit4",
        image: ogunquit4,
        zoneIndex: 1,
        xPercent: 0.4,
        bottomPercent: 0.35,
        caption: "(ɔ^ ³(^⌣^c)",
      },
      {
        id: "ogunquit11",
        image: ogunquit11,
        zoneIndex: 1,
        xPercent: 0.35,
        bottomPercent: 0.44,
        caption: "Beauty in the garden",
      },
      {
        id: "ogunquit12",
        image: ogunquit12,
        zoneIndex: 1,
        xPercent: 0.45,
        bottomPercent: 0.45,
        caption: "End of Ogunquit :)",
      },
      {
        id: "ogunquit5",
        image: ogunquit5,
        zoneIndex: 1,
        xPercent: 0.5,
        bottomPercent: 0.4,
        caption: "Baddie",
      },
      {
        id: "ogunquit6",
        image: ogunquit6,
        zoneIndex: 1,
        xPercent: 0.55,
        bottomPercent: 0.42,
        caption: "♥♥♥",
      },
      {
        id: "ogunquit9",
        image: ogunquit9,
        zoneIndex: 1,
        xPercent: 0.65,
        bottomPercent: 0.43,
        caption: "First Lobster Roll w/ Jess!",
      },
      {
        id: "ogunquit7",
        image: ogunquit7,
        zoneIndex: 1,
        xPercent: 0.79,
        bottomPercent: 0.39,
        caption: "More food... (-ε- )",
      },
      {
        id: "ogunquit8",
        image: ogunquit8,
        zoneIndex: 1,
        xPercent: 0.72,
        bottomPercent: 0.4,
        caption: "More Lobster Rolls!",
      },
      {
        id: "ogunquit10",
        image: ogunquit10,
        zoneIndex: 1,
        xPercent: 0.9,
        bottomPercent: 0.44,
        caption: "End of Ogunquit :)",
      },
      {
        id: "day3_1",
        image: day3_1,
        zoneIndex: 2,
        xPercent: 0.05,
        bottomPercent: 0.4,
        caption: "Morning Calm",
      },
      {
        id: "day3_2",
        image: day3_2,
        zoneIndex: 2,
        xPercent: 0.12,
        bottomPercent: 0.45,
        caption: "Breakfast Views",
      },
      {
        id: "day3_3",
        image: day3_3,
        zoneIndex: 2,
        xPercent: 0.20,
        bottomPercent: 0.42,
        caption: "Lakeside Laugh",
      },
      {
        id: "day3_4",
        image: day3_4,
        zoneIndex: 2,
        xPercent: 0.28,
        bottomPercent: 0.35,
        caption: "Cabin Vibes",
      },
      {
        id: "day3_5",
        image: day3_5,
        zoneIndex: 2,
        xPercent: 0.36,
        bottomPercent: 0.47,
        caption: "Nature Stroll",
      },
      {
        id: "day3_6",
        image: day3_6,
        zoneIndex: 2,
        xPercent: 0.44,
        bottomPercent: 0.4,
        caption: "Sun & Shade",
      },
      {
        id: "day3_7",
        image: day3_7,
        zoneIndex: 2,
        xPercent: 0.52,
        bottomPercent: 0.39,
        caption: "Quiet Spot",
      },
      {
        id: "day3_8",
        image: day3_8,
        zoneIndex: 2,
        xPercent: 0.60,
        bottomPercent: 0.41,
        caption: "Golden Hour",
      },
      {
        id: "day3_9",
        image: day3_9,
        zoneIndex: 2,
        xPercent: 0.68,
        bottomPercent: 0.43,
        caption: "Docked Moment",
      },
      {
        id: "day3_10",
        image: day3_10,
        zoneIndex: 2,
        xPercent: 0.76,
        bottomPercent: 0.37,
        caption: "Canoe Calm",
      },
      {
        id: "day3_11",
        image: day3_11,
        zoneIndex: 2,
        xPercent: 0.84,
        bottomPercent: 0.44,
        caption: "Evening Look",
      },
      {
        id: "day3_12",
        image: day3_12,
        zoneIndex: 2,
        xPercent: 0.92,
        bottomPercent: 0.42,
        caption: "Last Light",
      },
      {
        id: "day4_1",
        image: day4_1,
        zoneIndex: 3,
        xPercent: 0.1,
        bottomPercent: 0.45,
        caption: "Selfie in the Garden :)",
      },
      {
        id: "day4_2",
        image: day4_2,
        zoneIndex: 3,
        xPercent: 0.2,
        bottomPercent: 0.42,
        caption: "Trolololol",
      },
      {
        id: "day4_3",
        image: day4_3,
        zoneIndex: 3,
        xPercent: 0.3,
        bottomPercent: 0.48,
        caption: "MOGGED",
      },
      {
        id: "day4_4",
        image: day4_4,
        zoneIndex: 3,
        xPercent: 0.4,
        bottomPercent: 0.38,
        caption: "Yup.",
      },
      {
        id: "day4_5",
        image: day4_5,
        zoneIndex: 3,
        xPercent: 0.5,
        bottomPercent: 0.5,
        caption: "Jessica Star Tung",
      },
      {
        id: "day4_6",
        image: day4_6,
        zoneIndex: 3,
        xPercent: 0.6,
        bottomPercent: 0.44,
        caption: "ICE CREAM! Taro was amazing",
      },
      {
        id: "day4_7",
        image: day4_7,
        zoneIndex: 3,
        xPercent: 0.7,
        bottomPercent: 0.4,
        caption: "LOML",
      },
      {
        id: "day4_8",
        image: day4_8,
        zoneIndex: 3,
        xPercent: 0.8,
        bottomPercent: 0.52,
        caption: "Edgecomb Sunset w/Jess :)",
      },
      {
        id: "day5_1",
        image: day5_1,
        zoneIndex: 4,
        xPercent: 0.05,
        bottomPercent: 0.4,
        caption: "Fort Edgecomb",
      },
      {
        id: "day5_2",
        image: day5_2,
        zoneIndex: 4,
        xPercent: 0.1,
        bottomPercent: 0.32,
        caption: "Jess peeking out",
      },
      {
        id: "day5_3",
        image: day5_3,
        zoneIndex: 4,
        xPercent: 0.17,
        bottomPercent: 0.44,
        caption: "Eggz Benedict!",
      },
      {
        id: "day5_4",
        image: day5_4,
        zoneIndex: 4,
        xPercent: 0.26,
        bottomPercent: 0.46,
        caption: "Cute spot in Pemaquid",
      },
      {
        id: "day5_5",
        image: day5_5,
        zoneIndex: 4,
        xPercent: 0.31,
        bottomPercent: 0.43,
        caption: "(っᵔ◡ᵔ)っ(˶ᵔ ᵕ ᵔ˶)",
      },
      {
        id: "day5_6",
        image: day5_6,
        zoneIndex: 4,
        xPercent: 0.36,
        bottomPercent: 0.41,
        caption: "Beautiful view like Jess",
      },
      {
        id: "day5_7",
        image: day5_7,
        zoneIndex: 4,
        xPercent: 0.41,
        bottomPercent: 0.45,
        caption: "Lobstah",
      },
      {
        id: "day5_8",
        image: day5_8,
        zoneIndex: 4,
        xPercent: 0.46,
        bottomPercent: 0.49,
        caption: "Us :)",
      },
      {
        id: "day5_9",
        image: day5_9,
        zoneIndex: 4,
        xPercent: 0.51,
        bottomPercent: 0.42,
        caption: "We made it to the top :D",
      },
      {
        id: "day5_10",
        image: day5_10,
        zoneIndex: 4,
        xPercent: 0.56,
        bottomPercent: 0.48,
        caption: "Another beautiful view like Jess",
      },
      {
        id: "day5_11",
        image: day5_11,
        zoneIndex: 4,
        xPercent: 0.61,
        bottomPercent: 0.46,
        caption: "Pemaquid Lighthouse",
      },
      {
        id: "day5_12",
        image: day5_12,
        zoneIndex: 4,
        xPercent: 0.66,
        bottomPercent: 0.44,
        caption: "Us :)",
      },
      {
        id: "day5_13",
        image: day5_13,
        zoneIndex: 4,
        xPercent: 0.76,
        bottomPercent: 0.43,
        caption: "Cutie on the chair",
      },
      {
        id: "day5_14",
        image: day5_14,
        zoneIndex: 4,
        xPercent: 0.82,
        bottomPercent: 0.41,
        caption: "Best Dinner Ever",
      },
      {
        id: "day5_15",
        image: day5_15,
        zoneIndex: 4,
        xPercent: 0.88,
        bottomPercent: 0.47,
        caption: "BIG BACKED (^O^ )",
      },
      {
        id: "day6_1",
        image: day6_1,
        zoneIndex: 5,
        xPercent: 0.05,
        bottomPercent: 0.4,
        caption: "JORDAN LAKE!",
      },
      {
        id: "day6_2",
        image: day6_2,
        zoneIndex: 5,
        xPercent: 0.1,
        bottomPercent: 0.42,
        caption: "( ✌︎'ω')✌︎",
      },
      {
        id: "day6_3",
        image: day6_3,
        zoneIndex: 5,
        xPercent: 0.15,
        bottomPercent: 0.44,
        caption: "( ✌︎'u')",
      },
      {
        id: "day6_4",
        image: day6_4,
        zoneIndex: 5,
        xPercent: 0.20,
        bottomPercent: 0.41,
        caption: "Jess lookin stylish",
      },
      {
        id: "day6_5",
        image: day6_5,
        zoneIndex: 5,
        xPercent: 0.3,
        bottomPercent: 0.43,
        caption: "Bubble Rock hike!",
      },
      {
        id: "day6_6",
        image: day6_6,
        zoneIndex: 5,
        xPercent: 0.35,
        bottomPercent: 0.39,
        caption: "Bubble Rock hike!",
      },
      {
        id: "day6_7",
        image: day6_7,
        zoneIndex: 5,
        xPercent: 0.4,
        bottomPercent: 0.42,
        caption: "Baddie in the forest",
      },
      {
        id: "day6_8",
        image: day6_8,
        zoneIndex: 5,
        xPercent: 0.6,
        bottomPercent: 0.4,
        caption: "Errrrrr",
      },
      {
        id: "day6_9",
        image: day6_9,
        zoneIndex: 5,
        xPercent: 0.65,
        bottomPercent: 0.41,
        caption: "New periwinkle colored jacket :)",
      },
      {
        id: "day6_10",
        image: day6_10,
        zoneIndex: 5,
        xPercent: 0.7,
        bottomPercent: 0.38,
        caption: "Popover was bussin",
      },
      {
        id: "day6_11",
        image: day6_11,
        zoneIndex: 5,
        xPercent: 0.8,
        bottomPercent: 0.4,
        caption: "(ɔ^ ⌣(^⌣^c)",
      },
      {
        id: "day7_1",
        image: day7_1,
        zoneIndex: 6,
        xPercent: 0.02,
        bottomPercent: 0.4,
        caption: "Foggy Cadillac Mountain",
      },
      {
        id: "day7_2",
        image: day7_2,
        zoneIndex: 6,
        xPercent: 0.08,
        bottomPercent: 0.42,
        caption: "Selfie in the fog :)",
      },
      {
        id: "day7_3",
        image: day7_3,
        zoneIndex: 6,
        xPercent: 0.14,
        bottomPercent: 0.41,
        caption: "Jess Aura Farming",
      },
      {
        id: "day7_4",
        image: day7_4,
        zoneIndex: 6,
        xPercent: 0.20,
        bottomPercent: 0.43,
        caption: "Beautiful like Jess",
      },
      {
        id: "day7_5",
        image: day7_5,
        zoneIndex: 6,
        xPercent: 0.26,
        bottomPercent: 0.39,
        caption: "(ɔˆ⌣ˆ)(ˆ⌣ˆc)",
      },
      {
        id: "day7_6",
        image: day7_6,
        zoneIndex: 6,
        xPercent: 0.32,
        bottomPercent: 0.42,
        caption: "Nice-su",
      },
      {
        id: "day7_7",
        image: day7_7,
        zoneIndex: 6,
        xPercent: 0.42,
        bottomPercent: 0.40,
        caption: "( ˘ ³˘)♥",
      },
      {
        id: "day7_8",
        image: day7_8,
        zoneIndex: 6,
        xPercent: 0.47,
        bottomPercent: 0.41,
        caption: "Insane views",
      },
      {
        id: "day7_9",
        image: day7_9,
        zoneIndex: 6,
        xPercent: 0.57,
        bottomPercent: 0.39,
        caption: "New jacket from Jess :)",
      },
      {
        id: "day7_10",
        image: day7_10,
        zoneIndex: 6,
        xPercent: 0.62,
        bottomPercent: 0.40,
        caption: "Moose!",
      },
      {
        id: "day7_11",
        image: day7_11,
        zoneIndex: 6,
        xPercent: 0.74,
        bottomPercent: 0.25,
        caption: "(˘³˘)",
      },
      {
        id: "day7_12",
        image: day7_12,
        zoneIndex: 6,
        xPercent: 0.72,
        bottomPercent: 0.41,
        caption: "Lovely candid",
      },
      {
        id: "day7_13",
        image: day7_13,
        zoneIndex: 6,
        xPercent: 0.78,
        bottomPercent: 0.40,
        caption: "( っ˶´ ˘ `)っ",
      },
      {
        id: "day7_14",
        image: day7_14,
        zoneIndex: 6,
        xPercent: 0.9,
        bottomPercent: 0.38,
        caption: "Blueberry Pie + Ice Cream :)",
      },
      {
        id: "day7_15",
        image: day7_15,
        zoneIndex: 6,
        xPercent: 0.73,
        bottomPercent: 0.565,
        caption: "Angel ( ͡♥ ³ ͡♥)",
      },
  ];


  const BACKGROUND_ZONES = [
    { name: "portland", start: 0, end: 1250, image: day1 },
    { name: "ogunquit", start: 1250, end: 2500, image: day2 },
    { name: "llbean_and_cruise", start: 2500, end: 3750, image: day3 },
    { name: "mainegardens_edgewater", start: 3750, end: 5000, image: day4 },
    { name: "pemaquid", start: 5000, end: 6250, image: day5 },
    { name: "camden", start: 6250, end: 7500, image: day6 },
    { name: "acadia", start: 7500, end: 8750, image: day7 },
  ];

export const GameMap: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<null | typeof PHOTOS[0]>(null);

    const openPhotoModal = (photo: typeof PHOTOS[0]) => setSelectedPhoto(photo);
    
    const [carX, setCarX] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isMusicPlaying, setIsMusicPlaying] = useState(true);

    // Auto-play when mounted
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3; // optional: lower volume
        audioRef.current.play().catch(() => {}); // catch autoplay block
      }
    }, []);

    // This is the state logic
    const [zoneWidth, setZoneWidth] = useState(window.innerWidth);
    const [isMoving, setIsMoving] = useState(false);
      
    // Recalculate dimensions on window resize
    useEffect(() => {
      const handleResize = () => {
        setZoneWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    // Derived values based on current zone width
    const carWidth = zoneWidth * 0.12;
    const halfCarWidth = carWidth / 2;
    const worldWidth = useMemo(() => BACKGROUND_ZONES.length * zoneWidth, [zoneWidth]);


    const handleKeyDown = (e: KeyboardEvent) => {
        setIsMoving(true);
        clearTimeout((handleKeyDown as any)._timeout); // clear previous timeout
        (handleKeyDown as any)._timeout = setTimeout(() => setIsMoving(false), 150);
      
        setCarX((prev) => {
          if (e.key === "ArrowRight") {
            setDirection("right");
            return Math.min(prev + 20, worldWidth - halfCarWidth);
          }
          if (e.key === "ArrowLeft") {
            setDirection("left");
            return Math.max(prev - 20, halfCarWidth);
          }
          return prev;
        });
      };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const halfViewport = zoneWidth / 2;

  const cameraOffset =
    carX < halfViewport
      ? 0
      : carX > worldWidth - halfViewport
      ? worldWidth - zoneWidth
      : carX - halfViewport;

  const screenX =
    carX < halfViewport
      ? carX
      : carX > worldWidth - halfViewport
      ? carX - cameraOffset
      : halfViewport;

      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#000",
          }}
        >
          {/* World container that scrolls based on car movement */}
          <div
            style={{
              position: "absolute",
              width: `${worldWidth}px`,
              height: "100%",
              transform: `translateX(-${cameraOffset}px)`,
              transition: "transform 0.1s linear",
              display: "flex",
              padding: 0,
              margin: 0,
            }}

          >{PHOTOS.map((photo) => {
            const xPos = photo.zoneIndex * zoneWidth + photo.xPercent * zoneWidth;
            const yPos = photo.bottomPercent * window.innerHeight;
          
            return (
              <img
                key={photo.id}
                src={photo.image}
                alt={photo.caption}
                onClick={() => openPhotoModal(photo)}
                style={{
                  position: "absolute",
                  left: `${xPos}px`,
                  bottom: `${yPos}px`,
                  width: `${zoneWidth * 0.05}px`,   // e.g. 5% of zone width
                  height: `${zoneWidth * 0.06}px`,  // Keep a nice photo aspect ratio
                  objectFit: "cover",
                  border: "6px solid white",
                  boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                  transform: isMoving
                    ? direction === "left"
                      ? "rotate(-6deg)"
                      : "rotate(6deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              />
            );
          })}

            {/* Side-by-side background panels */}
            {BACKGROUND_ZONES.map((zone) => (
                <img
                    key={zone.name}
                    src={zone.image}
                    alt={zone.name}
                    style={{
                    width: `${zoneWidth}px`,
                    height: "100%",
                    objectFit: "cover",
                    flexShrink: 0,
                    display: "block",
                    }}
                />
                ))}
          </div>

          {selectedPhoto && (
  <PhotoViewer
    image={selectedPhoto.image}
    caption={selectedPhoto.caption}
    onClose={() => setSelectedPhoto(null)}
  />
)}

{/* Audio element */}
<audio ref={audioRef} loop src={bgm} />

{/* Music toggle button */}
<button
  onClick={() => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  }}
  style={{
    position: "fixed",
    top: "16px",
    right: "16px",
    zIndex: 1000,
    padding: "10px 14px",
    borderRadius: "8px",
    backgroundColor: "#ffffffaa",
    border: "1px solid #ccc",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    cursor: "pointer"
  }}
>
  {isMusicPlaying ? "🔊 Music On" : "🔇 Music Off"}
</button>
      
          {/* Car stays visually fixed in center logic */}
          <Car screenX={screenX} direction={direction} />
        </div>

                    

      );
      
};