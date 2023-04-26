<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
	<head>
		<title>Update Todo</title>
	</head>
	
	<body>
		<div class="container">
			<form:form method="post" modelAttribute="todo">
				Description: <form:input path="description" required="required" />
				
				<input type="submit" class="btn btn-success" />			
			</form:form>
		</div>
	</body>
</html>