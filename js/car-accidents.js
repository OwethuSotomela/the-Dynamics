const tableElement = document.querySelector(".table");
const areaCount = document.querySelector(".car-accidentCount");
const searchBoxElement = document.querySelector(".searchBox");
const bodyElement = document.querySelector(".tableBody");

var mainList = theList();

var areaList = mainList.list();

areaList.forEach(function (printTable) {
    bodyElement.innerHTML += `
<tr>
    <td>${printTable.Area}</td>
    <td>${printTable["Level-1"]}</td>
    <td>${printTable["Level-2"]}</td>
    <td>${printTable["Level-3"]}</td>
    <td>${printTable["Level-4"]}</td>
    <td>${printTable["Level-5"]}</td>  
</tr>
`
})

function myFunction() {
 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBox");
    input.value = input.value.toUpperCase();
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {`      `
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}





areaList.forEach(function (printTable) {
 

   console.log(printTable.Level-1)
    // ${printTable["Level-2"]}
    // ${printTable["Level-3"]}
    // ${printTable["Level-4"]}
    // ${printTable["Level-5"]}

})





// var gugList = mainList.gugxList();
// gugList.forEach(function (printTable) {

// var arr = [];


 

// let gugxData = gugList.push(printTable);

//   console.log(gugxData);





// });



// google.charts.load('current',{packages:['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//     // Set Data
//     var data = google.visualization.arrayToDataTable([
//     //   ['Price', 'Size'],
//       ['Area', 'Level'],
 
//       [50,7],[60,8],[70,8],[80,9],[90,9],[100,9],
//       [110,10],[120,11],[130,14],[140,14],[150,15]
//       ]);
//     // // Set Options
//     var options = {
//       title: 'Cape Town Areas VS Car Accident Rates During Lockdown Regulations',
//       hAxis: {title: 'Lockdown Levels'},
//       vAxis: {title: 'Car Accident Rates'},
//       legend: 'none'
//     };
    // Draw Chart
    // var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    // chart.draw(data, options);                                      
    // }

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {

        labels: ['${printTable["Level-1"]}', '${printTable["Level-1"]}', '${printTable["Level-1"]}', '${printTable["Level-1"]}', '${printTable["Level-1"]}'],

        datasets: [{
            label: '# of Gugulethu',
            data: [10, 19, 3, 5, 2,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        },

        {
            label: '# of Langa',
            data: [18, 9, 2, 10, 20,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        },

        {
            label: '# of Khayelisha',
            data: [19, 19, 12,40, 25,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        }
    ],
    
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


searchBoxElement.addEventListener('onkeyup', myFunction);