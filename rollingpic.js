var _tload1 = 0; //网页打开时等待图片载入的秒数
var _tchange1 = 5; //切换的时间
var _tnum1 = 4; //图片数
var _tn1 = 1;
var _tl1 =null;
_tt1 = setTimeout('change_img1()',_tload1*1000);
function change_img1(){
    setFocus1(_tn1);
    _tt1 = setTimeout('change_img1()',_tchange1*1000);
}
function setFocus1(i1){
    if(i1>_tnum1){_tn1=1;i1=1;}
        _tl1?document.getElementById('focusPic1'+_tl1).style.display='none':'';
    document.getElementById('focusPic1'+i1).style.display='block';
    _tl1=i1;
    _tn1++;
}

var _tload2 = 0; //网页打开时等待图片载入的秒数
var _tchange2 = 5; //切换的时间
var _tnum2 = 4; //图片数
var _tn2 = 1;
var _tl2 =null;
_tt2 = setTimeout('change_img2()',_tload2*1000);
function change_img2(){
    setFocus2(_tn2);
    _tt2 = setTimeout('change_img2()',_tchange2*1000);
}
function setFocus2(i2){
    if(i2>_tnum2){_tn2=1;i2=1;}
        _tl2?document.getElementById('focusPic2'+_tl2).style.display='none':'';
    document.getElementById('focusPic2'+i2).style.display='block';
    _tl2=i2;
    _tn2++;
}

var _tload3 = 0; //网页打开时等待图片载入的秒数
var _tchange3 = 5; //切换的时间
var _tnum3 = 4; //图片数
var _tn3 = 1;
var _tl3 =null;
_tt3 = setTimeout('change_img3()',_tload3*1000);
function change_img3(){
    setFocus3(_tn3);
    _tt3 = setTimeout('change_img3()',_tchange3*1000);
}
function setFocus3(i3){
    if(i3>_tnum3){_tn3=1;i3=1;}
        _tl3?document.getElementById('focusPic3'+_tl3).style.display='none':'';
    document.getElementById('focusPic3'+i3).style.display='block';
    _tl3=i3;
    _tn3++;
}

var _tload = 0; //网页打开时等待图片载入的秒数
var _tchange = 1000000; //切换的时间
var _tnum = 9; //图片数
var _tn = 1;
var _tl = null;
_tt = setTimeout('change_img()', _tload * 1000);

function change_img() {
    setFocus(_tn);
    _tt = setTimeout('change_img()', _tchange * 1000);
}
function setFocus(i) {
    if (i > _tnum) { _tn = 1; i = 1; }
    _tl ? document.getElementById('focusPic' + _tl).style.display = 'none' : '';
    document.getElementById('focusPic' + i).style.display = 'block';
    _tl = i;
    _tn++;
}