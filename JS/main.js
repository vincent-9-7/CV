function createNav() {
  var previous = '';
  var current = 'RESUME';
  
  changePage();
  changeNavItem();

  document.querySelectorAll('.navbar__item').forEach(function(element) {
      element.onclick = function(event) {
        event.preventDefault();

        var to = event.target.getAttribute('href');
        push(to);
      };
    });

  function push(to) {
    previous = current;
    current = to;

    changePage();
    changeNavItem();
  }

  function changePage() {
    var className = 'page--active';

    if (previous) {
      var previousPage = document.querySelector('#' + previous);
      previousPage.classList.remove(className);
    }

    var page = document.querySelector('#' + current);
    page.classList.add(className);  


    function progressBar() {
      // console.log('bar');
      var web75 = 1;
      var graphic80 = 1;
      var html85 = 1;
      var css80 = 1;
      var js70 = 1;
      var py80 = 1;
      var java70 = 1;
      var element__web75 = document.getElementById('web75');
      var element__graphic80 = document.getElementById('graphic80');
      var element__html85 = document.getElementById('html85');
      var element__css80 = document.getElementById('css80');
      var element__js70 = document.getElementById('js70');
      var element__py80 = document.getElementById('py80');
      var element__java70 = document.getElementById('java70');

      setInterval(frame,10) /*setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭*/      
      function frame() {
        if (web75 > 85) {
          if (graphic80 > 80) {
            clearInterval();
          } else {
            graphic80++;
            element__graphic80.style.width = graphic80 + '%';
          }
          clearInterval();
        } else {
          web75++;
          element__web75.style.width = web75 + '%';
        }
      }

      // 使用定时器实现每一秒写一次时间 setInterval("loveTime();",1000);
      setInterval(frame2,10) /*setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭*/      
      function frame2() {
        if (html85 > 85) {
          if (css80 > 75) { 
            if (js70 > 85) {
              if (py80 > 80) {
                if (java70 > 70) {
                  clearInterval()
                } else {
                  java70++;
                  element__java70.style.width = java70 + '%';
                }
                clearInterval();
              } else {
                py80++;
                element__py80.style.width = py80 + '%';
              }
              clearInterval()
            } else {
              js70++;
              element__js70.style.width = js70 + '%';
            }
            clearInterval()
          } else {
            css80++;
            element__css80.style.width = css80 + '%';
          }
          clearInterval()
        } else {
          html85++;
          element__html85.style.width = html85 + '%';
        }
      }


    }

    var skillList = ['web75','graphic80','html85','css80','js70','py80','java70']
    if(current == 'RESUME') {
      console.log('resume page');
      for(var i = 0; i < skillList.length; i++) {
        document.getElementById(skillList[i]).style.width = '0%';
      }
      progressBar();
    }
  }

  function changeNavItem() {
    var className = 'navbar__item--active';

    if (previous) {
      var previousNavItem = document.querySelector('[href="'+ previous +'"]');
      previousNavItem.classList.remove(className);
    }

    var navItem = document.querySelector('[href="'+ current +'"]');
    navItem.classList.add(className); 
  }

}

function main() {
  createNav();
}

main();