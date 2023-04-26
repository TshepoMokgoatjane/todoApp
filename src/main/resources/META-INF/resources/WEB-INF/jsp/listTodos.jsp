<%@ include file="common/header.jspf" %>
<%@ include file="common/navigation.jspf" %>
	
	<div class="container">
		<h2>Your Todos are:</h2>
		
		<table class="table">		
			<thead>
				<tr>
					<th>Description</th>
					<th>Target Date</th>
					<th>Is Done?</th>
					<th colspan="2">
						<pre class="text-success text-center">[ ACTION ]</pre>
					</th>
				</tr>
			</thead>
			
			<tbody>
				<c:if test="${todos == null}">
					<try>
						<td colspan="5">
							<pre class="text-info text-center">No Records Found!</pre>
						</td>
					</try>
				</c:if>
				<c:forEach items="${todos}" var="todo">
					<tr>
						<td>${todo.description}</td>
						<td>${todo.targetDate}</td>
						<td>${todo.done}</td>
						<td><a href="delete-todo?id=${todo.id}" class="btn btn-danger">Delete</a></td>
						<td><a href="update-todo?id=${todo.id}" class="btn btn-info">Update</a></td>			
					</tr>
				</c:forEach>
			</tbody>			
		</table>
		<a href="add-todo" class="btn btn-success">Add Todo</a>
	</div>
<%@ include file="common/footer.jspf" %>