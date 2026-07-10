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
     2.83s  <ret> 발화 (turn1 첫 프레임)
     3.15s  agent 발화 시작: <ret> 에디 반 헤일런이 마이클 잭슨의 '비트 잇' 기타 솔로를 연주했습니다. 정말 유명한 연주죠.
     3.24s  user  발화 끝
     4.27s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.19s]: Eddie Van Halen wrote the guitar solo for Michael Jackson's "Beat It".
     7.03s  user  발화 시작: 맞아요.
     7.53s  user  발화 끝
     8.34s  agent 발화 끝
     9.50s  user  발화 시작: 어머, 진짜? 나 그 기타리스트 이름 까먹었었네.
    13.18s  user  발화 시작: 혹시 그분이 다른 유명한 곡도 많이 하셨나요?
    13.24s  user  발화 끝
    16.16s  <ret> 발화 (turn5 첫 프레임)
    16.32s  agent 발화 시작: <ret> 네, 에디 반 헤일런은 밴드 반 헤일런의 리드 기타리스트이자 창립 멤버였습니다.
    16.41s  user  발화 끝
    18.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: Eddie Van Halen was the lead guitarist and founder of the band Van Hal
    19.48s  user  발화 시작: 네.
    19.98s  user  발화 끝
    20.75s  agent 발화 시작: 반 헤일런은 천구백칠십이년에 결성되었고, 록 음악에 큰 영향을 주었습니다.
    20.81s  agent 발화 끝
    25.74s  agent 발화 끝
