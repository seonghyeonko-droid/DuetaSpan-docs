# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Jordan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-09",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-14",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who didn't sign the decree suspend | S2 That sounds... nice. What time is  | S3 Yes, it is. I'm a little anxious a | S4 French sounds good. Can you reserv

     0.00s  user  발화 시작: Who didn't sign the decree suspending the Communist Party of
     5.26s  <ret> 발화 (turn1 첫 프레임)
     5.42s  agent 발화 시작: <ret> That’s a difficult question, and unfortunately, I don’
     5.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.51s]: (no information found)
     5.42s  user  발화 끝
    12.93s  user  발화 시작: Yeah.
    12.93s  agent 발화 끝
    13.35s  user  발화 시작: Oh. Well, what’s the weather like in Seoul right now?
    13.35s  user  발화 끝
    17.36s  <ret> 발화 (turn4 첫 프레임)
    17.52s  agent 발화 시작: <ret> It’s currently 23.0°C in Seoul, with humidity at 74% a
    17.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    17.52s  user  발화 끝
    26.69s  user  발화 시작: Hmm, maybe I should plan a trip. Are there any good movies p
    26.69s  agent 발화 끝
    31.95s  <ret> 발화 (turn6 첫 프레임)
    32.11s  agent 발화 시작: <ret> "Inside Out 2" is playing nearby, and it’s getting gre
    32.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) "Inside Out 2" is currently playing in theaters near you
    32.11s  user  발화 끝
    41.29s  user  발화 시작: Yeah.
    41.29s  agent 발화 끝
    41.71s  user  발화 시작: That sounds... nice. What time is it there, exactly?
    41.71s  user  발화 끝
    45.30s  <ret> 발화 (turn9 첫 프레임)
    45.46s  agent 발화 시작: <ret> It is Friday, July 10, 2026, at 2:47 PM in Asia/Seoul 
    45.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: (tool result) It is Friday, July 10, 2026 at 2:47 PM in Asia/Seoul rig
    45.46s  user  발화 끝
    53.38s  user  발화 시작: That's right, July 10th. Um, do you remember what I said abo
    53.38s  agent 발화 끝
    59.14s  <ret> 발화 (turn11 첫 프레임)
    59.22s  agent 발화 시작: <ret> You mentioned on July 5th that your daughter is starti
    59.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: [2026-07-05] My daughter is starting kindergarten next month.
    59.22s  user  발화 끝
    66.31s  user  발화 시작: Yes, it is. I'm a little anxious about it.
    66.31s  agent 발화 끝
    70.07s  agent 발화 시작: It’s completely normal to feel anxious when your child is be
    70.07s  user  발화 끝
    79.24s  user  발화 시작: Okay.
    79.24s  agent 발화 끝
    79.66s  user  발화 시작: I guess so. Could you find some restaurants near City Hall?
    79.66s  user  발화 끝
    84.09s  <ret> 발화 (turn16 첫 프레임)
    84.25s  agent 발화 시작: <ret> I found 47 restaurants near City Hall—'Gogung Myeongga
    84.25s  ⚡SPAN 주입 [d'=1.12s / d_lead=8.34s]: (tool result) There are 47 restaurants near City Hall, including 'Gogu
    84.25s  user  발화 끝
    92.59s  user  발화 시작: Exactly.
    92.59s  agent 발화 끝
    93.01s  user  발화 시작: French sounds good. Can you reserve a table for two at La Cu
    93.01s  user  발화 끝
   100.02s  <ret> 발화 (turn19 첫 프레임)
   100.10s  agent 발화 시작: <ret> A table for two at La Cuisine is confirmed for 7:00 PM
   100.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: (tool result) Reservation confirmed at La Cuisine for two people at 7:
   100.10s  user  발화 끝
   107.19s  user  발화 시작: Mm-hmm.
   107.19s  agent 발화 끝
   107.60s  user  발화 시작: Perfect! Thank you.
   107.60s  user  발화 끝
   108.85s  agent 발화 시작: You're very welcome. It’s good to have a nice evening planne
   108.85s  user  발화 끝
   116.78s  agent 발화 끝
