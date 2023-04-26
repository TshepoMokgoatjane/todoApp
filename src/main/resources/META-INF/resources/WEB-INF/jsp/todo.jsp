<%@ include file="common/header.jspf" %>
<%@ include file="common/navigation.jspf" %>

	<div class="container">
		<h2>Enter Todo Details</h2>
		<form:form method="post" modelAttribute="todo">
		
			<fieldset class="mb-3">
				<form:label path="description">Description:</form:label>
				<form:input path="description" type="text" required="required" />
				<form:errors path="description" cssClass="text-danger" />		
			</fieldset>
			
			<fieldset class="mb-3">
				<form:label path="targetDate">Target Date</form:label>
				<form:input path="targetDate" type="text" required="required" />
				<form:errors path="targetDate" cssClass="text-danger" />
			</fieldset>
			
			<form:hidden path="id" />
			<form:hidden path="done" />
			
			<input type="submit" class="btn btn-success" />
		</form:form>
	</div>
	
<%@ include file="common/footer.jspf" %>


	<!-- Include the Footer file first and then your JS -->
	<script type="text/javascript">
		$('#targetDate').datepicker({
			format: 'yyyy-mm-dd'
		});
	</script>