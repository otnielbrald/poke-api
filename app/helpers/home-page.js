export function homePage() {
  let centenas = Math.random().toFixed(1) *1000,
    decenas
  
  let nums = [0,20,40,60,80]
  let ran = Math.random().toFixed(1) *200,
    esta

  while (!esta) {
    
    // for (const num of nums) {
    //   if (num === ran) {
    //     decenas = num
    //   }
    // }

    let found = nums.find(num => num === ran)
    decenas = found
    esta = nums.includes(ran)
    ran = Math.random().toFixed(1) *200
  }
  
  return centenas + decenas
}