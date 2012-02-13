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
 * Custom configuration object for AttributeList configuration
 * @author <a href="mailto:roybraam@b3partners.nl">Roy Braam</a>
 */
Ext.define("viewer.components.CustomConfiguration",{
    extend: "viewer.components.SelectionWindowConfig",
    constructor: function (parentId,configObject){
        viewer.components.CustomConfiguration.superclass.constructor.call(this, parentId,configObject);        
        //this.createCheckBoxes(this.configObject.layers);
        this.addFormItems(configObject);
    },
    addFormItems: function(){
        var me =this;        
        this.form.add([{
                xtype: "label",
                text: "Standaard Oriëntatie",
                style: "font-weight: bold;"                
            },{                           
                xtype: 'radiogroup',
                columns: 1,
                vertical: true,
                name: "orientation",
                items: [{
                    boxLabel: 'Liggend', 
                    name: 'orientation', 
                    inputValue: 'landscape', 
                    checked: me.configObject.orientation=="landscape"
                },{
                    boxLabel: 'Staand', 
                    name: 'orientation', 
                    inputValue: 'portrait', 
                    checked: me.configObject.orientation=="portrait" 
                }]
            },{
                xtype: "label",
                text: "Standaard paginaformaat",
                style: "font-weight: bold;"                
            },{
                xtype: "combo",
                fields: ['value','text'],
                value: me.configObject.default_format,
                name: "default_format",
                store: [
                    ["a4","A4"],
                    ["a3","A3"]
                ],
                width : 75
            },{
                xtype: "label",
                text: "Standaard legenda",
                style: "font-weight: bold;"                
            },{
                xtype: "checkbox",
                name: "legend",
                checked: me.configObject.legend,
                boxLabel: "Standaard de legenda toevoegen"
            }
        ]);
                 
    }
});

