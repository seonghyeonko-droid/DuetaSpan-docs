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


     0.00s  user  발화 시작: 비트 잇 기타 솔로 누가 연주했는지 궁금해요.
     3.03s  <ret> 발화 (turn1 첫 프레임)
     3.11s  agent 발화 시작: <ret> 마이클 잭슨의 “비트 잇” 기타 솔로는 에디 밴 헤일런이 연주했습니다.
     3.15s  user  발화 끝
     4.63s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.74s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     5.79s  user  발화 시작: 맞아요.
     6.24s  user  발화 끝
     6.75s  user  발화 시작: 에디 밴 헤일런… 잠깐만, 엄마, 저녁 뭐 먹을까?
     6.86s  agent 발화 끝
     9.09s  user  발화 시작: 엄마, 저녁 뭐 먹을까?
     9.14s  user  발화 끝
    11.53s  agent 발화 시작: 아, 에디 밴 헤일런은 굉장히 혁신적인 기타리스트였죠.
    11.79s  user  발화 끝
    13.60s  user  발화 시작: 네.
    14.34s  agent 발화 시작: 기타 연주 스타일이 정말 독특해서 많은 기타리스트들에게 영향을 줬어요.
    14.58s  agent 발화 끝
    16.97s  user  발화 끝
    19.06s  agent 발화 끝
