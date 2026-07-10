# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "노빈",
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
#       "date": "2026-04-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 매닉 스트리트 프리처스의… | S2 …기타리스트 리치 에드워즈에 대해 아세요? | S3 실종됐다고요? 어떻게 된 일이었죠? | S4 … 혹시 그의 마지막 모습이 담긴 사진 같은 건 없나요?

     0.00s  user  발화 시작: 혹시 매닉 스트리트 프리처스의…
     3.05s  user  발화 끝
     5.10s  user  발화 시작: …기타리스트 리치 에드워즈에 대해 아세요?
     7.12s  <ret> 발화 (turn2 첫 프레임)
     7.44s  agent 발화 시작: <ret> 리치 에드워즈는 웨일즈 록 밴드 매닉 스트리트 프리처스의 리듬 기타리스트이자 작사가였는데, 천구백
     7.44s  ⚡SPAN 주입 [d'=1.76s / d_lead=10.29s]: Richey Edwards was the rhythm guitarist and lyricist for the Welsh roc
     7.69s  user  발화 끝
    17.73s  agent 발화 끝
    18.38s  user  발화 시작: 실종됐다고요? 어떻게 된 일이었죠?
    20.74s  agent 발화 시작: 실종 당시 상황에 대해 좀 더 자세히 말씀드릴게요 —
    20.92s  user  발화 끝
    22.82s  user  발화 시작: … 혹시 그의 마지막 모습이 담긴 사진 같은 건 없나요?
    23.60s  agent 발화 끝
    26.71s  <ret> 발화 (turn6 첫 프레임)
    26.78s  agent 발화 시작: <ret> 리치 에드워즈가 마지막으로 확인된 건 천구백구십오년 이월 일일 아침 런던 엠버시 호텔에서 체크아웃
    26.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.54s]: The last confirmed sighting of Richey Edwards was on the morning of Fe
    26.88s  user  발화 끝
    40.33s  agent 발화 끝
