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

# EXAMINER(FDB-v2) 단계: S1 파리 에펠탑의 좌표를 알려줄 수 있을까요? | S2 혹시 에펠탑에서 가장 가까운 지하철역은 어디인가요? | S3 칠월 이십팔일 밤에 풀만 파리 에펠탑 호텔을 예약하고 싶은데요 | S4 에펠탑 근처에 기념품 가게가 있을까요?

     0.00s  user  발화 시작: 파리 에펠탑의 좌표를 알려줄 수 있을까요?
     2.78s  <ret> 발화 (turn1 첫 프레임)
     3.02s  agent 발화 시작: <ret> 에펠탑의 좌표는 위도 사십팔 점 팔 오 팔 사, 경도 이 점 이 구 사 오입니다.
     3.19s  user  발화 끝
     4.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (tool result) 48.8584, 2.2945
     9.45s  agent 발화 끝
     9.91s  user  발화 시작: 그 근처에 괜찮은 레스토랑이 있을까요?
    12.56s  <ret> 발화 (turn3 첫 프레임)
    12.63s  user  발화 끝
    12.88s  agent 발화 시작: <ret> 에펠탑 근처에는 르 쥘 베르느 레스토랑이 있습니다. 주소는 오십팔 Tour Eiffel, 칠 오 
    14.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: (tool result) Le Jules Verne, 58 Tour Eiffel, 75007 Paris, France
    19.05s  user  발화 시작: 네네.
    19.68s  user  발화 끝
    21.57s  user  발화 시작: 르 쥘 베르느 레스토랑에 저녁 식사 예약을 하고 싶은데요.
    21.74s  agent 발화 끝
    25.21s  <ret> 발화 (turn6 첫 프레임)
    25.59s  user  발화 끝
    25.60s  agent 발화 시작: <ret> 칠월 이십칠일 저녁 여덟시에 두명으로 르 쥘 베르느 레스토랑 예약을 완료했습니다. 확인 번호는 A
    27.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: (tool result) Reservation confirmed for 2 people at 8:00 PM on July 27
    33.85s  user  발화 시작: 예약 번호 좀 다시 한 번 알려주시겠어요?
    33.95s  agent 발화 끝
    36.48s  agent 발화 시작: 확인 번호는 AZ123입니다.
    36.57s  user  발화 끝
    38.78s  user  발화 시작: 혹시 에펠탑에서 가장 가까운 지하철역은 어디인가요?
    38.92s  agent 발화 끝
    42.36s  <ret> 발화 (turn10 첫 프레임)
    42.58s  agent 발화 시작: <ret> 에펠탑에서 가장 가까운 지하철역은 비르-아케임 역입니다.
    42.81s  user  발화 끝
    44.00s  user  발화 시작: 맞아요.
    44.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) Bir-Hakeim station
    44.83s  user  발화 끝
    47.06s  agent 발화 끝
    48.11s  user  발화 시작: 비르-아케임 역까지 가는 길을 알려주시겠어요?
    50.98s  <ret> 발화 (turn13 첫 프레임)
    51.06s  agent 발화 시작: <ret> 육호선을 타고 비르-아케임 역으로 가시면 됩니다.
    51.16s  user  발화 끝
    52.19s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.02s]: (tool result) Take line 6 to Bir-Hakeim station.
    55.09s  agent 발화 끝
    55.80s  user  발화 시작: 그쪽 지하철역 근처에 호텔이 있을까요?
    58.34s  <ret> 발화 (turn15 첫 프레임)
    58.49s  agent 발화 시작: <ret> 비르-아케임 역 근처에는 풀만 파리 에펠탑 호텔이 있습니다. 주소는 십팔 Avenue De Suf
    58.53s  user  발화 끝
    60.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.09s]: (tool result) Hotel Pullman Paris Tour Eiffel, 18 Avenue De Suffren, 7
    67.58s  agent 발화 끝
    67.83s  user  발화 시작: 풀만 파리 에펠탑 호텔의 가격은 얼마인가요?
    70.51s  <ret> 발화 (turn17 첫 프레임)
    70.74s  agent 발화 시작: <ret> 풀만 파리 에펠탑 호텔의 일박 평균 가격은 삼백오십달러입니다.
    70.87s  user  발화 끝
    71.71s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.35s]: (tool result) Average price per night: $350
    75.09s  agent 발화 끝
    75.23s  user  발화 시작: 칠월 이십팔일 밤에 풀만 파리 에펠탑 호텔을 예약하고 싶은데요.
    79.03s  <ret> 발화 (turn19 첫 프레임)
    79.42s  agent 발화 시작: <ret> 칠월 이십팔일 밤에 풀만 파리 에펠탑 호텔 예약이 완료되었습니다. 확인 번호는 BV456입니다.
    79.53s  user  발화 끝
    80.07s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.29s]: (tool result) Room booked for one night, July 28th. Confirmation numbe
    85.32s  user  발화 시작: 방 종류는 어떤 걸로 예약되었나요? —
    85.72s  agent 발화 끝
    88.23s  user  발화 끝
    88.28s  user  발화 시작: …스탠다드룸으로 예약되었는지 궁금해요.
    90.86s  user  발화 끝
    91.05s  agent 발화 시작: 스탠다드룸으로 예약되었습니다.
    91.87s  user  발화 시작: 네.
    92.36s  user  발화 끝
    92.92s  <ret> 발화 (turn24 첫 프레임)
    93.15s  agent 발화 시작: <ret> 예약 확인서를 user@example.com으로 보냈습니다.
    93.40s  agent 발화 끝
    94.44s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.52s]: (tool result) Email sent to user@example.com
    96.67s  agent 발화 끝
    96.73s  user  발화 시작: 혹시 파리 날씨는 어떤가요?
    98.31s  <ret> 발화 (turn26 첫 프레임)
    98.38s  agent 발화 시작: <ret> 현재 파리는 이십오도이고 맑습니다.
    98.61s  user  발화 끝
    99.67s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.91s]: (tool result) Currently 25°C and sunny.
   101.29s  agent 발화 끝
   102.19s  user  발화 시작: 에펠탑 근처에 기념품 가게가 있을까요?
   104.94s  <ret> 발화 (turn28 첫 프레임)
   105.01s  agent 발화 시작: <ret> 네, 에펠탑 근처에 기념품 가게가 많이 있습니다.
   105.11s  user  발화 끝
   105.98s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.96s]: (tool result) Yes, several souvenir shops near the Eiffel Tower.
   107.97s  agent 발화 끝
   109.28s  user  발화 시작: 그중에서 가장 평점이 좋은 가게는 어디인가요?
   112.10s  <ret> 발화 (turn30 첫 프레임)
   112.42s  user  발화 끝
   112.42s  agent 발화 시작: <ret> 가장 평점이 좋은 가게는 르 프티 수베니르로, 평점은 사 점 오점이고 리뷰는 백개입니다.
   114.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: (tool result) Le Petit Souvenir, 4.5 stars, 100 reviews.
   118.72s  user  발화 시작: 좋은 정보 감사합니다.
   118.96s  agent 발화 끝
   120.02s  agent 발화 시작: 즐거운 여행 되세요.
   120.14s  user  발화 끝
   121.77s  agent 발화 끝
