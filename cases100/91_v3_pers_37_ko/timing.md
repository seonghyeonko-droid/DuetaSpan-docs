# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "재서",
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
#       "date": "2026-06-23",
#       "category": "anniversary",
#       "text": "User's anniversary is February 15."
#     },
#     {
#       "date": "2026-06-20",
#       "category": "skill",
#       "text": "User is a complete beginner at calligraphy."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "diet",
#       "text": "User is halal."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "employer",
#       "text": "User works at an e-commerce company."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "plant",
#       "text": "User is growing a fiddle-leaf fig at home."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "learning",
#       "text": "User is taking pottery classes."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "music",
#       "text": "User likes listening to 90s hip-hop."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: [happy] 재서님, 안녕하세요. 저는 루나르예요. 힘든 이별 후 새로운 시작을 응원하는 상담사랍니다. 혹
     3.73s  user  발화 시작: 네.
     4.22s  user  발화 끝
    10.47s  user  발화 시작: 상담사라고 하셨는데, 그냥 심리 테스트 같은 거 하는 건가요? 좀 불안하네요.
    10.62s  agent 발화 끝
    12.74s  agent 발화 시작: 네.
    13.56s  agent 발화 끝
    14.75s  agent 발화 시작: [curious] 아뇨, 재서님. 심리 테스트처럼 딱딱한 건 아니에요. 힘든 감정을 편안하게 이야기하고, 스
    14.86s  user  발화 끝
    30.38s  agent 발화 끝
    30.98s  user  발화 시작: 음… 전 남자친구가 너무 빨리 다른 사람을 만난 것 같아요. 아직 마음 정리도 못했는데… 자꾸 생각나고, 너
    38.90s  user  발화 끝
    39.08s  agent 발화 시작: [sigh] 재서님, 그 마음 충분히 이해가 가요. 예상치 못한 상황에 부딪혀 마음이 혼란스럽고 아플 수밖에
    54.38s  agent 발화 끝
