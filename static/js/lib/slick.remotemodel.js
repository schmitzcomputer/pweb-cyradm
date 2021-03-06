// Universal module definition
(function (root, factory) 

{
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery', './slick.core'], factory);
 } else {
    // Browser globals
    root.Slick.Data = root.Slick.Data || {};
    root.Slick.Data.RemoteModel = factory(root.jQuery);
  }
}(this, function ($,Slick) { 
  /***
   * A sample AJAX data store implementation.
   * Right now, it's hooked up to load search results from Octopart, but can
   * easily be extended to support any JSONP-compatible backend that accepts paging parameters.
   */
  function RemoteModel() {
    // private
    var myUrl = null;	
    var PAGESIZE = 50;
    var data = {length: 0};
    var searchstr = "";
    var searchfield = "";
    var sortcol = null;
    var sortdir = 1;
    var h_request = null;
    var req = null; // ajax request

    // events
    var onDataLoading = new Slick.Event();
    var onDataLoaded = new Slick.Event();


    function init() {
    }

    function setUrl(aUrl) {
	myUrl = aUrl;
    }	
    function isDataLoaded(from, to) {
      for (var i = from; i <= to; i++) {
        if (data[i] == undefined || data[i] == null) {
          return false;
        }
      }

      return true;
    }


    function clear() {
      for (var key in data) {
        delete data[key];
      }
      data.length = 0;
    }


    function ensureData(from, to) {
      if (req) {
        req.abort();
        for (var i = req.fromPage; i <= req.toPage; i++)
          data[i * PAGESIZE] = undefined;
      }

      if (from < 0) {
        from = 0;
      }

      if (data.length > 0) {
        to = Math.min(to, data.length - 1);
      }

      var fromPage = Math.floor(from / PAGESIZE);
      var toPage = Math.floor(to / PAGESIZE);

      while (data[fromPage * PAGESIZE] !== undefined && fromPage < toPage)
        fromPage++;

      while (data[toPage * PAGESIZE] !== undefined && fromPage < toPage)
        toPage--;

      if (fromPage > toPage || ((fromPage == toPage) && data[fromPage * PAGESIZE] !== undefined)) {
        // TODO:  look-ahead
        onDataLoaded.notify({from: from, to: to});
        return;
      }

 var len=0,url = myUrl+"?qtype="+ searchfield+"&query=" + searchstr + "&start=" + (fromPage * PAGESIZE) + "&limit=" + (((toPage - fromPage) * PAGESIZE) + PAGESIZE);
	len = sortcol.length;
      for(var i=0;i<len;i++) {    	      

      if (sortcol[i] && sortcol[i].sortCol != undefined) {
          url += ("&sortname=" + sortcol[i].sortCol.field + '&sortorder='+((sortcol[i].sortAsc) ? "asc" : "desc"));
      }
	}

      if (h_request != null) {
        clearTimeout(h_request);
      }

      h_request = setTimeout(function () {
        for (var i = fromPage; i <= toPage; i++)
          data[i * PAGESIZE] = null; // null indicates a 'requested but not available yet'

        onDataLoading.notify({from: from, to: to});

        req = $.ajax({
          url: url,
          callbackParameter: "callback",
          cache: false,
          success: onSuccess,
          error: function () {
            onError(fromPage, toPage)
          }
        });
        req.fromPage = fromPage;
        req.toPage = toPage;
      }, 50);
    }


    function onError(fromPage, toPage) {
      alert("error loading pages " + fromPage + " to " + toPage);
    }

    function onSuccess(resp) {
	resp = $.parseJSON(resp);
      var from = resp.request.start, to = from + resp.results.length+1;
      data.length = resp.request.total; // limitation of the API

      for (var i = 0; i < resp.results.length; i++) {
        var item = resp.results[i];
        data[from + i] = item;
        data[from + i].index = from + i;
      }

      req = null;

      onDataLoaded.notify({from: from, to: to});
    }


    function reloadData(from, to) {
      for (var i = from; i <= to; i++)
        delete data[i];

      ensureData(from, to);
    }


    function setSort(column, dir) {
      sortcol = column;
      sortdir = dir;
      clear();
    }

    function setSearch(str,field) {
      searchstr = str;
      searchfield = field;  
      clear();
    }


    init();

    return {
      // properties
      "data": data,

      // methods
      "clear": clear,
      "isDataLoaded": isDataLoaded,
      "ensureData": ensureData,
      "reloadData": reloadData,
      "setSort": setSort,
      "setSearch": setSearch,
      "setUrl":setUrl,		
      // events
      "onDataLoading": onDataLoading,
      "onDataLoaded": onDataLoaded
    };
  }

 return RemoteModel; 

}));