# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Anton",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "home",
#       "text": "User's home address is 845 Oak Avenue."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who won the NBA Rookie of the Year award for the 2017-2018 s
     4.93s  <ret> 발화 (turn2 첫 프레임)
     5.00s  agent 발화 시작: Mm-hmm.
     5.00s  user  발화 끝
     5.38s  agent 발화 시작: <ret> Well, that award actually went to Ben Simmons, of the 
     5.38s  agent 발화 끝
     5.77s  ⚡SPAN 주입 [d'=0.84s / d_lead=6.53s]: Ben Simmons of the Philadelphia 76ers was named the NBA Rookie of the 
    11.91s  agent 발화 끝
