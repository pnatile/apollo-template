/*
 * This library is part of OpenCms -
 * the Open Source Content Management System
 *
 * Copyright (c) Alkacon Software GmbH (http://www.alkacon.com)
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * For further information about Alkacon Software, please see the
 * company website: http://www.alkacon.com
 *
 * For further information about OpenCms, please see the
 * project website: http://www.opencms.org
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

package org.opencms.apollo.template.webform;

import org.opencms.util.CmsStringUtil;

/**
 * Represents a text input field for an email address.<p>
 */
public class CmsEmailField extends CmsTextField {

    /** HTML field type: email field. */
    private static final String TYPE = "email";

    /** Regular expression to validate email addresses. */
    public static final String VALIDATION_REGEX = "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$";

    /**
     * Returns the type of the input field, e.g. "text" or "select".<p>
     *
     * @return the type of the input field
     */
    public static String getStaticType() {

        return TYPE;
    }

    /**
     * @see org.opencms.apollo.template.webform.I_CmsField#getType()
     */
    @Override
    public String getType() {

        return TYPE;
    }

    /**
     * @see org.opencms.apollo.template.webform.I_CmsField#getValue()
     */
    @Override
    public String getValue() {

        if (CmsStringUtil.isNotEmptyOrWhitespaceOnly(super.getValue())) {
            return super.getValue().toLowerCase();
        }
        return super.getValue();
    }

    /**
     * @see org.opencms.apollo.template.webform.I_CmsField#getValueEscaped()
     */
    @Override
    public String getValueEscaped() {

        if (CmsStringUtil.isNotEmptyOrWhitespaceOnly(getValue())) {
            return CmsStringUtil.escapeHtml(getValue());
        }
        return super.getValueEscaped();
    }

}
