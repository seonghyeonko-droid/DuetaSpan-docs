# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Kim",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-04",
#       "category": "home",
#       "text": "User's home address is 165 Cedar Lane."
#     },
#     {
#       "date": "2026-07-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-07-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 김님, 안녕하세요. 저는 아라예요. 돈 문제나 예산 짜는 일로 고민이실 때 편하게 이야기 나누실 수 있도록 
     9.18s  agent 발화 끝
     9.27s  user  발화 시작: [surprised] 아라요? 이름이 예쁘네요. 그런데 돈 문제라… 사실 좀 막막해서요.
    14.60s  agent 발화 시작: 막막하시다는 말씀, 공감돼요. 돈 문제 때문에 답답한 마음이 드는 건 자연스러운 일이니까요. 혹시 지금 가장
    14.60s  user  발화 끝
    23.40s  agent 발화 끝
    23.68s  user  발화 시작: 음… 사실 요즘 집값이 너무 올라서, 앞으로 어떻게 해야 할지 감이 안 잡혀요.
    29.42s  user  발화 끝
    29.55s  agent 발화 시작: 집값이 오르는 추세에 불안감을 느끼시는군요. 혹시 현재 집을 가지고 계신 상황이신가요, 아니면 구매를 고려하
    37.56s  agent 발화 끝
