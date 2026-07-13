# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Nathan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-10",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-30",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Victoria and Albert were the guest | S2 I was hoping to visit some places  | S3 I’d love to see Buckingham Palace. | S4 …But can you at least find out whe

     0.00s  user  발화 시작: Victoria and Albert were the guests of honor at a small ball
     6.18s  <ret> 발화 (turn1 첫 프레임)
     6.26s  agent 발화 시작: <ret> That's a lovely historical question, but unfortunately
     6.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.26s]: (no information found)
     6.26s  user  발화 끝
    12.52s  user  발화 시작: Uh-huh.
    12.52s  agent 발화 끝
    12.91s  user  발화 시작: Oh, that’s a shame. Well, I’m planning a trip to London next
    12.91s  user  발화 끝
    18.00s  agent 발화 시작: That sounds wonderful! London is a fantastic city, full of h
    18.00s  user  발화 끝
    23.09s  user  발화 시작: I was hoping to visit some places connected to Queen Victori
    23.09s  agent 발화 끝
    27.31s  <ret> 발화 (turn6 첫 프레임)
    27.39s  agent 발화 시작: <ret> Queen Victoria had a very long and influential reign, 
    27.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.39s]: Queen Victoria reigned over the United Kingdom of Great Britain and Ir
    27.39s  user  발화 끝
    36.78s  user  발화 시작: That’s a long time! Are there any palaces still open to the 
    36.78s  agent 발화 끝
    41.47s  <ret> 발화 (turn8 첫 프레임)
    41.87s  agent 발화 시작: <ret> Buckingham Palace is still open to the public during c
    41.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: Buckingham Palace is the London residence and administrative headquart
    41.87s  user  발화 끝
    49.70s  user  발화 시작: Right.
    49.70s  agent 발화 끝
    50.09s  user  발화 시작: I’d love to see Buckingham Palace.…
    50.09s  user  발화 끝
    52.44s  user  발화 시작: …What’s the best way to get tickets?.
    52.44s  user  발화 끝
    54.85s  <ret> 발화 (turn12 첫 프레임)
    55.17s  agent 발화 시작: <ret> I’m sorry, I cannot find information about tickets for
    55.17s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.48s]: (no information found)
    55.17s  user  발화 끝
    60.65s  user  발화 시작: …But can you at least find out when it’s open to visitors?
    60.65s  agent 발화 끝
    64.95s  <ret> 발화 (turn14 첫 프레임)
    65.35s  agent 발화 시작: <ret> Buckingham Palace will be open for summer tours from J
    65.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: (tool result) Buckingham Palace will be open for summer tours from Jul
    65.35s  user  발화 끝
    73.18s  user  발화 시작: Perfect! That fits my schedule. Can you find me some restaur
    73.18s  agent 발화 끝
    77.55s  <ret> 발화 (turn16 첫 프레임)
    77.87s  agent 발화 시작: <ret> The Goring Hotel Dining Room is just point six miles f
    77.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.78s]: The Goring Hotel Dining Room is located 0.6 miles from Buckingham Pala
    77.87s  user  발화 끝
    87.65s  agent 발화 끝
