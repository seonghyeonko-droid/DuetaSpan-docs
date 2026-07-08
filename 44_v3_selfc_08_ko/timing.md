# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 좋아요. 제출 양식 버튼에 마우스를 올려주세요.
     3.90s  agent 발화 시작: <ret> 네, 잠시만요. 버튼에는 “Send”라고 적혀 있고, 배경은 초록색에 글자는 흰색이에요.
     3.90s  <ret> 발화 (turn1 첫 프레임)
     3.90s  user  발화 끝
     4.90s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.95s]: (button text: "Send", aria-label: "Submit form", background-color: "#4
    10.40s  user  발화 시작: 알겠습니다. 그럼, 레이캬비크 현재 시간이 어떻게 되나요?
    10.40s  agent 발화 끝
    14.95s  agent 발화 시작: <ret> 음, 레이캬비크 시간은… 10월 26일 오후 8시 17분이에요.
    14.95s  <ret> 발화 (turn3 첫 프레임)
    14.95s  user  발화 끝
    15.95s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.30s]: (time: 8:17 PM, timezone: "Atlantic/Reykjavik", date: "October twenty-
    20.15s  user  발화 시작: 아, 기차를 예매해 주실 수 있을까요? 런던에서 에든버러까지 다음 화요일에 가는 걸로요.
    20.15s  agent 발화 끝
    27.95s  agent 발화 시작: <ret> 물론이죠. HY783 열차가 런던에서 오전 10시 15분에 출발해서 에든버러에 오후 2시 42분에
    27.95s  <ret> 발화 (turn5 첫 프레임)
    27.95s  user  발화 끝
    28.43s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.65s]: (train number: HY783, departure time: 10:15 AM, arrival time: 2:42 PM,
    37.70s  user  발화 시작: 정말 좋네요. 예약을 확정해 주세요.
    37.70s  agent 발화 끝
    40.95s  agent 발화 시작: <ret> 네, 완료됐습니다. 10월 31일 런던에서 에든버러로 가는 HY783 열차 예약이 확정됐어요.
    40.95s  <ret> 발화 (turn7 첫 프레임)
    40.95s  user  발화 끝
    41.95s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.95s]: (booking confirmed: true, booking_id: "HY783", passenger: "unknown", d
    48.10s  user  발화 시작: 잘 됐네요. 안심이 돼요.
    48.10s  agent 발화 끝
    50.70s  user  발화 끝
