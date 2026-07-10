# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "서빈",
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
#       "date": "2026-05-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 비트 잇 기타 솔로를 누가 연주했는지 궁금해요. | S2 어머, 진짜? 나 그 사람 완전 좋아하는데. | S3 잠깐만요… | S4 아, 그러시군요. 그럼, 에디 반 헤일런은 어떤 기타를 주로 

     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     2.93s  <ret> 발화 (turn1 첫 프레임)
     3.25s  agent 발화 시작: <ret> 마이클 잭슨의 "비트 잇" 기타 솔로는 에디 반 헤일런이 연주했어요.
     3.25s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.88s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     3.33s  user  발화 끝
     4.74s  user  발화 시작: 맞아요.
     5.38s  user  발화 끝
     7.13s  agent 발화 끝
     8.30s  user  발화 시작: 어머, 진짜? 나 그 사람 완전 좋아하는데.
    10.88s  user  발화 끝
    10.91s  user  발화 시작: 잠깐만요…
    11.89s  <ret> 발화 (turn5 첫 프레임)
    12.05s  agent 발화 시작: <ret> 죄송하지만, 그 부분에 대한 추가 정보는 찾을 수 없었어요.
    12.05s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.23s]: (no information found)
    12.06s  user  발화 끝
    15.28s  agent 발화 끝
    15.35s  user  발화 시작: 아, 그러시군요. 그럼, 에디 반 헤일런은 어떤 기타를 주로 사용했죠?
    19.92s  <ret> 발화 (turn7 첫 프레임)
    20.24s  agent 발화 시작: <ret> 에디 반 헤일런은 기타를 많이 개조하는 것으로 유명했는데, 특히 천구백칠십팔년 크래머 기타를 자주
    20.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.39s]: (tool result) Eddie Van Halen was known for heavily modifying his guit
    20.35s  user  발화 끝
    30.63s  agent 발화 끝
