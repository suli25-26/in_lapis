const tbody = document.querySelector('#tbody')
const empForm = document.querySelector('#empForm')
const idInput = document.querySelector('#id')
const nameInput = document.querySelector('#name')
const cityInput = document.querySelector('#city')
const salaryInput = document.querySelector('#salary')

employees = [
    { id: 1, name: 'Erős István', city: "Szeged", salary: 395 },
    { id: 2, name: 'Tar Ferenc', city: "Pécs", salary: 392 },
    { id: 3, name: 'Csaló Gábor', city: "Szeged", salary: 398 },
    { id: 4, name: 'Rendes Irén', city: "Pécs", salary: 393 },
    { id: 5, name: 'Fel Áron', city: "Szeged", salary: 397 },
]

empForm.addEventListener('submit', (event) => {
    event.preventDefault()
    save()
})

function save() {
    createEmployee()
}

function createEmployee() {
    console.log('Create...')
    // const name = nameInput.value
    const emp = { 
        id: generateId(), 
        name: nameInput.value, 
        city: cityInput.value, 
        salary: salaryInput.value
    }
    console.log(emp)
    employees.push(emp)
    renderTable()
    resetEmpForm()
}

function resetEmpForm() {
    idInput.value = ''
    nameInput.value = ''
    cityInput.value = ''
    salaryInput.value = ''
}

// generateId()
function generateId() {
    const size = employees.length
    const lastEmp = employees[size-1]
    // console.log(lastEmp.id)
    return lastEmp.id + 1
}

function updateEmployee() {}

function renderTable() {
    var rows = ''
    employees.forEach(emp => {
        rows += makeRow(emp)
    })
    tbody.innerHTML = rows
}

renderTable()

function makeRow(emp) {
    return `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.city}</td>
            <td>${emp.salary}</td>
            <td>
                <button class="btn btn-danger"
                onclick="deleteEmployee(${emp.id})">
                    Törlés
                </button>
                <button class="btn btn-primary">
                    Szerkesztés
                </button>
            </td>
        </tr>
    `
}

function deleteEmployee(id) {
    console.log('Törlés...')
    console.log(id)

    employees = employees.filter(emp => emp.id != id)
    renderTable()
}
