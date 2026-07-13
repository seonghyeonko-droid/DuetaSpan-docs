# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Emil",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "home",
#       "text": "User's home address is 276 Pine Court."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, what’s the range on a Boeing  | S2 Wow, that’s far! | S3 Did you remember to take the chick | S4 That's a lot of money… um, are the

     0.00s  user  발화 시작: Hey, what’s the range on a Boeing 777?
     2.65s  <ret> 발화 (turn1 첫 프레임)
     3.05s  agent 발화 시작: <ret> Well, that really depends on the specific aircraft, bu
     3.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.63s]: The Boeing 777 has a range of 5,240 to 8,555 nautical miles, depending
     3.05s  user  발화 끝
    10.68s  user  발화 시작: Wow, that’s far!
    10.68s  agent 발화 끝
    11.82s  agent 발화 시작: It is quite a distance, isn't it? That allows for many non-s
    11.82s  user  발화 끝
    18.31s  user  발화 시작: Mm-hmm.
    18.31s  agent 발화 끝
    18.69s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    18.69s  user  발화 끝
    22.72s  <ret> 발화 (turn6 첫 프레임)
    22.88s  agent 발화 시작: <ret> —thinking about family trips, a typical Disney World v
    22.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.63s]: The average cost of a family vacation to Disney World is around $4,500
    22.88s  user  발화 끝
    30.51s  user  발화 시작: Exactly.
    30.51s  agent 발화 끝
    30.89s  agent 발화 시작: It’s good to have a budget in mind when you’re dreaming up t
    30.89s  user  발화 끝
    38.14s  user  발화 시작: That's a lot of money… um, are there ways to save?
    38.14s  agent 발화 끝
    42.01s  <ret> 발화 (turn10 첫 프레임)
    42.33s  agent 발화 시작: <ret> Disney World frequently provides package deals and dis
    42.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.63s]: (tool result) Disney World often offers package deals and discounts fo
    42.33s  user  발화 끝
    49.96s  agent 발화 끝
