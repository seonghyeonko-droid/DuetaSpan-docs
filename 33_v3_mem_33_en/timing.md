# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Kim, I'm Ful. It's lovely to connect with you today.
     3.84s  agent 발화 끝
     4.55s  user  발화 시작: Um, what time is it right now in Paris?
     7.05s  <ret> 발화 (turn2 첫 프레임)
     7.13s  user  발화 끝
     7.21s  agent 발화 시작: <ret> It is currently 3:17 PM in Paris. A perfect time for a
     7.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Europe/Paris r
    13.80s  agent 발화 끝
    14.17s  user  발화 시작: Oh, that’s good to know. I was just thinking about my trip t
    18.76s  <ret> 발화 (turn4 첫 프레임)
    18.94s  user  발화 끝
    19.00s  agent 발화 시작: <ret> Yes, you mentioned planning a trip to Lisbon this Octo
    19.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: [2026-04-06] User is planning a trip to Lisbon in October.
    25.01s  agent 발화 끝
