function weatherDescription(weatherCode) {
  switch (weatherCode) {
    case "SQ":
        console.log("шквал");
        break;
    case "PO":
        console.log("пыльный вихрь");
        break;
    case "FC":
        console.log("торнадо");
        break;
    case "BR":
        console.log("дымка (видимость от 1 до 9 км)");
        break;
    case "HZ":
        console.log("мгла (видимость менее 10 км)");
        break;
    case "FU":
        console.log("дым (видимость менее 10 км)");
        break;
    case "DS":
        console.log("пыльная буря (видимость менее 10 км)");
        break;
    case "SS":
        console.log("песчаная буря (видимость менее 10 км)");
        break;
  }
}

weatherDescription("FC");
weatherDescription("SS");
