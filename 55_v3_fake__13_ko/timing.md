# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "성슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-06",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잉글랜드가 월드컵 결승에 마지막으로 언제 나갔었지? | S2 여행 계획을 좀 세워보고 싶은데, 추천해 줄 만한 곳 있어? | S3 와, 진짜? 엄청나네. | S4 오, 괜찮은 가격이네.

     0.00s  user  발화 시작: 잉글랜드가 월드컵 결승에 마지막으로 언제 나갔었지?
     3.26s  <ret> 발화 (turn1 첫 프레임)
     3.42s  agent 발화 시작: <ret> 잉글랜드가 월드컵 결승에 마지막으로 나간 건 천구백육십육년이었어요. 그 때 서독을 꺾고 우승했죠.
     3.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: England last appeared in a World Cup final in 1966, when they won agai
     3.61s  user  발화 끝
     7.53s  user  발화 시작: 음.
     7.98s  user  발화 끝
    10.19s  agent 발화 끝
    11.12s  user  발화 시작: 아, 그렇구나.
    12.13s  <ret> 발화 (turn4 첫 프레임)
    12.26s  user  발화 끝
    12.52s  agent 발화 시작: <ret> 도쿄 인구가 이천이십사년 기준으로 약 천사백만 명 정도라고 하네요.
    12.53s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.58s]: The current population of Tokyo is estimated to be around 14 million p
    15.40s  user  발화 시작: 어.
    16.04s  user  발화 끝
    17.10s  agent 발화 끝
    17.20s  agent 발화 시작: 혹시 도쿄에 가본 적 있으세요? 여행 계획 있으신가요?
    19.21s  user  발화 시작: 응.
    19.66s  user  발화 끝
    20.39s  user  발화 시작: 아니, 아직 못 가봤어. 언젠가 꼭 가보고 싶어.
    20.44s  agent 발화 끝
    24.27s  user  발화 끝
    24.38s  agent 발화 시작: 가보고 싶으시군요. 좋은 선택이에요. 도쿄는 정말 매력적인 도시랍니다.
    28.22s  user  발화 시작: 응.
    28.67s  user  발화 끝
    29.85s  agent 발화 끝
    30.67s  user  발화 시작: 여행 계획을 좀 세워보고 싶은데, 추천해 줄 만한 곳 있어?
    34.73s  agent 발화 시작: 어떤 종류의 여행을 좋아하시나요? 역사적인 곳, 현대적인 곳, 아니면 자연을 즐기는 곳?
    34.84s  user  발화 끝
    40.29s  agent 발화 끝
    40.50s  user  발화 시작: 음… 현대적인 곳이랑 맛있는 거 먹는 곳!
    43.53s  <ret> 발화 (turn14 첫 프레임)
    43.60s  agent 발화 시작: <ret> 현대적인 곳과 맛있는 음식을 좋아하시는군요. 시부야와 신주쿠를 추천해 드려요.
    43.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: Shibuya Crossing is the world's busiest intersection, with approximate
    43.74s  user  발화 끝
    48.88s  agent 발화 시작: 시부야 스크램블 교차로는 세계에서 가장 붐비는 교차로인데, 하루에 약 이백사십만 명이 건넌다고 해요.
    48.92s  agent 발화 끝
    53.68s  user  발화 시작: 와.
    54.36s  user  발화 끝
    55.27s  agent 발화 끝
    55.62s  user  발화 시작: 와, 진짜? 엄청나네.
    57.62s  <ret> 발화 (turn18 첫 프레임)
    57.86s  agent 발화 시작: <ret> 네, 정말 굉장하죠. 꼭 한번 경험해 보셨으면 좋겠어요.
    57.86s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.98s]: (tool result) Ramen restaurants in Shibuya: Ichiran Shibuya, Afuri Shi
    58.02s  user  발화 끝
    61.83s  agent 발화 끝
    61.95s  agent 발화 시작: 시부야에는 이치란, 아후리, 긴류 라멘 같은 맛있는 라멘집들이 있답니다.
    66.72s  agent 발화 끝
    66.84s  user  발화 시작: 라멘! 당장 먹고 싶다.
    68.40s  <ret> 발화 (turn21 첫 프레임)
    68.64s  agent 발화 시작: <ret> 라멘이 드시고 싶으시군요. 정말 맛있을 거예요.
    68.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.79s]: The average cost of a bowl of ramen in Shibuya is approximately ¥1,000
    68.78s  user  발화 끝
    72.43s  agent 발화 끝
    72.46s  agent 발화 시작: 시부야 라멘 한 그릇은 대략 천 엔에서 천오백 엔 정도 한답니다.
    76.34s  agent 발화 끝
    76.53s  user  발화 시작: 오, 괜찮은 가격이네.
    78.25s  agent 발화 시작: 네, 합리적인 가격으로 맛있는 라멘을 즐길 수 있어요. 즐거운 여행 되시길 바랄게요.
    78.42s  user  발화 끝
    84.04s  agent 발화 끝
    84.14s  user  발화 시작: 고마워, 덕분에 계획 세우는 데 도움이 됐어.
    87.20s  agent 발화 시작: 도움이 되었다니 기쁘네요.
    87.33s  user  발화 끝
    88.85s  agent 발화 끝
