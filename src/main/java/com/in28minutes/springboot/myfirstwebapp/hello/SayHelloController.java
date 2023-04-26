package com.in28minutes.springboot.myfirstwebapp.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SayHelloController {

	@GetMapping("/say-hello")
	@ResponseBody
	public String sayHello() {
		return "Hello! Spring Boot 3 and Spring Framework";
	}
	
	@RequestMapping("/say-hello-html")
	@ResponseBody
	public String sayHelloHtml() {
		
		StringBuffer sb = new StringBuffer();
		sb.append("<html>");
		sb.append("<head>");
		sb.append("<title>My First HTML Page - Changed</title>");
		sb.append("<body>My first html page with body ;)</body>");
		sb.append("</html>");
		
		return sb.toString();
	}
	
	@RequestMapping("/say-hello-jsp")
	public String sayHelloJsp() {
		return "sayHello";
	}
}
