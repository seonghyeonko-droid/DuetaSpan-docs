# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Remy",
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
#       "date": "2026-04-23",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "home",
#       "text": "User's home address is 527 Maple Drive."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Remy, it’s wonderful to connect with you. I’m Ialo, an
     8.40s  user  발화 시작: Yeah.
     8.40s  agent 발화 끝
     8.75s  user  발화 시작: Oh, hi Ialo. That sounds… nice. I'm just feeling really over
     8.75s  user  발화 끝
    14.35s  agent 발화 시작: Mm-hmm.
    14.35s  user  발화 끝
    14.70s  agent 발화 시작: It’s completely understandable to feel overwhelmed, Remy. Wo
    14.70s  agent 발화 끝
    22.40s  user  발화 시작: Welll… I think I just need a break. A real one. Somewhere co
    22.40s  agent 발화 끝
    27.30s  agent 발화 시작: A change of scenery can do wonders. When you imagine that br
    27.30s  user  발화 끝
    35.35s  user  발화 시작: Exactly.
    35.35s  agent 발화 끝
    35.70s  user  발화 시작: [sigh] I don't know… somewhere warm, I guess. And not too ex
    35.70s  user  발화 끝
    40.60s  agent 발화 시작: Yeah.
    40.60s  user  발화 끝
    40.95s  agent 발화 시작: "Easy" sounds perfect, Remy. Sometimes the best escapes are 
    40.95s  agent 발화 끝
    51.45s  agent 발화 끝
