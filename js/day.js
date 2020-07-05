var day = document.getElementsByClassName('day');
var weekday = document.getElementsByClassName('weekday');
var datetext = document.getElementById('date-text');
var week = new Array('일', '월', '화', '수', '목', '금', '토');
var d = new Date();
var today = (d.getMonth()+1) + "월 " + d.getDate() + "일 " + week[d.getDay()] + "요일";
var tweekday = d.getDay();

datetext.textContent = today;

weekday[6].textContent = week[tweekday];

var cnt = 0;
var j = tweekday;
var k = 6;

// 요일 채우기
while(cnt < 7) {
    weekday[k--].textContent = week[j];

    if(j == 0) {
        j = 6;
    } else {
        j--;
    }

    cnt++;
}

// 날짜 채우기
for(var i = 0; i < 7; i++) {
    var y = new Date(d.valueOf() - (24*(6-i)*60*60*1000));
    day[i].textContent = y.getDate();
}

var t = new Date(d.valueOf() + (24*60*60*1000));

// 내일 요일
weekday[7].textContent = week[t.getDay()];
// 내일 날짜
day[7].textContent = t.getDate();

console.log(today);