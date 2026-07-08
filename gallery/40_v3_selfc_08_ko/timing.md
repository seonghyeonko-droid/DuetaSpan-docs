# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고에서 덴버 가는 버스, 5월 10일에 세 명 보여 줘.
     3.41s  <ret> 발화 (turn1 첫 프레임)
     3.65s  agent 발화 시작: <ret> 네, 그 경로의 버스 운행 상황을 확인해 볼게요. Greyhound와 FlixBus 모두 5월 1
     3.69s  user  발화 끝
     5.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.52s]: (tool result) There are two buses available on May tenth: a Greyhound 
    14.69s  agent 발화 끝
    15.26s  user  발화 시작: 좋네. 5월 15일에 돌아오는 건 어때?
    18.24s  <ret> 발화 (turn3 첫 프레임)
    18.40s  agent 발화 시작: <ret> 네, 돌아오는 옵션을 알아봐 드릴게요. 5월 15일에는 160달러짜리 Greyhound나 130달
    18.58s  user  발화 끝
    19.28s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.42s]: (tool result) Two buses are available on May fifteenth: a Greyhound de
    27.39s  agent 발화 끝
    27.62s  user  발화 시작: 흠, 있잖아— 그러니까, 10일에 더 일찍 출발하는 Greyhound가 있어?
    31.92s  user  발화 끝
    32.08s  agent 발화 시작: 시카고에서 조금 더 빨리 출발하는 Greyhound가 있는지 알아볼까요?
    35.93s  user  발화 시작: FlixBus는 좌석이 젖혀져?
    36.58s  agent 발화 끝
    38.88s  user  발화 끝
    38.98s  agent 발화 시작: 좋은 질문이에요! FlixBus는 일반적으로 편안한 좌석을 제공하며, 많은 노선에서 리클라이닝 옵션을 이용하
    44.38s  user  발화 시작: 응.
    44.78s  user  발화 끝
    47.48s  <ret> 발화 (turn9 첫 프레임)
    47.80s  agent 발화 시작: <ret> 자, 더 일찍 출발하는 Greyhound에 대해 말씀드리자면… 5월 10일 오전 6시에 출발하는 
    47.83s  agent 발화 끝
    49.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.62s]: (tool result) An additional Greyhound bus departs at 6:00 AM on May te
    57.44s  agent 발화 끝
    57.51s  user  발화 시작: 좋아, 덴버 가는 오전 6시 Greyhound랑 돌아오는 오전 9시 Greyhound로 예약해 줘.
    62.79s  <ret> 발화 (turn11 첫 프레임)
    63.11s  agent 발화 시작: <ret> 알겠습니다, 예약을 확인해 드릴게요. 버스 티켓 예약을 완료했습니다! 총 비용은 300달러입니다.
    63.30s  user  발화 끝
    64.47s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.01s]: (tool result) Your outbound Greyhound on May tenth at 6:00 AM and retu
    69.32s  user  발화 시작: 좋아. 이메일로 확인 메일 받을 수 있어?
    69.41s  agent 발화 끝
    72.16s  agent 발화 시작: 네, 여행 세부 정보가 담긴 확인 이메일을 곧 받으실 수 있습니다. 도와드릴 수 있어서 기쁩니다! 잉카 도로
    72.23s  user  발화 끝
    84.41s  agent 발화 끝
    84.84s  user  발화 시작: 흥미롭네. 직물에 관한 전시물도 있어?
    87.70s  user  발화 끝
