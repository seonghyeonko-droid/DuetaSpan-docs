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

# EXAMINER(FDB-v2) 단계: S1 빅 브라더라는 말은 어디서 처음 나왔을까요… | S2 아, '천구백팔십사'요? 그 책 내용이… | S3 디스토피아… 좀 어두운 내용인가 보네요. | S4 아, 그렇군요. 혹시 '천구백팔십사'가 처음 출판된 해를 알 

     0.00s  user  발화 시작: 빅 브라더라는 말은 어디서 처음 나왔을까요…
     2.68s  <ret> 발화 (turn1 첫 프레임)
     3.08s  agent 발화 시작: <ret> 빅 브라더라는 표현의 유래에 대해 궁금하시군요… 조지 오웰의 천구백사십구년 소설 천구백팔십사에서 
     3.14s  user  발화 끝
     4.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.41s]: 조지 오웰의 1949년 소설 《1984》에서 '빅 브라더'라는 개념이 처음 등장했습니다.
    12.41s  user  발화 시작: …정확히는 어떤 책에서 처음…
    12.49s  agent 발화 끝
    14.89s  user  발화 끝
    16.80s  user  발화 시작: …사용된 건지 알고 싶어요.
    17.91s  <ret> 발화 (turn4 첫 프레임)
    18.23s  agent 발화 시작: <ret> 어떤 책에서 처음 사용되었는지, 자세히 알려드리겠습니다… 조지 오웰의 '천구백팔십사'에서 처음 사
    18.32s  user  발화 끝
    19.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.35s]: 조지 오웰의 천구백사십구년 소설 천구백팔십사에서 처음 등장했습니다.
    29.59s  agent 발화 끝
    30.39s  user  발화 시작: 아, '천구백팔십사'요? 그 책 내용이…
    33.30s  user  발화 끝
    35.03s  user  발화 시작: …뭐였죠? 잘 기억이 안 나네요.
    37.44s  <ret> 발화 (turn7 첫 프레임)
    37.52s  agent 발화 시작: <ret> '천구백팔십사'는 전체주의 사회의 감시와 통제를 다룬 디스토피아 소설이에요… 디스토피아 소설이에요
    37.62s  user  발화 끝
    39.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: 조지 오웰의 '천구백팔십사'는 전체주의 사회의 감시와 통제를 다룬 디스토피아 소설입니다.
    39.72s  user  발화 시작: 네.
    40.07s  user  발화 끝
    44.49s  user  발화 시작: 디스토피아… 좀 어두운 내용인가 보네요.
    44.89s  agent 발화 끝
    47.41s  agent 발화 시작: 네, 암울하고 불편한 미래상을 그리고 있죠.
    47.58s  user  발화 끝
    48.96s  user  발화 시작: 맞아요.
    49.50s  user  발화 끝
    50.73s  agent 발화 끝
    50.77s  agent 발화 시작: 그 책에서 빅 브라더는 모든 것을 감시하는 독재자의 상징으로 등장해요.
    52.68s  user  발화 시작: 네.
    53.08s  user  발화 끝
    56.05s  agent 발화 끝
    56.84s  user  발화 시작: 그렇군요. 그래서 '빅 브라더'라는 말이 감시를 뜻하게 된 거군요.
    60.27s  <ret> 발화 (turn15 첫 프레임)
    60.59s  agent 발화 시작: <ret> 맞아요, 감시 사회를 비판하는 의미로 널리 쓰이게 되었답니다… 빅 브라더는 모든 것을 감시하는 독
    60.68s  user  발화 끝
    62.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: 빅 브라더는 모든 것을 감시하는 독재자의 상징으로 등장해요.
    70.74s  agent 발화 끝
    71.27s  user  발화 시작: 비슷한 맥락에서 '리틀 시스터'라는 말도 있나요?
    74.22s  agent 발화 시작: '리틀 시스터'는 빅 브라더와 대비되는 개념으로 잘 알려져 있지는 않아요.
    74.32s  user  발화 끝
    76.36s  user  발화 시작: 그렇죠.
    76.81s  user  발화 끝
    79.55s  agent 발화 끝
    79.75s  user  발화 시작: 아, 그렇군요. 혹시 '천구백팔십사'가 처음 출판된 해를 알 수 있을까요?
    85.38s  <ret> 발화 (turn20 첫 프레임)
    85.45s  user  발화 끝
    85.45s  agent 발화 시작: <ret> '천구백팔십사'는 천구백사십구년에 처음 출판되었답니다… 천구백사십구년에 처음 출판되었답니다.
    87.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: 조지 오웰의 소설 '천구백팔십사'는 1949년에 처음 출판되었습니다.
    92.78s  agent 발화 끝
    94.10s  user  발화 시작: 천구백사십구년이요? 꽤 오래되었네요.
    97.33s  user  발화 끝
    97.43s  agent 발화 시작: 네, 오랜 시간이 지났지만 여전히 많은 사람들에게 영향을 주고 있어요.
   102.38s  agent 발화 끝
