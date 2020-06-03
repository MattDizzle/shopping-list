/* eslint-disable strict */
function clickHandlers(){
  $(':submit').click(event => {
    event.preventDefault();
    const item = $('#shopping-list-entry'). val();
    // alert(`${item} has been added to the list`);
    if(item.length > 2){
      $('li').first().clone().appendTo('ul');
      $('li').last().html(`<li>
        <span class="shopping-item">${item}</span>
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
  });

  $('.shopping-item-toggle').click(event => {
    event.preventDefault();
    
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('.shopping-item-delete').click(event => {
    event.preventDefault();
    
    $(event.target).closest('li').remove();
  });
}


$(clickHandlers);


