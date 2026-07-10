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
     3.27s  <ret> 발화 (turn1 첫 프레임)
     3.59s  agent 발화 시작: <ret> 마이클 잭슨의 '비트 잇' 기타 솔로는 에디 반 헤일런이 연주했답니다. 기타 연주 스타일이 정말 
     3.70s  user  발화 끝
     5.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: Eddie Van Halen wrote the guitar solo for Michael Jackson's "Beat It".
     8.42s  user  발화 시작: 맞아요.
     9.23s  user  발화 끝
    10.03s  agent 발화 끝
    11.16s  user  발화 시작: 어휴, 잠깐만요.
    12.70s  user  발화 시작: 아, 죄송해요. 그, 에디 반 헤일런은 다른 유명한 곡도 많이 했나요?
    12.76s  user  발화 끝
    17.50s  <ret> 발화 (turn5 첫 프레임)
    17.58s  agent 발화 시작: <ret> 에디 반 헤일런은 이천칠년에 로큰롤 명예의 전당에 헌액되었어요. 정말 대단한 기타리스트셨죠.
    17.61s  user  발화 끝
    19.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: Eddie Van Halen was inducted into the Rock and Roll Hall of Fame in 20
    22.03s  user  발화 시작: 네.
    22.57s  user  발화 끝
    23.60s  agent 발화 끝
