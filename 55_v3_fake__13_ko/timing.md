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
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범이 언제 나오나요? 이천십오년 기준으로요. | S2 혹시 그 앨범에서 가장 인기 있었던 노래는 뭐였어요? | S3 주로 팝이나 R&B를 듣는 편이에요. | S4 네, 감사합니다. 덕분에 힘이 나네요.

     0.00s  user  발화 시작: 데미 로바토 새 앨범이 언제 나오나요? 이천십오년 기준으로요.
     4.36s  user  발화 끝
     4.45s  <ret> 발화 (turn1 첫 프레임)
     4.60s  agent 발화 시작: <ret> 데미 로바토의 다섯 번째 스튜디오 앨범, 'Confidence'는 이천십오년 십월에 발매되었답니다
     6.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: [source: Wikipedia] Demi Lovato's fifth studio album, Confidence, was 
     8.64s  user  발화 시작: 그렇죠.
     9.46s  user  발화 끝
    10.70s  agent 발화 끝
    10.76s  user  발화 시작: 아, 그렇군요. 그럼 그 앨범에 수록된 곡은 몇 곡이나 되나요?
    14.83s  <ret> 발화 (turn4 첫 프레임)
    15.22s  agent 발화 시작: <ret> 잠시만 기다려 주세요.
    15.24s  user  발화 끝
    15.33s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.93s]: (tool result) 11 songs.
    17.06s  agent 발화 시작: 'Confidence' 앨범에는 총 열한 곡이 수록되어 있습니다.
    17.15s  agent 발화 끝
    19.06s  user  발화 시작: 음.
    19.42s  user  발화 끝
    20.51s  agent 발화 시작: 데미 로바토는 정말 다재다능한 아티스트인 것 같아요. 다양한 장르를 소화하는 능력—
    20.63s  agent 발화 끝
    25.71s  user  발화 시작: 혹시 그 앨범에서 가장 인기 있었던 노래는 뭐였어요?
    26.45s  agent 발화 끝
    29.39s  <ret> 발화 (turn9 첫 프레임)
    29.50s  user  발화 끝
    29.70s  agent 발화 시작: <ret> 가장 인기 있었던 노래요? 네, 'Cool for the Summer'가 많은 사랑을 받았어요.
    30.43s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.67s]: [source: Rolling Stone] "Cool for the Summer" became Lovato's first to
    34.26s  agent 발화 시작: 'Cool for the Summer'는 빌보드 핫 백에서 데미 로바토의 첫 번째 탑 텐 싱글이 되었어요.
    34.37s  agent 발화 끝
    39.69s  user  발화 시작: 아, 그 노래 정말 좋았죠. 뮤직비디오도 인상 깊었어요.
    39.76s  agent 발화 끝
    43.34s  <ret> 발화 (turn12 첫 프레임)
    43.66s  agent 발화 시작: <ret> 맞아요, 뮤직비디오도 앨범의 분위기를 잘 살렸다고 생각해요.
    43.72s  user  발화 끝
    45.26s  ⚡SPAN 주입(IRRELEVANT) [d'=1.92s / d_lead=4.17s]: [source: Britannica] The Sahara is the largest hot desert in the world
    47.68s  agent 발화 시작: 창작 활동에 영감을 얻고 싶으실 때는 어떤 음악을 주로 들으시는 편이세요?
    47.83s  agent 발화 끝
    50.25s  user  발화 시작: 예.
    50.61s  user  발화 끝
    52.73s  agent 발화 끝
    52.85s  user  발화 시작: 주로 팝이나 R&B를 듣는 편이에요.
    55.30s  agent 발화 시작: 팝이나 R&B라… 좋은 선택이세요. 그런 음악들은 감정을 풍부하게 해주고, 새로운 아이디어를 떠올리는 데 도
    55.38s  user  발화 끝
    59.45s  user  발화 시작: 음.
    59.95s  user  발화 끝
    64.10s  agent 발화 끝
    64.57s  user  발화 시작: 맞아요. 음악을 들으면 기분이 좋아져요.
    67.53s  user  발화 끝
    67.79s  agent 발화 시작: 기분이 좋아지는 건 정말 중요한 것 같아요. 긍정적인 감정은 창작 활동의 원동력이 되니까요.
    70.46s  user  발화 시작: 네.
    71.10s  user  발화 끝
    74.19s  agent 발화 끝
    74.43s  user  발화 시작: 네, 감사합니다. 덕분에 힘이 나네요.
    76.55s  user  발화 끝
    76.85s  agent 발화 시작: 천만에요. 언제든 필요하시면 저에게 이야기해 주세요. 제가 항상 곁에서 응원할게요.
    84.12s  agent 발화 끝
