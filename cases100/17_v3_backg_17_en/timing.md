# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Charlotte",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "hobby",
#       "text": "User is into film photography."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "floor",
#       "text": "User lives on the 8th floor."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-30",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-04-10",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-01-11",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Brarix, how are you doing today | S2 I was wondering, how many members  | S3 Did you hear about the bakery down | S4 Wow, that's a lot! I'm trying to p

     0.00s  user  발화 시작: Hi Brarix, how are you doing today?
     2.10s  agent 발화 시작: [happy] I'm doing wonderfully, thank you! Ready to help you 
     2.11s  user  발화 끝
     8.54s  agent 발화 끝
     9.06s  user  발화 시작: I was wondering, how many members are in the senate in Franc
    10.96s  agent 발화 시작: Yeah.
    11.68s  agent 발화 끝
    11.79s  <ret> 발화 (turn4 첫 프레임)
    12.17s  agent 발화 시작: <ret> Oh, that's a great question! The French Senate has thr
    12.34s  user  발화 끝
    12.79s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.50s]: The French Senate has 348 members, elected by an electoral college of 
    14.95s  user  발화 시작: Yeah.
    15.36s  user  발화 끝
    19.67s  agent 발화 끝
    19.80s  user  발화 시작: Did you hear about the bakery downtown? They're giving out f
    23.77s  user  발화 시작: Wow, that's a lot! I'm trying to prioritize tasks at work, a
    23.82s  user  발화 끝
    25.57s  agent 발화 시작: Okay.
    26.16s  agent 발화 끝
    28.50s  user  발화 끝
    28.84s  agent 발화 시작: [curious] Absolutely! A good start is the urgent-important m
    39.59s  agent 발화 끝
