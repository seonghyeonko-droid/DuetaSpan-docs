# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Adam",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Adam, I'm Aroralo. It's lovely to meet you. Are you plann
     5.07s  user  발화 시작: Yeah.
     5.07s  agent 발화 끝
     5.37s  user  발화 시작: Um, yeah, actually. I was hoping to go to Manly Beach. How f
     5.37s  user  발화 끝
    11.04s  user  발화 시작: Oh.
    11.04s  user  발화 끝
    11.25s  <ret> 발화 (turn4 첫 프레임)
    11.33s  agent 발화 시작: <ret> That's roughly a 30 to 45 minute trip, depending on ho
    11.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: [2026-01-21] Past chat — Researching a used car: comparing hybrid mode
    11.33s  user  발화 끝
    18.19s  agent 발화 끝
