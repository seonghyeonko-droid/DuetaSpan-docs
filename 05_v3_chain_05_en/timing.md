# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Stella",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Can you give me driving directions | S2 Hmm, that’s longer than I thought. | S3 Yes, please do that. | S4 Okay, good to know. Thanks, Runar.

     0.00s  user  발화 시작: Can you give me driving directions from…
     2.27s  user  발화 끝
     3.96s  user  발화 시작: …One World Trade Center to MetLife Stadium?
     6.37s  <ret> 발화 (turn2 첫 프레임)
     6.60s  agent 발화 시작: <ret> Driving to MetLife Stadium from One World Trade Center
     6.61s  ⚡SPAN 주입 [d'=1.52s / d_lead=9.97s]: (tool result) Driving directions from One World Trade Center to MetLif
     6.73s  user  발화 끝
    14.35s  user  발화 시작: Oh.
    14.98s  user  발화 끝
    16.13s  user  발화 시작: Hmm, that’s longer than I thought.
    16.57s  agent 발화 끝
    18.02s  user  발화 끝
    18.04s  agent 발화 시작: It’s a considerable distance, yes. Planning for potential tr
    24.32s  user  발화 시작: Yeah, yeah.
    25.14s  user  발화 끝
    27.08s  agent 발화 시작: To help refine the trip, would you like me to check for curr
    27.23s  agent 발화 끝
    31.63s  user  발화 시작: Yeah.
    32.12s  user  발화 끝
    33.20s  agent 발화 끝
    33.23s  user  발화 시작: Yes, please do that.
    34.04s  <ret> 발화 (turn10 첫 프레임)
    34.44s  agent 발화 시작: <ret> There's moderate congestion on I-95 North, which adds 
    34.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Current traffic conditions indicate moderate congestion 
    34.61s  user  발화 끝
    43.86s  user  발화 시작: Okay, good to know. Thanks, Runar.
    43.99s  agent 발화 끝
    46.40s  user  발화 끝
    46.66s  agent 발화 시작: You’re very welcome. A little extra awareness can make even 
    53.89s  agent 발화 끝
