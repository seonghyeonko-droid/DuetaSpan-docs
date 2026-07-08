# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: LA에서 뉴욕 가는 다음 비행기는 언제 출발해요?
     2.50s  <ret> 발화 (turn1 첫 프레임)
     3.09s  agent 발화 시작: <ret> 음, 알아봤는데 LA에서 뉴욕 가는 다음 비행기는 아침 여덟 시에 출발해서 오후 네 시 반에 도착
     3.28s  user  발화 끝
     3.50s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.48s]: (tool result) The next flight departs Los Angeles at 8:00 AM and arriv
     9.71s  agent 발화 끝
     9.82s  user  발화 시작: 정말 일찍이네요. 혹시 정오 이후에 출발하는 직항편이 있어요?
    13.15s  <ret> 발화 (turn3 첫 프레임)
    13.74s  agent 발화 시작: <ret> 흠, 하루 늦게 출발하는 편이 있는지 찾아볼게.
    13.94s  user  발화 끝
    14.15s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.96s]: (tool result) A direct flight leaves Los Angeles at 2:15 PM and arrive
    16.69s  agent 발화 끝
    17.09s  agent 발화 시작: 오후 두 시 십오 분에 출발해서 뉴욕에는 밤 열 시 사십오 분에 도착하는 직항편이 있어.
    23.81s  user  발화 시작: 알겠습니다, 그 비행기 괜찮을 것 같아요. 그 비행기 좌석 예약해 주시겠어요?
    23.90s  agent 발화 끝
    27.83s  <ret> 발화 (turn6 첫 프레임)
    28.43s  agent 발화 시작: <ret> 그래, 예약해 줬어. 예약 확인번호는 ZX789Q야.
    28.53s  user  발화 끝
    28.83s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.30s]: (tool result) Your seat is confirmed; booking reference is ZX789Q.
    32.38s  user  발화 시작: 네, 감사합니다.
    32.74s  agent 발화 끝
    33.67s  user  발화 끝
