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
    input.value = inputgit.value.toUpperCase();
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {

        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],

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
        }]
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