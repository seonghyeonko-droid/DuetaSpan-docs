# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "재찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 재찬님. 저는 오렐랄이라고 해요. 오늘 하루는 어떠셨어요?
     4.85s  user  발화 시작: 안녕하세요, 오렐랄님. 그냥 그랬어요. 요즘 좀 피곤하네요.
     4.85s  agent 발화 끝
     9.02s  <ret> 발화 (turn2 첫 프레임)
     9.10s  agent 발화 시작: <ret> 피곤하시다니, 안타깝네요. 혹시 최근에 계획하셨던 여행에 대해 이야기해 볼까요?
     9.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: [2026-04-29] User is planning a trip to Lisbon in March.
     9.10s  user  발화 끝
    14.56s  agent 발화 시작: 재찬님께서 내년 삼월에 리스본으로 여행을 계획하고 계시다는 걸 기억하고 있어요.
    14.56s  agent 발화 끝
    20.62s  user  발화 시작: 아.
    20.62s  agent 발화 끝
    21.23s  agent 발화 시작: 리스본 여행 준비는 잘 되어 가시나요? 혹시 필요한 정보가 있다면 말씀해 주세요.
    21.23s  user  발화 끝
    28.51s  user  발화 시작: 리스본…아, 맞다. 그때 숙소 예약을 아직 안 했었어요.
    28.51s  agent 발화 끝
    33.28s  <ret> 발화 (turn7 첫 프레임)
    33.36s  agent 발화 시작: <ret> 리스본에서 오십달러부터 이백오십달러까지 다양한 가격대의 호텔 열두곳을 찾았어요.
    33.36s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.85s]: (tool result) Found 12 hotels in Lisbon, Portugal. Prices range from $
    33.36s  user  발화 끝
    38.21s  agent 발화 시작: 마음에 드는 호텔을 찾으셨으면 예약해 드릴 수도 있습니다.
    38.21s  agent 발화 끝
    43.07s  agent 발화 끝
