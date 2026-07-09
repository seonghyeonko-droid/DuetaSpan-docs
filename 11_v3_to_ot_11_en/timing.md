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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, has the Oakl | S2 Wow, that *is* a while ago. I— I m | S3 Hey, did you remember to take the  | S4 Sorry about that. So, who pitched 

     0.00s  user  발화 시작: I was just wondering, has the Oakland A’s team been no-hit r
     5.24s  <ret> 발화 (turn1 첫 프레임)
     5.60s  user  발화 끝
     5.63s  agent 발화 시작: <ret> That’s a good question, and it has been some time. The
     7.08s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.50s]: [source: ESPN] The last time the Oakland Athletics were no-hit was on 
    12.63s  agent 발화 끝
    12.84s  user  발화 시작: Wow, that *is* a while ago. I— I mean, it feels longer, hone
    17.25s  user  발화 시작: Hey, did you remember to take the trash out?
    17.32s  user  발화 끝
    19.65s  user  발화 시작: Sorry about that. So, who pitched that no-hitter against the
    19.70s  user  발화 끝
    23.23s  <ret> 발화 (turn5 첫 프레임)
    23.35s  user  발화 끝
    23.46s  agent 발화 시작: <ret> It was a combined effort from three pitchers—Lucas Gio
    25.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.75s]: [source: Baseball-Reference.com] Lucas Giolito, Reynaldo López, and Jo
    29.03s  agent 발화 시작: Lucas Giolito, Reynaldo López, and José Quintana all contrib
    29.20s  agent 발화 끝
    34.31s  agent 발화 끝
