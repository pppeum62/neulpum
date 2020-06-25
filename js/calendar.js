var today = new Date(); // 오늘 날짜
//자신의 컴퓨터를 기준으로
//today 에 Date객체를 넣어줌

function prevCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    buildCalendar(); // 현재 달 
}
    
function nextCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    buildCalendar();
}
    
function buildCalendar() {// 현재 달
    var nMonth = new Date(today.getFullYear(), today.getMonth(), 1);  // 이번 달의 첫째 날
    var lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0); // 이번 달의 마지막 날
    var tblCalendar = document.getElementById("realcalendar");     // 테이블 달력을 만들 테이블
    var tblCalendarYM = document.getElementById("calendarYM");    // yyyy년 m월 출력할 곳
    tblCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";  // yyyy년 m월 출력
    // 기존 테이블에 뿌려진 줄, 칸 삭제
    
    while (tblCalendar.rows.length > 2) {
        tblCalendar.deleteRow(tblCalendar.rows.length - 1);
    }

    var row = null;
    var rowcnt = 0;
    row = tblCalendar.insertRow();
    var cnt = 0;

    // 1일이 시작되는 칸을 맞추어 줌
    for (i = 0; i < nMonth.getDay(); i++) {
        cell = row.insertCell();
        cell.innerHTML = '<div class="datecont"></div>';
        cnt = cnt + 1;
    }
    
    for (i = 1; i <= lastDate.getDate(); i++) { 
        cell = row.insertCell();
        cell.innerHTML = '<div class="datecont"><span>' + i + '</span><div class="percent"></div></div>';

        cnt = cnt + 1;

        if (cnt % 7 == 0) { // 1주일이 7일 이므로
            row = realcalendar.insertRow();// 줄 추가
            
            rowcnt++;
        }
    }

    console.log(cnt);
    console.log(rowcnt);
    console.log(cnt % 7);

    var num = cnt % 7;

    if(num != 0) {
        for(var i = 0; i < 7 - num; i++) {
            cell = row.insertCell();
            cell.innerHTML = '<div class="datecont nextmon">' + (i + 1) + '</div>';
        }
    }
    
}