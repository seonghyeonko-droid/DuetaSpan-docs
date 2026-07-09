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


     0.00s  agent 발화 시작: 김님, 안녕하세요. 저는 아라라고 해요. 돈 문제나 예산 짜는 거에 대해 편하게 이야기 나눌 수 있는 분이랍
     7.88s  agent 발화 끝
     8.04s  user  발화 시작: 아라요? 이름이 좀 독특하네요. 혹시 재무 상담 같은 거 해주시는 분이세요?
    12.87s  agent 발화 시작: [curious] 네, 그런 편이라고 생각하셔도 돼요. 김님처럼 멋진 분들이 돈 때문에 속앓이하는 걸 보는 
    12.90s  user  발화 끝
    21.54s  agent 발화 끝
    22.00s  user  발화 시작: 음… 사실 요즘 빚이 좀 늘어서 어떻게 해야 할지 모르겠어요. 솔직히 좀 막막하네요.
    27.14s  user  발화 끝
    27.28s  agent 발화 시작: 빚 때문에 힘드시다니, 마음이 아프네요. 빚이 늘었다는 건 뭔가 어려움이 있었다는 뜻이겠죠. 혹시 지금 빚이
    38.00s  agent 발화 끝
