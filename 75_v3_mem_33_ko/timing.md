# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "유경",
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
#       "date": "2026-05-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 743 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 응, 그냥 그래. 지금 부산 시간 몇 시야? | S2 오, 야외 좌석도? 혹시 거기 파티룸 있어? | S3 맞아, 맞아. 그 얘기했었지. 혹시… 강아지 데려갈 수 있어? | S4 츠케모노… 맛있겠다.

     0.00s  agent 발화 시작: 안녕하세요, 유경님. 저는 디올로예요. 오늘 하루 어떻게 지내셨어요?
     3.98s  agent 발화 끝
     4.48s  user  발화 시작: 응, 그냥 그래. 지금 부산 시간 몇 시야?
     7.26s  <ret> 발화 (turn2 첫 프레임)
     7.33s  agent 발화 시작: <ret> 지금 부산 시간은 오후 두 시 삼십칠분이에요. 혹시 다른 시간대로 알려드릴까요?
     7.39s  user  발화 끝
     9.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: (tool result) 2024-05-08 14:37 KST
     9.75s  user  발화 시작: 응.
    10.25s  user  발화 끝
    12.05s  agent 발화 끝
    12.19s  user  발화 시작: 아니, 괜찮아. 혹시 내가 뭘 좋아하는 음식 기억해?
    15.93s  <ret> 발화 (turn5 첫 프레임)
    16.22s  user  발화 끝
    16.24s  agent 발화 시작: <ret> 유경님께서 가장 좋아하시는 음식은 스시예요. 스시 드시고 싶으신가요?
    17.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: [2026-05-07] User's favorite cuisine is sushi.
    18.48s  user  발화 시작: 그치.
    18.97s  user  발화 끝
    21.06s  agent 발화 끝
    21.52s  user  발화 시작: 맞아, 맞아. 스시 먹고 싶은데, 혹시 글루텐 프리 스시집 알아봐 줄 수 있어?
    26.27s  <ret> 발화 (turn8 첫 프레임)
    26.35s  agent 발화 시작: <ret> 부산에 글루텐 프리 스시집이 한 곳 있어요. 하나 스시인데, 글루텐 프리 메뉴도 있고 야외 좌석도
    26.51s  user  발화 끝
    28.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.78s]: (tool result) Hana Sushi - gluten-free options, outdoor seating. 123 M
    38.13s  agent 발화 끝
    38.29s  user  발화 시작: 오, 야외 좌석도? 혹시 거기 파티룸 있어?
    41.40s  <ret> 발화 (turn10 첫 프레임)
    41.43s  user  발화 끝
    41.47s  agent 발화 시작: <ret> 하나 스시에는 최대 여덟명까지 들어갈 수 있는 파티룸이 있어요. 혹시 생일 파티를 계획하고 계신 
    43.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: (tool result) Hana Sushi has a private room for up to 8 people.
    47.17s  agent 발화 끝
    47.28s  user  발화 시작: 응, 맞아. 생일 파티하려고. 여섯 명 정도 갈 건데…
    50.82s  <ret> 발화 (turn12 첫 프레임)
    50.90s  agent 발화 시작: <ret> 지난번에 생일 저녁 식사를 계획하셨던 적이 있었죠. 여섯 분 정도 가실 예정이고, 야외 좌석을 원
    50.98s  user  발화 끝
    52.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.08s]: [2025-07-19] Past chat — Planning a birthday dinner: party of six; loo
    54.15s  user  발화 시작: 어.
    54.70s  user  발화 끝
    57.98s  agent 발화 끝
    58.04s  user  발화 시작: 맞아, 맞아. 그 얘기했었지. 혹시… 강아지 데려갈 수 있어?
    61.79s  <ret> 발화 (turn15 첫 프레임)
    61.94s  agent 발화 시작: <ret> 유경님께서 비글 강아지 러스티를 키우시는군요. 하나 스시가 반려동물 동반이 가능한지 알아봐 드릴게
    62.20s  user  발화 끝
    63.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: [2025-08-08] User has a Beagle named Rusty.
    67.53s  <ret> 발화 (turn16 첫 프레임)
    67.76s  agent 발화 시작: <ret> 하나 스시는 야외 테라스에서 반려동물 동반이 가능하다고 해요. 러스티와 함께 가실 수 있겠네요.
    67.77s  agent 발화 끝
    69.13s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.74s]: (tool result) Hana Sushi allows pets on the outdoor patio.
    73.50s  agent 발화 끝
    75.07s  user  발화 시작: 다행이다! 혹시… 발효 음식 하는 거 좋아한다고 말했었나?
    79.12s  <ret> 발화 (turn18 첫 프레임)
    79.19s  user  발화 끝
    79.20s  agent 발화 시작: <ret> 유경님께서 집에서 발효 음식을 만드시는 것을 좋아하시는군요. 혹시 스시와 잘 어울리는 발효 음식을
    81.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: [2026-03-07] User is into home fermentation.
    86.10s  agent 발화 끝
    86.19s  user  발화 시작: 오, 좋지! 추천해 줘.
    88.01s  agent 발화 시작: 스시와 잘 어울리는 발효 음식으로는 장아찌나 츠케모노 같은 일본식 절임류가 있어요.
    88.17s  user  발화 끝
    93.10s  agent 발화 끝
    93.93s  user  발화 시작: 츠케모노… 맛있겠다.
    95.96s  user  발화 끝
    96.32s  agent 발화 시작: 츠케모노는 스시의 맛을 더욱 풍부하게 해 줄 거예요.
    99.37s  agent 발화 끝
    99.84s  user  발화 시작: 음… 오늘은 여기까지 할게.
   101.62s  agent 발화 시작: 네, 알겠습니다. 좋은 하루 보내세요.
   101.73s  user  발화 끝
   103.78s  agent 발화 끝
