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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범이 언제 나오나요? 이천십오년 기준으로요. | S2 혹시 그 앨범에 피처링 참여한 가수가 있나요? | S3 이천십오년 십월에 발매된 앨범의 장르는 뭔가요? | S4 혹시 그 앨범의 노래 중 가장 인기 있는 곡은 무엇인가요?

     0.00s  user  발화 시작: 데미 로바토 새 앨범이 언제 나오나요? 이천십오년 기준으로요.
     4.62s  user  발화 끝
     4.74s  <ret> 발화 (turn1 첫 프레임)
     4.89s  agent 발화 시작: <ret> 아, 데미 로바토의 새 앨범 출시 시기를 궁금해하시는군요. 이천십오년 앨범 정보를 찾아볼게요.
     6.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: October 2015.
    11.13s  agent 발화 시작: 데미 로바토의 새 앨범은 이천십오년 십월에 발매될 예정입니다.
    11.33s  agent 발화 끝
    14.97s  agent 발화 끝
    15.09s  user  발화 시작: 음, 그 앨범 제목이 뭐였죠?
    17.03s  user  발화 끝
    17.05s  agent 발화 시작: 앨범 제목을 알려드릴게요. 잠시만 기다려 주세요—
    19.52s  user  발화 시작: 혹시 그 앨범에 피처링 참여한 가수가 있나요?
    20.29s  agent 발화 끝
    22.42s  <ret> 발화 (turn6 첫 프레임)
    22.57s  user  발화 끝
    22.66s  agent 발화 시작: <ret> 아, 네. 앨범에 피처링 참여한 가수에 대해 궁금하시군요.
    23.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.86s]: October 2015.
    27.52s  agent 발화 끝
    27.53s  agent 발화 시작: 이천십오년 십월에 발매된 데미 로바토의 앨범에 대한 피처링 정보는 찾을 수 없었습니다.
    32.58s  user  발화 시작: 아, 그렇군요.
    33.13s  agent 발화 끝
    33.86s  user  발화 끝
    33.96s  <ret> 발화 (turn9 첫 프레임)
    34.28s  agent 발화 시작: <ret> 혹시 다른 앨범에 대해서도 궁금하신 점이 있으신가요? 아티스트의 다른 앨범에 대해서도 자세히 안내
    35.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: October 2015.
    41.78s  agent 발화 시작: 데미 로바토는 이천십오년 십월에 새 앨범을 발매했습니다. 다른 앨범 정보도 필요하시면 말씀해주세요.
    41.83s  agent 발화 끝
    46.55s  user  발화 시작: 그렇죠.
    47.19s  user  발화 끝
    48.81s  user  발화 시작: 이천십오년 십월에 발매된 앨범의 장르는 뭔가요?
    48.92s  agent 발화 끝
    51.87s  <ret> 발화 (turn13 첫 프레임)
    52.19s  agent 발화 시작: <ret> 이천십오년 십월에 발매된 앨범의 장르에 대해 알려드릴게요.
    52.24s  user  발화 끝
    53.31s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.75s]: October 2015.
    55.73s  agent 발화 시작: 이천십오년 십월에 발매된 데미 로바토의 앨범 장르는 팝입니다.
    55.94s  agent 발화 끝
    60.16s  agent 발화 끝
    60.89s  user  발화 시작: 팝이라고요?
    61.57s  <ret> 발화 (turn16 첫 프레임)
    61.71s  user  발화 끝
    61.89s  agent 발화 시작: <ret> 네, 팝 장르입니다. 앨범에 대한 다른 궁금한 점은 없으신가요?
    62.93s  ⚡SPAN 주입(IRRELEVANT) [d'=1.36s / d_lead=4.07s]: The Sahara is the largest hot desert in the world, covering a large po
    63.92s  user  발화 시작: 예.
    64.37s  user  발화 끝
    65.96s  agent 발화 끝
    66.17s  user  발화 시작: 혹시 그 앨범의 노래 중 가장 인기 있는 곡은 무엇인가요?
    69.60s  agent 발화 시작: 가장 인기 있는 곡을 찾아볼게요. 잠시만 기다려 주시면—
    69.69s  user  발화 끝
    73.06s  <ret> 발화 (turn20 첫 프레임)
    73.30s  agent 발화 시작: <ret> 인기곡을 찾는 데 시간이 조금 걸릴 수 있습니다. 이천십오년 십월 발매된 앨범에서 가장 인기 있는
    73.43s  agent 발화 끝
    73.94s  ⚡SPAN 주입 [d'=0.88s / d_lead=3.46s]: October 2015.
    75.41s  user  발화 시작: 네.
    75.91s  user  발화 끝
    80.66s  agent 발화 끝
    80.84s  user  발화 시작: ‘Confident’군요. 알려주셔서 감사합니다.
    83.80s  user  발화 끝
    84.05s  agent 발화 시작: 천만에요. 도움이 되었다니 기쁩니다. 혹시 다른 아티스트나 앨범에 대해서도 궁금한 점이 있으신가요?
    91.18s  agent 발화 끝
