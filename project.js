
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
  if(scAttr === "auto") {
    alert("desktop")
  } else if(scAttr === "1200px") {
    alert("laptop")
  }else if(scAttr === "992px") {
    alert("tablet")
  }else if(scAttr === "576px") {
    alert("phone-landscape")
  }else if(scAttr === "480px") {
    alert("phone-portrait")
  }  
}

screens.forEach(sc => {
  sc.addEventListener("click", e => {
    const scAttr = sc.getAttribute("data-screen")
    changeScreen(scAttr)
  })
})

const arr =[]
arr.forEach(e=> console.log(e))