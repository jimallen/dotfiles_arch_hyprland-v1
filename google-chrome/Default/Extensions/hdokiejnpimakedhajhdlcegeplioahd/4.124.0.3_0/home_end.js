document.title=gs("Site Search"),document.getElementById("lp_docwrite_home2")&&set_innertext(document.getElementById("lp_docwrite_home2"),gs("Find a site")),document.getElementById("lp_docwrite_home3")&&set_innertext(document.getElementById("lp_docwrite_home3"),gs("Search")),document.getElementById("searchbox")&&(document.getElementById("searchbox").placeholder=gs("Search")),document.getElementById("lp_docwrite_home4")&&set_innertext(document.getElementById("lp_docwrite_home4"),gs("Show all sites")),document.getElementById("lp_docwrite_home5")&&set_innertext(document.getElementById("lp_docwrite_home5"),gs("NAME")),document.getElementById("lp_docwrite_home6")&&set_innertext(document.getElementById("lp_docwrite_home6"),gs("USERNAME")),document.getElementById("lp_docwrite_home7")&&set_innertext(document.getElementById("lp_docwrite_home7"),gs("PASSWORDupper")),document.getElementById("lp_docwrite_home8")&&set_innertext(document.getElementById("lp_docwrite_home8"),gs("ACTION")),document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){onLoad()}),document.getElementById("searchbox").addEventListener("keyup",function(e){search_keyup(e)}),document.getElementById("searchbox").addEventListener("focus",function(){g_searchhasfocus=!0,clearkeyboardnav()}),document.getElementById("searchbox").addEventListener("blur",function(){g_searchhasfocus=!1}),document.getElementById("search").addEventListener("click",function(){search_go()}),document.getElementById("showallsites").addEventListener("click",function(){search_clear()}),document.getElementById("searchbox").addEventListener("search",function(e){search_keyup(e)})});