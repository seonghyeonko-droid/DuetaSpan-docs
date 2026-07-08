# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 주니 카페 가격대는 어떻게 돼요?
     1.66s  <ret> 발화 (turn1 첫 프레임)
     2.06s  agent 발화 시작: <ret> 네, 빠르게 가격 정보를 확인해 볼게요. 주니 카페는 1인당 이십 달러에서 삼십 달러 사이로, 가
     2.21s  user  발화 끝
     3.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (tool result) Zuni Cafe's price range is dollar signs two to three.
     9.88s  agent 발화 끝
     9.96s  user  발화 시작: 알겠습니다, 좋네요. 혹시 지금 영업하고 있나요?
    12.50s  <ret> 발화 (turn3 첫 프레임)
    12.82s  agent 발화 시작: <ret> 네, 영업시간을 확인해 드릴 수 있어요. 주니 카페는 오늘 저녁 열 시까지 영업하고 있습니다.
    13.01s  user  발화 끝
    14.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: (tool result) Zuni Cafe is currently open until ten PM.
    19.26s  user  발화 시작: 잘 됐네요. 혹시 예약도 가능한가요?
    19.31s  agent 발화 끝
    21.58s  agent 발화 시작: 예약 가능 여부를 확인해 드리는 건—
    21.61s  user  발화 끝
    23.12s  user  발화 시작: 야외 좌석도 있나요?
    23.89s  agent 발화 끝
    24.43s  agent 발화 시작: 네, 주니 카페는 야외 좌석도 마련되어 있습니다.
    24.55s  user  발화 끝
    27.99s  agent 발화 끝
    28.76s  user  발화 시작: 좋아요. 그럼, 두 명으로 저녁 일곱 시 반에 예약해 주세요.
    32.22s  <ret> 발화 (turn9 첫 프레임)
    32.61s  agent 발화 시작: <ret> 예약해 드리겠습니다. 주니 카페에 두 명으로 일곱 시 반에 예약이 확정되었습니다.
    32.65s  user  발화 끝
    34.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.71s]: (tool result) Reservation confirmed for two people at Zuni Cafe at sev
    37.80s  agent 발화 끝
    38.59s  user  발화 시작: 정말 다행이에요! 주소는 다시 한번 알려주시겠어요?
    41.76s  <ret> 발화 (turn11 첫 프레임)
    41.83s  agent 발화 시작: <ret> 네, 빠르게 주소 정보를 찾아 드릴게요. 주소는 샌프란시스코 마켓 스트리트 천육백오십팔 번지입니다
    41.92s  user  발화 끝
    43.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.66s]: (tool result) Zuni Cafe is located at 1658 Market Street, San Francisc
    48.83s  agent 발화 끝
    49.32s  user  발화 시작: 주차는 어디에 할 수 있나요?
    50.63s  <ret> 발화 (turn13 첫 프레임)
    50.95s  agent 발화 시작: <ret> 카페 주변 주차 옵션을 알아볼게요. 도보로 가까운 곳에 있는 피프스 스트리트 주차장에 유료 주차장
    51.02s  user  발화 끝
    52.55s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.48s]: (tool result) There is paid parking available at the Fifth Street Gara
    58.32s  user  발화 시작: 거기 주차는 시간당 얼마예요?
    58.41s  agent 발화 끝
    60.10s  <ret> 발화 (turn15 첫 프레임)
    60.25s  agent 발화 시작: <ret> 시간당 주차 요금을 확인해 드릴 수 있어요. 피프스 스트리트 주차장은 시간당 팔 달러입니다.
    60.43s  user  발화 끝
    62.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: (tool result) The Fifth Street Garage charges eight dollars per hour.
    66.15s  user  발화 시작: 음, 알겠습니다. 대중교통은 어때요?
    66.27s  agent 발화 끝
    68.14s  <ret> 발화 (turn17 첫 프레임)
    68.29s  agent 발화 시작: <ret> 주변 대중교통 옵션을 확인해 볼게요. 마켓 스트리트 역이 매우 가깝고, 여러 개의 무니 노선이 지
    68.55s  user  발화 끝
    69.74s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.80s]: (tool result) The Market Street station is one block away, with multip
    75.42s  agent 발화 끝
    75.44s  user  발화 시작: 어떤 무니 노선이 지나가나요?
    77.05s  <ret> 발화 (turn19 첫 프레임)
    77.20s  agent 발화 시작: <ret> 네, 해당 역을 운행하는 노선을 정확히 알려 드릴게요. 케이, 티, 엘, 엠, 엔 노선이 모두 마
    77.33s  user  발화 끝
    77.93s  ⚡SPAN 주입 [d'=0.88s / d_lead=4.22s]: (tool result) Muni lines K, T, L, M, and N all stop at Market Street s
    85.22s  agent 발화 끝
    86.03s  user  발화 시작: 역에서 카페까지 걸어서 얼마나 걸려요?
    87.85s  <ret> 발화 (turn21 첫 프레임)
    88.17s  agent 발화 시작: <ret> 네, 역에서 카페까지의 도보 거리를 찾아 드릴게요. 역에서 카페까지는 약 삼 분 정도 걸립니다.
    88.43s  user  발화 끝
    89.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: (tool result) The walk from Market Street station to Zuni Cafe is appr
    94.45s  user  발화 시작: 알겠습니다. 저녁 일곱 시 십오분에 출발하라고 알림을 설정해 줄 수 있나요?
    94.66s  agent 발화 끝
    98.62s  <ret> 발화 (turn23 첫 프레임)
    98.77s  agent 발화 시작: <ret> 출발 알림을 설정해 드릴게요. 예약 시간에 맞춰 저녁 일곱 시 십오분에 출발하라는 알림이 설정되었
    98.85s  user  발화 끝
   100.06s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.77s]: (tool result) Reminder set for seven fifteen PM: Leave for Zuni Cafe.
   105.92s  user  발화 시작: 정말 감사합니다!
   106.18s  agent 발화 끝
   107.33s  agent 발화 시작: 도움이 되어 기쁩니다. 주니 카페에서 즐거운 시간 보내시길 바랍니다.
   107.34s  user  발화 끝
   112.15s  agent 발화 끝
