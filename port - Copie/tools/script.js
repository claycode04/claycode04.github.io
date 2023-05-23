var trm = document.getElementById('toggleRightMenu')
    var navWrap = document.getElementById('navWrap')
    trm.onclick = function(){
      if(navWrap.className === 'hideToggle') navWrap.className = ''
      else navWrap.className = 'hideToggle'
    }