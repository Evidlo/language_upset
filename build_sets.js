import { extractCombinations } from '@upsetjs/bundle';
import fs from 'fs';

console.log("Loading data...");
const elems = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

console.log("Building sets...");
let { sets, combinations } = extractCombinations(
    elems,
    {
        setOrder: 'cardinality:desc',
        combinationOrder: 'cardinality:desc',
        combinationLimit: 100,
        type: 'distinctIntersection'
    }
);

// Convert Sets to arrays for JSON serialization
// The 'sets' property is a Set of set objects - convert to array of set names
const serializableCombinations = combinations.map(c => ({
  ...c,
  sets: Array.from(c.sets).map(s => s.name)  // Convert Set<SetObject> to string[]
}));

// Filter sets to only include those that appear in at least one combination
const usedSetNames = new Set(serializableCombinations.flatMap(c => c.sets));
const filteredSets = sets.filter(s => usedSetNames.has(s.name));

fs.writeFileSync('sets.json', JSON.stringify(filteredSets));
fs.writeFileSync('combinations.json', JSON.stringify(serializableCombinations));

console.log("Wrote sets.json and combinations.json");
