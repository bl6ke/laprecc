// declare variables
var budgetInput; // for budget
var usageInput; // for usage
var recTextOutput; // to display the recommendation
var recLaptop; // to update the recommended laptop
var workLaptops = ["Acer Aspire 5", "Samsung Galaxy Book", "HP Envy 13"]; // work laptop list
var gsLaptops = ["IdeaPad 1", "Thinkpad L14 AMD", "ASUS ROG Zephyrus"]; // game and sim laptop list
var codeLaptops = ["Lenovo Chromebook Duet", "HP Pavilion 15", "Apple Macbook Pro M1"]; // code laptop list

// create on event for the recommend button click
onEvent("recButton", "click", function() {
  budgetInput = getText("budgetDropdown"); 
  usageInput = getText("usageDropdown");
  if(usageInput == "Work/Professional") {
    workUpdateScreen();
  }
  else if(usageInput == "Gaming/Simulation") {
    gsUpdateScreen();
  }
  else if(usageInput == "Game Dev/Coding") {
    codeUpdateScreen();
  }
  else if((budgetInput == "Budget" || usageInput == "Usage")) {
    setText("recTextBox", "  Please Input a Budget and Usage!");
  }
});


// function to update the recommended text box accordingly to budgetInput and usageInput for a work laptop
function workUpdateScreen() {
  budgetInput = getText("budgetDropdown");
  usageInput = getText("usageDropdown");

  if((budgetInput == "$100-499") && (usageInput == "Work/Professional")) {
    recLaptop = workLaptops[0];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/images/20200918/Acer-Aspire-5_A515-56-56G-56S-56T_with-FP-Backlit_Silver_modelmain.png");
  }
  else if((budgetInput == "$500-999") && (usageInput == "Work/Professional")) {
    recLaptop = workLaptops[1];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://images.samsung.com/is/image/samsung/ie-galaxy-book-s-intel-np767-np767xcm-k02uk-frontgold-thumb-249540564");
  }
  else if((budgetInput == "$999-above") && (usageInput == "Work/Professional")) {
    recLaptop = workLaptops[2];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06234481.png");
  }
}

// function to update the recommended text box accordingly to budgetInput and usageInput for a game/sim laptop
function gsUpdateScreen() {
  budgetInput = getText("budgetDropdown");
  usageInput = getText("usageDropdown");

  if((budgetInput == "$100-499") && (usageInput == "Gaming/Simulation")) {
    recLaptop = gsLaptops[0];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://static.lenovo.com/na/subseries/hero/ideapad-1-11-intel-ice-blue-hero.png");  
  }
  else if((budgetInput == "$500-999") && (usageInput == "Gaming/Simulation")) {
    recLaptop = gsLaptops[1];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8Mjc4NTk5fGltYWdlL3BuZ3xoMWEvaGQxLzEwODIyNzQwNDc1OTM0LnBuZ3w1MzRhMTMxYzE3YmY4MTgyOWNmYWIxNjA3OGVjNjMzZjBiM2JlNGI0ZDkyNGY3ZTRhOGU5MmI2OTVjNWE2ZTJl/lenovo-laptop-thinkpad-l14-intel-hero1.png");
  }
  else if((budgetInput == "$999-above") && (usageInput == "Gaming/Simulation")) {
    recLaptop = gsLaptops[2];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://content.ibuypower.com/Images/Components/20191/GX502GV-PB74_1200_0x1.png");
  }
}

// function to update the recommended text box accordingly to budgetInput and usageInput for a gamedev/coding laptop
function codeUpdateScreen() {
  budgetInput = getText("budgetDropdown");
  usageInput = getText("usageDropdown");

  if((budgetInput == "$100-499") && (usageInput == "Game Dev/Coding")) {
    recLaptop = codeLaptops[0];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://p4-ofp.static.pub/fes/cms/2021/09/13/j1zb4zokfm2dkutrqscfy72gp87c5x330062.png");
  }
  else if((budgetInput == "$500-999") && (usageInput == "Game Dev/Coding")) {
    recLaptop = codeLaptops[1];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07961089.png");
  }
  else if((budgetInput == "$999-above") && (usageInput == "Game Dev/Coding")) {
    recLaptop = codeLaptops[2];
    recTextOutput = setText("recTextBox", "We recommend you the " + recLaptop + " for your needs of " + usageInput + " and budget of " + budgetInput + ".");
    setProperty("laptopImage", "image", "https://m.media-amazon.com/images/G/01/appcore/laptop/nov2020npi/MacBook_Pro_13_inch_M1_240x160._CB416899932_.png");
  }
}

