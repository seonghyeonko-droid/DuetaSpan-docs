# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "서영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-09",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-10-31",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 가나에서 제일 인구가 많은 지역이 어디야?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.12s  agent 발화 시작: <ret> 가나에서 가장 인구가 많은 지역은 아샨티 지역이라고 해요. 새로운 곳에 정착하는 건 때로는 용기를
     0.12s  ⚡SPAN 주입 [d'=0.35s / d_lead=0.35s]: Ashanti is the region with the highest population in Ghana.
     0.12s  user  발화 끝
     0.48s  user  발화 시작: 아샨티가 어디에 있는지 좀 더 자세히 알려줄 수 있어?
     0.48s  agent 발화 끝
     0.51s  <ret> 발화 (turn3 첫 프레임)
     0.67s  agent 발화 시작: <ret> 아샨티 지역은 가나 중남부에 위치하고 있고, 열대 우림으로 유명하답니다. 마음속 깊은 곳에서 길을
     0.67s  ⚡SPAN 주입 [d'=0.33s / d_lead=0.33s]: (tool result) The Ashanti Region is located in south-central Ghana and
     0.67s  user  발화 끝
     1.00s  agent 발화 끝
