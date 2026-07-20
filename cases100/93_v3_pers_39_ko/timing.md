# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "연서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "learning",
#       "text": "User is studying for a driving test."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Georgian."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "bloodtype",
#       "text": "User's blood type is O+."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "skill",
#       "text": "User is getting fairly good at freediving."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "partner",
#       "text": "User's partner is named Kenji."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "anniversary",
#       "text": "User's anniversary is May 23."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2025-12-23",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 연서님. 저는 멘이라고 해요. 새로운 직장에서 잘 적응하실 수 있도록 돕는 웰니스 코치랍니다.
     3.67s  user  발화 시작: 네.
     4.17s  user  발화 끝
     8.06s  agent 발화 끝
     8.11s  user  발화 시작: 그런데, 제가 뭘 어떻게 해야 한다고요? 그냥 힘든 게 많아서요.
    13.25s  user  발화 끝
    13.42s  agent 발화 시작: 새로운 환경에 적응하는 건 당연히 힘든 일이죠. 우선, 지금 가장 걱정되는 부분이 무엇인지 말씀해 주시겠어요
    26.64s  agent 발화 끝
    26.68s  user  발화 시작: … 혹시, 제가 너무 완벽하게 하려고 하는 건 아닐까요? 모든 걸 다 잘해야 할 것 같아서 부담스러워요.
    33.73s  user  발화 끝
    33.75s  agent 발화 시작: 완벽주의는 흔한 어려움이에요 —
    35.67s  user  발화 시작: 완벽주의 때문에 스트레스를 많이 받아요. 어떻게 해야 할까요?
    36.34s  agent 발화 끝
    40.66s  user  발화 끝
    40.81s  agent 발화 시작: 완벽주의는 스스로에게 높은 기준을 세우는 것에서 시작되지만, 때로는 오히려 성장을 방해할 수 있어요. 작은 
    56.17s  agent 발화 끝
