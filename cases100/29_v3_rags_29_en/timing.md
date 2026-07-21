# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "David",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "skill",
#       "text": "User is a complete beginner at freediving."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Georgian."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "commute",
#       "text": "User bikes to work."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "work",
#       "text": "User works as a barista."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When did cross country skiing first appear in the Winter Oly
     3.26s  <ret> 발화 (turn1 첫 프레임)
     3.53s  agent 발화 시작: <ret> It was added in nineteen twenty-four, at the very firs
     3.62s  user  발화 끝
     4.31s  ⚡SPAN 주입 [d'=1.05s / d_lead=7.83s]: Cross-country skiing was first included in the Winter Olympics program
    11.35s  agent 발화 끝
