var taskList = document.querySelector('ul');
var inputField = document.querySelector('[name="task"]');
var form = document.querySelector('form');

function submitFormHandler(event) {
  if(inputField.value) {
    var newTaskElement = createTaskElement(inputField.value);
    taskList.appendChild(newTaskElement)
    inputField.value = '';
  }

  event.preventDefault();
}

function getNextTaskId() {
  var numberOfExistingtasks = document.querySelectorAll('li').length
  return 'task-' + (numberOfExistingtasks + 1);
}

function createTaskElement(taskDescription) {
  var taskId = getNextTaskId();

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
