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
    <td>${printTable["Level_1"]}</td>
    <td>${printTable["Level_2"]}</td>
    <td>${printTable["Level_3"]}</td>
    <td>${printTable["Level_4"]}</td>
    <td>${printTable["Level_5"]}</td>
</tr>
`
})
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBox");
    mainList.setPassedValue(input.value.toUpperCase())
    console.log(mainList.getPas())
    input.value = input.value.toUpperCase();
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            `      `
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Level-1', 'Level-2', 'Level-3', 'Level-4', 'Level-5',],
        datasets: mainList.filterGraph()
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Level-1', 'Level-2', 'Level-3', 'Level-4', 'Level-5',],
        datasets: mainList.filterGraph()
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
searchBoxElement.addEventListener('onkeyup', myFunction);




















































// const tableElement = document.querySelector(".table");
// const areaCount = document.querySelector(".car-accidentCount");
// const searchBoxElement = document.querySelector(".searchBox");
// const bodyElement = document.querySelector(".tableBody");


// var mainList = theList();

// var areaList = mainList.list();

// areaList.forEach(function (printTable) {
//     bodyElement.innerHTML += `
// <tr>
//     <td>${printTable.Area}</td>
//     <td>${printTable["Level-1"]}</td>
//     <td>${printTable["Level-2"]}</td>
//     <td>${printTable["Level-3"]}</td>
//     <td>${printTable["Level-4"]}</td>
//     <td>${printTable["Level-5"]}</td>  
// </tr>
// `
// })


// // The filted list for gugulethu to get its values into its graph

// var all = mainList.byarea();

// var gug = all.filter(function (el) {
//     return el.Area === "Gugulethu"
// })

// var arr1 = [];
// for (let [key, value] of Object.entries(gug[0])) {
//     // console.log(value);
//     if (value != "Gugulethu") {
//         arr1.push(value)
//     }

// }


// // The filted list for langa to get its values into its graph

// var langa = all.filter(function (el) {
//     return el.Area === "Langa"
// })

// var arr2 = [];
// for (let [key, value] of Object.entries(langa[0])) {
//     // console.log(value);
//     if (value != "Langa") {
//         arr2.push(value)
//     }

// }


// // The filted list for khayelisha to get its values into its graph
// var khaltsha = all.filter(function (el) {
//     return el.Area === "Khayelitsha"
// })

// var arr3 = [];
// for (let [key, value] of Object.entries(khaltsha[0])) {
//     // console.log(value);
//     if (value != "Khayelitsha") {
//         arr3.push(value)
//     }

// }



// // The filted list for search input by area
// function myFunction() {

//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchBox");
//     input.value = input.value.toUpperCase();
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");

//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             `      `
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
// searchBoxElement.addEventListener('onkeyup', myFunction);


// // gugulethu graph

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {

//         labels: ['1', '2', '3', '4', '5'],

//         datasets: [{
//             label: '# of Gugulethu',
//             data: arr1,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',

//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',

//             ],
//             borderWidth: 1
//         },
//         ],

//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });




// // graph for Langa

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {

        
//         labels: ['1', '2', '3', '4', '5'],

//         datasets: [

//             {
//                 label: '# of Langa',
//                 data: arr2,
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',

//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',

//                 ],
//                 borderWidth: 1
//             },

//         ],

//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// //khayelisha graph

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {

//         labels: ['1', '2', '3', '4', '5'],

//         datasets: [
//                 {
//                     label: '# of Khayelisha',
//                     data: arr3,
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',

//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',

//                     ],
//                     borderWidth: 1
//                 }
//         ],

//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });