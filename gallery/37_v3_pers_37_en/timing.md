# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Charlie",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "home",
#       "text": "User's home address is 414 Pine Court."
#     },
#     {
#       "date": "2025-10-24",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Charlie, it’s lovely to meet you. I’m Teas, and I’m he
     4.92s  user  발화 시작: Yeah.
     5.64s  user  발화 끝
     6.86s  agent 발화 끝
     7.74s  user  발화 시작: Mindfulness, huh? That sounds…nice, I guess. I’m just really
    13.90s  user  발화 끝
    14.26s  agent 발화 시작: It’s perfectly okay to feel stressed, Charlie. Work can be a
    19.18s  user  발화 시작: Yeah.
    19.82s  user  발화 끝
    22.29s  agent 발화 시작: Sometimes just naming what’s causing the stress can lessen i
    22.33s  agent 발화 끝
    31.67s  user  발화 시작: …Is this like therapy? I'm not sure I need *therapy* therapy
    32.39s  agent 발화 끝
    35.73s  agent 발화 시작: Charlie. It’s not quite the same. I'm here to offer tools an
    35.80s  user  발화 끝
    43.09s  agent 발화 끝
    43.27s  user  발화 시작: Okay, that sounds…less intense. I’m just constantly worried 
    49.45s  agent 발화 시작: It’s very common to feel that way, Charlie. Perfectionism ca
    49.53s  user  발화 끝
    57.84s  agent 발화 끝
