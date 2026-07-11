# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Mason",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "home",
#       "text": "User's home address is 279 Cedar Lane."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-05",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What is the frequency of a DC volt | S2 …So, does that mean it doesn't rea | S3 …like AC? | S4 What about if it’s pulsing DC? Doe

     0.00s  user  발화 시작: What is the frequency of a DC voltage?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.07s  agent 발화 시작: <ret> Direct current, as it’s defined, has a frequency of ze
     0.07s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: Direct current (DC) is an electric current flowing in one direction, a
     0.07s  user  발화 끝
     0.17s  user  발화 시작: Yeah.
     0.17s  agent 발화 끝
     0.17s  user  발화 시작: Zero? That sounds… weird.
     0.17s  user  발화 끝
     0.21s  agent 발화 시작: It can seem a little counterintuitive, yes. But DC flows ste
     0.21s  user  발화 끝
     0.31s  user  발화 시작: …So, does that mean it doesn't really *have* a wave…
     0.31s  agent 발화 끝
     0.40s  user  발화 시작: …like AC?
     0.40s  user  발화 끝
     0.42s  agent 발화 시작: That’s right. Alternating current, or AC, oscillates, creati
     0.42s  user  발화 끝
     0.51s  <ret> 발화 (turn11 첫 프레임)
     0.57s  user  발화 시작: Mm-hmm.
     0.57s  agent 발화 끝
     0.58s  agent 발화 시작: I’m glad I could explain that for you. It’s a key difference
     0.58s  user  발화 끝
     0.73s  user  발화 시작: What about if it’s pulsing DC? Does *that* have a frequency?
     0.73s  agent 발화 끝
     0.83s  agent 발화 시작: <ret> Pulsating direct current, or PDC, *does* have a freque
     0.83s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: Pulsating direct current (PDC) is a direct current which varies in mag
     0.83s  user  발화 끝
     1.00s  agent 발화 끝
