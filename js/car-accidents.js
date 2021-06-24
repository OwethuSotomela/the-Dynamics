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







