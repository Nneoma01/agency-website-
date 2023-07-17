
const headBar = document.querySelector(".head-bar")
const headCloseBtn = document.querySelector(".head-bar .close")
console.log([headCloseBtn])

headCloseBtn.addEventListener("click", e => {
  headBar.style.display = "none"
  // headBar.remove()
  document.body.style.paddingTop = 0
})

const screens = document.querySelectorAll("img.screens") // []

const changeScreen = (scAttr) => {
  console.log(`screens would be ${scAttr}`);
  if (scAttr === "auto") {
    alert("desktop")
  } else if (scAttr === "1200px") {
    alert("laptop")
  } else if (scAttr === "992px") {
    alert("tablet")
  } else if (scAttr === "576px") {
    alert("phone-landscape")
  } else if (scAttr === "480px") {
    alert("phone-portrait")
  }
}

screens.forEach(sc => {
  sc.addEventListener("click", e => {
    const scAttr = sc.getAttribute("data-screen")
    changeScreen(scAttr)
  })
})

/*let isEleInView = (ele) => {
  const el = ele.getBoundingClientRect()
}

const allViewEffects = document.querySelectorAll(".reveal-view");
console.log({allViewEffects})


let isElInView = (ele) => {
  const ele = ele.getBoundingClientRect()
}

return (
  el.top >= 0 &&
  el.left >= 0 &&
  el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  el.right <= (window.innerWidth || document.documentElement.clientWidth)
);

const allRevealEffects  = document.querySelectorAll(".reveal-effect")
console.log({allRevealEffects})*/

let isEleInView = (ele) => {
  const el = ele.getBoundingClientRect()

  return (
    el.top >= 0 &&
    el.left >= 0 &&
    el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    el.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const allRevealEffects = document.querySelectorAll(".reveal-effect")
console.log({ allRevealEffects })

const allCountNums = document.querySelectorAll(".count-num")

const runCount = (dom, endNum) => {
  let current = 0
  dom.textContent = current

  const atInterval = setInterval(() => {
    // current++ // current = current + 1  
    
    if (dom.textContent < endNum) {
      dom.textContent++ 
    } 
    // else {
      // console.log("should end")
      // return clearInterval(atInterval)
    }

    // if (current >= endNum) {
    //   console.log("should end")
    //   return clearInterval(atInterval)
    // } else {
    //   current++ // current = current + 1  
    // }

  }, 20);
}

window.addEventListener("scroll", ev => {
  allRevealEffects.forEach(element => {
    let isRevealActive = element.classList.contains("reveal-effect-active")

    if (isEleInView(element) && !isRevealActive) {
      element.classList.add("reveal-effect-active")
    } else if (!isEleInView(element) && isRevealActive) {
      element.classList.remove("reveal-effect-active")
    }
  })

})

allCountNums.forEach(child => {
  const endNum = Number(child.innertext)
  const inView = isEleInView(child)

  if(inView){
    runCount(child, endNum)
  }
})