# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 데이터 보고서를 '긴급 경고'로 업데이트해 주시겠어요?
     3.09s  <ret> 발화 (turn1 첫 프레임)
     3.25s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.49s]: (tool result) The page updated successfully. The heading now reads “Cr
     3.68s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요. 데이터 보고서 제목이 “긴급 경고”로 업데이트되었습니다.
     3.84s  user  발화 끝
     8.53s  agent 발화 끝
     8.98s  user  발화 시작: 좋아요. 그럼 리스본에 있는 호텔 좀 찾아주시겠어요?
    12.88s  <ret> 발화 (turn3 첫 프레임)
    13.14s  user  발화 끝
    13.21s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.02s]: (tool result) Hotel Lisboa Plaza offers rooms from 112 euros per night
    13.47s  agent 발화 시작: <ret> 물론입니다. 호텔 리스보아 플라자는 일박에 112유로부터 객실을 이용하실 수 있습니다.
    18.46s  user  발화 시작: 괜찮은 것 같네요. 지금 리스본 날씨는 어떤가요?
    18.56s  agent 발화 끝
    21.62s  <ret> 발화 (turn5 첫 프레임)
    21.98s  user  발화 끝
    22.21s  agent 발화 시작: <ret> 잠시만 확인해 볼게요. 현재 리스본의 기온은 섭씨 24도로 화창합니다.
    22.43s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.64s]: (tool result) It is currently 24 degrees Celsius and sunny in Lisbon.
    27.12s  agent 발화 끝
    27.40s  user  발화 시작: 음, 섭씨 24도… 그럼 거기서 2박 예약해 주시겠어요?
    31.48s  <ret> 발화 (turn7 첫 프레임)
    32.07s  agent 발화 시작: <ret> 알겠습니다. 호텔 리스보아 플라자 2박 예약이 확정되었고, 비용은 224유로입니다.
    32.30s  user  발화 끝
    32.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.23s]: (tool result) Booking confirmed. Hotel Lisboa Plaza, two nights, 224 e
    37.21s  user  발화 시작: 완벽하네요. 근처에 괜찮은 식당도 찾아주시겠어요?
    37.62s  agent 발화 끝
    40.24s  <ret> 발화 (turn9 첫 프레임)
    40.83s  agent 발화 시작: <ret> 그렇게 해 드릴 수 있습니다. 포르투갈 해산물 식당인 세르베자리아 하미로는 호텔에서 0.8킬로미터
    41.05s  user  발화 끝
    41.24s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.42s]: (tool result) Cervejaria Ramiro is 0.8 kilometers away and serves Port
    47.59s  agent 발화 끝
    48.40s  user  발화 시작: 해산물 정말 좋겠네요. 평점이 높은 곳인가요?
    51.91s  agent 발화 시작: 많은 분들이 리스본 최고의 해산물 식당 중 하나라고 생각합니다.
    51.96s  user  발화 끝
    56.02s  agent 발화 끝
