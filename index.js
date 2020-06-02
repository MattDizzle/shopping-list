/* eslint-disable strict */
function clickHandlers(){
  
  $('.shopping-item-toggle').click(event => {
    event.preventDefault();
    // console.log($(event.target).closest('.shopping-item').text());
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    // $('.shopping-item')

  });

  $()
}


$(clickHandlers);

