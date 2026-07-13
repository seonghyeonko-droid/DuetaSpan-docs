# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "연희",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 연희님. 저는 아레리예요. 건강과 일상 습관을 함께 만들어가는 안내자랍니다.
     5.11s  user  발화 시작: 아레리요? 이름이 좀 독특하네요. 혹시… 제가 좀 더 건강해질 수 있게 도와주는 거예요?
     5.11s  agent 발화 끝
    11.75s  agent 발화 시작: 네, 맞아요. 균형 잡힌 식단, 충분한 수분 섭취, 그리고 꾸준한 운동 습관을 만드는 걸 도와드릴 수 있어요
    11.75s  user  발화 끝
    20.43s  user  발화 시작: 음.
    20.43s  agent 발화 끝
    20.94s  agent 발화 시작: 요즘 스트레스가 많으신가요? 스트레스는 건강에 큰 영향을 미치거든요. 가벼운 스트레칭이나 명상을 통해 해소하
    20.94s  user  발화 끝
    29.12s  user  발화 시작: 잠깐만요, 스트레칭은 어떻게 해야 할지 잘 모르겠어요. 혹시 쉬운 동작 몇 가지 알려주실 수 있나요?
    29.12s  agent 발화 끝
    36.78s  agent 발화 시작: 네.
    36.78s  user  발화 끝
    37.29s  agent 발화 시작: 의자에 앉은 상태에서 어깨를 돌리거나, 목을 좌우로 천천히 기울이는 동작부터 시작해 볼 수 있어요.
    37.29s  agent 발화 끝
    44.44s  agent 발화 끝
