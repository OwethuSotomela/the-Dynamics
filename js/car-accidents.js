const areaListTemplate = document.querySelector(".pizzaListTemplate");
const tableElement = document.querySelector(".table");
const areaCount = document.querySelector(".car-accidentCount");
const searchBox = document.querySelector(".searchBox");
const bodyElement = document.querySelector(".tableBody");

var mainList = theList();

var areaList = mainList.list();


function printTable(data) {
    console.log(areaList.Area);
}




areaList.forEach(function (printTable) {
    console.log(printTable)
    bodyElement.innerHTML += `
<tr>
                        <td>${areaList.Area}</td>
                        <td>${areaList.Level - 1}</td>
                        <td>${areaList.Level - 2}</td>
                        <td>${areaList.Level - 3}</td>
                        <td>${areaList.Level - 4}</td>
                        <td>${areaList.Level - 5}</td>
    
</tr>
`
})
console.log(areaList)