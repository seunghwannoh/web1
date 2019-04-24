
  var Links = {
    setColor:function (color){
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while(i < alist.length){
      //   alist[i].style.color=color;
      //   i = i + 1;
      // }
      $('a').css('color',color);
    }
  }
  var Body = {
    setColor:function (color){
      // document.querySelector('body').style.color=color
      $('body').css('color',color);
    },
    setBackgroundColor:function (color){
      // document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor',color);
    }
  }
  function nightDayHandler(self){
    if(self.value === 'night') {
      /*  var x = document.getElementsByClassName('javaol');
        for (var i in x) {
          x[i].style.color='white';
        }*/
      Links.setColor('powderblue');
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value='day';
    } else {
      Links.setColor('blue');
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value='night';
    }
  }
