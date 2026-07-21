# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Morgan",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "sibling",
#       "text": "User has a younger sibling named Ava."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "airline",
#       "text": "User usually flies with United."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "trip",
#       "text": "User is planning a trip to Morocco in November."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Spanish tapas."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "schedule",
#       "text": "User has rotating night shifts."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "hobby",
#       "text": "User is into sea kayaking."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2025-12-05",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey Sox, quick question – who’s won the most Gold Glove awar
     3.59s  <ret> 발화 (turn1 첫 프레임)
     4.51s  ⚡SPAN 주입 [d'=0.91s / d_lead=6.14s]: Greg Maddux has won a record sixteen Gold Glove Awards as a pitcher, m
     4.57s  agent 발화 시작: <ret> Greg Maddux has sixteen Gold Glove Awards, which is th
     4.63s  user  발화 끝
    10.64s  user  발화 시작: Honey, the oven timer's going off — can you grab it?
    10.71s  agent 발화 끝
    13.13s  user  발화 시작: Okay, back to baseball… sixteen, wow. Is there anyone close 
    13.31s  user  발화 끝
    16.48s  agent 발화 시작: Mm-hmm.
    16.92s  agent 발화 끝
    18.50s  user  발화 끝
    18.56s  <ret> 발화 (turn5 첫 프레임)
    18.83s  agent 발화 시작: <ret> Sixteen is definitely a high bar… Ozzie Smith comes in
    19.16s  ⚡SPAN 주입 [d'=0.60s / d_lead=2.52s]: Ozzie Smith won thirteen Gold Glove Awards during his career as a shor
    27.64s  agent 발화 끝
