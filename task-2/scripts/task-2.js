var taskList = document.querySelector('ul');
var inputField = document.querySelector('[name="task"]');
var form = document.querySelector('form');

function OnSubmit(event) {
  if(inputField.value) {
    var newTaskElement = CreateTaskElement(inputField.value);
    taskList.appendChild(newTaskElement)
    inputField.value = '';
  }

  event.preventDefault();
}

function GetNextTaskId() {
  var numberOfExistingtasks = document.querySelectorAll('li').length
  return 'task-' + (numberOfExistingtasks + 1);
}

function CreateTaskElement(taskDescription) {
  var taskId = GetNextTaskId();

  var taskElement = document.createElement('li')

  var checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.id = taskId;

  var labelElement = document.createElement('label');
  labelElement.setAttribute('for', taskId);
  labelElement.appendChild(document.createTextNode(taskDescription))

  taskElement.appendChild(checkboxElement);
  taskElement.appendChild(labelElement);

  return taskElement;
}

form.onsubmit = OnSubmit;
