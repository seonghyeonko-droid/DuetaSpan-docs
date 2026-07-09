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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요. | S2 혹시 그 앨범에 수록된 곡 중에서 가장 인기 있었던 노래는 뭐 | S3 음, 평론가 반응도 좋았군요. 앨범 판매량은 얼마나 됐어요? | S4 'Tell Me You Love Me'도 좋았죠. 그때 활동했

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요.
     4.03s  user  발화 끝
     4.12s  <ret> 발화 (turn1 첫 프레임)
     4.28s  agent 발화 시작: <ret> 음, 데미 로바토의 새 앨범이 이천십오년에 발매되었는지 알아볼게요.
     6.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: October 2015.
     9.37s  agent 발화 시작: 이천십오년 십월에 데미 로바토의 새 앨범이 발매되었어요.
     9.60s  agent 발화 끝
    13.62s  agent 발화 끝
    13.72s  user  발화 시작: 아, 그렇군요. 앨범 제목이 뭐였죠?
    16.42s  <ret> 발화 (turn4 첫 프레임)
    16.66s  agent 발화 시작: <ret> 앨범 제목은 'Confident'였어요. 이천십오년 십월에 발매된 앨범이죠.
    16.67s  user  발화 끝
    17.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.09s]: Demi Lovato’s fifth studio album, Confident, was released on October 1
    21.67s  agent 발화 시작: 'Confident'라는 이름으로, 이천십오년 십월 십육일에 발매되었답니다.
    21.76s  agent 발화 끝
    27.18s  agent 발화 끝
    27.56s  user  발화 시작: 혹시 그 앨범에 수록된 곡 중에서 가장 인기 있었던 노래는 뭐예요?
    31.53s  <ret> 발화 (turn7 첫 프레임)
    31.63s  user  발화 끝
    31.85s  agent 발화 시작: <ret> 아, 네. 그 앨범에서 가장 인기 있었던 노래는…
    33.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: The lead single from Confident, "Cool for the Summer", was released on
    36.25s  agent 발화 시작: 이천십오년 칠월 일일에 발매된 'Cool for the Summer'가 가장 인기가 많았어요.
    36.34s  agent 발화 끝
    38.25s  user  발화 시작: 음.
    38.69s  user  발화 끝
    41.20s  <ret> 발화 (turn10 첫 프레임)
    41.52s  agent 발화 시작: <ret> 'Cool for the Summer'는 발매 직후 많은 사랑을 받았죠. 데미 로바토의 매력이 잘
    41.71s  agent 발화 끝
    43.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.91s]: The album received generally positive reviews from critics.
    48.27s  agent 발화 시작: 평론가들로부터 대체로 긍정적인 평가를 받았답니다.
    48.43s  agent 발화 끝
    51.97s  agent 발화 끝
    52.04s  user  발화 시작: 음, 평론가 반응도 좋았군요. 앨범 판매량은 얼마나 됐어요?
    56.17s  <ret> 발화 (turn13 첫 프레임)
    56.39s  user  발화 끝
    56.48s  agent 발화 시작: <ret> 앨범 판매량에 대해 알아볼게요.
    57.13s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.12s]: (tool result) Confident sold 121,000 copies in its first week.
    58.46s  agent 발화 시작: 'Confident'는 첫 주에 십이만 천 장이 팔렸어요.
    58.59s  agent 발화 끝
    62.04s  user  발화 시작: 와, 꽤 많이 팔렸네요. 그 앨범 이후에 또 다른 앨범을 냈어요?
    62.67s  agent 발화 끝
    65.90s  <ret> 발화 (turn16 첫 프레임)
    66.14s  agent 발화 시작: <ret> 네, 데미 로바토는 그 이후에도 여러 앨범을 발표했답니다.
    66.25s  user  발화 끝
    66.78s  ⚡SPAN 주입(IRRELEVANT) [d'=0.88s / d_lead=4.16s]: The giraffe is the tallest mammal in the world.
    70.15s  agent 발화 시작: 이천십칠년에는 'Tell Me You Love Me'라는 앨범을 발매했고요.
    70.30s  agent 발화 끝
    74.32s  agent 발화 끝
    74.81s  user  발화 시작: 'Tell Me You Love Me'도 좋았죠. 그때 활동했던 노래도 궁금해요.
    78.83s  user  발화 끝
    79.06s  agent 발화 시작: 'Tell Me You Love Me'의 타이틀곡은 'Sorry Not Sorry'였어요.
    82.20s  agent 발화 끝
