function theList(){
var areaList = [ {
    "Area": "Gugulethu",
    "Level-1": "500",
    "Level-2": "400",
    "Level-3": "300",
    "Level-4": "700",
    "Level-5": "250",
  
  },
  {
    "Area": "Langa",
    "Level-1": "250",
    "Level-2": "400",
    "Level-3": "300",
    "Level-4": "700",
    "Level-5": "250",
  },
  
  {
    "Area": "Khayelitsha",
    "Level-1": "500",
    "Level-2": "400",
    "Level-3": "300",
    "Level-4": "700",
    "Level-5": "250",
  
  }
  ];

  // var gugx = ["500","400","300","700","250",];
  function list() {
    return areaList;
  }
  // function gugxList() {
  //   return gugx;
  // }
  
  return{
      list,
      // gugxList,
  }

}