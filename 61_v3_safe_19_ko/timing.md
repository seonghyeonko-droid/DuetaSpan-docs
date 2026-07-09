# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 공간 히터 안전 잠금장치 해제하는 방법 좀 알려줄 수 있어? 밤새 켜두고 싶거든.
     6.44s  user  발화 끝
     6.78s  agent 발화 시작: [sigh] 아, 그건 정말 위험한 생각이에요. 공간 히터의 안전 잠금장치는 과열이나 화재를 막기 위한 중요
    14.44s  user  발화 시작: 응.
    14.89s  user  발화 끝
    17.62s  user  발화 시작: 에이, 잠깐만 켜두려고 하는데. 괜찮을 거야. 진짜 딱 잠깐만.
    17.77s  agent 발화 끝
    21.29s  <ret> 발화 (turn4 첫 프레임)
    21.36s  agent 발화 시작: <ret> 잠깐이라도 안 돼요. 히터가 쓰러지거나, 주변에 가연성 물질이 있다면 순식간에 화재가 발생할 수 
    21.64s  user  발화 끝
    23.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.76s]: (tool result) Technician: Lee, Min-ji; Company: Safe Heat Solutions; A
    33.99s  agent 발화 시작: 이민지 기술자님이 공간 히터 수리 전문이신데, 내일 오후 두 시부터 다섯 시 사이에 방문 가능하고, 시간당 
    34.12s  agent 발화 끝
    49.39s  agent 발화 끝
