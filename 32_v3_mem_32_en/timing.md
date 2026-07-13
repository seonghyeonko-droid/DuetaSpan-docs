# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Anna",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "home",
#       "text": "User's home address is 233 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm alright, actually a little str | S2 Yes, exactly! Do you think you cou | S3 …Actually, is Burma Superstar good | S4 Perfect, thank you so much, Jox.

     0.00s  agent 발화 시작: Hi Anna, I'm Jox. It's lovely to meet you. How are you doing
     5.42s  user  발화 시작: I'm alright, actually a little stressed about making plans w
     5.42s  agent 발화 끝
     9.67s  agent 발화 시작: That’s completely understandable; socializing can be tricky.
     9.67s  user  발화 끝
    14.70s  user  발화 시작: Well, I'm trying to plan a birthday dinner, and it’s hard to
    14.70s  agent 발화 끝
    21.28s  agent 발화 시작: Yeah.
    21.28s  user  발화 끝
    21.34s  <ret> 발화 (turn5 첫 프레임)
    21.66s  agent 발화 시작: <ret> Ah, I recall you were planning a birthday dinner for s
    21.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.96s]: [2025-07-26] Past chat — Planning a birthday dinner: party of six; loo
    21.66s  agent 발화 끝
    28.63s  user  발화 시작: Yeah.
    28.63s  agent 발화 끝
    29.02s  user  발화 시작: Yes, exactly! Do you think you could help me find some resta
    29.02s  user  발화 끝
    35.82s  <ret> 발화 (turn8 첫 프레임)
    35.98s  agent 발화 시작: <ret> I found five restaurants in San Francisco with outdoor
    35.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: (tool result) 5 restaurants found: Zuni Café (American, $$$), Foreign 
    35.98s  user  발화 끝
    44.88s  user  발화 시작: Those sound good… um, what kind of food does Foreign Cinema 
    44.88s  agent 발화 끝
    49.52s  agent 발화 시작: Foreign Cinema serves Mediterranean cuisine—
    49.52s  user  발화 끝
    51.45s  user  발화 시작: …Actually, is Burma Superstar good for someone with dietary 
    51.45s  agent 발화 끝
    55.24s  <ret> 발화 (turn12 첫 프레임)
    55.32s  agent 발화 시작: <ret> I remember you're lactose-intolerant, and Burma Supers
    55.32s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.58s]: [2026-01-11] User is lactose-intolerant.
    55.32s  user  발화 끝
    61.90s  user  발화 시작: Oh, that’s fantastic! I think that might be the one. Can you
    61.90s  agent 발화 끝
    69.17s  <ret> 발화 (turn14 첫 프레임)
    69.25s  agent 발화 시작: <ret> Wonderful! I’ve reserved a table for six at Burma Supe
    69.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.51s]: (tool result) Burma Superstar: reservation confirmed for 6 people on J
    69.25s  user  발화 끝
    77.76s  user  발화 시작: Really?
    77.76s  agent 발화 끝
    78.15s  user  발화 시작: Perfect, thank you so much, Jox.
    78.15s  user  발화 끝
    80.47s  agent 발화 시작: You're very welcome, Anna. Planning with friends can be stre
    80.47s  user  발화 끝
    87.43s  agent 발화 끝
