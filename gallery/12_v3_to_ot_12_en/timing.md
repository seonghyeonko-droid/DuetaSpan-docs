# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Sam",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-26",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "home",
#       "text": "User's home address is 332 Cedar Lane."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who played Wally in La | S2 I wonder if they still show it any | S3 Did you hear that? | S4 Pennine Way… is that a long walk?

     0.00s  user  발화 시작: Do you know who played Wally in Last of the Summer Wine?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn7 첫 프레임)
     0.00s  <ret> 발화 (turn9 첫 프레임)
     0.05s  agent 발화 시작: <ret> Oh, that’s a good one! Joseph Gladwin is the actor who
     0.05s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Joseph Gladwin portrayed Wally Featherstone in the British sitcom Last
     0.05s  user  발화 끝
     0.12s  user  발화 시작: Right, good. Um, what about Compo?
     0.12s  agent 발화 끝
     0.14s  agent 발화 시작: <ret> Bill Owen played Compo Simmonds, and he was in all thi
     0.14s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Bill Owen played Compo Simmonds in all 31 series of Last of the Summer
     0.14s  user  발화 끝
     0.21s  user  발화 시작: That's a lot of episodes.
     0.21s  agent 발화 끝
     0.23s  agent 발화 시작: It really is! That’s dedication to a role, isn’t it? I admir
     0.23s  user  발화 끝
     0.29s  user  발화 시작: I wonder if they still show it anywhere?
     0.29s  agent 발화 끝
     0.32s  agent 발화 시작: <ret> It looks like you can stream Last of the Summer Wine o
     0.32s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Last of the Summer Wine is available to stream on BritBox.
     0.32s  user  발화 끝
     0.34s  <ret> 발화 (turn16 첫 프레임)
     0.38s  user  발화 시작: BritBox, okay. Is that a monthly thing?
     0.38s  agent 발화 끝
     0.40s  agent 발화 시작: <ret> I'm sorry, I can’t find details about BritBox subscrip
     0.40s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (no information found)
     0.40s  user  발화 끝
     0.45s  user  발화 시작: Yeah, totally.
     0.45s  agent 발화 끝
     0.46s  user  발화 시작: Oh.
     0.46s  user  발화 끝
     0.46s  agent 발화 시작: Perhaps you could check their website directly? I’m happy to
     0.46s  user  발화 끝
     0.53s  user  발화 시작: Okay.
     0.53s  agent 발화 끝
     0.53s  user  발화 시작: Did you hear that?
     0.53s  user  발화 끝
     0.55s  user  발화 시작: No, that’s alright. What’s the weather like in Holmfirth tod
     0.55s  user  발화 끝
     0.58s  agent 발화 시작: <ret> Right now in Holmfirth, it's 18.3 degrees Celsius with
     0.58s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 18.3°C, humidity 68%, wind 8.2 km/h
     0.58s  user  발화 끝
     0.60s  <ret> 발화 (turn23 첫 프레임)
     0.65s  user  발화 시작: Mm-hmm.
     0.65s  agent 발화 끝
     0.66s  agent 발화 시작: It sounds quite pleasant, actually! Perfect weather for a wa
     0.66s  user  발화 끝
     0.68s  <ret> 발화 (turn20 첫 프레임)
     0.71s  user  발화 시작: That does sound nice. Can you find me some local walking rou
     0.71s  agent 발화 끝
     0.76s  agent 발화 시작: <ret> Holmfirth has some great walking routes, including the
     0.76s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Holmfirth has several walking routes, including the Penn
     0.76s  user  발화 끝
     0.81s  user  발화 시작: Yeah.
     0.81s  agent 발화 끝
     0.82s  user  발화 시작: Pennine Way… is that a long walk?
     0.82s  user  발화 끝
     0.84s  agent 발화 시작: <ret> The Pennine Way is a National Trail stretching 268 mil
     0.84s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: The Pennine Way is a National Trail in England, stretching 268 miles f
     0.84s  user  발화 끝
     0.91s  user  발화 시작: Wow, okay. Maybe not that one.
     0.91s  agent 발화 끝
     0.94s  agent 발화 시작: Perhaps the Holmfirth Circular Walk would be a better starti
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
