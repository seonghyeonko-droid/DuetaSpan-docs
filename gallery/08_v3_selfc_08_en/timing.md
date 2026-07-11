# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Marcus",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-08",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Can you find me an Italian place i | S2 What’s the weather like there righ | S3 I think I'd like to book a hotel n | S4 That sounds perfect. Let’s book it

     0.00s  user  발화 시작: Can you find me an Italian place in Boston?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.04s  agent 발화 시작: <ret> I found Giacomo’s Ristorante in Boston—
     0.04s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) {"restaurant name": "Giacomo’s Ristorante", "address": "
     0.04s  user  발화 끝
     0.07s  user  발화 시작: …do they take reservations?
     0.07s  agent 발화 끝
     0.09s  agent 발화 시작: <ret> Let me check their reservation policy.
     0.09s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) {"reservation status": "unavailable", "message": "Giacom
     0.09s  user  발화 끝
     0.12s  agent 발화 시작: Unfortunately, Giacomo’s doesn’t take reservations, but many
     0.12s  agent 발화 끝
     0.13s  <ret> 발화 (turn8 첫 프레임)
     0.18s  <ret> 발화 (turn11 첫 프레임)
     0.18s  user  발화 시작: Yeah, totally.
     0.18s  agent 발화 끝
     0.19s  agent 발화 시작: It's known for its authentic, home-style Italian cooking, an
     0.19s  user  발화 끝
     0.26s  user  발화 시작: What’s the weather like there right now?
     0.26s  agent 발화 끝
     0.29s  agent 발화 시작: <ret> Right now in Boston, it’s 24.4 degrees Celsius, with 6
     0.29s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) "The current weather in Boston is 24.4°C, humidity 68%, 
     0.29s  user  발화 끝
     0.38s  user  발화 시작: Oh.
     0.38s  agent 발화 끝
     0.38s  user  발화 시작: That sounds nice. What about this weekend?
     0.38s  user  발화 끝
     0.42s  agent 발화 시작: <ret> This Saturday, July 12th, Boston is expected to be 27.
     0.42s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) "The forecast for Boston on July 12, 2026 is 27.8°C, hum
     0.42s  user  발화 끝
     0.44s  <ret> 발화 (turn18 첫 프레임)
     0.52s  user  발화 시작: I think I'd like to book a hotel near there.
     0.52s  agent 발화 끝
     0.57s  agent 발화 시작: That's a wonderful idea. To find a hotel, I'll need a little
     0.57s  user  발화 끝
     0.61s  <ret> 발화 (turn15 첫 프레임)
     0.64s  user  발화 시작: Something affordable, maybe around one hundred and fifty dol
     0.64s  agent 발화 끝
     0.69s  agent 발화 시작: <ret> The Farrington Inn is available for $145 a night, and 
     0.69s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) {"hotel name": "The Farrington Inn", "address": "406 Mas
     0.69s  user  발화 끝
     0.78s  user  발화 시작: Mm-hmm.
     0.78s  agent 발화 끝
     0.79s  user  발화 시작: That sounds perfect. Let’s book it for two nights, starting 
     0.79s  user  발화 끝
     0.84s  agent 발화 시작: <ret> Excellent. I've reserved a room for two at The Farring
     0.84s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (tool result) {"confirmation number": "FH7892"}
     0.84s  user  발화 끝
     1.00s  agent 발화 끝
