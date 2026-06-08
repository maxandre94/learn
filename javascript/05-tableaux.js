const tab = [5,8,15,6,2,3]
const som = tab.reduce((acc, x) => acc+x,0)
const trie = [...tab].sort((a,b) => a-b)
const pair = tab.filter(x => x%2===0)
console.log(`sommme: ${som}, trie croissant: ${trie}, pair: ${pair}`)