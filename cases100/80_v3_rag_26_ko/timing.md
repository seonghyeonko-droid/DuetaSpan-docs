# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "주완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "trip",
#       "text": "User is planning a trip to Hokkaido in February."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "dislike",
#       "text": "User can't stand natto."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 24°C."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "emergency",
#       "text": "User's emergency contact is Minjun."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "plant",
#       "text": "User is growing a fiddle-leaf fig at home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-06-05",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-05-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-03-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 로라야, 혹시 'Someone Like You' 부른 사람 알아? 아, 오늘 날씨도 궁금하다.
     4.77s  <ret> 발화 (turn1 첫 프레임)
     5.06s  agent 발화 시작: <ret> 네, 물론이죠. 노래에 대해 먼저 말씀드릴게요.
     5.08s  user  발화 끝
     5.50s  ⚡SPAN 주입 [d'=0.73s / d_lead=4.34s]: Adele released "Someone Like You" on January 24, 2011, as the second s
     8.91s  <ret> 발화 (turn2 첫 프레임)
     9.35s  agent 발화 시작: <ret> 아델이 이천십일년 일월 이십사일에 그 노래를 발표했어요. 앨범 '이십일'의 두 번째 싱글이죠. 지
     9.40s  agent 발화 끝
    10.41s  ⚡SPAN 주입 [d'=1.50s / d_lead=11.59s]: (tool result) Current conditions in Seoul are partly cloudy with a tem
    20.66s  user  발화 시작: 아, 아델이었구나! 이천십일년이라니, 엄청 오래됐네. 혹시 다른 노래도 추천해 줄 수 있어?
    20.93s  agent 발화 끝
    24.60s  agent 발화 시작: 네.
    24.95s  agent 발화 끝
    26.06s  <ret> 발화 (turn5 첫 프레임)
    26.50s  agent 발화 시작: <ret> 킴브라가 고티에와 함께 'Somebody That I Used to Know'를 이천십일년에 발표
    26.65s  user  발화 끝
    27.53s  ⚡SPAN 주입 [d'=1.47s / d_lead=5.69s]: Kimbra collaborated with Gotye on "Somebody That I Used to Know", rele
    32.19s  agent 발화 끝
    34.94s  user  발화 시작: 킴브라! 아, 맞다, 그 노래도 좋았지. 뭔가 기억이 나네. 고마워, 로라야.
    40.04s  user  발화 끝
