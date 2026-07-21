# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "주서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "skill",
#       "text": "User is quite experienced with vintage synth collecting."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "partner",
#       "text": "User's partner is named Noah."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in September."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "learning",
#       "text": "User is training for a half-marathon."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "anniversary",
#       "text": "User's anniversary is June 2."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-06-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-03-04",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 바이킹스가 램보 필드에서 마지막으로 이긴 게 언제였지?
     3.08s  <ret> 발화 (turn1 첫 프레임)
     3.70s  agent 발화 시작: <ret> 바이킹스가 램보 필드에서 그린베이 패커스를 이긴 건, 음, 이천십칠년 십이월 이십삼일이었어요. [
     3.83s  user  발화 끝
     4.63s  ⚡SPAN 주입 [d'=1.55s / d_lead=8.58s]: The Minnesota Vikings defeated the Green Bay Packers at Lambeau Field 
    12.27s  agent 발화 끝
