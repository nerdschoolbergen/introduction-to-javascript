(function() {
  'use strict';

  var taskList = document.querySelector('ul');
  var inputField = document.querySelector('[name="task"]');
  var form = document.querySelector('form');

  function createTaskElement(task) {
    var taskId = task.id;
    var taskDescription = task.description;

    var taskElement = document.createElement('li');

    var checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.id = taskId;

    var labelElement = document.createElement('label');
    labelElement.setAttribute('for', taskId);
    labelElement.appendChild(document.createTextNode(taskDescription));

    taskElement.appendChild(checkboxElement);
    taskElement.appendChild(labelElement);

    return taskElement;
  }

  function submitFormHandler(event) {
    if(inputField.value) {
      inputField.value = '';
    }
    event.preventDefault();
  }

  form.addEventListener('submit', submitFormHandler);
})();
