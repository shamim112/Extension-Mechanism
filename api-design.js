

function call_me() {
  
}

add_action('init', 'call_me');




DashAPI.add_menu('hello', 'Hello', 'float-icon', null);
DashAPI.add_menu('sub-hello', 'Sub Hello', 'float-icon', 'hello');


DashAPI.On('init', () => {
  
});

DashAPI.ShowModal()



DashAPI.add_action('init', call_me);


SheetAPI.On('cell-edit', ()=>{
  
});

SheetAPI.Open('sheet_name')
SheetAPI.Save()


// On Find in Sheet


// Search database and show on sheet
SheetAPI.t();


// Sotrage
StorageAPI.Insert();

StorageAPI.Update();
StorageAPI.Delete();

StorageAPI.DeleteRow();



























