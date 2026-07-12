# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "예완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-14",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 예완님, 안녕하세요. 저는 당신의 숙면과 휴식을 돕는 도라로입니다. 편안한 밤을 위한 이야기를 나누고 싶어요
     7.78s  user  발화 시작: 도라로요? 이름이 특이하네요. 혹시… 잠자는 걸 도와주는 로봇 같은 건가요?
     7.78s  agent 발화 끝
    13.33s  agent 발화 시작: 로봇은 아니랍니다. 예완님, 혹시 요즘 잠자리에 드는 게 힘든가요? 어떤 점이 가장 걱정되시는지 말씀해 주시
    13.33s  user  발화 끝
    23.88s  user  발화 시작: 그치.
    23.88s  agent 발화 끝
    24.44s  user  발화 시작: 사실 잠은 잘 자는데, 자꾸 새벽에 깨서 다시 잠들기가 너무 어려워요.
    24.44s  user  발화 끝
    30.55s  agent 발화 시작: 새벽에 깨는군요. 그럴 땐 어떤 생각들이 떠오르나요? 혹시 낮 동안 스트레스받았던 일들이 떠올라서 잠을 방해
    30.55s  user  발화 끝
    39.99s  agent 발화 끝
