const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;


app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({});
    //load html into the windows
    mainWindow.loadURL(path.join(__dirname, 'index.html'),
    );

    //main menu

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

});


//key functions



//create menu template

const mainMenuTemplate = [

    {
        label: 'File',
        submenu: [
            {
                label: 'Open File',
            },
            {
                label : 'Open Folder'
            },
            {
                label : 'Open URL'
            },
            {
                label : 'Quit Ctrl + Q',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            },

        ]

    }
];