import { render, UpSetProps } from '@upsetjs/bundle';

// Load the language data
async function main() {

  console.log("Hello!")

  // Load precomputed sets and combinations
  const sets = await fetch('./sets.json').then((res) => res.json());
  const rawCombinations = await fetch('./combinations.json').then((res) => res.json());

  // Build a lookup map from set name to set object
  const setsByName = new Map(sets.map((s: any) => [s.name, s]));

  // Reconstruct the Set objects from the serialized array of names
  const combinations = rawCombinations.map((c: any) => ({
    ...c,
    sets: new Set(c.sets.map((name: string) => setsByName.get(name)))
  }));

  const props: UpSetProps<{ name: string; sets: string[] }> = {
    sets,
    combinations,
    width: 1500,
    height: 600,
    heightRatios: [200],
    setLabelAlignment: "left",
    widthRatios: [150, 100, 1750],
    selection: null,
    onHover: (set) => {
      render(document.getElementById('upset')!, { ...props, selection: set });
    },
    fontSizes: { setLabel: '10px', barLabel: '10px' },
  };

  console.log("combinations:", combinations)
  console.log("sets:", sets)

  render(document.getElementById('upset')!, props);
}

main();
