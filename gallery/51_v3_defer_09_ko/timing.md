# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "예슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 뉴욕 근처에서 괜찮은 호텔 좀 찾아줘. | S2 오, 괜찮은데. 혹시 그 호텔 주변에 맛있는 식당도 알아봐 줄 | S3 … 혹시 그 호텔에서… | S4 아니, 지금은 괜찮아. 고마워.

     0.00s  user  발화 시작: 이번 주 토요일에 뉴욕 근처에서 괜찮은 호텔 좀 찾아줘.
     4.33s  agent 발화 시작: 어떤 종류의 호텔을 선호하시나요?
     4.33s  user  발화 끝
     6.26s  user  발화 시작: 음… 너무 비싸지 않고, 수영장이 있으면 좋겠어.
     6.26s  agent 발화 끝
     9.55s  <ret> 발화 (turn3 첫 프레임)
     9.63s  agent 발화 시작: <ret> 뉴욕에 있는 제인 호텔은 일박에 이백오십달러이고, 수영장과 무료 와이파이, 레스토랑이 있습니다.
     9.63s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.30s]: (tool result) {"hotel name": "The Jane Hotel", "address": "113 Jane St
     9.63s  user  발화 끝
    14.93s  user  발화 시작: 응.
    14.93s  agent 발화 끝
    15.41s  user  발화 시작: 오, 괜찮은데. 혹시 그 호텔 주변에 맛있는 식당도 알아봐 줄 수 있어?
    15.41s  user  발화 끝
    21.03s  <ret> 발화 (turn6 첫 프레임)
    21.19s  agent 발화 시작: <ret> 제인 호텔 근처에 미네타 태번이라는 미국식 레스토랑이 있는데, 평점이 사 점 오점이고 가격대는 조
    21.19s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.70s]: (tool result) {"restaurant name": "Minetta Tavern", "cuisine": "Americ
    21.19s  user  발화 끝
    28.89s  user  발화 시작: 대박.
    28.89s  agent 발화 끝
    29.37s  user  발화 시작: 아, 미네타 태번? 거기 되게 유명한 곳이잖아. —
    29.37s  user  발화 끝
    33.22s  user  발화 시작: … 혹시 그 호텔에서…
    33.22s  user  발화 끝
    35.15s  user  발화 시작: …센트럴 파크까지 얼마나 걸려?
    35.15s  user  발화 끝
    37.08s  agent 발화 시작: 센트럴 파크까지는 약 삼십분 정도 걸립니다.
    37.08s  user  발화 끝
    39.80s  <ret> 발화 (turn12 첫 프레임)
    39.96s  agent 발화 시작: <ret> 교통 상황에 따라 조금 더 걸릴 수도 있습니다. 거리는 오 점 이마일이고, 예상 소요 시간은 삼십
    39.96s  agent 발화 끝
    40.84s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.85s]: {"distance": "5.2 miles", "duration": "30 minutes"}
    47.67s  user  발화 시작: 대박.
    47.67s  agent 발화 끝
    48.15s  agent 발화 시작: 여행 계획 세우는 데 도움이 되도록, 혹시 다른 필요한 정보가 있을까요?
    48.15s  user  발화 끝
    53.45s  user  발화 시작: 음.
    53.45s  agent 발화 끝
    53.93s  user  발화 시작: 아니, 지금은 괜찮아. 고마워.
    53.93s  user  발화 끝
    55.85s  agent 발화 시작: 천만에요. 언제든지 편하게 말씀해 주세요. 즐거운 여행 되세요!
    55.85s  user  발화 끝
    59.71s  agent 발화 끝
