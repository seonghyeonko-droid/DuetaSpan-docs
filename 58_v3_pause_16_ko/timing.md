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

# EXAMINER(FDB-v2) 단계: S1 혹시… 큰 형제라는 말의 유래가 뭐였더라? | S2 …그 책이 나온 해는 언제였어요? | S3 …브라더'라는 인물은 실제 모델이 있었나요? | S4 고전이라… 한번 읽어봐야겠어요.

     0.00s  user  발화 시작: 혹시… 큰 형제라는 말의 유래가 뭐였더라?
     2.70s  <ret> 발화 (turn1 첫 프레임)
     3.10s  agent 발화 시작: <ret> 큰 형제라는 표현은 조지 오웰의 소설 '천구백팔십사'에서 처음 사용되었어요.
     3.24s  user  발화 끝
     4.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: Nineteen Eighty-Four.
     8.89s  agent 발화 끝
     8.95s  user  발화 시작: 아, 맞다… '천구백팔십사'였지. 그 책 내용이 뭐였죠?
    13.02s  <ret> 발화 (turn3 첫 프레임)
    13.34s  agent 발화 시작: <ret> '천구백팔십사'는 전체주의 사회의 감시와 통제를 다룬 디스토피아 소설이에요.
    13.44s  user  발화 끝
    15.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: Nineteen Eighty-Four is a dystopian novel by George Orwell published i
    19.04s  agent 발화 끝
    19.07s  user  발화 시작: 디스토피아… 좀 무서운 이야기군요.…
    21.79s  user  발화 끝
    23.72s  user  발화 시작: …그 책이 나온 해는 언제였어요?
    25.75s  <ret> 발화 (turn6 첫 프레임)
    25.82s  agent 발화 시작: <ret> 그 책은 천구백사십구 년에 출판되었어요.
    25.93s  user  발화 끝
    26.95s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.23s]: 1949
    26.98s  user  발화 시작: 예.
    27.33s  user  발화 끝
    28.96s  user  발화 시작: 천구백사십구 년… 지금으로부터 꽤 오래됐네요.
    29.06s  agent 발화 끝
    32.19s  user  발화 끝
    32.55s  agent 발화 시작: 시간이 참 빠르죠. 혹시 다른 소설에 대해서도 궁금하신가요?
    34.75s  user  발화 시작: 네.
    35.11s  user  발화 끝
    37.70s  user  발화 시작: 음… 그 책에 나오는 '빅…
    37.74s  agent 발화 끝
    40.28s  user  발화 끝
    41.79s  user  발화 시작: …브라더'라는 인물은 실제 모델이 있었나요?
    44.37s  <ret> 발화 (turn13 첫 프레임)
    44.61s  agent 발화 시작: <ret> '빅 브라더'는 특정 인물을 모델로 한 것은 아니고, 전체주의 권력자를 상징하는 존재라고 해요.
    44.84s  user  발화 끝
    46.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: The term “Big Brother” does not refer to one specific person, but a sy
    47.23s  user  발화 시작: 음.
    47.68s  user  발화 끝
    51.10s  agent 발화 끝
    51.97s  user  발화 시작: 상징적인 존재… 그렇군요. 그럼 그 소설이 출판된 지 얼마나 됐을까요?
    56.22s  <ret> 발화 (turn16 첫 프레임)
    56.38s  agent 발화 시작: <ret> 그 소설은 출판된 지 칠십오 년이 되었어요.
    56.60s  user  발화 끝
    57.34s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.29s]: 75 years
    57.86s  user  발화 시작: 맞아요.
    58.35s  user  발화 끝
    59.67s  agent 발화 끝
    61.84s  user  발화 시작: 칠십오 년이라니… 정말 오래됐네요. 그 책, 아직도 많이 읽나요?
    65.29s  <ret> 발화 (turn19 첫 프레임)
    65.61s  agent 발화 시작: <ret> 네, '천구백팔십사'는 현대 문학의 고전으로 꾸준히 읽히고 있어요.
    65.77s  user  발화 끝
    67.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: Nineteen Eighty-Four remains widely read and influential in modern lit
    70.47s  agent 발화 끝
    70.87s  user  발화 시작: 고전이라… 한번 읽어봐야겠어요.
    73.13s  user  발화 끝
    73.41s  agent 발화 시작: 좋은 선택이에요. 읽어 보시면 많은 생각을 하게 될 거예요.
    76.86s  user  발화 시작: 예.
    77.21s  user  발화 끝
    78.51s  agent 발화 끝
    78.73s  user  발화 시작: … 혹시 지금 시계가 몇 시인지 알려줄 수 있을까요?
    81.42s  <ret> 발화 (turn24 첫 프레임)
    81.50s  agent 발화 시작: <ret> 지금은 오후 두 시 삼십오 분이에요.
    81.63s  user  발화 끝
    82.38s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.58s]: It is Friday, July 10, 2026 at 2:35 PM in Seoul.
    82.46s  user  발화 시작: 네.
    82.86s  user  발화 끝
    83.80s  user  발화 시작: 오후 두 시 삼십오 분… 감사합니다.
    84.09s  agent 발화 끝
    86.57s  user  발화 끝
