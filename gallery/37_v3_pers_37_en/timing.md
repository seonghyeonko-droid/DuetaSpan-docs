# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Liam",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "home",
#       "text": "User's home address is 761 Pine Court."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Guten Tag, Liam. I’m Areliia, your wellness coach—here to he
     7.94s  user  발화 시작: Wellness coach? That’s… unexpected. I just needed help with 
     7.94s  agent 발화 끝
    12.31s  agent 발화 시작: It's perfectly alright to feel a little surprised, Liam. Bud
    12.31s  user  발화 끝
    22.23s  user  발화 시작: Yeah.
    22.23s  agent 발화 끝
    22.63s  user  발화 시작: Welll… I guess so. I’ve tried apps, spreadsheets… nothing re
    22.63s  user  발화 끝
    27.00s  agent 발화 시작: Yeah.
    27.00s  user  발화 끝
    27.39s  agent 발화 시작: That’s very common, Liam. Tools are helpful, but they don’t 
    27.39s  agent 발화 끝
    40.10s  user  발화 시작: That sounds… less awful than another spreadsheet. Maybe.
    40.10s  agent 발화 끝
    43.27s  user  발화 끝
