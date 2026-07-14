# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "Harry",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "car",
#       "text": "User drives no car — uses car-sharing."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "airline",
#       "text": "User usually flies with ANA."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "commute",
#       "text": "User takes the subway to work."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "hobby",
#       "text": "User is into trail running."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "emergency",
#       "text": "User's emergency contact is Ava."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "sibling",
#       "text": "User has a younger sibling named Elena."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "work",
#       "text": "User works as a social worker."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-05-16",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-05-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-03-14",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a flight from Seoul | S2 Hmm, that's a bit early. Are there | S3 Let’s go with the Jeju Air flight. | S4 Great, thanks. I’m feeling a littl

     0.00s  user  발화 시작: I need to find a flight from Seoul to Busan for next Tuesday
     4.54s  agent 발화 시작: Yeah.
     4.54s  user  발화 끝
     4.60s  <ret> 발화 (turn2 첫 프레임)
     4.89s  agent 발화 시작: <ret> [happy] I found a flight for you! Korean Air flight KE
     4.89s  agent 발화 끝
     5.64s  ⚡SPAN 주입 [d'=1.04s / d_lead=9.09s]: Flights found: KE123, departs 09:00, arrives 10:30, price ₩80,000.
    13.98s  user  발화 시작: Hmm, that's a bit early. Are there any later flights?
    13.98s  agent 발화 끝
    17.48s  agent 발화 시작: Okay.
    17.48s  user  발화 끝
    17.81s  <ret> 발화 (turn5 첫 프레임)
    17.83s  agent 발화 시작: <ret> There are two later options. Korean Air flight KE456 l
    17.83s  agent 발화 끝
    18.37s  ⚡SPAN 주입 [d'=0.55s / d_lead=10.84s]: Flights found: KE456, departs 14:00, arrives 15:30, price ₩100,000; LJ
    28.66s  user  발화 시작: Yeah.
    28.66s  agent 발화 끝
    29.01s  user  발화 시작: Let’s go with the Jeju Air flight. Can you get me tickets fo
    29.01s  user  발화 끝
    34.09s  <ret> 발화 (turn9 첫 프레임)
    34.25s  agent 발화 시작: Okay.
    34.25s  user  발화 끝
    34.60s  agent 발화 시작: <ret> [sigh] Absolutely. I've booked you one adult ticket on
    34.60s  agent 발화 끝
    35.22s  ⚡SPAN 주입 [d'=1.13s / d_lead=9.79s]: (tool result) Booking confirmed: LJ789, 1 adult, ₩120,000, confirmatio
    44.39s  user  발화 시작: Great, thanks. I’m feeling a little stressed about this work
    44.39s  agent 발화 끝
    48.58s  agent 발화 시작: That’s understandable. Work projects can be challenging. Is 
    48.58s  user  발화 끝
    57.32s  agent 발화 끝
