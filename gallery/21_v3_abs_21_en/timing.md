# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Rowan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "home",
#       "text": "User's home address is 993 Birch Road."
#     },
#     {
#       "date": "2025-11-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-08-23",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: How far back does Ancestry.com have records for genealogy?
     4.37s  <ret> 발화 (turn1 첫 프레임)
     4.45s  agent 발화 시작: <ret> Unfortunately, I don’t have a specific answer for how 
     4.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: (no information found)
     4.63s  user  발화 끝
     7.10s  user  발화 시작: Uh-huh.
     7.65s  user  발화 끝
    10.15s  agent 발화 끝
    10.85s  user  발화 시작: Oh, okay. That's too bad.
    13.21s  agent 발화 시작: It varies quite a bit depending on the region and the specif
    13.29s  user  발화 끝
    18.53s  user  발화 시작: Yeah.
    19.03s  user  발화 끝
    22.55s  agent 발화 시작: It’s often about piecing together fragments from different s
    22.58s  agent 발화 끝
    25.76s  user  발화 시작: …do they have anything for Korean ancestry, specifically?
    26.53s  agent 발화 끝
    29.22s  <ret> 발화 (turn8 첫 프레임)
    29.30s  agent 발화 시작: <ret> That’s a very specific and important question! Let me 
    29.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: (tool result) Ancestry.com has a growing collection of Korean records,
    29.55s  user  발화 끝
    39.78s  agent 발화 끝
    39.79s  agent 발화 시작: They do have a growing collection of Korean records, startin
    54.49s  agent 발화 끝
