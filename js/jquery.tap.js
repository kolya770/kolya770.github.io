(function($,_){'use strict';var ev={start:'touchstart mousedown',end:'touchend mouseup'};$.event.special[_]={setup:function(){$(this).off('click').on(ev.start+' '+ev.end,function(e){ev.E=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0]:e;}).on(ev.start,function(e){if(e.which&&e.which!==1){return;}ev.target=e.target;ev.time=new Date().getTime();ev.X=ev.E.pageX;ev.Y=ev.E.pageY;}).on(ev.end,function(e){if(ev.target===e.target&&((new Date().getTime()-ev.time)<750)&&(ev.X===ev.E.pageX&&ev.Y===ev.E.pageY)){e.type=_;e.pageX=ev.E.pageX;e.pageY=ev.E.pageY;$.event.dispatch.call(this,e);}});},remove:function(){$(this).off(ev.start,false).off(ev.end,false);}};$.fn[_]=function(fn){return this[fn?'on':'trigger'](_,fn);};})(jQuery,'tap');