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
     2.10s  <ret> 발화 (turn1 첫 프레임)
     2.50s  agent 발화 시작: <ret> Direct current, as it’s defined, has a frequency of ze
     2.50s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.75s]: Direct current (DC) is an electric current flowing in one direction, a
     2.54s  user  발화 끝
     3.62s  user  발화 시작: Yeah.
     4.25s  user  발화 끝
     6.25s  agent 발화 끝
     6.43s  user  발화 시작: Zero? That sounds… weird.
     8.91s  agent 발화 시작: It can seem a little counterintuitive, yes. But DC flows ste
     8.97s  user  발화 끝
    13.54s  agent 발화 끝
    14.10s  user  발화 시작: …So, does that mean it doesn't really *have* a wave…
    17.06s  user  발화 끝
    18.42s  user  발화 시작: …like AC?
    19.36s  agent 발화 시작: That’s right. Alternating current, or AC, oscillates, creati
    19.52s  user  발화 끝
    23.01s  user  발화 시작: Mm-hmm.
    23.45s  user  발화 끝
    26.91s  agent 발화 끝
    26.92s  agent 발화 시작: I’m glad I could explain that for you. It’s a key difference
    32.25s  agent 발화 끝
    32.28s  user  발화 시작: What about if it’s pulsing DC? Does *that* have a frequency?
    35.43s  <ret> 발화 (turn11 첫 프레임)
    35.75s  agent 발화 시작: <ret> Pulsating direct current, or PDC, *does* have a freque
    35.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.41s]: Pulsating direct current (PDC) is a direct current which varies in mag
    35.93s  user  발화 끝
    45.16s  agent 발화 끝
