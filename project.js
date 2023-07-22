
const headBar = document.querySelector(".head-bar")
const headCloseBtn = document.querySelector(".head-bar .close")
console.log([headCloseBtn])

headCloseBtn.addEventListener("click", e => {
  headBar.style.display = "none"
  // headBar.remove()
  document.body.style.paddingTop = 0
})

const screens = document.querySelectorAll("img.screens") // []
const changeWidth = document.querySelector("body")

const changeScreen = (scAttr) => {
  console.log(`screens would be ${scAttr}`);
  if (scAttr === "auto") {
    // alert("desktop")
    changeWidth.classList.add("body-one")
  } else if (scAttr === "1200px") {
    // alert("laptop")
    changeWidth.classList.add("body-two")
    // width change to 1200px
  } else if (scAttr === "992px") {
    // alert("tablet")
    // width change to 992px
    // change lg to md
    changeWidth.classList.add("body-three")
  } else if (scAttr === "576px") {
    // alert("phone-landscape")
    // width chaneg to 576px
    // change md to xs
    changeWidth.classList.add("body-four")
  } else if (scAttr === "480px") {
    // alert("phone-portrait")
    // width change to 480px
    // change md to xs 
    changeWidth.classList.add("body-five")
  }
}

screens.forEach(sc => {
  sc.addEventListener("click", e => {
    const scAttr = sc.getAttribute("data-screen")
    changeScreen(scAttr)
  })
})


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

const runCount = (dom, endNum) => {
  let current = 0
  dom.textContent = current

  const atInterval = setInterval(() => {

    if (current < endNum) {
      current++
      dom.textContent = current
    } else if (current >= endNum) {
      dom.classList.add("count-done")
      clearInterval(atInterval)
    }
  }, 20);
}

const allCountNums = document.querySelectorAll(".count-num")

window.addEventListener("scroll", ev => {
  allRevealEffects.forEach(element => {
    let isRevealActive = element.classList.contains("reveal-effect-active")

    if (isEleInView(element) && !isRevealActive) {
      element.classList.add("reveal-effect-active")
    } else if (!isEleInView(element) && isRevealActive) {
      element.classList.remove("reveal-effect-active")
    }
  })

  allCountNums.forEach(child => {
    const endNum = Number(child.innerText)
    const inView = isEleInView(child)
    let hasCountDone = child.classList.contains("count-done")

    if (inView && !hasCountDone) {
      console.log("in view")
      runCount(child, endNum)
    }
  })
})


