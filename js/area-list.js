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




  function list(){
      return areaList;
  }

  var eachList = [ {
    Area: "Gugulethu",
    Level1: "500",
    Level2: "400",
    Level3: "300",
    Level4: "700",
    Level5: "250",
  
  },
  {
    Area: "Langa",
    Level1: "250",
    Level2: "400",
    Level3: "300",
    Level4: "700",
    Level5: "250",
  },
  
  {
    Area: "Khayelitsha",
    Level1: "500",
    Level2: "400",
    Level3: "300",
    Level4: "700",
    Level5: "250",
  
  }
  ];
  function byarea(){
    return eachList;
}

  return{
      list,
      byarea,
  }
}