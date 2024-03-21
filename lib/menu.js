const inquirer = require("inquirer");

exports.mainMenu = mainMenu;

function mainMenu() {
    console.clear();
    console.log("Welcome to Boss-SQL-Database");
    console.log(` 
    ██████╗  ██████╗ ███████╗███████╗    ██████╗  █████╗ ████████╗ █████╗ ██████╗  █████╗ ███████╗███████╗
    ██╔══██╗██╔═══██╗██╔════╝██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
    ██████╔╝██║   ██║███████╗███████╗    ██║  ██║███████║   ██║   ███████║██████╔╝███████║███████╗█████╗  
    ██╔══██╗██║   ██║╚════██║╚════██║    ██║  ██║██╔══██║   ██║   ██╔══██║██╔══██╗██╔══██║╚════██║██╔══╝  
    ██████╔╝╚██████╔╝███████║███████║    ██████╔╝██║  ██║   ██║   ██║  ██║██████╔╝██║  ██║███████║███████╗
    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
                                                                                                                 
    `);

    inquirer
    .prompt([
        {
        type:"list",
        name:"menuSelect",
        message: "Please choose one of the following options:",
        choices: [
            "View All Departments",
            "Add Department",
            "View All Roles",
            "Add Role",
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "Exit",
        ],
        default: "View All Employees",
        
        },
    ])
    .then(({menuSelect}) =>{
        switch(menuSelect) {
            case "View All Departments":
                console.clear();
                
                break;
            case "Add Department":
                console.clear();
                
                break;
            case "View All Roles":
                console.clear();
                
                break;
            case "Add Role":
                console.clear();
               
                break;
            case "View All Employees":
                console.clear();
               
                break;
            case "Add Employee":
                console.clear();
               
                break;
            case "Update Employee Role":
                console.clear();
               
                break;
            case "Exit":
                console.clear();
                exit();
                break;

        }
    })
}

function exit() {
    console.clear();
    console.log("shutting down");
}