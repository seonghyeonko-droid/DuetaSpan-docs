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


     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     2.69s  <ret> 발화 (turn1 첫 프레임)
     3.01s  agent 발화 시작: <ret> 에디 반 헤일런 씨가 마이클 잭슨의 '비트 잇' 기타 솔로를 연주했습니다.
     3.05s  user  발화 끝
     4.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: Eddie Van Halen wrote the guitar solo for Michael Jackson's "Beat It".
     6.11s  user  발화 시작: 맞아요.
     6.93s  user  발화 끝
     7.17s  agent 발화 끝
     8.34s  user  발화 시작: 어머, 진짜? 그 기타리스트 엄청 유명하잖아.
    11.50s  user  발화 시작: 혹시 그분이 다른 유명한 곡도 많이 연주했나요?
    11.57s  user  발화 끝
    14.55s  user  발화 끝
    14.73s  agent 발화 시작: 에디 반 헤일런은 여러 곡에서 기타 연주를 맡았는데, 어떤 곡에 대해 더 자세히 알고 싶으신가요?
    18.70s  user  발화 시작: 네.
    19.25s  user  발화 끝
    20.11s  agent 발화 끝
    20.22s  agent 발화 시작: 혹시 반 헤일런 밴드의 곡을 좋아하시는지 여쭤봐도 될까요? 그쪽 음악도 꽤 유명하거든요.
    25.22s  agent 발화 끝
