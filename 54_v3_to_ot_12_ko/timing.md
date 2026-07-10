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

# EXAMINER(FDB-v2) 단계: S1 비트 잇 기타 솔로를 누가 연주했는지 궁금해요. | S2 아, 죄송해요. 그 에디 반 헤일런은 다른 유명한 곡도 많이  | S3 좋은 생각이에요. 혹시 지금 그… | S4 …'Eruption'을 바로 틀어볼 수 있을까요?

     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     2.78s  <ret> 발화 (turn1 첫 프레임)
     3.05s  user  발화 끝
     3.10s  agent 발화 시작: <ret> 마이클 잭슨의 '비트 잇' 기타 솔로는 에디 반 헤일런이 연주했습니다. 기타 연주 스타일이 정말 
     4.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: Eddie Van Halen wrote the guitar solo for Michael Jackson's "Beat It".
     8.16s  user  발화 시작: 맞아요.
     8.79s  user  발화 끝
     9.80s  user  발화 시작: 어휴, 잠깐만요. 제가 지금 통화 중이거든요.
     9.82s  agent 발화 끝
    12.89s  user  발화 시작: 아, 죄송해요. 그 에디 반 헤일런은 다른 유명한 곡도 많이 했어요?
    12.94s  user  발화 끝
    17.62s  <ret> 발화 (turn5 첫 프레임)
    17.70s  agent 발화 시작: <ret> 에디 반 헤일런은 'Van Halen' 밴드의 기타리스트였고, 'Eruption'이나 'Jump'
    17.89s  user  발화 끝
    19.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: Eddie Van Halen was the guitarist for the band Van Halen, known for so
    23.08s  user  발화 시작: 네.
    23.71s  user  발화 끝
    24.89s  agent 발화 시작: 기타 솔로를 듣는 것만큼 스트레스 해소에 좋은 게 또 없죠. 잠시 음악을 듣는 시간을 가져보시는 건 어떠세요
    24.93s  agent 발화 끝
    30.90s  agent 발화 끝
    32.03s  user  발화 시작: 좋은 생각이에요. 혹시 지금 그…
    34.57s  user  발화 끝
    35.68s  user  발화 시작: …'Eruption'을 바로 틀어볼 수 있을까요?
    37.51s  <ret> 발화 (turn10 첫 프레임)
    37.75s  user  발화 끝
    37.75s  agent 발화 시작: <ret> 'Eruption'을 틀어 드릴게요. 반 헤일런의 기타 연주를 감상하면서 편안한 시간을 보내세요.
    38.71s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.19s]: Eruption — Van Halen (Van Halen, 1978); Jump — Van Halen (1984); …
    42.94s  agent 발화 끝
