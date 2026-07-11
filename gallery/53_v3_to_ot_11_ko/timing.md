# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "소온",
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
#       "date": "2026-05-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 중국 내전에서 맞붙었던 양쪽 세력은 무엇이었나요? | S2 음… 뭐랄까, 괜찮은 동네를 찾는 게 제일 어렵죠. | S3 강남구… 거기는 집값이 비싼가요? | S4 이번 주 토요일에 강남구 말고 다른 동네를 좀 둘러보고 싶어요

     0.00s  user  발화 시작: 중국 내전에서 맞붙었던 양쪽 세력은 무엇이었나요?
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.23s  user  발화 끝
     3.35s  agent 발화 시작: <ret> 중국 내전은 국민당이 이끄는 중화민국과 중국 공산당 사이에서 벌어졌습니다.
     3.35s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.18s]: The Chinese Civil War was fought between the Kuomintang-led Republic o
     5.98s  user  발화 시작: 네.
     6.80s  user  발화 끝
     8.52s  user  발화 시작: 아, 그렇군요.
     8.53s  agent 발화 끝
     9.66s  user  발화 끝
     9.74s  agent 발화 시작: 새로운 도시에 정착하시는 분들이 가장 어려워하는 점이 뭔지 여쭤봐도 될까요?
    12.24s  user  발화 시작: 네네.
    13.07s  user  발화 끝
    14.51s  agent 발화 끝
    15.63s  user  발화 시작: 음… 뭐랄까, 괜찮은 동네를 찾는 게 제일 어렵죠.
    19.07s  <ret> 발화 (turn7 첫 프레임)
    19.34s  user  발화 끝
    19.37s  agent 발화 시작: <ret> 동네를 찾는 게 어려우시다고 하셨죠. 강남구는 서울에서 가장 부유한 지역 중 하나로, 고급 쇼핑과
    20.11s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.37s]: Gangnam-gu is considered one of the most affluent districts of Seoul, 
    26.97s  agent 발화 끝
    27.39s  user  발화 시작: 강남구… 거기는 집값이 비싼가요?
    29.57s  <ret> 발화 (turn9 첫 프레임)
    29.89s  user  발화 끝
    29.89s  agent 발화 시작: <ret> 강남구에는 현재 백이십삼채의 매물이 있고, 평균 가격은 이십오억 원입니다.
    29.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: (tool result) Found 123 houses in Gangnam-gu, average price ₩2,500,000
    35.09s  user  발화 시작: 이십오억 원이라니, 정말 비싸네요.
    35.17s  agent 발화 끝
    37.56s  agent 발화 시작: 다른 지역도 한번 알아보실까요? 좀 더 합리적인 가격대의 동네도 많습니다.
    37.68s  user  발화 끝
    40.23s  user  발화 시작: 아.
    40.63s  user  발화 끝
    42.42s  agent 발화 끝
    43.54s  user  발화 시작: 이번 주 토요일에 강남구 말고 다른 동네를 좀 둘러보고 싶어요.
    47.43s  agent 발화 시작: 이번 주 토요일에 다른 동네를 둘러보시겠군요. 제가 몇 군데 추천해 드릴까요?
    47.51s  user  발화 끝
    52.71s  agent 발화 끝
