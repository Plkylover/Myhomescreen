const changeText = document.getElementById("changeText")
const uploadBtn = document.getElementById("uploadBtn")
const imgUpload = document.getElementById("imgUpload")
const inputTag = document.querySelector(".inputTag")
const searchBtn = document.getElementById("searchBtn")
const search = ()=>{
  let url = 'https://www.google.com/search?q='+inputTag.value
  window.open(url)
}
if (localStorage.getItem("text") != null && localStorage.getItem("text") != undefined) {
  changeText.innerHTML = localStorage.getItem("text")
}
else{
  localStorage.setItem("text", changeText.innerHTML)
}
if (localStorage.getItem("ImgSrc") != null && localStorage.getItem("ImgSrc") != undefined) {
  imgUpload.innerHTML = ''
  imgUpload.style.backgroundImage = `url("${localStorage.getItem("ImgSrc")}")`
  imgUpload.style.backgroundSize = 'cover'
  imgUpload.style.border = 'none'
}
const change = ()=>{
  localStorage.setItem("text", changeText.innerHTML)
}
imgUpload.addEventListener("click", ()=>{
  uploadBtn.click()
})
const output = (event)=>{
  const reader = new FileReader()
  reader.addEventListener("load", ()=>{
  imgUpload.innerHTML = ''
  imgUpload.style.backgroundImage = `url("${reader.result}")`
  localStorage.setItem("ImgSrc", reader.result)
})
reader.readAsDataURL(event.target.files[0])
  imgUpload.style.backgroundSize = 'cover'
  imgUpload.style.border = 'none'
}
inputTag.addEventListener("keypress", (event)=>{
  if (event.key === "Enter") {
    search()
  }
})
searchBtn.addEventListener("click", ()=>{
  search()
})