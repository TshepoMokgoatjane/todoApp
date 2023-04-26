package com.in28minutes.springboot.myfirstwebapp.todo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import jakarta.validation.Valid;

//@Controller
@SessionAttributes("name")
public class TodoController {
	
	private TodoService todoService;
	
	@Autowired
	public TodoController(TodoService todoService) {
		this.todoService = todoService;
	}
	
	@RequestMapping("/list-todos")
	public String listAllTodos(Model model) {
		String username = getLoggedInUsername(model);
		List<Todo> todos = todoService.findByUsername(username);
		model.addAttribute("todos", todos);
		
		return "listTodos";
	}
	
	@RequestMapping(value = "/add-todo", method = RequestMethod.GET) 
	public String addTodo(Model model) {
		String username = getLoggedInUsername(model);
		Todo todo = new Todo(0, username, "", LocalDate.now().plusYears(1), false);
		model.addAttribute("todo", todo);
		return "todo";
	}
	
	@RequestMapping(value = "/add-todo", method = RequestMethod.POST)
	public String submitNewTodo(Model model, @Valid Todo todo, BindingResult result) {
		
		if (result.hasErrors()) {
			return "todo";
		}
		
		String username = getLoggedInUsername(model);
		todoService.addTodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
		
		return "redirect:list-todos";
	}
	
	@RequestMapping("/delete-todo")
	public String deleteTodo(@RequestParam int id) {
		todoService.deleteById(id);
		return "redirect:list-todos";
	}	
	
	@RequestMapping(value = "/update-todo", method = RequestMethod.GET)
	public String showUpdateTodoPage(@RequestParam int id, Model model) {
		
		Todo todo = todoService.findById(id);
		
		model.addAttribute("todo", todo);
		
		return "todo";
	}

	@RequestMapping(value = "/update-todo", method = RequestMethod.POST)
	public String submitUpdatedTodo(Model model, @Valid Todo todo, BindingResult result) {
		
		if (result.hasErrors()) {
			return "todo";
		}
		
		String username = getLoggedInUsername(model);
		todo.setUsername(username);
		todoService.updateTodo(todo);
		
		return "redirect:list-todos";
	}
	
	private String getLoggedInUsername(Model model) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return authentication.getName();
		
	}
}
