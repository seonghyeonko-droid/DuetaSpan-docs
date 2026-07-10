# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Louis",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What percentage of tokens did sess | S2 …of that session? Just the main po | S3 A story, huh? [surprised] Can you  | S4 Bella Italia sounds nice. Can you 

     0.00s  user  발화 시작: What percentage of tokens did session zero zero one use?
     4.07s  user  발화 끝
     4.08s  <ret> 발화 (turn1 첫 프레임)
     4.15s  agent 발화 시작: <ret> Session zero zero one used seventy-eight point three p
     4.16s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.39s]: (tool result) Session 001 used 78.3% of its allocated tokens.
     8.09s  user  발화 시작: Yeah, totally.
     9.51s  user  발화 끝
    10.54s  agent 발화 끝
    11.39s  user  발화 시작: Um, can you show me the details…
    13.47s  user  발화 끝
    15.16s  user  발화 시작: …of that session? Just the main points.
    18.04s  <ret> 발화 (turn5 첫 프레임)
    18.21s  user  발화 끝
    18.44s  agent 발화 시작: <ret> That session began July eighth, twenty twenty-six, at 
    18.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.40s]: Session 001 started on July 8, 2026, at 10:15 AM and ended July 9, 202
    27.62s  user  발화 시작: Yeah.
    28.07s  user  발화 끝
    31.84s  agent 발화 끝
    32.27s  user  발화 시작: A story, huh? [surprised] Can you find me some good restaura
    36.63s  <ret> 발화 (turn8 첫 프레임)
    36.71s  agent 발화 시작: <ret> I found three restaurants nearby: Bella Italia, an Ita
    36.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.19s]: (tool result) Found 3 restaurants: "Bella Italia" (Italian, 4.5 stars)
    36.88s  user  발화 끝
    48.90s  agent 발화 끝
    49.61s  user  발화 시작: Bella Italia sounds nice. Can you reserve a table for two at
    54.37s  <ret> 발화 (turn10 첫 프레임)
    54.77s  agent 발화 시작: <ret> Wonderful. Your table for two at Bella Italia is confi
    54.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.64s]: (tool result) Reservation confirmed at Bella Italia for 2 people at 7:
    54.81s  user  발화 끝
    64.42s  agent 발화 끝
