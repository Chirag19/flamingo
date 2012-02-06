/* 
 * Copyright (C) 2012 B3Partners B.V.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

 /**
  *FlamingoComponent. Implementation of Component.
  *@see viewer.viewercontroller.controller.Component
  *@author <a href="mailto:roybraam@b3partners.nl">Roy Braam</a>
  **/
Ext.define("viewer.viewercontroller.flamingo.FlamingoComponent",{
    extend: "viewer.viewercontroller.controller.Component",
    
    config: {
        tagName: null,
        width: null,
        height: null,
        left: null,
        right: null,
        top: null,
        bottom: null,
        listenTo: null
    },       
    /** Create a new FlamingoTool
     *@construct
     *@param config.id id of this object
     *@param config.type the type of the component
     *@param config.width the width of the component
     *@param config.height the height of the component
     *@param config.left margin at the left side
     *@param config.right margin of the right side
     *@param config.bottom margin at the bottom side
     *@param config.listenTo the component id to listen to
     */
    constructor : function (config){
        //replace the . for flamingo
        if (config.id){
            config.id=config.id.replace(/\./g,"_");
        }            
        viewer.viewercontroller.flamingo.FlamingoComponent.superclass.constructor.call(this, config);
        this.initConfig(config);
        //translate type to tagName
        if(viewer.viewercontroller.controller.Component.BORDER_NAVIGATION){
            this.tagName="BorderNavigation";
        }else{
            Ext.Error.raise({msg: "Can't find type of component or component not supported"});
        }    
        return this;
    },
    /**
     * Sets the tool visibility
     * @param visibility the visibility
     * @see MapComponent#setVisible
     */
    setVisible: function (visibility){
        this.getFrameworkTool().callMethod(this.getId(),'setVisible',visibility);
    },
    /**
     * Create a xml string for this object.
     * @return string of the xml.
     */
    toXML: function (){        
        var xml="<fmc:";
        xml+=this.getTagName();
        xml+=" "+this.getParamsAsXml();        
        xml+=">";            
        xml+="</fmc:"+this.getTagName()+">"
        return xml;
    }, 
    getParamsAsXml: function(){
        var xml="";
        if (this.getId()!=null)
            xml+="id='"+this.getId()+"'";
        if (this.getWidth()!=null)
            xml+=" width='"+this.getWidth()+"'";
        if (this.getHeight()!=null)
            xml+=" height='"+this.getHeight()+"'";
        if (this.getTop()!=null)
            xml+=" top='"+this.getTop()+"'";
        if (this.getLeft()!=null)
            xml+=" left='"+this.getLeft()+"'";
        if (this.getRight()!=null)
            xml+=" right='"+this.getRight()+"'";
        if (this.getBottom()!=null)
            xml+=" bottom='"+this.getBottom()+"'";        
        if (this.getListenTo()!=null){
            xml+=" listento='"+this.getListenTo()+"'";
        }
        return xml;
    }   
});

