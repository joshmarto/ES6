const baseURL = 'http://dummy.restapiexample.com/api/v1';

const loadingDiv = document.getElementById('loading');
const resultsDiv = document.getElementById('results');
const resultsTotalPara = document.getElementById('resultsTotal');
const postedResultPara = document.getElementById('postedResult');

const showLoading = () => {
    loadingDiv.style.display = 'block';
};
const hideLoading = () => {
    loadingDiv.style.display = 'none';
};

const clearResults = () => {
    resultsDiv.innerHTML = '';
    resultsTotalPara.innerHTML = '';
};

const fetchData = () => {
    clearResults();
    showLoading();
    fetch(`${baseURL}/employees`)
        .then(response => response.json())
        .then(jsonObj => displayList(jsonObj))
        .catch(() => alert("sorry, we couldn't access the API"));
};

const displayList = (jsonObj) => {
    hideLoading();
    fetchButton.innerText = 'Refresh data';
    let totalEmployees = 0;

    jsonObj.forEach(jsonItem => {
        const { id, employee_name, employee_salary, employee_age, profile_image } = jsonItem;
        const employeeDiv = document.createElement('div');
        const salary = employee_salary == 0
            ? '<span style="color:red">No salary</span>'
            : `<span style="color:green">$${parseInt(employee_salary).toLocaleString()}</span>`;
        const employeeItem = `
      <div class="employee">
        <h2>${employee_name} <small>${employee_age} years old</small></h2>
        <p><b>Salary:</b> ${salary}</p>
      </div>
    `;
        employeeDiv.innerHTML = employeeItem;
        resultsDiv.insertAdjacentElement('beforeend', employeeDiv);
        totalEmployees++;
    });

    resultsTotalPara.innerHTML = `
    Fetched ${totalEmployees} employees!
  `;
};

const sendForm = (e) => {
    e.preventDefault();

    const nameForm = document.getElementById('nameForm');
    const salaryForm = document.getElementById('salaryForm');
    const ageForm = document.getElementById('ageForm');
    const name = nameForm.value;
    const salary = salaryForm.value;
    const age = ageForm.value;

    if (name === '' || salary === '' || age === '') {
        alert("You must complete all fields first.");
        return;
    }

    postNewEmployee(name, salary, age);

    nameForm.value = '';
    salaryForm.value = '';
    ageForm.value = '';
};

const postNewEmployee = (name, salary, age) => {
    fetch(`${baseURL}/create`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            salary: salary,
            age: age
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(jsonResponse => showPostResponse(jsonResponse))
        .catch(() => alert("sorry, we couldn't access the API"));
}

const showPostResponse = (responseObject) => {
    alert('new item posted!');
    postedResultPara.innerText = JSON.stringify(responseObject);
    postedResultPara.style.display = 'inline-block';
};

// Buttons & Form
const fetchButton = document.getElementById('fetch');
const newPostForm = document.getElementById('newPostForm');
fetchButton.addEventListener('click', fetchData);
newPostForm.addEventListener('submit', sendForm);

hideLoading();