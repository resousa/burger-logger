'use strict';

$(function() {
  $('.change-ate').on('click', function(event) {
    const id = $(this).data('id');
    const newAte = $(this).data('newate');
    const newAteState = {
      ate: 'true'
    };

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newAteState
    }).then(function() {
      location.reload();
    });
  });

  $('.create-form').on('submit', function(event) {
    event.preventDefault();

    const newBurger = {
      burger_type: $('#ca')
        .val()
        .trim(),
      ate: $('[name=sleepy]:checked')
        .val()
        .trim()
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });

  $('.delete-burger').on('click', function(event) {
    const id = $(this).data('id');

    $.ajax('/api/burgers/' + id, {
      type: 'DELETE'
    }).then(function() {
      location.reload();
    });
  });
});