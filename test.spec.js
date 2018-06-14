describe('Protractor Test', function() {  
  const addField = element(by.css('[placeholder="add new todo here"]'));  
  const checkedBox = element(by.model('todo.done'));  
  const addButton = element(by.css('[value="add"]'));  

  it('should navigate to the AngularJS homepage', function() {  
    browser.get('https://angularjs.org/'); //overrides baseURL  
  });  
});
