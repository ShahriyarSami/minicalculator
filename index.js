function add(){
  var add1 = prompt('প্রথম সংখ্যা');
  add1 = parseInt(add1,10);
  var add2 = prompt('দ্বিতীয় সংখ্যা');
  add2 = parseInt(add2,10);
  var result1 = add1+add2;
  alert('যোগফল হলো    :    ' + result1);
};




function subtract(){
    var sub1 = prompt('প্রথম সংখ্যা');
    sub1 = parseInt(sub1,10);
    var sub2 = prompt('দ্বিতীয় সংখ্যা');
    sub2 = parseInt(sub2,10);
    var result2 = sub1-sub2;
    alert('বিয়োগফল হলো    :    ' + result2);
  };
  
  

  function multiple(){
    var mul1 = prompt('প্রথম সংখ্যা');
    mul1 = parseInt(mul1,10);
    var mul2 = prompt('দ্বিতীয় সংখ্যা');
    mul2 = parseInt(mul2,10);
    var result3 = mul1*mul2;
    alert('গুনফল হলো    :    ' + result3);
  };
  


  function divide(){
    var dev1 = prompt('প্রথম সংখ্যা');
    dev1 = parseInt(dev1,10);
    var dev2 = prompt('দ্বিতীয় সংখ্যা');
    dev2 = parseInt(dev2,10);
    var result4 = dev1/dev2;
    alert('ভাগফল হলো    :    ' + result4);
  };



  
  
  function square(){
    var squ1 = prompt('সংখ্যা');
    squ1 = parseInt(squ1,10);
    var result5 = squ1*squ1;
    alert(squ1 + ' এর বর্গ হলো    :    ' + result5);
  };



  
  function  remainder(){
    var rem1 = prompt('ভাজ্য');
    rem1 = parseInt(rem1,10);
    var rem2 = prompt('ভাজক');
    rem2 = parseInt(rem2,10);
    var result6 = rem1%rem2;
    alert('ভাগশেষ হলো    :    ' + result6);
  };




  function  exponent(){
    var exp1 = prompt('ভিত্তি');
    exp1 = parseInt(exp1,10);
    var exp2 = prompt('শক্তি ');
    exp2 = parseInt(exp2,10);
    var result7 = exp1**exp2;
    alert('ফলাফল হলো    :    ' + result7);
  };




   function magic (){
    var mag1 = prompt('প্রথম সংখ্যা');
    mag1 = parseInt(exp1,10);
    var mag2 = prompt('দ্বিতীয় সংখ্যা ');
    mag2 = parseInt(exp2,10);
    var result8 = mag1**2;
    alert('ফলাফল হলো    :    ' + result8 + '-' + mag1*(mag1+mag2));
  };
