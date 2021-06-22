const tableElement = document.querySelector(".table");
const areaCount = document.querySelector(".car-accidentCount");
const searchBox = document.querySelector(".searchBox");
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