# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "세별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-27",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 세별님. 저는 이온이라고 해요. 오늘 하루는 어떠셨어요?
     4.10s  user  발화 시작: 그래.
     4.10s  agent 발화 끝
     4.62s  user  발화 시작: 음… 그냥 그랬어. 뭔가 기분 전환이 필요해.
     4.62s  user  발화 끝
     8.21s  agent 발화 시작: 기분 전환이라… 혹시 어디론가 떠나고 싶으신가요?
     8.21s  user  발화 끝
    11.28s  user  발화 시작: 서울 말고 다른 데. 집에서 가까운 곳이면 좋겠는데…
    11.28s  agent 발화 끝
    15.23s  <ret> 발화 (turn5 첫 프레임)
    15.39s  agent 발화 시작: <ret> 생일 저녁 식사 계획을 세우셨던 적이 있으셨죠. 여섯 분이서 야외 테이블을 찾으셨었는데, 혹시 그
    15.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.23s]: [2025-08-05] Past chat — Planning a birthday dinner: party of six; loo
    15.39s  user  발화 끝
    24.62s  agent 발화 끝
