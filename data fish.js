// data/fish.js
let fishData = [
    { id: 1, name: 'Ikan Hiu', habitat: 'Laut', food: 'Ikan kecil' },
    { id: 2, name: 'Ikan Piranha', habitat: 'Sungai Amazon', food: 'Daging' },
  ];
  
  export const getFishData = () => fishData;
  
  export const addFishData = (newFish) => {
    newFish.id = fishData.length + 1;
    fishData.push(newFish);
  };
  