# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Jamie",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "home",
#       "text": "User's home address is 361 Oak Avenue."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, *프라이데이 나이트 라이츠*에서 퍼미안 하이 스쿨이 누구랑 경기했는지 항상 까먹어서요. 누구랑 
     9.09s  <ret> 발화 (turn1 첫 프레임)
     9.49s  agent 발화 시작: <ret> 음, 퍼미안 하이가 천구백팔십팔년 챔피언십 경기에서 댈러스 카터 카우보이스랑 붙었어. *프라이데이
     9.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.67s]: Permian High School played against the Dallas Carter Cowboys in the 19
     9.50s  user  발화 끝
    22.16s  agent 발화 끝
    22.37s  user  발화 시작: 댈러스 카터군요. 뭔가… 엄청 치열했을 것 같아요. 지금 댈러스 날씨는 어떤가요?
    28.71s  <ret> 발화 (turn3 첫 프레임)
    28.95s  agent 발화 시작: <ret> 글쎄, 지금 댈러스는 이십구 점 사도이고 습도는 육십팔 퍼센트야. 바람은 남쪽에서 시속 팔 킬로미
    28.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.46s]: (tool result) Current conditions in Dallas, Texas are 29.4°C, humidity
    29.09s  user  발화 끝
    33.01s  user  발화 시작: 네네.
    33.65s  user  발화 끝
    40.41s  agent 발화 끝
    40.46s  user  발화 시작: 와, 진짜 덥네요! 제 여동생이 근처에 살아서 방문할까 생각 중이에요.
    45.27s  agent 발화 시작: 잘 됐다! 사랑하는 사람들과 연락하는 건 정말 중요해. 특히 인생의 변화를 겪을 때 응원을 받는 게 좋잖아.
    45.46s  user  발화 끝
    54.96s  agent 발화 끝
