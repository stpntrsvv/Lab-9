function addCompany() {
    let companyName = document.getElementById('company_name').value
    let term = document.getElementById('term').value
    fetch('/add', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'company_name': companyName,
                             'term': term
                             })
    })
}

function clearExp() {
    fetch('/clear', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
        const CompaniesList = document.getElementById('id');
        CompaniesList.innerHTML = '';
        console.log(data.message);
    })
    .catch(error => console.error('ERR', error));
}