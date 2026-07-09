# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 오션뷰 호텔에서 2월 10일부터 7박 동안 방 3개를 예약해 줘.
     4.38s  <ret> 발화 (turn1 첫 프레임)
     4.53s  agent 발화 시작: <ret> 물론이죠. 방 3개를 예약해 드릴게요.
     4.67s  user  발화 끝
     5.42s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.58s]: (tool result) Ocean View Hotel in San Diego has three rooms available 
     6.97s  agent 발화 시작: 오션뷰 호텔에 2월 10일부터 7박 동안 방 3개를 예약했습니다. 총 비용은 이천백 달러입니다.
     7.11s  agent 발화 끝
    13.36s  agent 발화 끝
    13.52s  user  발화 시작: 와, 생각보다 비싸네. 좀 더 저렴한 곳으로 찾아볼까?
    17.96s  user  발화 끝
    18.29s  agent 발화 시작: 네, 물론입니다. 다른 호텔을 찾아볼까요? 어떤 기준으로 찾아드릴까요?
    22.51s  user  발화 시작: 해변 근처면 좋겠어. 그리고 수영장이 꼭 있어야 해.
    23.15s  agent 발화 끝
    27.00s  user  발화 끝
    27.16s  agent 발화 시작: 해변 근처에 수영장이 있는 호텔을 찾으시는군요. 잠시만요—
    29.53s  user  발화 시작: Yeah.
    29.94s  user  발화 끝
    30.76s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Paradise Cove Resort is located three blocks from the be
    31.50s  agent 발화 시작: <ret> 해변 근처에 수영장이 있는 호텔을 알아봤더니… 파라다이스 코브 리조트는 해변에서 세 블록 거리에 
    31.55s  agent 발화 끝
    40.77s  agent 발화 끝
