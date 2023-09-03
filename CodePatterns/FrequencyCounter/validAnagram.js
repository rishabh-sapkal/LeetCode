function x(str1 , str2){
    // add whatever parameters you deem necessary - good luck!
    
    if(str1.length !== str2.length){
        return false
    }
    
    let freqCounter1 = {};
    let freqCounter2 = {};
    
    for(let index in str1){
        let char = str1[index];
        freqCounter1[char] = ++freqCounter1[char] || 1 ;
    }
    for(let index in str2){
          let char = str2[index];
        freqCounter2[char] = ++freqCounter2[char] || 1 ;
    }
    
    for(let key in freqCounter1){
        if(!(key in freqCounter2)){
            return false
        }
        if(freqCounter2[key] !== freqCounter1[key]){
            return false
        }
    }
    
    return true
  }
  const validAnagram = (a,b)=> console.log(x(a,b))
  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram("rat","car") // false) // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
  validAnagram('qwerty', 'qeywrt') // true
  validAnagram('texttwisttime', 'timetwisttext') // true
  