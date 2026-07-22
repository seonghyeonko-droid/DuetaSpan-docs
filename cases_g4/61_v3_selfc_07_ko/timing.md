# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 보이아 씨. 저 그랜드뷰 매너라는 집을 구경하고  | S2 거기서 식사하고 싶은데, 당일 오후 여섯시에 두명 예약이 가능 | S3 다행이네요. 혹시 그 집으로 가는 길에. | S4 정말 다행이네요. 이제 준비가 다 된 것 같아요.

     0.00s  user  발화 시작: 안녕하세요, 보이아 씨. 저 그랜드뷰 매너라는 집을 구경하고 싶어서요. 칠월 십이일— 아, 아니요, 칠월 십
    10.26s  <ret> 발화 (turn1 첫 프레임)
    10.59s  agent 발화 시작: <ret> 확인해 보니 칠월 십사일에 예약이 잘 완료되었습니다. 예약 번호는 에이치 오 엠 이 공 공 오 칠
    10.71s  user  발화 끝
    11.36s  ⚡SPAN 주입 [d'=1.09s / d_lead=8.29s]: (tool result) Grandview Manor, 2026-07-14, HOM2-005735, confirmed
    16.78s  user  발화 시작: 네네.
    17.42s  user  발화 끝
    18.89s  agent 발화 끝
    18.97s  user  발화 시작: 감사합니다. 그런데 그 집 근처에 괜찮은 이탈리안 레스토랑이 있을까요?
    23.52s  <ret> 발화 (turn4 첫 프레임)
    23.64s  agent 발화 시작: <ret> 그랜드뷰 매너에서 영 점 오킬로미터 거리에 있는 벨라 이탈리아라는 곳이 있어요. 별점 사 점 오점
    23.74s  user  발화 끝
    24.59s  ⚡SPAN 주입 [d'=1.08s / d_lead=9.70s]: (tool result) Bella Italia, 4.5 stars, moderate, 0.5km from Grandview 
    27.88s  user  발화 시작: 그렇죠.
    28.51s  user  발화 끝
    33.00s  user  발화 시작: 거기서 식사하고 싶은데, 당일 오후 여섯시에 두명 예약이 가능할까요?
    33.34s  agent 발화 끝
    34.97s  agent 발화 시작: 네.
    35.60s  agent 발화 끝
    37.14s  <ret> 발화 (turn8 첫 프레임)
    37.75s  agent 발화 시작: <ret> 네, 칠월 십사일 오후 여섯시에 두 분 예약 완료되었습니다.
    37.96s  user  발화 끝
    38.12s  ⚡SPAN 주입 [d'=0.97s / d_lead=4.44s]: (tool result) Bella Italia, 2026-07-14, 18:00, 2 guests, confirmed
    40.05s  user  발화 시작: 네.
    40.87s  user  발화 끝
    42.19s  agent 발화 끝
    42.96s  user  발화 시작: 고마워요. 아, 그런데 그날 날씨가 어떨지도 궁금해요.
    46.54s  <ret> 발화 (turn11 첫 프레임)
    46.96s  agent 발화 시작: <ret> 그날은 맑을 예정이고, 기온은 이십팔도 정도로 아주 쾌적할 것 같습니다.
    47.03s  user  발화 끝
    47.65s  ⚡SPAN 주입 [d'=1.11s / d_lead=4.86s]: (tool result) Grandview Manor, 2026-07-14, Sunny, 28 degrees Celsius
    51.82s  agent 발화 끝
    52.04s  user  발화 시작: 다행이네요. 혹시 그 집으로 가는 길에.
    55.05s  agent 발화 시작: 네, 이동 경로를 확인해 드리면—
    55.14s  user  발화 끝
    56.34s  user  발화 시작: 예.
    56.98s  user  발화 끝
    57.12s  agent 발화 시작: 집까지 가시는 가장 빠른 길을 찾아서—
    57.27s  agent 발화 끝
    59.11s  user  발화 시작: 아, 생각해보니 거기 주차 공간이 충분한지 먼저 알아봐야겠어요.
    59.76s  agent 발화 끝
    61.11s  agent 발화 시작: 네네.
    61.88s  agent 발화 끝
    62.95s  <ret> 발화 (turn18 첫 프레임)
    63.09s  agent 발화 시작: <ret> [happy] 중요한 점을 놓칠 뻔했네요. 주차 정보를 확인해 보겠습니다. 확인해 보니 방문객을 
    63.17s  user  발화 끝
    64.47s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.73s]: (tool result) Grandview Manor, parking available, free for visitors
    68.30s  user  발화 시작: 네.
    69.02s  user  발화 끝
    70.56s  agent 발화 끝
    70.99s  user  발화 시작: 정말 다행이네요. 이제 준비가 다 된 것 같아요.
    74.01s  agent 발화 시작: [happy] 네, 모든 일정이 완벽하게 잡혔네요. 기분 좋은 방문과 식사가 되시길 바랍니다.
    74.03s  user  발화 끝
    80.50s  agent 발화 끝
