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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요. | S2 아니요, 저는 그냥 듣는 걸 좋아해요.… | S3 맞아요, 저도 그래요. 데미 로바토 콘서트 티켓 예매는 어떻게 | S4 … 혹시 VIP 좌석도 있나요?

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요.
     4.52s  <ret> 발화 (turn1 첫 프레임)
     4.68s  agent 발화 시작: <ret> 이천십오년 십월에 발매될 예정이에요. 요즘 음악 작업은 어떻게 하고 계신가 궁금하네요.
     4.86s  user  발화 끝
     6.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: October 2015.
     8.51s  user  발화 시작: 네네.
     9.23s  user  발화 끝
    10.28s  agent 발화 끝
    11.37s  user  발화 시작: 아, 그럼 지금은 무슨 앨범 작업하고 있을까요?
    14.18s  user  발화 끝
    14.63s  agent 발화 시작: 지금 무슨 앨범을 작업하고 계신지는 정확히 알 수 없지만, 꾸준히 활동하고 계시는 것 같아요.
    18.36s  user  발화 시작: 음.
    18.58s  user  발화 끝
    20.79s  agent 발화 끝
    20.89s  agent 발화 시작: 새로운 음악을 만드는 과정은 때로는 어려움도 따르지만, 창작의 기쁨이 크다고 생각해요. 혹시 본인도 음악을 
    28.57s  agent 발화 끝
    28.77s  user  발화 시작: 아니요, 저는 그냥 듣는 걸 좋아해요.…
    31.36s  user  발화 끝
    33.09s  user  발화 시작: …그런데 요즘 다른 가수들은 어떻게 지내는지 궁금하네요.
    36.85s  <ret> 발화 (turn9 첫 프레임)
    37.17s  agent 발화 시작: <ret> 요즘은 다양한 플랫폼을 통해 쉽게 정보를 얻을 수 있으니, 관심 있는 가수를 찾아보시는 것도 좋을
    37.25s  user  발화 끝
    37.89s  ⚡SPAN 주입(IRRELEVANT) [d'=1.04s / d_lead=5.97s]: The current temperature in Tokyo is 28.5°C, humidity 68%, wind 3.2 km/
    43.14s  agent 발화 끝
    43.22s  agent 발화 시작: 음악을 통해 위로를 받거나 에너지를 얻는 경험은 정말 소중한 것 같아요.
    45.56s  user  발화 시작: 예.
    46.06s  user  발화 끝
    47.70s  agent 발화 끝
    47.85s  user  발화 시작: 맞아요, 저도 그래요. 데미 로바토 콘서트 티켓 예매는 어떻게 해야 하나요?
    52.47s  <ret> 발화 (turn13 첫 프레임)
    52.78s  agent 발화 시작: <ret> 이천이십사년 십이월 이십오일에 스테이플스 센터에서 데미 로바토 콘서트 티켓을 예매하실 수 있어요.
    52.99s  user  발화 끝
    54.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.65s]: (tool result) Event: Demi Lovato Concert, Location: Staples Center, Da
    56.23s  user  발화 시작: 네.
    56.73s  user  발화 끝
    64.43s  agent 발화 끝
    64.50s  user  발화 시작: 혹시 좌석은 남아있을까요?
    66.57s  user  발화 끝
    66.59s  agent 발화 시작: 좌석 상황은 실시간으로 변동될 수 있기 때문에—
    68.87s  user  발화 시작: … 혹시 VIP 좌석도 있나요?
    69.50s  agent 발화 끝
    71.21s  agent 발화 시작: 네, VIP 좌석도 있습니다. VIP 좌석은 무대 바로 앞이라 더욱 특별한 경험을 하실 수 있을 거예요.
    71.41s  user  발화 끝
    77.83s  agent 발화 끝
    77.92s  agent 발화 시작: VIP 좌석은 일반 좌석보다 가격이 조금 더 비싸지만, 잊지 못할 추억을 만들 수 있을 거라고 생각해요.
    84.41s  agent 발화 끝
