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

# EXAMINER(FDB-v2) 단계: S1 빅 브라더라는 말은 어디서 유래됐는지 궁금해요… | S2 그럼 그 소설에서 어떤 의미로 사용됐나요? | S3 …된 실제 사건이 있었나요? | S4 지금도 그런 감시가 이루어지고 있는 걸까요?

     0.00s  user  발화 시작: 빅 브라더라는 말은 어디서 유래됐는지 궁금해요…
     2.64s  <ret> 발화 (turn1 첫 프레임)
     3.04s  agent 발화 시작: <ret> 조지 오웰의 소설 『천구백팔십사』에서 처음 사용된 표현이에요.
     3.04s  user  발화 끝
     4.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: Nineteen Eighty-Four.
     7.45s  user  발화 시작: 아, 그 책 말씀하시는 건가요?…
     7.53s  agent 발화 끝
     9.10s  user  발화 끝
    11.05s  user  발화 시작: …좀 오래된 것 같기도 하고…
    13.02s  agent 발화 시작: 네, 천구백사십구년에 출판된 소설이죠.
    13.04s  user  발화 끝
    16.12s  agent 발화 끝
    16.91s  user  발화 시작: 그럼 그 소설에서 어떤 의미로 사용됐나요?
    18.97s  <ret> 발화 (turn6 첫 프레임)
    19.12s  agent 발화 시작: <ret> 소설 속에서 모든 것을 감시하는 국가를 상징하는 말이었어요.
    19.31s  user  발화 끝
    20.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: The all-seeing surveillance state.
    22.09s  user  발화 시작: 네.
    22.44s  user  발화 끝
    23.20s  user  발화 시작: [surprised] 와, 그래서 지금도 그렇게 쓰이는군요.
    23.24s  agent 발화 끝
    25.45s  agent 발화 시작: 맞아요. 감시 사회나 권력에 대한 은유로 자주 사용되죠.
    25.55s  user  발화 끝
    27.07s  user  발화 시작: 예.
    27.43s  user  발화 끝
    29.49s  user  발화 시작: 혹시 그 소설의 배경이…
    29.93s  agent 발화 끝
    31.37s  user  발화 끝
    32.46s  user  발화 시작: …된 실제 사건이 있었나요?
    33.82s  <ret> 발화 (turn13 첫 프레임)
    33.90s  agent 발화 시작: <ret> 제2차 세계 대전 이후 유럽의 상황이 영향을 줬다고 해요.
    34.07s  user  발화 끝
    35.41s  user  발화 시작: 정말요?
    35.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.25s]: Post-World War II Europe.
    36.23s  user  발화 끝
    38.15s  agent 발화 끝
    38.15s  user  발화 시작: 그럼 그 시대의 어떤 점이 소설에 반영됐을까요?
    40.85s  agent 발화 시작: 전쟁의 상처와 전체주의의 위협 같은 것들이죠.
    40.92s  user  발화 끝
    44.45s  agent 발화 끝
    45.08s  user  발화 시작: 그 시대에는 그런 분위기가 정말 심했었나 봐요.
    47.80s  agent 발화 시작: 네, 자유가 억압되고 감시가 일상화된 시대였죠.
    47.94s  user  발화 끝
    49.28s  user  발화 시작: 그렇죠.
    49.91s  user  발화 끝
    51.54s  user  발화 시작: 지금도 그런 감시가 이루어지고 있는 걸까요?
    51.55s  agent 발화 끝
    53.95s  agent 발화 시작: 다양한 방식으로 감시가 이루어지고 있다고 볼 수 있어요.
    53.99s  user  발화 끝
    57.60s  agent 발화 끝
    58.68s  user  발화 시작: 음… 걱정되네요.
    60.10s  user  발화 끝
    60.35s  agent 발화 시작: 혹시 특정 감시 기술에 대해 더 자세히 알아보고 싶으신가요?
    64.38s  agent 발화 끝
