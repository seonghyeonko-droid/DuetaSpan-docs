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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나오나요? | S2 데미 로바토는 그때 다른 활동도 많이 했었나요? | S3 아, 이천십육년이군요. 그럼 앨범 나오자마자 투어를 시작한 건 | S4 앨범이 나오기 전에 어떤 티저를 냈었나요?

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나오나요?
     3.78s  <ret> 발화 (turn1 첫 프레임)
     4.02s  agent 발화 시작: <ret> 데미 로바토의 다섯 번째 스튜디오 앨범, 'Confidence'는… 이천십오년 십월에 발매되었어요
     4.07s  user  발화 끝
     5.06s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.84s]: [source: Wikipedia] Demi Lovato's fifth studio album, Confidence, was 
     6.62s  user  발화 시작: 네네.
     7.86s  agent 발화 끝
     8.29s  user  발화 시작: 음, 그 앨범에 어떤 노래들이 들어있나요?
     8.83s  user  발화 끝
    13.33s  <ret> 발화 (turn4 첫 프레임)
    13.63s  agent 발화 시작: <ret> 'Confidence' 앨범에 수록된 노래 목록을 찾아드릴게요.
    13.71s  user  발화 끝
    15.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) Cool for the Summer, Confidence, Kingdom Come, Stone Col
    17.42s  agent 발화 시작: 'Cool for the Summer', 'Confidence', 'Kingdom Come', 'Stone 
    17.47s  agent 발화 끝
    22.62s  user  발화 시작: 음.
    22.93s  user  발화 끝
    25.95s  agent 발화 끝
    26.13s  user  발화 시작: 'Cool for the Summer'가 제일 유명하죠?
    32.95s  <ret> 발화 (turn8 첫 프레임)
    33.27s  agent 발화 시작: <ret> 네, 'Cool for the Summer'는 많은 사랑을 받았죠. 앨범 발매 전부터 기대가 컸어
    33.32s  user  발화 끝
    34.07s  ⚡SPAN 주입(IRRELEVANT) [d'=1.12s / d_lead=2.21s]: [source: Britannica] The giraffe is the tallest mammal on Earth, and i
    35.26s  user  발화 시작: 데미 로바토는 그때 다른 활동도 많이 했었나요?
    35.49s  agent 발화 끝
    39.25s  agent 발화 시작: 이천십오년에는 데미 로바토가 여러 활동을 병행했었죠. 앨범 활동과 함께…
    39.38s  user  발화 끝
    41.15s  user  발화 시작: 예.
    43.74s  agent 발화 끝
    43.87s  user  발화 시작: 혹시 그때 투어도 같이 했었나요?
    44.85s  user  발화 끝
    48.68s  agent 발화 시작: 네, 앨범 'Confidence' 발매와 함께 투어도 진행했어요.
    48.68s  user  발화 끝
    53.13s  agent 발화 시작: 'Confidence' 앨범을 기념하는 투어는 이천십육년에 시작되었어요.
    53.22s  agent 발화 끝
    55.20s  agent 발화 끝
    55.24s  user  발화 시작: 아, 이천십육년이군요. 그럼 앨범 나오자마자 투어를 시작한 건 아니었네요?
    60.29s  user  발화 끝
    60.45s  agent 발화 시작: 네, 앨범 발매 후 홍보 기간을 가진 후에 투어를 시작했어요.
    60.52s  user  발화 시작: 네.
    60.84s  agent 발화 끝
    61.01s  user  발화 시작: 그때 뮤직비디오도 많이 만들었죠?
    63.66s  user  발화 끝
    66.03s  agent 발화 시작: 맞아요. 'Cool for the Summer'를 비롯해 여러 뮤직비디오가 공개되었어요.
    66.05s  user  발화 끝
    66.28s  user  발화 시작: 네.
    66.53s  agent 발화 끝
    66.66s  user  발화 시작: 앨범이 나오기 전에 어떤 티저를 냈었나요?
    68.12s  user  발화 끝
    69.25s  user  발화 끝
    69.82s  agent 발화 시작: 앨범 발매 전에는 커버 아트와 짧은 티저 영상을 공개했어요.
    72.31s  user  발화 시작: 맞아요.
    72.94s  user  발화 끝
    73.65s  user  발화 시작: 좋은 정보 감사합니다.
    73.70s  agent 발화 끝
    75.24s  agent 발화 시작: 도움이 되었다니 기쁘네요.
    75.31s  user  발화 끝
    76.75s  agent 발화 끝
