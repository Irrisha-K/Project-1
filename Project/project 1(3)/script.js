let contact_form = document.getElementById("contact");
let dashboard = document.getElementById("dashboard");
let add = document.getElementById("add");
let overview = document.getElementById("overview");

function showcontactform() {
    contact_form.style.display = "grid";
    dashboard.style.display = "none";
    add.style.display = "none";
}

function showDashboard() {
    contact_form.style.display = "none";
    dashboard.style.display = "grid";
    add.style.display = "none";
    overview.style.display = "none";
}

function showoverview() {
    overview.style.display = "block";
    dashboard.style.display = "none";
    add.style.display = "none";
}

// // Initialize pie chart data
// const pieData = {
//     labels: ['Income', 'Expenses'],
//     datasets: [{
//         label: 'Amount',
//         data: [0, 0], // Initial values for income and expenses
//         backgroundColor: ['#4caf50', '#f44336'],
//         hoverOffset: 4
//     }]
// };

// // Initialize pie chart
// const piectx = document.getElementById('piechart').getContext('2d');
// const piechart = new Chart(piectx, {
//     type: 'pie',
//     data: pieData,
//     options: {
//         responsive: false,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 labels: {
//                     font: {
//                         size: 16
//                     }
//                 }
//             },
//             tooltip: {
//                 bodyFont: {
//                     size: 14
//                 }
//             }
//         }
//     }
// });

// // Load stored data for line chart
// const storedData = loadStoredData();

// // Initialize line chart
// const linectx = document.getElementById('linechart').getContext('2d');
// const linechart = new Chart(linectx, {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//         datasets: [
//             {
//                 label: 'Income',
//                 data: storedData.income, // Load income data
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1,
//                 fill: false
//             },
//             {
//                 label: 'Expenses',
//                 data: storedData.expenses, // Load expenses data
//                 borderColor: 'rgb(255, 99, 132)',
//                 tension: 0.1,
//                 fill: false
//             }
//         ]
//     },
//     options: {
//         responsive: false,
//         maintainAspectRatio: false,
//         scales: {
//             x: {
//                 display: true,
//                 title: {
//                     display: true,
//                     text: 'Months'
//                 }
//             },
//             y: {
//                 display: true,
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: 'Amount'
//                 }
//             }
//         }
//     }
// });

// // Helper function to get month index from a date string
// function getMonthFromDate(dateString) {
//     const date = new Date(dateString);
//     return date.getMonth(); // Returns month as 0 (Jan) to 11 (Dec)
// }

// // Load stored data from local storage
// function loadStoredData() {
//     const storedData = JSON.parse(localStorage.getItem('budgetData')) || {
//         income: Array(12).fill(0),
//         expenses: Array(12).fill(0)
//     };
//     return storedData;
// }

// // Save updated data to local storage
// function saveStoredData(income, expenses) {
//     const updatedData = { income, expenses };
//     localStorage.setItem('budgetData', JSON.stringify(updatedData));
// }

// // Form submission handling
// function addentry (){
//     // event.preventDefault();
//     // Get form values
//     const dateTime = document.getElementById('datetime').value;
//     const monthIndex = getMonthFromDate(dateTime);
//     const type = document.getElementById('entry-type').value;
//     const amount = parseFloat(document.getElementById('entry-amount').value);

//     // Update the appropriate dataset in the line chart
//     if (type === 'income') {
//         linechart.data.datasets[0].data[monthIndex] += amount;
//         pieData.datasets[0].data[0] += amount; // Update cumulative income for pie chart
//     } else {
//         linechart.data.datasets[1].data[monthIndex] += amount;
//         pieData.datasets[0].data[1] += amount; // Update cumulative expenses for pie chart
//     }

//     // Update both charts
//     linechart.update();
//     piechart.update();

//     // Save updated data to local storage
//     saveStoredData(linechart.data.datasets[0].data, linechart.data.datasets[1].data);

//     // Clear the form
//     document.getElementById('datetime').value = '';
//     document.getElementById('entry-amount').value = '';
// };
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

//     // Helper function to get the month from a date string
//     function getMonthFromDate(dateString) {
//         const date = new Date(dateString);
//         return date.getMonth(); // Returns month as 0 (Jan) to 11 (Dec)
//     }

//     // Load stored data from local storage
//     function loadStoredData() {
//         const storedData = localStorage.getItem('budgetData');
//         if (storedData) {
//             return JSON.parse(storedData);
//         } else {
//             return {
//                 income: new Array(12).fill(0),
//                 expenses: new Array(12).fill(0)
//             };
//         }
//     }

// // Initialize the line chart
// const storedData = loadStoredData();
// const lineCtx = document.getElementById('lineChart').getContext('2d');
// const lineChart = new Chart(lineCtx, {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//         datasets: [
//             {
//                 label: 'Income',
//                 data: storedData.income,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1,
//                 fill: false
//             },
//             {
//                 label: 'Expenses',
//                 data: storedData.expenses,
//                 borderColor: 'rgb(255, 99, 132)',
//                 tension: 0.1,
//                 fill: false
//             }
//         ]
//     },
//     options: {
//         responsive: true,
//         scales: {
//             x: {
//                 display: true,
//                 title: {
//                     display: true,
//                     text: 'Months'
//                 }
//             },
//             y: {
//                 display: true,
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: 'Values'
//                 }
//             }
//         }
//     }
// });

// // Initialize the pie chart
// const pieCtx = document.getElementById('pieChart').getContext('2d');
// const pieChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: ['Income', 'Expenses'],
//         datasets: [{
//             data: [0, 0], // Initial values for Income and Expenses
//             backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
//             hoverOffset: 4
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });

// // // Helper function to get the month index from a date string
// // function getMonthFromDate(dateString) {
// //     const date = new Date(dateString);
// //     return date.getMonth(); // Returns month as 0 (Jan) to 11 (Dec)
// // }

// // Handle form submission and update both charts
// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from reloading the page

//     // Get form values
//     const dateTime = document.getElementById('datetime').value;
//     const monthIndex = getMonthFromDate(dateTime);
//     const type = document.getElementById('entry-type').value;
//     const amount = parseFloat(document.getElementById('entry-amount').value);

//     if (type === 'income') {
//         lineChart.data.datasets[0].data[monthIndex] += amount; // Update income
//     } else {
//         lineChart.data.datasets[1].data[monthIndex] += amount; // Update expenses
//     }
    
    
//     // // Update the line chart data for the selected month
//     // lineChart.data.datasets[0].data[monthIndex] += amount; // Update income data for line chart
//     // lineChart.data.datasets[1].data[monthIndex] += amount; // Update expenses data for line chart
//     // lineChart.update();

//     // Update the pie chart with cumulative totals for income and expenses
//     const totalIncome = lineChart.data.datasets[0].data.reduce((sum, value) => sum + (value || 0), 0);
//     const totalExpenses = lineChart.data.datasets[1].data.reduce((sum, value) => sum + (value || 0), 0);
//     pieChart.data.datasets[0].data = [totalIncome, totalExpenses]; // Update pie chart
   

//     // Save updated data to local storage
//     const updatedData = {
//         income: chart.data.datasets[0].data,
//         expenses: chart.data.datasets[1].data
//     };
//     localStorage.setItem('budgetData', JSON.stringify(updatedData));

//     lineChart.update();
//     pieChart.update();

//     // Clear the form inputs after submission
//     document.getElementById('datetime').value = '';
//     document.getElementById('entry-amount').value = '';
//     document.getElementById('entry-description').value = '';
// });
document.addEventListener("DOMContentLoaded", function () {
    // Initialize line chart
    const lineCtx = document.getElementById('linechart').getContext('2d');
    const lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Income',
                    data: loadStoredData('income') || Array(12).fill(0), // Load stored income data
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                    fill: false
                },
                {
                    label: 'Expenses',
                    data: loadStoredData('expenses') || Array(12).fill(0), // Load stored expenses data
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
                        text: 'Amount'
                    }
                }
            }
        }
    });

    // Initialize pie chart
    const pieCtx = document.getElementById('piechart').getContext('2d');
    const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Income', 'Expenses'],
            datasets: [{
                data: [0, 0], // Placeholder data
                backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
    });

    // Load initial pie chart data from line chart's cumulative values
    updatePieChart();

    // Function to add entry
    function addentry(event) {
        event.preventDefault(); // Prevent form submission and reload

        const dateTime = document.getElementById('datetime').value;
        const monthIndex = getMonthFromDate(dateTime); // Extract the month
        const type = document.getElementById('entry-type').value;
        const amount = parseFloat(document.getElementById('entry-amount').value);

        if (type === 'income') {
            lineChart.data.datasets[0].data[monthIndex] += amount;
        } else {
            lineChart.data.datasets[1].data[monthIndex] += amount;
        }

        // Update the line chart
        lineChart.update();

        // Update the pie chart with cumulative totals
        updatePieChart();

        // Store updated data in local storage
        saveStoredData('income', lineChart.data.datasets[0].data);
        saveStoredData('expenses', lineChart.data.datasets[1].data);

        // Clear form inputs
        document.getElementById('datetime').value = '';
        document.getElementById('entry-amount').value = '';
    }

    // Function to update the pie chart
    function updatePieChart() {
        const totalIncome = lineChart.data.datasets[0].data.reduce((sum, value) => sum + value, 0);
        const totalExpenses = lineChart.data.datasets[1].data.reduce((sum, value) => sum + value, 0);

        pieChart.data.datasets[0].data = [totalIncome, totalExpenses];
        pieChart.update();
    }

    // Function to get month index from date
    function getMonthFromDate(dateString) {
        const date = new Date(dateString);
        return date.getMonth(); // Returns month as 0 (Jan) to 11 (Dec)
    }

    // Function to load data from local storage
    function loadStoredData(type) {
        const storedData = JSON.parse(localStorage.getItem('budgetData')) || { income: [], expenses: [] };
        return storedData[type];
    }

    // Function to save data to local storage
    function saveStoredData(type, data) {
        const storedData = JSON.parse(localStorage.getItem('budgetData')) || { income: [], expenses: [] };
        storedData[type] = data;
        localStorage.setItem('budgetData', JSON.stringify(storedData));
    }

    // Add event listener to the form submission
    document.getElementById("form").addEventListener("submit", addentry);
});
