
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


