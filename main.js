// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function
const pAequorFactory = (num, arr) => {
  return {
    specimenNum : num,
    dna : arr
  }
  
};

//Test
console.log(pAequorFactory(1, mockUpStrand())); // Should return {specimenNum: 1,  dna: ['A', 'C', 'T', 'G','T', 'T', 'T', 'G', 'A', 'G', 'G', 'G', 'T', 'T', 'A']}








