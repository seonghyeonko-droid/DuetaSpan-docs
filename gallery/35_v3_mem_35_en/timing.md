# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Felix",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-29",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Felix, I'm Geaia. It's lovely to meet you. I'm here to of
     7.66s  user  발화 시작: Um, I'm planning a trip to New Zealand in August, and I'm tr
     7.66s  agent 발화 끝
    14.31s  <ret> 발화 (turn2 첫 프레임)
    14.63s  agent 발화 시작: <ret> I see you’re planning a trip to New Zealand in August,
    14.63s  user  발화 끝
    15.00s  ⚡SPAN 주입 [d'=0.69s / d_lead=4.88s]: [2026-03-29] User is planning a trip to New Zealand in August.
    19.51s  user  발화 시작: Mhm.
    19.51s  agent 발화 끝
    19.86s  user  발화 시작: Oh, that's right, I told you about that! Do you know any goo
    19.86s  user  발화 끝
    25.69s  <ret> 발화 (turn5 첫 프레임)
    25.78s  agent 발화 시작: <ret> Queenstown is famous for rock climbing, especially at 
    25.78s  user  발화 끝
    25.79s  ⚡SPAN 주입 [d'=0.95s / d_lead=6.27s]: (tool result) Queenstown is known as the adventure capital of New Zeal
    32.05s  agent 발화 끝
