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


     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     3.25s  <ret> 발화 (turn1 첫 프레임)
     3.48s  agent 발화 시작: <ret> 비트 잇 기타 솔로 연주자에 대해 알아보고 있습니다.
     3.70s  user  발화 끝
     4.79s  user  발화 시작: 맞아요.
     5.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.61s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     5.33s  user  발화 끝
     7.09s  agent 발화 끝
     8.45s  user  발화 시작: 잠깐만, 지금 뭐랬지?
     9.93s  user  발화 시작: 아, 죄송해요. 에디 밴 헤일런이라고 하셨죠?
    10.20s  user  발화 끝
    12.52s  user  발화 끝
    12.56s  agent 발화 시작: 네, 맞습니다. 에디 밴 헤일런이 연주했고요, 그분은 정말 뛰어난 기타리스트입니다.
    17.89s  agent 발화 끝
