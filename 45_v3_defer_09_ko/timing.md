# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자: 35.6895 위도, 139.6917 경도로 내비게이션 시작해 주세요.
     4.88s  agent 발화 시작: <ret> 모시: 네, 알겠습니다. 도쿄 스카이트리로 가는 내비게이션을 시작합니다. 거리는 12.5킬로미터이
     4.88s  <ret> 발화 (turn1 첫 프레임)
     4.88s  user  발화 끝
     5.36s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.61s]: Destination: Tokyo Skytree. Distance: 12.5 kilometers. Estimated time:
    14.03s  user  발화 시작: 사용자: 음, 근처에 커피숍 좀 찾아줄 수 있을까요?
    14.03s  agent 발화 끝
    18.90s  agent 발화 시작: <ret> 모시: 물론입니다. 커피 하우스 야마는 0.8킬로미터 거리에 있고, 스미다구에 위치해 있습니다. 
    18.90s  <ret> 발화 (turn3 첫 프레임)
    18.90s  user  발화 끝
    19.62s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.22s]: Name: Coffee House Yama. Address: 1-1-1 Oshiage, Sumida-ku, Tokyo. Dis
    26.83s  user  발화 시작: 사용자: 지금 그곳 날씨는 어떤가요?
    26.83s  agent 발화 끝
    29.88s  agent 발화 시작: <ret> 모시: 잠시 확인해 볼게요. 현재 24도이고, 부분적으로 흐립니다. 풍속은 시속 15킬로미터이고,
    29.88s  <ret> 발화 (turn5 첫 프레임)
    29.88s  user  발화 끝
    30.84s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.44s]: Temperature: 24 degrees Celsius. Condition: Partly cloudy. Wind speed:
    37.81s  user  발화 시작: 사용자: 좋네요. 야마에서 오후 3시 30분에 두 명 테이블로 예약해 주세요.
    37.81s  agent 발화 끝
    44.52s  agent 발화 시작: <ret> 모시: 바로 처리해 드리겠습니다. 커피 하우스 야마에서 두 명 테이블이 오후 3시 30분에 예약되
    44.52s  <ret> 발화 (turn7 첫 프레임)
    44.52s  user  발화 끝
    44.60s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.22s]: Reservation confirmed. Restaurant: Coffee House Yama. Time: 3:30 PM. P
    54.88s  user  발화 시작: 사용자: [sigh] 스카이트리 근처에 꽃집이 있나요? 음… 좋은 곳으로요?
    54.88s  agent 발화 끝
    60.37s  agent 발화 시작: <ret> 모시: 확인해 보겠습니다. 하나바나 플라워스는 1.2킬로미터 거리에 있고, 스미다구에 있습니다. 
    60.37s  <ret> 발화 (turn9 첫 프레임)
    60.37s  user  발화 끝
    61.37s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.44s]: Name: Hanabana Flowers. Address: 2-2-3 Oshiage, Sumida-ku, Tokyo. Dist
    67.69s  user  발화 시작: 사용자: 좋아요, 잘 됐네요. 그곳은 어떤 종류의 꽃을 전문으로 취급하나요?
    67.69s  agent 발화 끝
    73.79s  agent 발화 시작: 모시: 그건 조금 더 자세히 알아봐야 할 것 같아요. 구체적인 상품을 확인해서 다시 알려드릴게요.
    73.79s  user  발화 끝
    82.32s  user  발화 시작: 사용자: 흠, 알겠어요. 지금은 그만해도 괜찮아요. 스카이트리에서 기념품을 사라고 알려줘 줄 수 있나요?
    82.32s  agent 발화 끝
    90.25s  agent 발화 시작: <ret> 모시: 물론입니다. 도쿄 스카이트리에 도착했을 때 기념품을 사라는 알림이 설정되었습니다.
    90.25s  <ret> 발화 (turn13 첫 프레임)
    90.25s  user  발화 끝
    90.73s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.61s]: Reminder set. Text: Buy souvenir at Tokyo Skytree. Location: Tokyo Sky
    96.35s  user  발화 시작: 사용자: 완벽하네요. 지금 여기서 하나바나 플라워스까지 가장 빠른 길은 뭔가요?
    96.35s  agent 발화 끝
   102.45s  agent 발화 시작: <ret> 모시: 다시 계산해 보겠습니다. 하나바나 플라워스까지 1.2킬로미터이고, 도보로 약 5분 정도 걸
   102.45s  <ret> 발화 (turn15 첫 프레임)
   102.45s  user  발화 끝
   103.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.83s]: Distance: 1.2 kilometers. Estimated time: 5 minutes. Route type: walki
   109.30s  ⚡지연 SPAN 주입(선제발표 직전): Specialization: Orchid arrangements and seasonal bouquets. Price range
   109.77s  agent 발화 시작: <ret> 모시: 하나바나 플라워스에 대해서는… 하나바나 플라워스는 난초와 계절별 꽃다발을 전문으로 취급하며
   109.77s  agent 발화 끝
   120.74s  agent 발화 끝
