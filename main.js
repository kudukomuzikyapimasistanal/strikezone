const {app,BrowserWindow,Menu}=require('electron');
function create(){
  const w=new BrowserWindow({width:1280,height:800,backgroundColor:'#3b1450',autoHideMenuBar:true,title:'Sonsuz Koşu'});
  Menu.setApplicationMenu(null);
  w.loadFile('game.html');
  w.webContents.on('before-input-event',(e,i)=>{if(i.type==='keyDown'&&i.key==='F11')w.setFullScreen(!w.isFullScreen())});
}
app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
