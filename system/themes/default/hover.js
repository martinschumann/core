/* Contao Open Source CMS, (c) 2005-2013 Leo Feyer, LGPL license */
var Theme={hoverRow:function(e,t){var n=$(e).getChildren();for(var r=0;r<n.length;r++)n[r].nodeName.toLowerCase()=="td"&&n[r].setStyle("background-color",t?"#ebfdd7":"")},hoverDiv:function(e,t){t||e.removeAttribute("data-visited"),$(e).setStyle("background-color",t?"#ebfdd7":"")},toggleSelect:function(e){var t=$(e).getElement("input");t&&(t.checked?t.get("type")!="radio"&&(t.checked=""):t.checked="checked")},fixLabelLastChild:function(){(Browser.ie7||Browser.ie8)&&$$(".tl_checkbox_container label:last-child").each(function(e){e.setStyle("margin-bottom",0)})}};window.addEvent("domready",function(){Theme.fixLabelLastChild(),$$(".picker_selector").each(function(e){e.getElements("a").each(function(e){e.addEvent("click",function(e){e.stopPropagation()})}),e.getElements('input[type="checkbox"]').each(function(e){e.addEvent("click",function(e){e.stopPropagation()})})}),$$(".click2edit").each(function(e){e.getElements("a").each(function(e){e.addEvent("click",function(e){e.stopPropagation()})}),Browser.Features.Touch?e.addEvent("click",function(t){e.getAttribute("data-visited")?(e.getElements("a").each(function(e){if(e.hasClass("edit")){document.location.href=e.href;return}}),e.removeAttribute("data-visited")):e.setAttribute("data-visited",1)}):e.addEvent("click",function(t){var n=Browser.Platform.mac?t.event.metaKey:t.event.ctrlKey;n&&t.event.shiftKey?e.getElements("a").each(function(e){if(e.hasClass("editheader")){document.location.href=e.href;return}}):n&&e.getElements("a").each(function(e){if(e.hasClass("edit")){document.location.href=e.href;return}})})})});