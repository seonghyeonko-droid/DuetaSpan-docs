# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: LA에서 뉴욕 가는 다음 비행기는 언제 출발해요?
     2.59s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> 음, 알아봤는데 LA에서 뉴욕 가는 다음 비행기는 아침 여덟 시에 출발해서 오후 네 시 삼십분에 
     3.24s  user  발화 끝
     3.59s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.80s]: (tool result) The next flight departs Los Angeles at 8:00 AM and arriv
    10.65s  agent 발화 끝
    10.70s  user  발화 시작: 정말 일찍이네요. 점심시간 이후에 출발하는 직항편이 있어요?
    13.86s  <ret> 발화 (turn3 첫 프레임)
    14.46s  agent 발화 시작: <ret> 흠, 하루 늦게 출발하는 편이 있는지 알아볼게.
    14.73s  user  발화 끝
    14.86s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.38s]: (tool result) A direct flight leaves Los Angeles at 2:15 PM and arrive
    17.84s  agent 발화 끝
    18.23s  agent 발화 시작: 오후 두 시 십오분에 출발해서 뉴욕에는 밤 열 시 사십오분에 도착하는 직항편이 있어.
    25.23s  agent 발화 끝
    26.36s  user  발화 시작: 알겠습니다, 그 비행기 괜찮은 것 같아요. 그 비행기 좌석 예약해 주시겠어요?
    30.20s  <ret> 발화 (turn6 첫 프레임)
    30.20s  ⚡SPAN 주입 [d'=0.00s / d_lead=4.26s]: (tool result) Your seat is confirmed; booking reference is ZX789Q.
    30.78s  agent 발화 시작: <ret> 그래, 예약 다 됐어. 확인번호는 ZX789Q야.
    31.08s  user  발화 끝
    35.04s  agent 발화 끝
    35.72s  user  발화 시작: 네, 감사합니다.
    36.86s  user  발화 끝
