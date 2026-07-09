# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-06-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범은 언제 나오나요? 이천십오년 기준으로요 | S2 잠깐만요, 혹시 그 앨범의 장르가 어떻게 되나요? | S3 혹시 그 앨범의 제목이 정해졌나요? | S4 홀로그래픽 레코드군요. 알겠습니다. 감사합니다.

     0.00s  user  발화 시작: 데미 로바토의 새 앨범은 언제 나오나요? 이천십오년 기준으로요.
     4.81s  user  발화 끝
     4.92s  <ret> 발화 (turn1 첫 프레임)
     5.08s  agent 발화 시작: <ret> 아, 데미 로바토의 새 앨범 출시일에 대해 궁금하시군요. 잠시만 확인해 볼게요.
     6.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: October 2015.
    10.37s  agent 발화 시작: 데미 로바토의 새 앨범은 이천십오년 십월에 발매될 예정입니다.
    10.54s  agent 발화 끝
    14.39s  agent 발화 끝
    14.46s  user  발화 시작: 음, 십월이군요. 그 앨범에 어떤 노래들이 들어가나요?
    17.97s  <ret> 발화 (turn4 첫 프레임)
    18.21s  agent 발화 시작: <ret> 앨범에 수록된 노래 목록에 대한 정보는 아직 가지고 있지 않아요. 하지만 데미 로바토는 항상 좋은
    18.26s  user  발화 끝
    19.17s  ⚡SPAN 주입(IRRELEVANT) [d'=1.20s / d_lead=7.46s]: The population of Tokyo is over 13 million people, making it one of th
    25.67s  agent 발화 끝
    25.99s  user  발화 시작: 잠깐만요, 혹시 그 앨범의 장르가 어떻게 되나요?
    29.46s  user  발화 끝
    29.92s  agent 발화 시작: 아, 장르에 대해서 궁금하시군요. 팝 음악을 기반으로 다양한 장르가 혼합될 것으로 예상됩니다.
    36.17s  <ret> 발화 (turn7 첫 프레임)
    36.48s  agent 발화 시작: <ret> 데미 로바토는 다양한 장르를 소화하는 가수입니다. 이천십오년 십월에 발매되는 앨범도 여러 장르가 
    36.55s  agent 발화 끝
    38.09s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.62s]: October 2015.
    39.89s  user  발화 시작: 음.
    40.29s  user  발화 끝
    45.35s  agent 발화 시작: 데미 로바토의 음악은 다양한 감정을 표현하고, 많은 사람들에게 공감을 얻는 것 같아요.
    45.52s  agent 발화 끝
    51.53s  agent 발화 시작: 앨범이 나오면 꼭 들어보시길 바랍니다. 새로운 음악을 통해 또 다른 감동을 받으실 수 있을 거예요.
    51.74s  agent 발화 끝
    57.18s  agent 발화 끝
    57.25s  user  발화 시작: 혹시 그 앨범의 제목이 정해졌나요?
    60.02s  user  발화 끝
    60.25s  agent 발화 시작: 앨범 제목에 대한 공식적인 발표는 아직 없어요. 하지만 곧 공개될 것으로 예상됩니다.
    65.88s  agent 발화 시작: 데미 로바토의 새 앨범에 대한 기대가 점점 커지고 있네요.
    66.05s  agent 발화 끝
    68.69s  user  발화 시작: 음, 기대되네요. 그 앨범은 어떤 회사에서 발매하나요?
    69.34s  agent 발화 끝
    72.23s  <ret> 발화 (turn15 첫 프레임)
    72.37s  agent 발화 시작: <ret> 그 앨범은 홀로그래픽 레코드(Hollywood Records)에서 발매될 예정입니다.
    72.48s  user  발화 끝
    73.51s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.74s]: October 2015.
    75.96s  agent 발화 시작: 데미 로바토의 새 앨범은 이천십오년 십월에 홀로그래픽 레코드에서 발매됩니다.
    76.11s  agent 발화 끝
    77.96s  user  발화 시작: 예.
    78.40s  user  발화 끝
    80.58s  user  발화 시작: 홀로그래픽 레코드군요. 알겠습니다. 감사합니다.
    80.77s  agent 발화 끝
    84.60s  user  발화 끝
    84.84s  agent 발화 시작: 천만에요. 데미 로바토의 새 앨범이 발매되면 꼭 들어보시고, 즐거운 시간 보내세요.
    90.30s  agent 발화 끝
