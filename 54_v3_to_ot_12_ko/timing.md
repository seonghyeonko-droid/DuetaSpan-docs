# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     3.39s  <ret> 발화 (turn1 첫 프레임)
     3.65s  user  발화 끝
     3.70s  agent 발화 시작: <ret> 그 기타 솔로는 정말 유명하죠. 에디 밴 헤일런이 그 기타 솔로를 연주했어요.
     4.83s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.55s]: Eddie Van Halen.
     8.14s  user  발화 시작: 맞아요.
     8.77s  user  발화 끝
     9.81s  agent 발화 끝
    10.41s  user  발화 시작: 잠깐만, 엄마! 제가 지금 통화 중이시거든요.
    14.30s  user  발화 시작: 아, 네. 에디 밴 헤일런이었군요. 혹시 다른 유명한 곡도 연주했나요?
    14.34s  user  발화 끝
    19.58s  user  발화 끝
    19.74s  agent 발화 시작: 에디 밴 헤일런은 밴 헤일런 밴드의 기타리스트로도 아주 유명하답니다.
    23.28s  user  발화 시작: 네.
    23.58s  user  발화 끝
    24.52s  agent 발화 시작: 그의 연주는 혁신적이었다고 평가받고 있어요. 스트레스 해소에 도움이 될 만큼 열정적인 연주였죠.
    24.74s  agent 발화 끝
    30.54s  agent 발화 끝
