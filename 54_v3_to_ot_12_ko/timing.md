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

# EXAMINER(FDB-v2) 단계: S1 비트 잇 기타 솔로를 누가 연주했는지 궁금해요. | S2 잠깐만, 그거 진짜 대박이다! | S3 그분 다른 유명한 곡도 있어요? | S4 아, '점프'는 정말 신나는 곡이죠.

     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     2.72s  <ret> 발화 (turn1 첫 프레임)
     3.04s  agent 발화 시작: <ret> 마이클 잭슨의 '비트 잇' 기타 솔로는… 에디 밴 헤일런이 연주했어요.
     3.15s  user  발화 끝
     4.56s  user  발화 시작: 맞아요.
     4.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.11s]: [source: Wikipedia] "Eddie Van Halen performed the guitar solo on Mich
     5.05s  user  발화 끝
     7.15s  agent 발화 끝
     8.14s  user  발화 시작: 잠깐만, 그거 진짜 대박이다!
    10.43s  user  발화 시작: 그분 다른 유명한 곡도 있어요?
    10.53s  user  발화 끝
    12.49s  <ret> 발화 (turn5 첫 프레임)
    12.57s  agent 발화 시작: <ret> 에디 밴 헤일런의 유명한 곡으로는 '이럽션', '파나마', '점프', '핫 포 티처', '에인트 
    12.68s  user  발화 끝
    14.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: "(tool result) Eruption, Panama, Jump, Hot for Teacher, and Ain't Talk
    18.87s  agent 발화 끝
    18.93s  user  발화 시작: 아, '점프'는 정말 신나는 곡이죠.
    21.16s  agent 발화 시작: '점프'는 듣는 사람을 정말 활기차게 만드는 곡인 것 같아요.
    21.23s  user  발화 끝
    24.71s  agent 발화 끝
