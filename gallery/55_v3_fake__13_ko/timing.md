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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범이 언제 나오나요, 이천십오년 기준으로요 | S2 'Confident'… 음, 그 앨범의 프로듀서는 누구였나요? | S3 육위까지 올랐다니, 정말 대단하네요. | S4 그렇군요. 앨범 발매 이후 콘서트 투어는 진행했나요?

     0.00s  user  발화 시작: 데미 로바토의 새 앨범이 언제 나오나요, 이천십오년 기준으로요?
     4.20s  <ret> 발화 (turn1 첫 프레임)
     4.36s  agent 발화 시작: <ret> 두 분이 궁금해하시는 데미 로바토의 새 앨범은… 이천십오년 십월에 발매될 예정입니다. 혹시 다른 
     4.49s  user  발화 끝
     6.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.31s]: (no information found)
     7.94s  user  발화 시작: 음.
     8.44s  user  발화 끝
    13.68s  agent 발화 끝
    14.77s  user  발화 시작: 음, 그럼 그 앨범에 수록된 곡들은 어떤 스타일인가요?
    19.16s  user  발화 끝
    19.29s  <ret> 발화 (turn4 첫 프레임)
    19.36s  agent 발화 시작: <ret> 데미 로바토의 앨범은 다양한 스타일을 아우르지만, 주로 팝과 R&B 장르가 주를 이루고 있습니다.
    21.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: 데미 로바토의 이천십오년 십월에 발매될 앨범은 팝 스타일입니다.
    29.05s  agent 발화 끝
    29.48s  user  발화 시작: 아, R&B 스타일이군요. 그 앨범의 제목이 뭐였죠?
    32.79s  <ret> 발화 (turn6 첫 프레임)
    33.11s  agent 발화 시작: <ret> 앨범 제목은 'Confident'입니다. 데미 로바토가 자신감을 표현한 앨범이라고 하네요… Con
    33.18s  user  발화 끝
    33.83s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.44s]: 두 분이 궁금해하시는 데미 로바토의 새 앨범은… 이천십오년 십월에 발매될 예정입니다.
    39.55s  agent 발화 끝
    39.94s  user  발화 시작: 'Confident'… 음, 그 앨범의 프로듀서는 누구였나요?
    44.12s  <ret> 발화 (turn8 첫 프레임)
    44.28s  agent 발화 시작: <ret> 'Confident' 앨범은 여러 프로듀서가 참여했지만…
    44.33s  user  발화 끝
    45.80s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.28s]: Max Martin, Shellback, and others contributed to the production of Dem
    47.43s  user  발화 시작: …그 앨범에서 가장 인기 있었던 노래는 뭐였죠?
    47.57s  agent 발화 끝
    50.97s  <ret> 발화 (turn10 첫 프레임)
    51.26s  user  발화 끝
    51.29s  agent 발화 시작: <ret> 가장 인기 있었던 노래는 'Cool for the Summer'입니다. 많은 사랑을 받았죠… So
    52.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: 'Confident' 앨범에서 가장 인기 있었던 노래는 'Sorry Not Sorry'였습니다.
    57.59s  agent 발화 끝
    58.25s  user  발화 시작: 'Cool for the Summer'였군요. 그 노래가 빌보드 차트에서 몇 위까지 올랐나요?
    62.56s  <ret> 발화 (turn12 첫 프레임)
    62.88s  agent 발화 시작: <ret> 'Cool for the Summer'는 빌보드 핫 백 차트에서 육위까지 올랐습니다. 꽤 높은 순
    63.06s  user  발화 끝
    64.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: 'Cool for the Summer'는 빌보드 핫 100 차트에서 7위까지 올랐습니다.
    66.07s  user  발화 시작: 예.
    66.61s  user  발화 끝
    70.26s  agent 발화 끝
    70.39s  user  발화 시작: 육위까지 올랐다니, 정말 대단하네요.
    72.94s  <ret> 발화 (turn15 첫 프레임)
    73.10s  agent 발화 시작: <ret> 네, 맞아요. 데미 로바토는 정말 재능 있는 아티스트인 것 같아요. 그런 재능을 바탕으로 계속해서
    73.30s  user  발화 끝
    74.94s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=8.53s]: Lisbon (38.70775, -9.13659): Lisboa Story Center (113 m), Pelourinho d
    81.64s  agent 발화 끝
    81.78s  user  발화 시작: 맞아요, 정말 멋진 가수예요. 그 앨범 발매 당시, 데미 로바토는 어떤 활동을 하고 있었나요?
    87.91s  <ret> 발화 (turn17 첫 프레임)
    88.06s  agent 발화 시작: <ret> 앨범 발매 당시 데미 로바토는 'The X Factor USA'의 심사위원으로 활동하고 있었습니다
    88.27s  user  발화 끝
    89.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.16s]: 'Confident' 앨범이 발매된 2015년, 데미 로바토는 'Neon Lights Tour'를 진행하고 있었습니다.
    92.39s  user  발화 시작: 네.
    92.89s  user  발화 끝
   100.20s  user  발화 시작: 아, 'The X Factor USA' 심사위원이었군요.
   100.22s  agent 발화 끝
   103.62s  <ret> 발화 (turn20 첫 프레임)
   103.78s  agent 발화 시작: <ret> 네, 그때부터 데미 로바토는 더욱 많은 팬들을 확보하고 인지도를 높였던 것 같습니다… 네온 라이츠
   103.99s  user  발화 끝
   105.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: 앨범 발매 당시 데미 로바토는 'The X Factor USA'의 심사위원으로 활동하고 있었습니다.
   109.80s  user  발화 시작: 네.
   110.26s  user  발화 끝
   111.44s  user  발화 시작: 그렇군요. 앨범 발매 이후 콘서트 투어는 진행했나요?
   111.66s  agent 발화 끝
   115.02s  <ret> 발화 (turn23 첫 프레임)
   115.27s  user  발화 끝
   115.42s  agent 발화 시작: <ret> 네, 'Confident' 앨범 발매 이후 'The Future Is Now Tour'라는 콘서트
   117.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.89s]: 앨범 발매 당시 데미 로바토는 네온 라이츠 투어를 진행하고 있었습니다.
   123.97s  user  발화 시작: 맞아요.
   124.78s  user  발화 끝
   128.32s  agent 발화 끝
   128.35s  user  발화 시작: 'The Future Is Now Tour'… 좋은 하루 보내세요.
   131.45s  agent 발화 시작: 네, 감사합니다.
   131.57s  user  발화 끝
   132.88s  agent 발화 끝
