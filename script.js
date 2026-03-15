// Add new list

$("#add-list-btn").click(function(){

const newList = `
<div class="todo-list">

<h2 contenteditable="true">New List</h2>

<input class="task-input" placeholder="Add new task">

<ul></ul>

</div>
`;

$("#lists-container").append(newList);

});


// Add task inside any list

$(document).on("keypress",".task-input",function(e){

if(e.which === 13){

const taskText = $(this).val().trim();

if(taskText !== ""){

const task = `
<li>
<span class="task-text">${taskText}</span>
<span class="delete"><i class="fa fa-trash"></i></span>
</li>
`;

$(this).siblings("ul").append(task);

$(this).val("");

}

}

});


// Mark task done

$(document).on("click","li",function(){

$(this).toggleClass("done");

});


// Delete task

$(document).on("click",".delete",function(e){

e.stopPropagation();

$(this).parent().fadeOut(300,function(){

$(this).remove();

});

});


// Dark mode toggle

$("#mode-toggle").click(function(){

$("body").toggleClass("dark");

if($("body").hasClass("dark")){

$(this).text("☀️ Light Mode");

}else{

$(this).text("🌙 Dark Mode");

}

});