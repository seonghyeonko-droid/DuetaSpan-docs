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

# EXAMINER(FDB-v2) 단계: S1 파리 에펠탑의 좌표를 알려줄 수 있을까요? | S2 네, 예약해 주세요. | S3 이백오십유로라고요? 좀 비싸네요. 다른 호텔은 어때요? | S4 …혹시 에펠탑 근처에 기념품 가게도 있나요?

     0.00s  user  발화 시작: 파리 에펠탑의 좌표를 알려줄 수 있을까요?
     2.94s  <ret> 발화 (turn1 첫 프레임)
     3.18s  agent 발화 시작: <ret> 에펠탑의 좌표는 위도 사십팔 점 팔 오 팔 사, 경도 이 점 이 구 사 오입니다. 혹시 다른 장소
     3.24s  user  발화 끝
     4.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: [48.8584, 2.2945]
    12.22s  agent 발화 끝
    12.81s  user  발화 시작: 음, 로마 콜로세움의 좌표도 알려주세요.
    16.00s  <ret> 발화 (turn3 첫 프레임)
    16.18s  user  발화 끝
    16.32s  agent 발화 시작: <ret> 로마 콜로세움의 좌표는 위도 사십일 점 팔 구 영 이, 경도 십이 점 사 구 이 이입니다. 두 곳
    18.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: [41.8902, 12.4922]
    23.96s  agent 발화 끝
    24.86s  user  발화 시작: 네, 감사합니다. 그런데 에펠탑 근처에 괜찮은 레스토랑이 있을까요?
    29.12s  <ret> 발화 (turn5 첫 프레임)
    29.52s  agent 발화 시작: <ret> 에펠탑 근처에는 르 쥘 베르느, 오십팔 투르 에펠, 레 옴브르 같은 레스토랑들이 있습니다.
    29.81s  user  발화 끝
    31.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: ["Le Jules Verne", "58 Tour Eiffel", "Les Ombres"]
    33.87s  user  발화 시작: 와.
    34.60s  user  발화 끝
    35.54s  agent 발화 끝
    35.56s  agent 발화 시작: 르 쥘 베르느는 에펠탑 안에 있는 고급 레스토랑이고, 오십팔 투르 에펠은 전망을 즐길 수 있는 곳입니다. 레
    45.43s  agent 발화 끝
    45.78s  user  발화 시작: 르 쥘 베르느의 예약 상황을 확인해 줄 수 있을까요?
    49.99s  user  발화 끝
    50.02s  <ret> 발화 (turn9 첫 프레임)
    50.34s  agent 발화 시작: <ret> 르 쥘 베르느에 오늘 저녁 여덟시에 두 분 자리가 있습니다. 예약해 드릴까요?
    52.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: ["available at 8:00 PM"]
    53.10s  user  발화 시작: 네.
    53.74s  user  발화 끝
    55.34s  agent 발화 끝
    55.69s  user  발화 시작: 네, 예약해 주세요.
    56.89s  <ret> 발화 (turn12 첫 프레임)
    57.05s  agent 발화 시작: <ret> 네, 르 쥘 베르느에 오늘 저녁 여덟시에 두 분 자리로 예약이 완료되었습니다. 확인 번호는 칠 팔
    57.12s  user  발화 끝
    57.85s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.69s]: ["confirmation number: 789456"]
    64.64s  user  발화 시작: 확인 번호를 다시 한번 말씀해 주시겠어요?
    64.74s  agent 발화 끝
    66.98s  agent 발화 시작: 확인 번호는 칠 팔 구 사 오 육입니다. 혹시 예약 정보를 변경하고 싶으신가요?
    67.17s  user  발화 끝
    72.63s  agent 발화 끝
    72.95s  user  발화 시작: 아니요, 괜찮아요. 그런데 콜로세움 근처 호텔을 추천해 줄 수 있을까요?
    77.51s  <ret> 발화 (turn16 첫 프레임)
    77.67s  agent 발화 시작: <ret> 콜로세움 근처에는 호텔 아르테미데, 더 하이브 호텔, 호텔 카포 다프리카가 있습니다.
    77.76s  user  발화 끝
    79.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: ["Hotel Artemide", "The Hive Hotel", "Hotel Capo d'Africa"]
    84.39s  agent 발화 끝
    84.42s  user  발화 시작: 호텔 아르테미데의 가격이 얼마인가요?
    86.60s  <ret> 발화 (turn18 첫 프레임)
    87.00s  agent 발화 시작: <ret> 호텔 아르테미데의 내일 밤 숙박 요금은 이백오십유로입니다.
    87.01s  user  발화 끝
    87.80s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.02s]: ["€250 per night"]}
    91.02s  agent 발화 끝
    91.07s  user  발화 시작: 이백오십유로라고요? 좀 비싸네요. 다른 호텔은 어때요?
    95.31s  agent 발화 시작: 더 하이브 호텔은 어떠신가요? 조금 더 저렴한 편입니다.
    95.47s  user  발화 끝
    99.20s  agent 발화 끝
    99.82s  user  발화 시작: 더 하이브 호텔의 가격은 얼마인가요?
   102.34s  <ret> 발화 (turn22 첫 프레임)
   102.66s  agent 발화 시작: <ret> 더 하이브 호텔의 내일 밤 숙박 요금은 백팔십유로입니다.
   102.78s  user  발화 끝
   104.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: ["€180 per night"]}
   106.04s  agent 발화 끝
   107.16s  user  발화 시작: 백팔십유로면 괜찮네요. 더 하이브 호텔을 예약해 주세요.
   110.84s  <ret> 발화 (turn24 첫 프레임)
   111.08s  agent 발화 시작: <ret> 더 하이브 호텔에 내일 밤 일인실로 예약이 완료되었습니다. 확인 번호는 일 이 삼 칠 팔 구입니다
   111.19s  user  발화 끝
   112.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: ["confirmation number: 123789"]}
   117.91s  user  발화 시작: 확인 번호는 일 이 삼 칠 팔 구군요. 그런데 에펠탑 레스토랑 예약 시간 변경이 가능할까요?
   118.17s  agent 발화 끝
   124.67s  user  발화 끝
   124.76s  agent 발화 시작: 예약 시간 변경을 원하시는군요. 변경 가능한 시간을 확인해 보겠습니다—
   129.00s  user  발화 시작: …혹시 에펠탑 근처에 기념품 가게도 있나요?
   129.66s  agent 발화 끝
   132.17s  agent 발화 시작: 에펠탑 근처에는 기념품 가게가 많이 있습니다. 샹 드 마르스 공원 주변에 특히 많아요.
   132.28s  user  발화 끝
   136.08s  user  발화 시작: 예.
   136.67s  user  발화 끝
   137.31s  agent 발화 끝
   137.91s  user  발화 시작: 샹 드 마르스 공원에 가면 기념품을 살 수 있군요. 알겠습니다.
   141.96s  agent 발화 시작: 네, 다양한 기념품을 구경하실 수 있을 거예요.
   142.07s  user  발화 끝
   144.07s  user  발화 시작: 네.
   144.62s  user  발화 끝
   144.78s  agent 발화 끝
   144.93s  agent 발화 시작: 샹 드 마르스 공원에는 에펠탑을 배경으로 사진을 찍기 좋은 장소도 많습니다.
   150.06s  agent 발화 끝
   150.12s  user  발화 시작: 좋은 정보 감사합니다. 즐거운 하루 보내세요.
   153.06s  agent 발화 시작: 네, 저도 덕분에 즐거웠습니다. 좋은 하루 보내세요.
   153.08s  user  발화 끝
   156.38s  agent 발화 끝
