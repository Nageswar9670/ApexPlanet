// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorDisplay = document.getElementById("formError");

  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

  if (!name || !email || !message) {
    errorDisplay.textContent = "All fields are required.";
  } else if (!emailPattern.test(email)) {
    errorDisplay.textContent = "Please enter a valid email address.";
  } else {
    errorDisplay.textContent = "";
    alert("✅ Form submitted successfully!");
    e.target.reset();
  }
});

// To-Do List
document.getElementById("addTaskBtn").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
      taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
