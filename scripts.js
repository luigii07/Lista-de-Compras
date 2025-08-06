const form = document.querySelector("form")
const input = document.querySelector("input")
const shoppingList = document.querySelector("ul")
const item = document.querySelectorAll(".item")
const remove = document.querySelectorAll(".remove")
const toast = document.querySelector(".alert")
const closeToast = document.querySelector(".close")

form.onsubmit = (e) => {
    e.preventDefault()

    if (input.value === ""){
        alert("Insira uma descrição para o item!")
        return
    }

    const newItem = document.createElement("li")
    const itemName = document.createElement("span")
    const btnRemove = document.createElement("div")

    itemName.textContent = input.value
    btnRemove.innerHTML = `<i class="hgi hgi-stroke hgi-delete-02"></i>`
    btnRemove.classList.add("remove")
    newItem.classList.add("item")

    newItem.append(itemName, btnRemove)
    shoppingList.append(newItem)
    
    input.value = ""
    toast.classList.add("hidden")
}

shoppingList.addEventListener("click", (e) => {
    if(e.target.closest(".item")) {
        const itemClick = e.target.closest(".item")
        itemClick.classList.toggle("selected")
    }
})

shoppingList.addEventListener("click", (e) => {
    try {
        if(e.target.closest(".remove")) {
            const itemRemove = e.target.closest(".item")
            
            shoppingList.removeChild(itemRemove)
            toast.classList.remove("hidden")
        }
    } catch (error) {
        console.log(error)
        alert("Não foi possível remover o item da lista! Por favor, tente mais tarde.")
    }
})

closeToast.onclick = () => {
    toast.classList.add("hidden")
}