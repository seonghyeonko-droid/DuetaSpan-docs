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
#       "text": "User's home address is 657 Elm Street."
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


     0.00s  user  발화 시작: 혹시 마이클 잭슨의 "Beat It" 기타 솔로를 누가 연주했는지 아세요?
     3.60s  <ret> 발화 (turn1 첫 프레임)
     3.92s  agent 발화 시작: <ret> "Beat It" 기타 솔로는 정말 유명하죠. 그 솔로를 연주한 분은… 에디 반 헤일런 입니다.
     4.07s  user  발화 끝
     5.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: Eddie Van Halen played the guitar solo on Michael Jackson's "Beat It".
     6.35s  user  발화 시작: 맞아요.
     6.98s  user  발화 끝
    10.17s  agent 발화 끝
    11.29s  user  발화 시작: 잠깐만, 엄마, 제가 지금 통화 중이에요.
    13.87s  user  발화 끝
    13.98s  <ret> 발화 (turn4 첫 프레임)
    14.05s  agent 발화 시작: <ret> 다시 말씀드리자면, "Beat It" 기타 솔로를 연주한 분은… 에디 반 헤일런입니다… 다시 말씀
    15.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.34s]: (no information found)
    24.40s  agent 발화 끝
    24.86s  user  발화 시작: 와, 에디 반 헤일런이었군요! 정말 대단하네요.
    28.70s  user  발화 끝
    28.85s  agent 발화 시작: 네, 맞아요. 에디 반 헤일런은 기타 연주 실력이 아주 뛰어난 분이셨죠.
    32.78s  agent 발화 끝
