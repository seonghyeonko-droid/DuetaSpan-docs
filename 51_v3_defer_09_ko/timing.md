# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-13",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오션뷰 호텔에서 이월 십일부터 칠박 동안 방 세개를 예약해 줘 | S2 혹시 그 호텔에 수영장이 있는지 알 수 있을까? | S3 다른 호텔도 한번 찾아봐 줘. 비슷한 가격대로, 해변 바로 앞 | S4 파라다이스 코브 리조트에 대한 자세한 정보를 알려줘.

     0.00s  user  발화 시작: 오션뷰 호텔에서 이월 십일부터 칠박 동안 방 세개를 예약해 줘.
     5.15s  <ret> 발화 (turn1 첫 프레임)
     5.31s  agent 발화 시작: <ret> 네, 알아보고 있습니다. 오션뷰 호텔, 샌디에이고에서 이월 십일부터 칠박, 방 세개 예약이 완료됐
     5.41s  user  발화 끝
     6.99s  ⚡SPAN 주입 [d'=1.84s / d_lead=1.90s]: (tool result) reservation_id: 87654, hotel: Ocean View Hotel, city: Sa
    15.29s  user  발화 시작: 혹시 그 호텔에 수영장이 있는지 알 수 있을까?
    15.46s  agent 발화 끝
    18.01s  <ret> 발화 (turn3 첫 프레임)
    18.09s  agent 발화 시작: <ret> 아, 수영장에 대해 궁금하시군요.
    18.21s  user  발화 끝
    18.97s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.02s]: (tool result) hotel: Ocean View Hotel, city: San Diego, amenities: [sw
    20.10s  agent 발화 시작: 네, 오션뷰 호텔에는 수영장과 피트니스 센터, 무료 와이파이, 레스토랑이 있습니다. 평점은 사 점 오점이에요
    20.12s  agent 발화 끝
    25.06s  user  발화 시작: 헐.
    25.69s  user  발화 끝
    27.22s  agent 발화 시작: 다른 편의시설에 대해 더 궁금하신 점이 있으신가요? 아니면 다른 호텔을 알아볼까요?
    27.33s  agent 발화 끝
    32.40s  agent 발화 끝
    32.81s  user  발화 시작: 다른 호텔도 한번 찾아봐 줘. 비슷한 가격대로, 해변 바로 앞에 있는 곳으로.
    37.89s  <ret> 발화 (turn8 첫 프레임)
    38.22s  user  발화 끝
    38.28s  agent 발화 시작: <ret> 해변 바로 앞에 있는 비슷한 가격대의 호텔을 찾아보겠습니다. 잠시만 기다려 주세요.
    39.65s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.05s]: (tool result) hotels: [Paradise Cove Resort, Sunset Beach Hotel, Coast
    43.17s  agent 발화 시작: 파라다이스 코브 리조트, 선셋 비치 호텔, 코스탈 브리즈 인이 있습니다. 가격은 각각 이천이백달러, 이천삼백
    43.32s  agent 발화 끝
    53.60s  agent 발화 끝
    54.36s  user  발화 시작: 파라다이스 코브 리조트에 대한 자세한 정보를 알려줘.
    58.20s  user  발화 끝
