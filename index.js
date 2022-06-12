// Code your solution here
function findMatching(name, filter1) {
    return name.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === filter1.toLowerCase()
    );
  }
  
  function fuzzyMatch(name, testString) {
    return name.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(name, filter1Name) {
    return name.filter((record) => record.name === filter1Name);
  }
