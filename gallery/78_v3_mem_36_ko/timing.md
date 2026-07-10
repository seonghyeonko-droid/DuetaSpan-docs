# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "도안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 도안님. 저는 에이전트인 모시입니다. 오늘 하루는 어떠신가요?
     4.77s  agent 발화 끝
     5.49s  user  발화 시작: 음… 전에 뉴질랜드 여행 계획에 대해서 얘기했었는데, 혹시 제가 언제 가기로 했었죠?
    11.51s  user  발화 끝
    11.55s  <ret> 발화 (turn2 첫 프레임)
    11.71s  agent 발화 시작: <ret> 뉴질랜드 여행은 시월에 가기로 하셨어요. 혹시 다른 여행 계획도 있으신가요?
    11.71s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.72s]: [2025-07-24] User is planning a trip to New Zealand in October.
    15.17s  user  발화 시작: 와.
    15.80s  user  발화 끝
    16.43s  agent 발화 끝
    17.07s  user  발화 시작: 아, 맞다. 혹시 제가 알레르기가 있는 게 뭐였죠? 기억이 잘 안 나네요.
    21.53s  <ret> 발화 (turn5 첫 프레임)
    21.79s  user  발화 끝
    21.92s  agent 발화 시작: <ret> 페니실린에 알레르기가 있으세요. 혹시 최근에 건강 검진을 받으셨나요?
    21.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.94s]: [2026-05-01] User is allergic to penicillin.
    26.86s  agent 발화 끝
