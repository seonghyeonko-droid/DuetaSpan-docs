# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "보별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "home",
#       "text": "User's home address is 148 Elm Street."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 빅 브라더라는 말은 어디서 처음 나왔는지 궁금해… | S2 그렇군요. 좀 무서운 이미지네요. | S3 …해를 알 수 있을까요? | S4 …쓰인 때는 정확히 언제였죠?

     0.00s  user  발화 시작: 빅 브라더라는 말은 어디서 처음 나왔는지 궁금해…
     2.62s  <ret> 발화 (turn1 첫 프레임)
     3.02s  agent 발화 시작: <ret> 빅 브라더라는 표현의 유래에 대해 여쭤보셨군요. 그 단어가 처음 사용된 건… 조지 오웰의 천구백사
     3.05s  user  발화 끝
     4.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.10s]: 조지 오웰의 1949년 소설 《1984》에서 '빅 브라더'라는 개념이 처음 등장했습니다.
    13.12s  agent 발화 끝
    13.18s  user  발화 시작: …조지 오웰의 소설에서였죠?
    14.49s  <ret> 발화 (turn3 첫 프레임)
    14.81s  agent 발화 시작: <ret> 맞습니다. 조지 오웰의 소설 《천구백팔십사》에서 처음 등장했어요… 천구백사십구년 소설 천구백팔십사
    15.02s  user  발화 끝
    16.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: 빅 브라더라는 표현은 조지 오웰의 천구백사십구년 소설 천구백팔십사에서 처음 사용되었습니다.
    24.36s  agent 발화 끝
    25.14s  user  발화 시작: 아, 그래요. 그 소설에서 어떤 의미로 쓰였어요?
    28.05s  <ret> 발화 (turn5 첫 프레임)
    28.21s  agent 발화 시작: <ret> 《천구백팔십사》에서 빅 브라더는 전체주의 국가의 상징적인 지도자였죠… 전체주의 국가의 상징적인 지
    28.37s  user  발화 끝
    30.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: 조지 오웰의 소설 《천구백팔십사》에서 처음 등장했어요… 천구백사십구년 소설 천구백팔십사에서입니다.
    30.79s  user  발화 시작: 네.
    31.24s  user  발화 끝
    36.39s  user  발화 시작: 그렇군요. 좀 무서운 이미지네요.
    36.83s  agent 발화 끝
    38.09s  agent 발화 시작: 네, 감시와 통제를 상징하는 다소 어두운 의미를 담고 있습니다.
    38.33s  user  발화 끝
    39.74s  user  발화 시작: 네.
    40.15s  user  발화 끝
    42.72s  agent 발화 끝
    43.58s  user  발화 시작: 요즘도 빅 브라더라는 말을 많이 쓰나요?
    46.06s  <ret> 발화 (turn11 첫 프레임)
    46.14s  agent 발화 시작: <ret> 빅 브라더라는 용어는 여전히 널리 사용되고 있습니다. 주로 감시 사회를 비판하거나… 감시와 통제를
    46.25s  user  발화 끝
    48.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.18s]: 빅 브라더는 감시와 통제를 상징하는 다소 어두운 의미를 담고 있습니다.
    51.48s  user  발화 시작: 맞아요.
    51.93s  user  발화 끝
    57.21s  agent 발화 시작: …개인 정보 침해에 대한 우려를 표현할 때 쓰이죠.
    57.31s  agent 발화 끝
    60.49s  agent 발화 끝
    60.66s  user  발화 시작: 혹시 그 소설이 출간된…
    62.41s  user  발화 끝
    63.76s  user  발화 시작: …해를 알 수 있을까요?
    64.88s  <ret> 발화 (turn16 첫 프레임)
    65.04s  agent 발화 시작: <ret> 《천구백팔십사》가 처음 출간된 해는… 천구백사십구년 육월입니다… 천구백사십구년입니다.
    65.09s  user  발화 끝
    66.16s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.95s]: 조지 오웰의 소설 '1984'는 1949년에 출간되었습니다.
    68.92s  user  발화 시작: 네.
    69.28s  user  발화 끝
    72.00s  agent 발화 끝
    72.79s  user  발화 시작: 그렇군요. 꽤 오래됐네요.
    74.14s  <ret> 발화 (turn19 첫 프레임)
    74.54s  agent 발화 시작: <ret> 네, 출간된 지 벌써 칠십년이 넘었답니다. 시간이 정말 빠르죠.
    74.68s  user  발화 끝
    75.50s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.00s]: [Nineteen Eighty-Four was first published in June 1949.]
    79.54s  agent 발화 끝
    80.17s  user  발화 시작: 빅 브라더라는 말이 처음…
    82.25s  user  발화 끝
    84.07s  user  발화 시작: …쓰인 때는 정확히 언제였죠?
    85.71s  <ret> 발화 (turn22 첫 프레임)
    86.03s  agent 발화 시작: <ret> 빅 브라더라는 표현이 처음 사용된 시점은… 천구백사십구년입니다. 소설 출간 시기와 같네요… 천구백
    86.24s  user  발화 끝
    87.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: 조지 오웰은 1949년에 소설 《1984》에서 ‘빅 브라더’라는 용어를 처음 사용했습니다.
    89.40s  user  발화 시작: 네.
    90.03s  user  발화 끝
    94.93s  agent 발화 끝
    97.21s  user  발화 시작: 그렇군요. 자세히 알려주셔서 감사합니다.
    99.38s  <ret> 발화 (turn25 첫 프레임)
    99.54s  agent 발화 시작: <ret> 천만에요. 궁금한 점이 있다면 언제든 다시 여쭤봐 주세요.
    99.60s  user  발화 끝
   101.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: [The term “Big Brother” first appeared in George Orwell’s novel Ninete
   104.41s  agent 발화 끝
