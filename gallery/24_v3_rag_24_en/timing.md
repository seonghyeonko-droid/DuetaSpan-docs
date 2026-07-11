# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Rosa",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Good afternoon. I’m trying to unde | S2 [happy] So it’s always *in* Februa | S3 And who actually delivers the budg | S4 So, it wasn’t an Indian official a

     0.00s  user  발화 시작: Good afternoon. I’m trying to understand how the Indian budg
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn9 첫 프레임)
     0.00s  <ret> 발화 (turn15 첫 프레임)
     0.02s  <ret> 발화 (turn5 첫 프레임)
     0.02s  agent 발화 시작: Good afternoon to you too.
     0.02s  user  발화 끝
     0.03s  user  발화 시작: What’s the first step in creating the budget?
     0.03s  agent 발화 끝
     0.05s  agent 발화 시작: <ret> The Union budget preparation actually begins around Se
     0.05s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: The Union budget preparation begins around September-October, with min
     0.05s  user  발화 끝
     0.05s  <ret> 발화 (turn20 첫 프레임)
     0.08s  user  발화 시작: And who ultimately decides the final budget details?
     0.08s  agent 발화 끝
     0.10s  agent 발화 시작: <ret> The final budget details are decided by the Union Cabi
     0.10s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: The final budget is decided by the Union Cabinet, led by the Prime Min
     0.10s  user  발화 끝
     0.14s  user  발화 시작: Is the Finance Minister always the key person?
     0.14s  agent 발화 끝
     0.15s  agent 발화 시작: Yes, the Finance Minister plays a central role in the budget
     0.15s  user  발화 끝
     0.18s  user  발화 시작: When is the budget usually presented to Parliament?
     0.18s  agent 발화 끝
     0.20s  agent 발화 시작: <ret> The Union Budget is typically presented to Parliament 
     0.20s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: The Union Budget is typically presented to Parliament on the last work
     0.20s  user  발화 끝
     0.23s  user  발화 시작: What happens if that day falls on a weekend?
     0.23s  agent 발화 끝
     0.25s  agent 발화 시작: The presentation is shifted to the preceding working day if 
     0.25s  user  발화 끝
     0.28s  user  발화 시작: [happy] So it’s always *in* February?
     0.28s  agent 발화 끝
     0.29s  agent 발화 시작: Yes, it’s consistently presented in February, though the exa
     0.29s  user  발화 끝
     0.32s  user  발화 시작: Is there a fixed date, or does it vary?
     0.32s  agent 발화 끝
     0.34s  agent 발화 시작: <ret> While it’s usually the last working day of February, t
     0.34s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: While usually the last working day of February, the date can be change
     0.34s  user  발화 끝
     0.37s  user  발화 시작: Yeah, totally.
     0.37s  agent 발화 끝
     0.38s  user  발화 시작: Who decides when to change that date, though?
     0.38s  user  발화 끝
     0.39s  <ret> 발화 (turn24 첫 프레임)
     0.39s  agent 발화 시작: The decision to alter the presentation date rests with the U
     0.39s  user  발화 끝
     0.43s  user  발화 시작: What about the timing of the budget presentation itself? Wha
     0.43s  agent 발화 끝
     0.45s  agent 발화 시작: <ret> It is currently Friday, July 10, 2026 at 2:47 PM in As
     0.45s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) It is Friday, July 10, 2026 at 2:47 PM in Asia/Seoul rig
     0.45s  user  발화 끝
     0.49s  user  발화 시작: 11 AM… that's quite early. Is that a tradition?
     0.49s  agent 발화 끝
     0.51s  agent 발화 시작: It is a long-standing convention, allowing time for debate a
     0.51s  user  발화 끝
     0.54s  user  발화 시작: And who actually delivers the budget speech?
     0.54s  agent 발화 끝
     0.55s  agent 발화 시작: <ret> The Finance Minister traditionally presents the Union 
     0.55s  ⚡SPAN 주입 [d'=0.02s / d_lead=0.02s]: The Finance Minister traditionally presents the Union Budget speech in
     0.55s  user  발화 끝
     0.57s  user  발화 시작: Does the Prime Minister ever present it?
     0.57s  agent 발화 끝
     0.59s  agent 발화 시작: While rare, the Prime Minister has occasionally presented th
     0.59s  user  발화 끝
     0.62s  user  발화 시작: [curious] What were the circumstances then?
     0.62s  agent 발화 끝
     0.63s  agent 발화 시작: It usually happens when a new government is formed or during
     0.63s  user  발화 끝
     0.65s  <ret> 발화 (turn32 첫 프레임)
     0.66s  user  발화 시작: So, the Finance Minister is the usual one, but.
     0.66s  agent 발화 끝
     0.68s  agent 발화 시작: —the Prime Minister can step in when needed, yes. It demonst
     0.68s  user  발화 끝
     0.69s  <ret> 발화 (turn41 첫 프레임)
     0.71s  user  발화 시작: …but what about before India became independent? Who present
     0.71s  agent 발화 끝
     0.73s  agent 발화 시작: <ret> Before 1947, the budget was presented by the Viceroy o
     0.73s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: Before 1947, the budget was presented by the Viceroy of India, represe
     0.73s  user  발화 끝
     0.76s  user  발화 시작: So, it wasn’t an Indian official at all?
     0.76s  agent 발화 끝
     0.77s  agent 발화 시작: Correct. The Viceroy acted as the financial representative o
     0.77s  user  발화 끝
     0.80s  user  발화 시작: Uh-huh.
     0.80s  agent 발화 끝
     0.80s  user  발화 시작: Interesting. And what role did Parliament play then?
     0.80s  user  발화 끝
     0.82s  agent 발화 시작: Before independence, the Legislative Council had limited pow
     0.82s  user  발화 끝
     0.86s  user  발화 시작: [sigh] It’s so different now.
     0.86s  agent 발화 끝
     0.87s  agent 발화 시작: It truly is. The Indian Parliament now holds full authority 
     0.87s  user  발화 끝
     0.91s  user  발화 시작: Okay, one last question. What determines the financial year 
     0.91s  agent 발화 끝
     0.93s  agent 발화 시작: <ret> India’s financial year runs from April 1st to March 31
     0.93s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: India’s financial year runs from April 1st to March 31st, established 
     0.93s  user  발화 끝
     0.96s  user  발화 시작: 1866! That's a long time ago.
     0.96s  agent 발화 끝
     0.97s  agent 발화 시작: Yes, it’s a tradition with deep historical roots. It's a fai
     0.97s  user  발화 끝
     1.00s  agent 발화 끝
