# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Elias",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Could you tell me the driving dist | S2 Wow, that's… really far. | S3 That's a good point. Can you find  | S4 Universal Studios sounds great.

     0.00s  user  발화 시작: Could you tell me the driving distance from Tokyo to Los Ang
     4.43s  <ret> 발화 (turn1 첫 프레임)
     4.49s  user  발화 끝
     4.51s  agent 발화 시작: <ret> The driving distance between Tokyo and Los Angeles is 
     4.51s  ⚡SPAN 주입 [d'=1.68s / d_lead=7.79s]: (tool result) 8673.7 km
    12.13s  user  발화 시작: Wow, that's… really far.
    12.29s  agent 발화 끝
    15.32s  user  발화 끝
    15.54s  agent 발화 시작: It certainly is a long journey! Perhaps thinking about the a
    18.91s  user  발화 시작: Yeah.
    19.44s  user  발화 끝
    21.97s  agent 발화 끝
    22.01s  agent 발화 시작: Sometimes breaking a big goal into smaller steps can make it
    29.19s  agent 발화 끝
    29.56s  user  발화 시작: That's a good point. Can you find me some interesting attrac
    34.09s  <ret> 발화 (turn7 첫 프레임)
    34.17s  agent 발화 시작: <ret> Los Angeles has so much to offer! Griffith Observatory
    34.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Griffith Observatory offers stunning city views and exhi
    34.23s  user  발화 끝
    43.72s  agent 발화 끝
    43.73s  user  발화 시작: Universal Studios sounds great.
    46.48s  agent 발화 시작: [happy] I'm glad to hear that sparks your interest! It's a f
    46.50s  user  발화 끝
    54.35s  agent 발화 끝
