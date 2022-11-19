'use strict';

var tablinks = document.getElementByClassName("tab-links");
var tabcontents = document.getElementByClassName("tab-contents");
function opentab(tabname)
{
    for (tablink of tablinks)
    {
        tablink.classlist.remove("active-link");
    }
    for (tabcontent of tabcontents)
    {
        tabcontent.classlist.remove("active-tab");
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
