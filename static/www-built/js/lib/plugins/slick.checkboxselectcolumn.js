(function(c,h){"function"===typeof define&&define.amd?define(["jquery","../slick.core"],h):c.Slick.CheckboxSelectColumn=h(c.jQuery,c.Slick)})(this,function(c,h){return function(p){function q(b,l){var c=a.getSelectedRows(),e={},f,k;for(k=0;k<c.length;k++)f=c[k],e[f]=!0,e[f]!==g[f]&&(a.invalidateRow(f),delete g[f]);for(k in g)a.invalidateRow(k);g=e;a.render();c.length&&c.length==a.getDataLength()?a.updateColumnHeader(d.columnId,"\x3cinput type\x3d'checkbox' checked\x3d'checked'\x3e",d.toolTip):a.updateColumnHeader(d.columnId,
"\x3cinput type\x3d'checkbox'\x3e",d.toolTip)}function r(b,c){32==b.which&&a.getColumns()[c.cell].id===d.columnId&&(a.getEditorLock().isActive()&&!a.getEditorLock().commitCurrentEdit()||m(c.row),b.preventDefault(),b.stopImmediatePropagation())}function t(b,l){a.getColumns()[l.cell].id===d.columnId&&c(b.target).is(":checkbox")&&(a.getEditorLock().isActive()&&!a.getEditorLock().commitCurrentEdit()?b.preventDefault():(m(l.row),b.stopPropagation()),b.stopImmediatePropagation())}function m(b){g[b]?a.setSelectedRows(c.grep(a.getSelectedRows(),
function(a){return a!=b})):a.setSelectedRows(a.getSelectedRows().concat(b))}function u(b,g){if(g.column.id==d.columnId&&c(b.target).is(":checkbox")){if(a.getEditorLock().isActive()&&!a.getEditorLock().commitCurrentEdit())b.preventDefault();else{if(c(b.target).is(":checked")){for(var h=[],e=0;e<a.getDataLength();e++)h.push(e);a.setSelectedRows(h)}else a.setSelectedRows([]);b.stopPropagation()}b.stopImmediatePropagation()}}function v(a,c,d,e,f){return f?g[a]?"\x3cinput type\x3d'checkbox' checked\x3d'checked'\x3e":
"\x3cinput type\x3d'checkbox'\x3e":null}var a,n=new h.EventHandler,g={},d=c.extend(!0,{},{columnId:"_checkbox_selector",cssClass:null,toolTip:"Select/Deselect All",width:30},p);c.extend(this,{init:function(b){a=b;n.subscribe(a.onSelectedRowsChanged,q).subscribe(a.onClick,t).subscribe(a.onHeaderClick,u).subscribe(a.onKeyDown,r)},destroy:function(){n.unsubscribeAll()},getColumnDefinition:function(){return{id:d.columnId,name:"\x3cinput type\x3d'checkbox'\x3e",toolTip:d.toolTip,field:"sel",width:d.width,
resizable:!1,sortable:!1,cssClass:d.cssClass,formatter:v}}})}});