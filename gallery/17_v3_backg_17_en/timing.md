# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Andrea",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "home",
#       "text": "User's home address is 35 Pine Court."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, when does Gotham season 4 epi | S2 Did you remember to take the chick | S3 Oh… um, I think I need to set a re | S4 Perfect, thanks Zami.

     0.00s  user  발화 시작: Hey, when does Gotham season 4 episode 12 air?
     2.42s  <ret> 발화 (turn1 첫 프레임)
     2.82s  agent 발화 시작: <ret> That episode, “Queen Takes King”, actually aired on Ma
     2.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.38s]: Gotham's fourth season, episode 12, titled "Queen Takes King", aired o
     2.96s  user  발화 끝
     6.21s  user  발화 시작: Yeah.
     6.62s  user  발화 끝
    11.20s  agent 발화 끝
    11.30s  user  발화 시작: March 1st, huh?
    12.68s  user  발화 끝
    12.96s  agent 발화 시작: Yes, that's right. March 1st, 2018, is the date for Gotham s
    15.31s  user  발화 시작: Nice.
    15.94s  user  발화 끝
    20.34s  agent 발화 끝
    21.22s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    23.77s  user  발화 끝
    23.78s  user  발화 시작: Oh… um, I think I need to set a reminder for that.
    26.65s  <ret> 발화 (turn8 첫 프레임)
    26.74s  user  발화 끝
    26.81s  agent 발화 시작: <ret> I’ve set an alarm for July 11th at 6:00 PM to remind y
    26.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: (tool result) Alarm set for July 11, 2026, 6:00 PM: take chicken out. 
    30.23s  user  발화 시작: Yeah, yeah.
    31.05s  user  발화 끝
    32.83s  agent 발화 끝
    32.86s  user  발화 시작: Perfect, thanks Zami.
    34.21s  agent 발화 시작: You’re very welcome. I’m glad I could help with both your sh
    34.24s  user  발화 끝
    39.30s  agent 발화 끝
