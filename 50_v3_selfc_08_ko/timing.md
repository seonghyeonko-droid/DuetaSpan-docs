# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "세영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 갈 만한 분위기 좋은 레스토랑 좀 찾아줄 수 | S2 음… 이탈리아 음식으로 찾아봐 줘. | S3 예약도 좀 해 줄 수 있어? — 혹시 이번 주 일요일은 어때? | S4 …아, 잠깐만, 일요일 말고 토요일 저녁으로 바꿔줄 수 있어?

     0.00s  user  발화 시작: 이번 주 토요일에 갈 만한 분위기 좋은 레스토랑 좀 찾아줄 수 있어?
     4.94s  <ret> 발화 (turn1 첫 프레임)
     5.26s  agent 발화 시작: <ret> 서울에는 분위기가 좋은 레스토랑이 많아요. 한식 바비큐, 이탈리아 요리, 현대적인 퓨전 요리 전문
     5.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.13s]: There are many restaurants in Seoul with a good atmosphere, including 
     5.26s  user  발화 끝
    11.39s  user  발화 시작: 음… 이탈리아 음식으로 찾아봐 줘.
    11.39s  agent 발화 끝
    13.18s  <ret> 발화 (turn3 첫 프레임)
    13.58s  agent 발화 시작: <ret> 강남에 있는 트라토리아 라 스텔라는 정통 파스타 요리와 아늑한 분위기로 유명하고, 일인당 평균 가
    13.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.45s]: Trattoria La Stella, located in Gangnam, is a highly-rated Italian res
    13.58s  user  발화 끝
    21.03s  user  발화 시작: 와.
    21.03s  agent 발화 끝
    21.47s  agent 발화 시작: 트라토리아 라 스텔라는 평점이 매우 높고, 특히 데이트 장소로 인기가 많다고 하네요. 예약은 필수일 수도 있
    21.47s  user  발화 끝
    28.48s  user  발화 시작: 예약도 좀 해 줄 수 있어? — 혹시 이번 주 일요일은 어때?
    28.48s  agent 발화 끝
    33.65s  <ret> 발화 (turn7 첫 프레임)
    33.73s  agent 발화 시작: <ret> 네, 예약도 가능합니다. 이번 주 일요일 일곱시에 두명으로 예약했는데—
    33.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.94s]: {"restaurant_name": "Trattoria La Stella", "date": "2026-07-12", "time
    33.73s  user  발화 끝
    37.68s  user  발화 시작: …아, 잠깐만, 일요일 말고 토요일 저녁으로 바꿔줄 수 있어?
    37.68s  agent 발화 끝
    41.38s  <ret> 발화 (turn9 첫 프레임)
    41.62s  agent 발화 시작: <ret> 네, 알겠습니다. 토요일 저녁 일곱시로 변경했습니다. 트라토리아 라 스텔라, 칠월 십일일 토요일 
    41.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.27s]: {"restaurant_name": "Trattoria La Stella", "date": "2026-07-11", "time
    41.62s  user  발화 끝
    53.89s  agent 발화 끝
