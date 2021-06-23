function theList() {

  let passedValue = undefined
  var areaList = [{
    Area: "Gugulethu",
    Level_1: 1000,
    Level_2: 500,
    Level_3: 420,
    Level_4: 700,
    Level_5: 100,
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
    ]
  },
  {
    Area: "Langa",
    Level_1: 250,
    Level_2: 402,
    Level_3: 302,
    Level_4: 720,
    Level_5: 770,
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
    ]
  },
  {
    Area: "Khayelitsha",
    Level_1: 507,
    Level_2: 407,
    Level_3: 370,
    Level_4: 300,
    Level_5: 250,
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
    ]
  }
  ];
  function list() {
    return areaList;
  }
  function filterGraph() {
    const arrayData = []
    if (passedValue == undefined) {
      const onData = areaList.filter(data => {
        arrayData.push({
          label: data.Area,
          data: [data.Level_1, data.Level_2, data.Level_3, data.Level_4, data.Level_5],
          backgroundColor: data.backgroundColor,
          borderColor: data.borderColor,
          borderWidth: 1
        })
        return true;
      })
      return arrayData;
    } else {
      const onData = areaList.filter(data => {
        if (data.Area.includes(passedValue)) {
          arrayData.push({
            label: data.Area,
            data: [data.Level_1, data.Level_2, data.Level_3, data.Level_4, data.Level_5],
            backgroundColor: data.backgroundColor,
            borderColor: data.borderColor,
            borderWidth: 1
          })
        }
        return true;
      })
      return arrayData;
    }
  }
  function setPassedValue(name) {
    passedValue = name.toUpperCase()
  }
  function getPas() {
    return passedValue
  }
  return {
    list,
    getPas,
    filterGraph,
    setPassedValue
  }
}






































































// function theList(){
// var areaList = [ {
//     "Area": "Gugulethu",
//     "Level-1": "500",
//     "Level-2": "400",
//     "Level-3": "300",
//     "Level-4": "700",
//     "Level-5": "250",

//   },
//   {
//     "Area": "Langa",
//     "Level-1": "250",
//     "Level-2": "400",
//     "Level-3": "300",
//     "Level-4": "700",
//     "Level-5": "250",
//   },

//   {
//     "Area": "Khayelitsha",
//     "Level-1": "500",
//     "Level-2": "400",
//     "Level-3": "300",
//     "Level-4": "700",
//     "Level-5": "250",

//   }
//   ];




//   function list(){
//       return areaList;
//   }

//   var eachList = [ {
//     Area: "Gugulethu",
//     Level1: "500",
//     Level2: "400",
//     Level3: "300",
//     Level4: "700",
//     Level5: "250",

//   },
//   {
//     Area: "Langa",
//     Level1: "250",
//     Level2: "400",
//     Level3: "300",
//     Level4: "700",
//     Level5: "250",
//   },

//   {
//     Area: "Khayelitsha",
//     Level1: "500",
//     Level2: "400",
//     Level3: "300",
//     Level4: "700",
//     Level5: "250",

//   }
//   ];
//   function byarea(){
//     return eachList;
// }

//   return{
//       list,
//       byarea,
//   }
// }