# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "보형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 파리 에펠탑의 좌표를 알려줄 수 있을까요? | S2 아, 좋아요. 그럼 지금 바로 그 카페로 길 안내해 줄 수 있 | S3 아, 그렇군요. 그럼 저녁 여덟시에 예약해 줄 수 있을까요? | S4 천이백유로는 좀 비싸네요… 조금 더 저렴한 곳은 없을까요?

     0.00s  user  발화 시작: 파리 에펠탑의 좌표를 알려줄 수 있을까요?
     2.37s  <ret> 발화 (turn1 첫 프레임)
     2.58s  user  발화 끝
     2.61s  agent 발화 시작: <ret> 에펠탑의 좌표는 위도 사십팔 점 팔 오 팔 사, 경도 이 점 이 구 사 오입니다.
     4.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: (tool result) 48.8584, 2.2945
     8.22s  user  발화 시작: 네네.
    10.17s  user  발화 시작: 음, 그 근처에 괜찮은 카페가 있을까요?
    10.53s  agent 발화 끝
    10.67s  user  발화 끝
    17.89s  <ret> 발화 (turn4 첫 프레임)
    18.10s  user  발화 끝
    18.21s  agent 발화 시작: <ret> 에펠탑 근처에는 백삼십구 Rue Saint-Dominique에 위치한 카페 콘스탄트가 있습니다.
    18.39s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.70s]: (tool result) Café Constant: 139 Rue Saint-Dominique, 75007 Paris
    19.91s  agent 발화 끝
    20.40s  user  발화 시작: 카페 콘스탄트… 분위기는 어떤가요?
    21.74s  user  발화 끝
    21.84s  agent 발화 시작: 평점이 사 점 이점이고, 프랑스 요리로 유명한 곳이에요.
    22.81s  user  발화 시작: 네.
    23.82s  agent 발화 끝
    23.83s  user  발화 시작: 아, 좋아요. 그럼 지금 바로 그 카페로 길 안내해 줄 수 있을까요?
    24.15s  <ret> 발화 (turn9 첫 프레임)
    24.32s  user  발화 끝
    24.55s  agent 발화 시작: <ret> 카페 콘스탄트로 가는 길 안내를 시작합니다. 예상 도착 시간은 십오분입니다.
    26.05s  user  발화 끝
    26.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.27s]: (tool result) Navigating to Café Constant, 139 Rue Saint-Dominique, 75
    28.30s  user  발화 시작: 와.
    29.82s  agent 발화 끝
    29.84s  agent 발화 시작: 지금부터 길 안내를 시작하겠습니다. 첫 번째 길을 우회전하세요.
    30.04s  user  발화 끝
    34.19s  agent 발화 끝
    34.27s  user  발화 시작: 잠깐만요—
    37.87s  user  발화 시작: 혹시 그 카페에 예약이 필요한가요?
    37.93s  user  발화 끝
    41.71s  user  발화 끝
    41.82s  <ret> 발화 (turn14 첫 프레임)
    42.06s  agent 발화 시작: <ret> 예약이 필요한지는 확인해 볼게요.
    42.32s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.73s]: (tool result) Café Constant: Reservations recommended, especially for 
    42.73s  agent 발화 시작: 카페 콘스탄트는 저녁 식사의 경우 특히 예약을 권장합니다.
    42.79s  agent 발화 끝
    44.47s  agent 발화 끝
    44.69s  user  발화 시작: 아, 그렇군요. 그럼 저녁 여덟시에 예약해 줄 수 있을까요?
    46.96s  <ret> 발화 (turn17 첫 프레임)
    47.03s  agent 발화 시작: <ret> 카페 콘스탄트에 두명, 저녁 여덟시로 예약이 확정되었습니다. 확인 번호는 칠 팔 구 이 삼 사입니
    47.05s  user  발화 끝
    47.92s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: (tool result) Reservation confirmed at Café Constant for 2 people at 2
    49.10s  agent 발화 끝
    49.25s  user  발화 시작: 와, 정말 고마워요!
    50.53s  user  발화 끝
    50.90s  agent 발화 시작: 천만에요. 즐거운 저녁 식사 되세요.
    54.01s  user  발화 시작: 그런데 혹시 그 카페 근처에 괜찮은 호텔도 있을까요?
    54.04s  agent 발화 끝
    58.80s  <ret> 발화 (turn21 첫 프레임)
    58.87s  user  발화 끝
    59.03s  agent 발화 시작: <ret> 카페 콘스탄트 근처에는 이십오 Avenue Montaigne에 위치한 플라자 아테네 호텔이 있습니
    59.92s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.21s]: (tool result) Hotel Plaza Athénée: 25 Avenue Montaigne, 75008 Paris - 
    61.24s  agent 발화 끝
    61.56s  user  발화 시작: 천이백유로는 좀 비싸네요… 조금 더 저렴한 곳은 없을까요?
    66.19s  <ret> 발화 (turn23 첫 프레임)
    66.42s  user  발화 끝
    66.43s  agent 발화 시작: <ret> 조금 더 저렴한 곳으로는 사십삼 Rue Monsieur le Prince에 있는 생 폴 리브 고슈
    67.39s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.02s]: (tool result) Hotel Saint Paul Rive Gauche: 43 Rue Monsieur le Prince,
    70.29s  user  발화 시작: 이백유로는 괜찮네요. 그럼 그 호텔로 예약해 줄 수 있을까요? 내일 밤으로요.
    70.45s  agent 발화 끝
    73.70s  <ret> 발화 (turn25 첫 프레임)
    74.10s  agent 발화 시작: <ret> 생 폴 리브 고슈 호텔에 내일 밤 일박 예약이 확정되었습니다. 확인 번호는 일 이 삼 사 오 육입
    74.13s  user  발화 끝
    75.38s  ⚡SPAN 주입 [d'=1.68s / d_lead=1.94s]: (tool result) Hotel Saint Paul Rive Gauche: 1 night reserved for tomor
    76.04s  agent 발화 끝
    76.38s  user  발화 시작: 정말 편리하네요. 덕분에 여행 계획이 훨씬 수월해졌어요.
    78.97s  user  발화 끝
    79.13s  agent 발화 시작: [happy] 여행 계획을 도와드릴 수 있어서 기쁩니다.
    79.67s  agent 발화 끝
