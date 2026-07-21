# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Olivia",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "employer",
#       "text": "User works at a biotech lab."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "phone",
#       "text": "User uses a Pixel 8."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "hobby",
#       "text": "User is into freediving."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "dish",
#       "text": "User's go-to comfort dish is green curry."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "skill",
#       "text": "User is just getting back into long-distance cycling."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "commute",
#       "text": "User carpools with a colleague."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-04",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-05-01",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-04-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: End the code generation session for data analysis, session f
     6.57s  <ret> 발화 (turn1 첫 프레임)
     6.72s  user  발화 끝
     6.96s  agent 발화 시작: <ret> [happy] Okay, session forty-two is finished, and your 
     7.99s  ⚡SPAN 주입 [d'=1.42s / d_lead=8.72s]: (tool result) Session 42 ended. Tests created: data analysis tests.py
    11.45s  user  발화 시작: Yeah.
    12.08s  user  발화 끝
    15.57s  user  발화 시작: Good. Now, can you find me a quiet cafe nearby for working?
    15.68s  agent 발화 끝
    18.60s  agent 발화 시작: Yeah, totally.
    20.07s  agent 발화 끝
    20.64s  <ret> 발화 (turn5 첫 프레임)
    20.79s  agent 발화 시작: <ret> I’ve found a good spot for focused work—Cafe Yeonjae i
    20.95s  user  발화 끝
    21.63s  ⚡SPAN 주입 [d'=0.99s / d_lead=8.44s]: There are many cafes in Busan, but Cafe Yeonjae, located in Yeonje-gu,
    26.77s  user  발화 시작: Yeah.
    27.22s  user  발화 끝
    29.24s  agent 발화 끝
    29.26s  agent 발화 시작: [curious] It seems like a really relaxing place! Would you l
    35.23s  agent 발화 끝
