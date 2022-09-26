function save() {
  let toDo = []
  const inputEl = document.getElementById('input-el')
  const addList = document.getElementById('add-list')
  const ulEl = document.getElementById('ul-el')

  addList.addEventListener('click', function () {
    console.log(inputEl)
    toDo.push(inputEl.value)
    inputEl.value = ''
    renderList()
  })

  function renderList() {
    let listItems = ''
    for (let i = 0; i < toDo.length; i++) {
      listItems += '<li>' + toDo[i] + '</li>'
    }
    ulEl.innerHTML = listItems
  }
}
document.addEventListener('readystatechange', function (e) {
  if (e.target.readyState === 'complete') {
    save()
  }
})
