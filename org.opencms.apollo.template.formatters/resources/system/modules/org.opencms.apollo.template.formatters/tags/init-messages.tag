<%@ tag 
    display-name="init-messages"
    body-content="scriptless"
    trimDirectiveWhitespaces="true" 
    description="Shows the standard message boxes when a new element is used." %>

<%@ attribute name="textnew" type="java.lang.String" required="true" %>
<%@ attribute name="textedit" type="java.lang.String" required="false" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="cms" uri="http://www.opencms.org/taglib/cms"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>


<c:choose>
<c:when test="${cms.element.inMemoryOnly}">
	<div class="alert alert-info">
		<h3>
			${textnew}
		</h3>
	</div>
</c:when>
<c:when test="${not empty textedit and cms.edited}">
	${cms.reloadMarker}
	<div class="alert alert-info">
		<h3>
			${textedit}
		</h3>
	</div>
</c:when>
<c:otherwise>
	<jsp:doBody var="bodyVal" />
	${bodyVal}
</c:otherwise>
</c:choose>