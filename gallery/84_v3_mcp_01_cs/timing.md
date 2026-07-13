# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Hana",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 근처에 괜찮은 이탈리아 식당 좀 찾아 줘. 야외 테이블 있는  | S2 음… 그거 좀 비싼 것 같아. 좀 더 싼 데 없어? | S3 벨라 파스타… 그거 괜찮겠다. 거기 두 명 자리 예약해 줘… | S4 …이번 토요일 저녁 일곱시에?

     0.00s  user  발화 시작: 근처에 괜찮은 이탈리아 식당 좀 찾아 줘. 야외 테이블 있는 곳으로.
     4.24s  <ret> 발화 (turn1 첫 프레임)
     4.85s  agent 발화 시작: <ret> 응, 당연하지! 찾아줄게. 주변 이탈리아 식당 중에 야외 테이블 있는 데 찾아볼게.
     4.85s  user  발화 끝
     5.53s  ⚡SPAN 주입 [d'=1.30s / d_lead=5.29s]: Restaurants_2_FindRestaurants
     9.62s  <ret> 발화 (turn2 첫 프레임)
    10.14s  agent 발화 시작: <ret> 라 타볼라라는 곳이 있는데, 강남대로 백칠길 이십삼에 있고, 평점은 사 점 오점이고 가격대는 보통
    10.14s  agent 발화 끝
    10.55s  ⚡SPAN 주입 [d'=0.93s / d_lead=7.50s]: (tool result) {"restaurant name": "La Tavola", "address": "23 Gangnam-
    17.64s  user  발화 시작: 음… 그거 좀 비싼 것 같아. 좀 더 싼 데 없어?
    17.64s  agent 발화 끝
    22.26s  <ret> 발화 (turn4 첫 프레임)
    22.49s  agent 발화 시작: <ret> 벨라 파스타라는 곳은 평점이 사 점 이점이고, 가격대는 달러로 저렴한 편이야.
    22.49s  user  발화 끝
    23.22s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.85s]: Restaurants_2_FindRestaurants
    27.35s  user  발화 시작: 벨라 파스타… 그거 괜찮겠다. 거기 두 명 자리 예약해 줘…
    27.35s  agent 발화 끝
    31.76s  user  발화 시작: …이번 토요일 저녁 일곱시에?
    31.76s  user  발화 끝
    33.04s  <ret> 발화 (turn7 첫 프레임)
    33.52s  agent 발화 시작: <ret> 그래! 이번 토요일 저녁 일곱시에 벨라 파스타 두 명 자리로 예약됐어. 확인 코드는 비 피 칠 일
    33.52s  user  발화 끝
    33.77s  ⚡SPAN 주입 [d'=0.73s / d_lead=10.14s]: (tool result) {"confirmation id": "BP7111902", "restaurant name": "Bel
    43.67s  agent 발화 끝
