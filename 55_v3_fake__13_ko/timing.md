# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "노빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범은 언제 나오나요? 이천십오년에 발매된다 | S2 데미 로바토는 그 앨범 이후에 또 다른 앨범을 냈나요? | S3 맞아요. 그런데 그 앨범에 대해서 더 자세히 알고 싶어요. | S4 아, 그렇군요. 감정적으로 솔직한 앨범이라니, 흥미롭네요.

     0.00s  user  발화 시작: 데미 로바토의 새 앨범은 언제 나오나요? 이천십오년에 발매된다고 들었는데…
     4.58s  <ret> 발화 (turn1 첫 프레임)
     4.73s  agent 발화 시작: <ret> 데미 로바토의 다섯 번째 스튜디오 앨범, “Confident”가 이천십오년 십월에 발매되었어요.
     4.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.56s]: Demi Lovato’s fifth studio album, “Confident”, was released in October
     4.96s  user  발화 끝
     8.53s  user  발화 시작: 네네.
     9.35s  user  발화 끝
    10.29s  agent 발화 끝
    11.37s  user  발화 시작: 아, 그렇군요. 그 앨범에 수록된 노래 중에 가장 인기 있는 곡은 뭐예요?
    15.85s  user  발화 끝
    15.97s  <ret> 발화 (turn4 첫 프레임)
    16.05s  agent 발화 시작: <ret> “Confident” 앨범의 리드 싱글인 “Cool for the Summer”가 지금까지 데미 
    16.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: “Cool for the Summer” was the lead single from Demi Lovato’s “Confiden
    19.82s  user  발화 시작: 음.
    20.27s  user  발화 끝
    22.30s  agent 발화 끝
    22.37s  agent 발화 시작: 이 곡은 많은 사랑을 받았고, 많은 차트에서 상위권을 차지했답니다.
    26.63s  agent 발화 끝
    26.84s  user  발화 시작: 음… 그 앨범이 발매된 지 벌써 팔년이나 되었네요. 시간이 정말 빠르다는 생각이 드네요.
    33.32s  user  발화 끝
    33.47s  agent 발화 시작: 맞아요, 시간은 정말 빠르게 흘러가는 것 같아요. 우리가 추억하는 순간들은 그렇게 쌓여가죠.
    37.22s  user  발화 시작: 예.
    37.71s  user  발화 끝
    40.55s  agent 발화 끝
    41.37s  user  발화 시작: 데미 로바토는 그 앨범 이후에 또 다른 앨범을 냈나요?
    45.59s  <ret> 발화 (turn11 첫 프레임)
    45.67s  agent 발화 시작: <ret> “Confident” 이후에 이천십칠년 구월에 “Tell Me You Love Me”라는 앨범을 
    45.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: Demi Lovato released “Tell Me You Love Me” in September 2017, followin
    45.85s  user  발화 끝
    47.41s  user  발화 시작: 네.
    48.00s  user  발화 끝
    51.65s  agent 발화 끝
    51.70s  user  발화 시작: 이천십칠년 구월이라고요? 그 앨범도 꽤 오랫동안 기억에 남아있네요.
    56.56s  user  발화 끝
    56.57s  agent 발화 시작: 기억이란 참 신기한 능력인 것 같아요— 우리가 경험했던 감정들을 다시 떠올리게 해 주니까요.
    59.25s  user  발화 시작: 네.
    59.93s  user  발화 끝
    62.08s  agent 발화 끝
    62.44s  user  발화 시작: 맞아요. 그런데 그 앨범에 대해서 더 자세히 알고 싶어요.
    66.60s  agent 발화 시작: 그 앨범은…—
    66.74s  user  발화 끝
    67.06s  user  발화 시작: …그 앨범의 주요 테마는 무엇이었나요?
    67.70s  agent 발화 끝
    69.45s  <ret> 발화 (turn19 첫 프레임)
    69.77s  agent 발화 시작: <ret> “Tell Me You Love Me”는 취약성, 감정적 진실성, 그리고 복잡한 로맨틱 관계의 주
    69.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.66s]: “Tell Me You Love Me” explores themes of vulnerability, emotional hone
    69.97s  user  발화 끝
    80.40s  user  발화 시작: 아, 그렇군요. 감정적으로 솔직한 앨범이라니, 흥미롭네요.
    80.43s  agent 발화 끝
    84.18s  <ret> 발화 (turn21 첫 프레임)
    84.49s  agent 발화 시작: <ret> 때로는 자신의 내면을 솔직하게 드러내는 것이 어려울 수 있지만, 그 안에서 성장할 수 있는 기회를
    84.50s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.42s]: The average temperature in Buenos Aires today is 18.5°C with a humidit
    84.56s  user  발화 끝
    89.35s  user  발화 시작: 맞아요.
    89.98s  user  발화 끝
    91.87s  user  발화 시작: 맞는 말씀이에요. 자기 자신에게 솔직해지는 것은 정말 중요한 것 같아요.
    91.91s  agent 발화 끝
    96.67s  agent 발화 시작: 스스로를 알아가는 과정은 때로는 힘들지만, 그만큼 가치 있는 여정이기도 하죠.
    96.68s  user  발화 끝
   101.48s  agent 발화 끝
