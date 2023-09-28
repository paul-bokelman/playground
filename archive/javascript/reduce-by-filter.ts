const clouds = [
  {
    level: "mid",
    class: "altocumulus",
    name: "Semi-transparent Altocumulus",
    description:
      "Translucent bands or patches in a relatively continuous layer.",
    image: "https://www.weather.gov/images/jetstream/clouds/m3_1.jpg",
  },
  {
    level: "mid",
    class: "altocumulus",
    name: "Altocumulus progressively invading the sky",
    description: "One or more layers of translucent or opaque bands.",
    image: "https://www.weather.gov/images/jetstream/clouds/m5_2.jpg",
  },
  {
    level: "mid",
    class: "altocumulus",
    name: "Altocumulus in Layers or Altocumulus with As or Ns",
    description:
      "In one or more opaque layers, sometimes with Altostratus or Nimbostratus.",
    image: "https://www.weather.gov/images/jetstream/clouds/m7_2.jpg",
  },
  {
    level: "mid",
    class: "altocumulus",
    name: "Altocumulus with tufts or sproutings",
    description:
      "Small towers, which can be similar to small Cumulus with wispy trails of virga.",
    image: "https://www.weather.gov/images/jetstream/clouds/m8_6.jpg",
  },
  {
    level: "mid",
    class: "altocumulus",
    name: "Altocumulus of a chaotic sky",
    description:
      "Chaotic sky with multiple layers and kinds of Altocumulus at several altitudes.",
    image: "https://www.weather.gov/images/jetstream/clouds/m9_3.jpg",
  },
  {
    level: "mid",
    class: "altostratus",
    name: "Thin Altostratus",
    description:
      "Full or nearly full sky cover that is gray, shapeless and translucent; produces no halo.",
    image: "https://www.weather.gov/images/jetstream/clouds/m1_1.jpg",
  },
  {
    level: "high",
    class: "Cirrocumulus",
    name: "Cirrocumulus",
    description:
      "Thin white ripples or small puffs, which may be accompanied by some Cirrus/Cirrostratus.",
    image: "https://www.weather.gov/images/jetstream/clouds/h9_1.jpg",
  },
  {
    level: "high",
    class: "cirrostratus",
    name: "Cirrostratus",
    description:
      "Cirrostratus with or without Cirrus: Increasing in density and covering much of, but not the entire sky.",
    image: "https://www.weather.gov/images/jetstream/clouds/h6_1.jpg",
  },
  {
    level: "high",
    class: "cirrostratus",
    name: "Cirrostratus covering the whole sky",
    description:
      "Veil covering the whole sky, sometimes a halo around the sun or moon is present.",
    image: "https://www.weather.gov/images/jetstream/clouds/h7_4.jpg",
  },
  {
    level: "high",
    class: "cirrostratus",
    name: "Cirrostratus not invading or covering the sky",
    description:
      "Cirrostratus veil not covering the whole sky nor increasing in coverage.",
    image: "https://www.weather.gov/images/jetstream/clouds/h8_2.jpg",
  },
  {
    level: "high",
    class: "cirrus",
    name: "Filaments of Cirrus",
    description:
      "Cirrus in straight, nearly straight, or curved filaments, strands or hooks.",
    image: "https://www.weather.gov/images/jetstream/clouds/h1_1.jpg",
  },
  {
    level: "high",
    class: "cirrus",
    name: "Dense Cirrus",
    description: "Dense cirrus of white puffs with wispy edges.",
    image: "https://www.weather.gov/images/jetstream/clouds/h2_3.jpg",
  },
  {
    level: "high",
    class: "cirrus",
    name: "Cirrus progressively invading the sky",
    description:
      "Cirrus filaments, strands or hooks, increasing in coverage and generally thickening as a whole.",
    image: "https://www.weather.gov/images/jetstream/clouds/h4_1.jpg",
  },
  {
    level: "low",
    class: "cumulonimbus",
    name: "Cumulus of moderate/strong development",
    description:
      "Clouds of very tall summits, which lack sharp outlines and are not anvil-shaped.",
    image: "https://www.weather.gov/images/jetstream/clouds/l3_4.jpg",
  },
  {
    level: "low",
    class: "cumulus",
    name: "Cumulus with little vertical extent",
    description:
      "Thin and ragged clouds with continuously changing edges; forms during fair weather by daytime heating.",
    image: "https://www.weather.gov/images/jetstream/clouds/l1_5.jpg",
  },
  {
    level: "low",
    class: "cumulus",
    name: "Cumulus of moderate/strong development",
    description:
      "Moderately tall clouds with rounded puffy tops; may occur with Cumulus/Stratocumulus",
    image: "https://www.weather.gov/images/jetstream/clouds/l2_4.jpg",
  },
  {
    level: "mid",
    class: "nimbostratus",
    name: "Nimbostratus or Thick Altostratus",
    description:
      "Thick opaque coverage, no precipitation, or Nimbostratus: during precipitation or virga.",
    image: "https://www.weather.gov/images/jetstream/clouds/m2_3.jpg",
  },
  {
    level: "low",
    class: "Stratocumulus",
    name: "Stratocumulus from spreading out of Cumulus",
    description:
      "Spread out Cumulus when vertical development stabilizes; sometimes can occur along with Cumulus.",
    image: "https://www.weather.gov/images/jetstream/clouds/l4_2.jpg",
  },
  {
    level: "low",
    class: "Stratocumulus",
    name: "Stratocumulus not from spreading out of Cumulus",
    description: "One or more layers, not resulting from spreading Cumulus.",
    image: "https://www.weather.gov/images/jetstream/clouds/l5_1.jpg",
  },
  {
    level: "low",
    class: "stratus",
    name: "Stratus",
    description:
      "Clouds in a continuous layer, or Stratus fractus: In ragged shreds, or both, without precipitation.",
    image: "https://www.weather.gov/images/jetstream/clouds/l6_1.jpg",
  },
  {
    level: "low",
    class: "stratus",
    name: "Stratus Fractus or Cumulus Fractus",
    description:
      "Stratus- or Cumulus- fractus: Ragged shreds during precipitation, usually seen below Altostratus or Nimbostratus.",
    image: "https://www.weather.gov/images/jetstream/clouds/l7_1.jpg",
  },
];

type Cloud = {
  level: string;
  class: string;
  name: string;
  description: string;
  image: string;
};

// const mid = clouds.filter((cloud) => cloud.level === "mid");
// const high = clouds.filter((cloud) => cloud.level === "high");
// const low = clouds.filter((cloud) => cloud.level === "low");

const { mid, high, low } = clouds.reduce(
  (acc, cloud) => {
    acc[cloud.level].push(cloud);
    return acc;
  },
  { mid: [], high: [], low: [] } as { [key: string]: Cloud[] }
);

console.log(mid, high, low);
