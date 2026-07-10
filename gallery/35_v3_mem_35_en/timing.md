# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Sky",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 937 Maple Drive."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 um, yeah, I am. I’m trying to find | S2 hmm, sounds good. Is it…is it pean | S3 [happy] that’s such a relief! Can  | S4 perfect! Thank you so much, Eus.

     0.00s  agent 발화 시작: Hi Sky, I'm Eus. It’s lovely to connect with you today. I un
     6.16s  agent 발화 끝
     6.92s  user  발화 시작: um, yeah, I am. I’m trying to find a nice Italian restaurant
    11.54s  <ret> 발화 (turn2 첫 프레임)
    11.94s  agent 발화 시작: <ret> Italian is a wonderful choice! I see you’ve mentioned 
    11.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: [2026-03-06] User's favorite cuisine is Italian.
    12.06s  user  발화 끝
    15.18s  user  발화 시작: Yeah, yeah.
    16.43s  agent 발화 끝
    16.64s  user  발화 끝
    17.36s  user  발화 시작: oh, right! I totally forgot I told you that. Any recommendat
    22.36s  <ret> 발화 (turn5 첫 프레임)
    22.44s  agent 발화 시작: <ret> Bella Vita Ristorante on George Street comes highly re
    22.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: (tool result) Bella Vita Ristorante at 123 George Street, Sydney, is h
    22.46s  user  발화 끝
    29.90s  agent 발화 끝
    29.96s  user  발화 시작: hmm, sounds good. Is it…is it peanut-free? I have a really b
    35.14s  <ret> 발화 (turn7 첫 프레임)
    35.38s  agent 발화 시작: <ret> I remember you mentioned a peanut allergy. Let me quic
    35.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.28s]: [2025-07-01] User is allergic to peanuts.
    35.56s  user  발화 끝
    47.66s  agent 발화 끝
    48.12s  user  발화 시작: [happy] that’s such a relief! Can you…reserve a table for me
    54.47s  user  발화 끝
    54.49s  <ret> 발화 (turn9 첫 프레임)
    54.57s  agent 발화 시작: <ret> Your table for two at Bella Vita is confirmed for tomo
    54.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) Reservation confirmed at Bella Vita Ristorante for two p
    58.86s  user  발화 시작: Really?
    59.73s  user  발화 끝
    62.17s  agent 발화 끝
    62.75s  user  발화 시작: perfect! Thank you so much, Eus.
    65.12s  agent 발화 시작: You’re very welcome, Sky. I'm glad I could help. Enjoy your 
    65.34s  user  발화 끝
    71.46s  agent 발화 끝
