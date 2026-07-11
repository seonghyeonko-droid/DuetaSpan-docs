# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "Iris",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "home",
#       "text": "User's home address is 325 Birch Road."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m curious about the latest news  | S2 Hmm, okay. That's a little lower t | S3 Maybe. I need to send some money t | S4 Let’s say… two hundred and fifty d

     0.00s  user  발화 시작: I’m curious about the latest news on the UK economy. Can you
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.01s  <ret> 발화 (turn4 첫 프레임)
     0.10s  agent 발화 시작: <ret> The UK economy shrank by zero point one percent in Mar
     0.10s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) UK economy shrinks by 0.1% in March 2024, according to t
     0.10s  user  발화 끝
     0.23s  user  발화 시작: Uh-huh.
     0.23s  agent 발화 끝
     0.24s  user  발화 시작: Oh, that's…not great. Um, can you check the current exchange
     0.24s  user  발화 끝
     0.33s  agent 발화 시작: <ret> Currently, one British pound is worth one point two se
     0.33s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) GBP/USD: 1.2732
     0.33s  user  발화 끝
     0.41s  user  발화 시작: Hmm, okay. That's a little lower than I expected.
     0.41s  agent 발화 끝
     0.47s  agent 발화 시작: It can be unsettling when figures don't quite align with wha
     0.47s  user  발화 끝
     0.59s  user  발화 시작: Maybe. I need to send some money to my sister in London. Can
     0.59s  agent 발화 끝
     0.69s  agent 발화 시작: I can assist you with sending money. To get started, could y
     0.69s  user  발화 끝
     0.80s  user  발화 시작: Yeah, yeah.
     0.80s  agent 발화 끝
     0.82s  user  발화 시작: Let’s say… two hundred and fifty dollars.
     0.82s  user  발화 끝
     0.86s  agent 발화 시작: Alright. And to confirm, you wish to send two hundred and fi
     0.86s  user  발화 끝
     1.00s  agent 발화 끝
