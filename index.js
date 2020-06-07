/* eslint-disable quotes */
/* eslint-disable strict */
function submitHandler(){
  $('main').on('submit', '#js-shopping-list-form', event => {
    event.preventDefault();
    console.log(`handler clickHandler working`);
    let userInput = $("main").find("#shopping-list-entry").val();
    console.log(userInput);
    return renderItem();

    // created a variable to represent the current answer input value
    // let selectedAnswer = $("input[name='answer-name']:checked").val();
  });
}
$(submitHandler);

function deleteHandler(){
  $('main').on('click', 'li', function(event) {
    event.preventDefault();
    console.log(`deleteHandler is running`);
    // event.stopPropagation();
    this.remove();
  });
}
$(deleteHandler);

function deleteHandler(){
  $('main').on('click', 'li', function(event) {
    event.preventDefault();
    console.log(`deleteHandler is running`);
    // event.stopPropagation();
    this.remove();
  });
}
$(deleteHandler);
  

// RENDERING FUNCTION
function renderItem(){
  let userInput = $("main").find("#shopping-list-entry").val();
  console.log('renderItem ran succesfully!');
  $('ul').append(`<li>
  <span class="shopping-item">${userInput}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`);
}


  
  
  