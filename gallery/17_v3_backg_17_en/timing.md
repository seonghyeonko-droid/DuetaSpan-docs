# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Sam",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-19",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "home",
#       "text": "User's home address is 349 Pine Court."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hi Hox, could you tell me when p53 is most active?
     2.79s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> Well, that's a great question! P53 is most active duri
     3.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.86s]: P53 is a tumor suppressor protein that functions primarily during the 
     3.23s  user  발화 끝
     7.74s  user  발화 시작: Mm-hmm.
     8.24s  user  발화 끝
    12.04s  agent 발화 끝
    12.09s  user  발화 시작: Anyone order the kimchi jjigae?
    13.96s  user  발화 시작: Oh, interesting. So it's a checkpoint protein?
    14.02s  user  발화 끝
    16.55s  user  발화 끝
    16.63s  agent 발화 시작: Exactly! It’s like a gatekeeper, making sure everything is r
    25.54s  agent 발화 끝
