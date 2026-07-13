# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "시정",
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
#       "date": "2026-03-28",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 아이들 키우는 게 참 어렵다. | S2 이번 주말에 아이들이랑 특별한 시간을 보내고 싶은데, 혹시 좋 | S3 …원주민의 날이 언제라고요? | S4 좋은 생각이다. 아이들이랑 같이 박물관에 가볼까?

     0.00s  user  발화 시작: 요즘 아이들 키우는 게 참 어렵다.
     2.81s  agent 발화 시작: 아이들은 정말 소중하지만, 또 걱정도 많이 되죠. 부모님 마음은 다 똑같을 거예요.
     2.81s  user  발화 끝
     8.42s  user  발화 시작: 이번 주말에 아이들이랑 특별한 시간을 보내고 싶은데, 혹시 좋은 아이디어 있을까?
     8.42s  agent 발화 끝
    13.17s  <ret> 발화 (turn3 첫 프레임)
    13.57s  agent 발화 시작: <ret> 특별한 시간을 보내고 싶으시다면, 팔월 구일은 세계 원주민의 날인데 —
    13.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.68s]: The International Day of the World’s Indigenous Peoples is observed an
    13.57s  user  발화 끝
    18.25s  user  발화 시작: …원주민의 날이 언제라고요?
    18.25s  agent 발화 끝
    19.65s  agent 발화 시작: 팔월 구일입니다. 이 날은 원주민들의 필요에 대한 인식을 높이기 위해 기념하는 날이죠.
    19.65s  user  발화 끝
    25.26s  user  발화 시작: 그래.
    25.26s  agent 발화 끝
    25.73s  agent 발화 시작: 아이들과 함께 원주민 문화에 대해 배우는 건 어떠세요? 다양한 문화 경험은 아이들에게 좋은 영향을 줄 수 있
    25.73s  user  발화 끝
    33.69s  user  발화 시작: 좋은 생각이다. 아이들이랑 같이 박물관에 가볼까?
    33.69s  agent 발화 끝
    36.49s  user  발화 끝
