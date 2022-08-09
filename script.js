//pendeklarasian div parent
let divContainer = document.createElement("div");
divContainer.setAttribute("class", "container");
document.body.append(divContainer);

//pendeklarasian div class newtask di dalam div container
let divNewtask = document.createElement("div");
divNewtask.setAttribute("id", "newtask");
let divTasks = document.createElement("div");
divTasks.setAttribute("id", "tasks");

divContainer.append(divNewtask);
divContainer.append(divTasks);

//isi
let h4Title = document.createElement("h4");
h4Title.append(document.createTextNode("New Todo"));
divNewtask.append(h4Title);

let inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("placeholder", "Fill Your List");
divNewtask.append(inputElement);

let enterButton = document.createElement("button");
enterButton.setAttribute("id", "push");
enterButton.append(document.createTextNode("Add"));
divNewtask.append(enterButton);

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Fill List");
    //add new list
  } else {
    document.querySelector("#tasks").innerHTML += `
      <div class="task">
      <span id="taskname">
          ${document.querySelector("#newtask input").value}
      </span>
      <button class="delete">
      <i class="bi bi-trash"></i>
       </button>
      </div>
      `;
    var current_task = document.querySelectorAll(".delete");
    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    document.querySelector("#newtask input").value = "";
  }
};
