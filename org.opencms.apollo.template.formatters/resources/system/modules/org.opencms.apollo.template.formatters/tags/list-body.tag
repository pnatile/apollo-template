<%@ tag display-name="list-body"
  trimDirectiveWhitespaces="true" 
  body-content="empty"
  description="Shows a list body to be used with AJAX calls for content."%>

<%@ attribute name="headline" type="org.opencms.jsp.util.CmsJspContentAccessValueWrapper" required="true" %>
<%@ attribute name="link" type="org.opencms.jsp.util.CmsJspContentAccessValueWrapper" required="true" %>
<%@ attribute name="types" type="org.opencms.jsp.util.CmsJspContentAccessValueWrapper" required="true" %>
<%@ attribute name="dynamic" type="java.lang.Boolean" required="false" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="cms" uri="http://www.opencms.org/taglib/cms"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<c:set var="element" value="${cms.element}" />

<%-- ####### Headline ########################################### --%>
		
<c:if test="${!element.setting.hidetitle.toBoolean}">
	<div class="headline headline-md"><h2 ${headline.rdfaAttr}><c:out value="${headline}" escapeXml="false" /></h2></div>
</c:if>

<%-- ####### The list (AJAX will insert here) ################### --%>

<c:set var="ajaxlink"><cms:link>/system/modules/org.opencms.apollo.template.formatters/elements/list/list-ajax.jsp</cms:link></c:set>
<div class="ap-list-content mb-20" id="ap-list-content-${element.id}"
								data-id="${element.id}" 
								data-ajax="${ajaxlink}"
								data-teaser="${element.settings.teaserlength}" 
								data-path="${element.sitePath}" 
								data-color="${element.settings.buttoncolor}" 
								data-expired="${element.settings.showexpired}" 
								data-sitepath="${cms.requestContext.folderUri}" 
								data-dynamic="${dynamic ? 'true' : 'false'}">
							
	<div id="entrylist_box"></div>
	<div id="pagination_box"></div>
	
	<div class="spinner mv-20" style="display: none; position: initial; transform: none;">
		<i class="fa fa-spinner"></i>
	</div>
	
	<%-- ####### Create and edit new entries if empty result ######## --%>
	
	<c:set var="createType">${fn:substringBefore(types.stringValue, ':')}</c:set>
	<div id="editbox" style="display: none;" >
		<cms:edit createType="${createType}" create="true" >
			<div class="alert alert-warning fade in">
				<h3><fmt:message key="apollo.list.message.empty" /></h3>
				<div><fmt:message key="apollo.list.message.newentry" /></div>
			</div>
		</cms:edit>
	</div>
</div>

