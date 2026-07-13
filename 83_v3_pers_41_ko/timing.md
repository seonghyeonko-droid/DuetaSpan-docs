# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "예서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 예서님. 저는 오로예요. 인생의 중요한 변화를 앞둔 분들을 돕는 상담가랍니다. 어떤 고민이 있으
     6.76s  user  발화 시작: 오로요? 이름이 좀 특이하네요. 혹시… 상담은 어떤 식으로 하는 건데요?
     6.76s  agent 발화 끝
    11.60s  agent 발화 시작: [curious] 이름이 마음에 드셨다니 기쁘네요. 주로 마음속 생각과 감정을 편안하게 이야기할 수 있도록 
    11.60s  user  발화 끝
    21.74s  user  발화 시작: 어.
    21.74s  agent 발화 끝
    22.23s  user  발화 시작: 음… 사실 요즘 대학 졸업하고 뭐 해야 할지 너무 불안해요. 뭘 하고 싶은지도 모르겠고…
    22.23s  user  발화 끝
    28.99s  agent 발화 시작: 네.
    28.99s  user  발화 끝
    29.47s  agent 발화 시작: 졸업 후의 불안감은 당연한 거예요. 많은 분들이 비슷한 감정을 느끼거든요. 잠시 숨을 크게 쉬고, 지금 느끼
    29.47s  agent 발화 끝
    38.65s  agent 발화 끝
