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
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 빅 브라더라는 표현이 어디서 유래됐는지 궁금해요. | S2 전체주의라… 지금 시대에도 그런 감시가 이루어지고 있을까요? | S3 냉전 시대… 좀 더… | S4 [curious] 혹시 '천구백팔십사' 영화로도 만들어졌나요?

     0.00s  user  발화 시작: 빅 브라더라는 표현이 어디서 유래됐는지 궁금해요.
     2.81s  <ret> 발화 (turn1 첫 프레임)
     3.20s  agent 발화 시작: <ret> 그 표현은 조지 오웰의 디스토피아 소설, '천구백팔십사'에서 처음 사용되었어요.
     3.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: The term "Big Brother" originates from George Orwell's dystopian novel
     3.23s  user  발화 끝
     9.14s  user  발화 시작: 아, '천구백팔십사'… 그 책…
     9.22s  agent 발화 끝
    12.32s  user  발화 끝
    14.21s  user  발화 시작: …내용은 좀 기억이 안 나는데…
    16.05s  user  발화 끝
    16.05s  agent 발화 시작: '천구백팔십사'는 전체주의 국가의 감시와 통제를 다룬 이야기예요.
    17.70s  user  발화 시작: 맞아요.
    18.15s  user  발화 끝
    20.91s  agent 발화 끝
    20.95s  user  발화 시작: 전체주의라… 지금 시대에도 그런 감시가 이루어지고 있을까요?
    25.44s  user  발화 끝
    25.84s  agent 발화 시작: 개인 정보 보호에 대한 우려는 늘 존재하고 있어요.
    28.85s  user  발화 시작: 혹시 그 소설이 쓰여진 해를 다시 한번 알려줄 수 있을까요?
    29.26s  agent 발화 끝
    31.96s  <ret> 발화 (turn9 첫 프레임)
    32.11s  agent 발화 시작: <ret> 그 소설은 천구백사십구 년에 출판되었고, 디스토피아 문학의 중요한 작품으로 평가받고 있어요.
    32.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: Nineteen Eighty-Four was published in 1949, becoming a seminal work of
    32.37s  user  발화 끝
    35.38s  user  발화 시작: 네.
    35.87s  user  발화 끝
    38.92s  agent 발화 끝
    39.77s  user  발화 시작: 천구백사십구 년이군요. 그때는 어떤 시대였죠?
    42.76s  agent 발화 시작: 한국전쟁 직후였고, 냉전 시대의 시작이었습니다.
    42.82s  user  발화 끝
    46.73s  agent 발화 끝
    47.21s  user  발화 시작: 냉전 시대… 좀 더…
    49.48s  user  발화 끝
    50.88s  user  발화 시작: …자세히 알려주실 수 있나요?
    52.17s  <ret> 발화 (turn15 첫 프레임)
    52.25s  agent 발화 시작: <ret> 냉전은 미국과 소련, 그리고 그들의 동맹국들 사이의 지정학적 갈등이었고, 천구백사십칠년부터 천구백
    52.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.16s]: The Cold War was a geopolitical rivalry between the United States and 
    52.49s  user  발화 끝
    58.27s  user  발화 시작: 네.
    58.63s  user  발화 끝
    62.29s  user  발화 시작: 천구백구십일년이요? 소련이 해체된 해군요.
    62.41s  agent 발화 끝
    65.44s  agent 발화 시작: 맞아요. 소련 해체로 냉전 시대는 막을 내렸죠.
    65.62s  user  발화 끝
    66.84s  user  발화 시작: 그렇죠.
    67.33s  user  발화 끝
    69.03s  user  발화 시작: [curious] 혹시 '천구백팔십사' 영화로도 만들어졌나요?
    69.05s  agent 발화 끝
    71.54s  <ret> 발화 (turn21 첫 프레임)
    71.78s  agent 발화 시작: <ret> 네, '천구백팔십사'는 마이클 래드포드가 감독하고 존 허트와 리처드 버튼이 출연한 영화로도 제작되
    71.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: (tool result) 1984 (1984) - Directed by Michael Radford, starring John
    71.89s  user  발화 끝
    81.75s  agent 발화 끝
    82.94s  user  발화 시작: 아, 그래요? 한번 찾아봐야겠네요.
    84.79s  user  발화 끝
    85.06s  agent 발화 시작: 좋은 작품이니 꼭 한번 감상해 보세요.
    87.84s  user  발화 시작: 네, 감사합니다.
    88.02s  agent 발화 끝
    88.85s  user  발화 끝
    88.88s  agent 발화 시작: 도움이 되었다니 기쁘네요.
    90.81s  agent 발화 끝
