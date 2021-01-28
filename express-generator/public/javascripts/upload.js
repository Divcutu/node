document.querySelector('.upload').addEventListener('change', data => {
  console.log(data)
  let files = data.target.files
  console.log(files)
  let formData = new FormData()
  Array.prototype.forEach.call(files, val => {
    console.log(val)
    formData.append('imgs', val)
  })
  // formData.append('name', 'dxx')
  if (files.length > 5)
  fetch('/upload/imgs-array', {
    // headers: new Headers({
    //   "Content-Type": 'application/json'
    // }),
    method: 'post',
    body: formData
  }).then(async response => {
    let text = await response.text()
    console.log(text)
  })
})