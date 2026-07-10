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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범이 언제 나오는지 궁금해요. | S2 ‘Cool for the Summer’… 네, 기억나요. 그  | S3 그 TV 쇼는 어떤 거였는데요? | S4 혹시 그 앨범이 빌보드 차트에서 좋은 성적을 거뒀나요?

     0.00s  user  발화 시작: 데미 로바토의 새 앨범이 언제 나오는지 궁금해요.
     3.23s  user  발화 끝
     3.31s  <ret> 발화 (turn1 첫 프레임)
     3.47s  agent 발화 시작: <ret> 음, 데미 로바토의 새 앨범은 이천십오년 십월에 발매될 예정입니다.
     5.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: [source: Wikipedia] Demi Lovato's fifth studio album, Confidence, was 
     6.59s  user  발화 시작: 그렇죠.
     7.32s  user  발화 끝
     8.19s  agent 발화 끝
     8.31s  user  발화 시작: 아, 그렇군요. 그럼 그 앨범에 수록된 곡들은 어떤 스타일이에요?
    13.12s  agent 발화 시작: 그 앨범은 팝, R&B, 일렉트로닉 댄스 뮤직 등 다양한 장르를 아우르는 곡들로 구성되어 있어요. [curi
    13.13s  user  발화 끝
    19.93s  agent 발화 끝
    20.24s  user  발화 시작: 오, 다양하네요. 혹시 그 앨범의 타이틀곡은 무엇인가요?
    24.72s  <ret> 발화 (turn6 첫 프레임)
    24.74s  user  발화 끝
    24.95s  agent 발화 시작: <ret> 타이틀곡은 ‘Cool for the Summer’입니다. 많은 사랑을 받았던 곡이죠.
    26.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: [source: Rolling Stone] "Cool for the Summer" was released as the lead
    27.08s  user  발화 시작: 예.
    27.48s  user  발화 끝
    29.08s  user  발화 시작: ‘Cool for the Summer’… 네, 기억나요. 그 노래 정말 좋았어요.
    29.21s  agent 발화 끝
    33.22s  agent 발화 시작: 맞아요. 저도 그 노래를 좋아합니다. 데미 로바토의 매력이 잘 드러나는 곡이라고 생각해요.
    33.23s  user  발화 끝
    37.24s  user  발화 시작: 음.
    37.74s  user  발화 끝
    39.99s  agent 발화 시작: 그 앨범은 그녀의 솔직하고 당당한 면모를 보여주는 곡들로 채워져 있어서 많은 팬들에게 공감을 얻었습니다.
    40.03s  agent 발화 끝
    43.57s  user  발화 시작: 음.
    44.06s  user  발화 끝
    47.48s  user  발화 시작: 그럼 그 앨범이 나오기 전에 데미 로바토는 어떤 활동을 하고 있었나요?
    47.55s  agent 발화 끝
    51.88s  user  발화 끝
    52.10s  agent 발화 시작: 이천십오년 앨범 발매 전, 데미 로바토는 주로 TV 쇼에 출연하고, 다른 아티스트들과 협업하며 활동했어요—
    58.64s  user  발화 시작: 그 TV 쇼는 어떤 거였는데요?
    59.47s  agent 발화 끝
    60.31s  <ret> 발화 (turn16 첫 프레임)
    60.71s  user  발화 끝
    60.71s  agent 발화 시작: <ret> 아, 네. 데미 로바토는 ‘The X Factor USA’의 심사위원으로 활동했었습니다.
    62.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: [source: Billboard] Lovato served as a judge on the second and third s
    62.94s  user  발화 시작: 네.
    63.76s  user  발화 끝
    66.08s  agent 발화 끝
    66.34s  user  발화 시작: 아, ‘X 팩터’에 나왔었군요. 심사위원으로 활동했다니 대단하네요.
    70.94s  <ret> 발화 (turn19 첫 프레임)
    71.18s  agent 발화 시작: <ret> 네, 심사위원으로서 그녀는 재능 있는 참가자들을 발굴하고 조언하는 역할을 했습니다.
    71.20s  user  발화 끝
    72.94s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.26s]: [source: Britannica] The Sahara is the largest hot desert in the world
    73.72s  user  발화 시작: 아.
    74.17s  user  발화 끝
    77.36s  user  발화 시작: 혹시 그 앨범이 빌보드 차트에서 좋은 성적을 거뒀나요?
    77.44s  agent 발화 끝
    81.07s  <ret> 발화 (turn22 첫 프레임)
    81.30s  user  발화 끝
    81.31s  agent 발화 시작: <ret> 네, ‘Confidence’ 앨범은 빌보드 이백 차트에서 팔위에 올랐습니다. 성공적인 데뷔였죠.
    83.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [source: Official Charts] Confidence peaked at number eight on the Bil
    87.09s  agent 발화 끝
    87.21s  user  발화 시작: 와, 팔위면 정말 잘 된 거네요! 데미 로바토, 정말 멋진 가수인 것 같아요.
    93.19s  user  발화 끝
    93.39s  agent 발화 시작: 맞아요. 데미 로바토는 뛰어난 가창력과 솔직한 음악으로 많은 사람들에게 영감을 주는 아티스트입니다. [hap
   100.25s  agent 발화 끝
