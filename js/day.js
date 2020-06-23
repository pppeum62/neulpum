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
    day[i].textContent = d.getDate() - (6 - i);
}

// 내일 요일
weekday[7].textContent = week[tweekday + 1];
// 내일 날짜
day[7].textContent = d.getDate() + 1;

console.log(today);