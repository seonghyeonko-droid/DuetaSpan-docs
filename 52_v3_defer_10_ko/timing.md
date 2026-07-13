# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "현정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울에서 갈 만한 맛집 좀 찾아줘. | S2 그… 혹시 내일 날씨는 어때? | S3 해운대 쪽으로 찾아줘. 가격은 조금 비싸도 괜찮아. | S4 감천문화마을… 거기가 사진 찍기 좋다고 들었는데.

     0.00s  user  발화 시작: 이번 주 토요일에 서울에서 갈 만한 맛집 좀 찾아줘.
     4.29s  agent 발화 시작: 네네.
     4.29s  user  발화 끝
     4.68s  <ret> 발화 (turn2 첫 프레임)
     4.76s  agent 발화 시작: <ret> 강남이나 홍대 쪽이 특히 유명한 곳이 많아요.
     4.76s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.33s]: 서울에는 다양한 종류의 맛집이 있으며, 특히 강남과 홍대 지역에 많은 선택지가 있습니다.
     4.76s  agent 발화 끝
     8.10s  user  발화 시작: 홍대로 하자. 분위기 좋은 이탈리안 레스토랑으로.
     8.10s  agent 발화 끝
    10.56s  <ret> 발화 (turn4 첫 프레임)
    10.96s  agent 발화 시작: <ret> 홍대 이탈리안 레스토랑, 라라피아가 젊은 층에게 인기가 많다고 해요.
    10.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.29s]: 홍대에는 분위기 좋은 이탈리안 레스토랑이 많이 있으며, '라라피아'는 특히 젊은 층에게 인기가 높습니다.
    10.96s  user  발화 끝
    15.24s  user  발화 시작: 라라피아, 예약 가능해?
    15.24s  agent 발화 끝
    16.35s  <ret> 발화 (turn6 첫 프레임)
    16.67s  agent 발화 시작: <ret> 네, 라라피아에 토요일 저녁 일곱 시에 두 분으로 예약이 완료되었습니다. 확인 번호는 엑스 피 칠
    16.67s  ⚡SPAN 주입 [d'=1.36s / d_lead=8.57s]: (tool result) {"restaurant name": "라라피아", "date": "2026-07-11", "time"
    16.67s  user  발화 끝
    25.24s  user  발화 시작: 음.
    25.24s  agent 발화 끝
    25.72s  user  발화 시작: 알았어. 고마워.
    25.72s  user  발화 끝
    26.67s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    26.67s  user  발화 끝
    28.58s  user  발화 시작: 그… 혹시 내일 날씨는 어때?
    28.58s  agent 발화 끝
    30.56s  <ret> 발화 (turn11 첫 프레임)
    30.96s  agent 발화 시작: <ret> 내일 서울 날씨는 맑고, 최고 기온은 이십팔도, 습도는 육십퍼센트 정도 예상됩니다.
    30.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.24s]: 내일 서울의 날씨는 맑고 최고 기온은 28도이며, 습도는 60%입니다.
    30.96s  user  발화 끝
    36.20s  user  발화 시작: 음…
    36.20s  agent 발화 끝
    36.68s  agent 발화 시작: 네, 야외 활동하기 좋은 날씨가 될 것 같아요. 자외선 지수가 높으니 선크림은 꼭 챙기세요.
    36.68s  user  발화 끝
    43.34s  user  발화 시작: 아, 맞아. 선크림. 챙겨야지.
    43.34s  agent 발화 끝
    45.25s  agent 발화 시작: 네, 잊지 마세요. 혹시 다른 계획 있으신가요?
    45.25s  user  발화 끝
    48.58s  user  발화 시작: 아.
    48.58s  agent 발화 끝
    49.06s  user  발화 시작: 이번 주말에 부산 갈 건데, 부산에서 괜찮은 호텔 좀 찾아줄 수 있어?
    49.06s  user  발화 끝
    54.62s  <ret> 발화 (turn18 첫 프레임)
    54.78s  agent 발화 시작: <ret> 이번 주말 부산 여행 계획이시군요. 해운대 지역에 괜찮은 호텔이 많아요.
    54.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.76s]: 부산에는 다양한 가격대의 호텔이 있으며, 해운대 지역에 많은 고급 호텔이 있습니다.
    54.78s  user  발화 끝
    59.54s  user  발화 시작: 응.
    59.54s  agent 발화 끝
    60.01s  user  발화 시작: 해운대 쪽으로 찾아줘. 가격은 조금 비싸도 괜찮아.
    60.01s  user  발화 끝
    63.03s  <ret> 발화 (turn21 첫 프레임)
    63.35s  agent 발화 시작: <ret> 해운대 파크 하얏트 부산이 시설도 좋고, 바다 전망도 아름답다고 해요.
    63.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.76s]: 해운대 파크 하얏트 부산은 고급스러운 시설과 아름다운 해운대 바다 전망을 제공합니다.
    63.35s  user  발화 끝
    68.11s  user  발화 시작: 파크 하얏트 부산, 예약 좀 해줘. 이박 삼일로.
    68.11s  agent 발화 끝
    71.92s  agent 발화 시작: 맞아요.
    71.92s  user  발화 끝
    72.24s  <ret> 발화 (turn24 첫 프레임)
    72.40s  agent 발화 시작: <ret> 네, 해운대 파크 하얏트 부산에 칠월 십이일부터 십사일까지 이박 삼일로 딜럭스 오션뷰 객실을 예약
    72.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: (tool result) {"hotel name": "해운대 파크 하얏트 부산", "check in date": "2026-0
    72.40s  agent 발화 끝
    82.88s  user  발화 시작: 좋아. 그럼 부산에서 갈…
    82.88s  agent 발화 끝
    84.78s  user  발화 시작: …만한 관광지도 추천해 줘.
    84.78s  user  발화 끝
    86.37s  <ret> 발화 (turn27 첫 프레임)
    86.69s  agent 발화 시작: <ret> 부산에는 해운대 해수욕장이나 감천문화마을, 태종대 같은 곳이 유명해요.
    86.69s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.81s]: 부산에는 해운대 해수욕장, 감천문화마을, 태종대 등 다양한 관광 명소가 있습니다.
    86.69s  user  발화 끝
    90.50s  user  발화 시작: 감천문화마을… 거기가 사진 찍기 좋다고 들었는데.
    90.50s  agent 발화 끝
    93.36s  agent 발화 시작: 네, 알록달록한 집들이 예뻐서 사진 찍기 좋은 곳이에요.
    93.36s  user  발화 끝
    97.17s  user  발화 시작: 좋아. 부산 갈 준비 해야겠다.
    97.17s  agent 발화 끝
    99.55s  agent 발화 시작: 네, 즐거운 부산 여행 되세요.
    99.55s  user  발화 끝
   101.93s  user  발화 시작: 고마워.
   101.93s  agent 발화 끝
   102.41s  agent 발화 시작: 천만에요. 언제나 편하게 말씀하세요.
   102.41s  user  발화 끝
   104.31s  agent 발화 끝
