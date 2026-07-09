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


     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고에서 이월 십일부터 칠박, 방 세 개 예약해 줘.
     5.33s  <ret> 발화 (turn1 첫 프레임)
     5.46s  user  발화 끝
     5.48s  agent 발화 시작: <ret> 네, 오션뷰 호텔 샌디에이고, 이월 십일부터 칠박, 방 세 개 맞으시죠?
     6.77s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.90s]: (tool result) confirmation_number: XJ7892; hotel_name: Ocean View Hote
    10.25s  agent 발화 시작: 네, 오션뷰 호텔 샌디에이고, 이월 십일부터 칠박, 방 세 개 예약 완료되었습니다. 확인 번호는 XJ7892
    10.38s  agent 발화 끝
    20.26s  agent 발화 끝
    20.42s  user  발화 시작: 이천백달러요? 생각보다 비싸네요. 좀 더 저렴한 호텔은 없을까요?
    25.47s  user  발화 끝
    25.80s  agent 발화 시작: 음… 다른 호텔을 찾아볼까요? 어떤 기준으로 저렴한 호텔을 찾으시겠어요?
    28.71s  user  발화 시작: 응.
    29.20s  user  발화 끝
    31.09s  agent 발화 시작: 주변에 비슷한 조건의 호텔을 찾아보고 있는데—
    31.13s  agent 발화 끝
    33.34s  user  발화 시작: …해변 근처는 꼭이어야 해요? 조금 멀어도 괜찮으니 더 싼 곳으로 알아봐 줘.
    34.13s  agent 발화 끝
    38.75s  <ret> 발화 (turn8 첫 프레임)
    38.80s  user  발화 끝
    38.90s  agent 발화 시작: <ret> 네, 해변 근처가 아니어도 괜찮으시다면 더 저렴한 호텔을 찾아볼 수 있습니다.
    39.95s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.62s]: (tool result) hotels: [hotel_name: Pacific Shores Inn, price_per_night
    43.36s  agent 발화 시작: 샌디에이고에서 이월 십일부터 칠박, 방 세 개, 최대 천오백달러로 검색해 본 결과— 퍼시픽 쇼어즈 인은 일박
    43.52s  agent 발화 끝
    59.18s  agent 발화 끝
