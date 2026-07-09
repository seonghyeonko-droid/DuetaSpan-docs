# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… uh, when was | S2 Wow, that was a while ago. So, who | S3 Hey, did you remember to take the  | S4 Sorry about that. So, was it a clo

     0.00s  user  발화 시작: I was just wondering… uh, when was the last time the Oakland
     4.92s  <ret> 발화 (turn1 첫 프레임)
     5.31s  agent 발화 시작: <ret> That’s a good baseball question. The A’s were last no-
     5.33s  user  발화 끝
     6.76s  ⚡SPAN 주입 [d'=1.84s / d_lead=1.95s]: The last time the Oakland A’s were no-hit was April 21, 2018.
    11.56s  agent 발화 끝
    11.77s  user  발화 시작: Wow, that was a while ago. So, who pitched it?
    14.63s  <ret> 발화 (turn3 첫 프레임)
    14.72s  user  발화 끝
    14.86s  agent 발화 시작: <ret> I can certainly find that information for you.
    15.75s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.54s]: (tool result) James Paxton pitched a no-hitter against the Oakland Ath
    17.25s  agent 발화 시작: James Paxton pitched the no-hitter against the A’s on April 
    17.39s  agent 발화 끝
    22.10s  user  발화 시작: Hey, did you remember to take the chicken out?
    22.62s  agent 발화 끝
    24.44s  user  발화 시작: Sorry about that. So, was it a close game, or did they just 
    24.49s  user  발화 끝
    30.36s  user  발화 끝
