let contact_form = document.getElementById("contact");
let dashboard = document.getElementById("dashboard");
let navbar = document.getElementById("navbar");
let add = document.getElementById("add");
let overview = document.getElementById("overview");
function showcontactform() {
    contact_form.style.display = "grid";
    dashboard.style.display = "none";
    navbar.style.display = "";
    add.style.display = "none";
}
function showDashboard() {
    contact_form.style.display = "none";
    dashboard.style.display = "grid";
    add.style.display = "none";
    overview.style.display = "none";
}
function updateProgressBar() {
    // Get user input values
    let totalBudget = document.getElementById('total-budget').value;
    let amountSpent = document.getElementById('amount-spent').value;

    // Calculate percentage spent
    let percentageSpent = (amountSpent / totalBudget) * 100;

    // Update progress bar width
    document.getElementById('progress').style.width = percentageSpent + '%';

    // Update progress text
    document.getElementById('progress-text').innerText = 
        percentageSpent.toFixed(2) + '% of your budget spent';
}
// Initialize data for the pie chart
const data = {
    labels: ['Income', 'Expenses'],
    datasets: [{
        label: 'Amount',
        data: [0, 0], // Initial data
        backgroundColor: ['#4caf50', '#f44336'],
        hoverOffset: 5
    }]
};

// Create the pie chart
const piectx = document.getElementById('piechart').getContext('2d');
const piechart = new Chart(piectx, {
    type: 'pie',
    data: data,
    options: {
        responsive: false, // Disable responsiveness
        maintainAspectRatio: false, // Allow changing width and height freely
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20 // Increase the font size of the legend
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    size: 16 // Increase the font size of the tooltips
                }
            }
        }
    }
});

// Initialize the line chart with stored data
const storedData = loadStoredData();
const linectx = document.getElementById('linechart').getContext('2d');
const linechart = new Chart(linectx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], // Fixed labels
        datasets: [
            {
                label: 'Income',
                data: storedData.income,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                fill: false
            },
            {
                label: 'Expenses',
                data: storedData.expenses,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                fill: false
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                display: true,
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Values'
                }
            }
        }
    }
});

// Load stored data from local storage
function loadStoredData() {
    const storedData = JSON.parse(localStorage.getItem('budgetData')) || { income: 0, expenses: 0 };
    data.datasets[0].data[0] = storedData.income;
    data.datasets[0].data[1] = storedData.expenses;
    chart.update();
}

function loadStoredData() {
    const storedData = localStorage.getItem('budgetData');
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        return {
            income: new Array(12).fill(0),
            expenses: new Array(12).fill(0)
        };
    }
}

// 3. Handle form submission and update the chart
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form values
    const dateTime = document.getElementById('datetime').value;
    const monthIndex = getMonthFromDate(dateTime); // Get the month index from the date
    const type = document.getElementById('entry-type').value;
    const amount = parseFloat(document.getElementById('entry-amount').value);

    // Update the chart data for the selected month
    if (type === 'income') {
        chart.data.datasets[0].data[monthIndex] += amount;
        data.datasets[0].data[0] += amount;
    } else {
        chart.data.datasets[1].data[monthIndex] += amount;
        data.datasets[0].data[1] += amount;
    }

    // Save updated data to local storage
    const updatedData = {
        income: chart.data.datasets[0].data,
        expenses: chart.data.datasets[1].data
    };
    localStorage.setItem('budgetData', JSON.stringify(updatedData));

// Add entry to chart and local storage
function addEntry() {
    const type = document.getElementById('entry-type').value;
    const description = document.getElementById('entry-description').value;
    const amount = parseFloat(document.getElementById('entry-amount').value);

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter valid description and amount.');
        return;
    }

    // // Update chart data
    // if (type === 'income') {
    //     data.datasets[0].data[0] += amount;
    // } else {
    //     data.datasets[0].data[1] += amount;
    // }

    // Save updated data to local storage
    const updatedData = {
        income: data.datasets[0].data[0],
        expenses: data.datasets[0].data[1]
    };
    localStorage.setItem('budgetData', JSON.stringify(updatedDataData));

    // Update chart
    chart.update();

}
// Load data on page load
loadStoredData();
function openadd() {
add.style.width = "500px";
add.style.display = "block";
add.style.right = "0";
}

function closeadd() {
add.style.width = "0";
add.style.display = "block";
add.style.right = "-500px";

}
function showoverview(){
    overview.style.display= "block";
    add.style.display = "none";
    dashboard.style.display = "none";
    
}
config = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    // altInput: true;
    // altFormat: "F j, Y (h:S K)"
}