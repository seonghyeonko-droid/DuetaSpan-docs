# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "라형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "sibling",
#       "text": "User has a younger sibling named Clara."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "medication",
#       "text": "User takes a daily thyroid medication."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "skill",
#       "text": "User is just getting back into beekeeping."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 기분이 좀 울적한데, 뭔가 기분 전환할 만한 거 없을까요 | S2 …요즘 볼 만한 게 뭐가 있을까요? | S3 네, 애니메이션 괜찮아요. | S4 롯데시네마 부산역이 제일 가까운가 보네요.

     0.00s  user  발화 시작: 오늘 기분이 좀 울적한데, 뭔가 기분 전환할 만한 거 없을까요?
     3.92s  agent 발화 시작: [happy] 기분 전환이라… 뭘 좋아하시는지 알면 더 좋을 텐데요. 혹시 좋아하는 음악 장르나 영화가 있으
     3.94s  user  발화 끝
     6.89s  user  발화 시작: 맞아.
     7.47s  user  발화 끝
     9.62s  agent 발화 끝
     9.74s  user  발화 시작: 음… 영화는 좋아하는데…
    11.90s  user  발화 끝
    13.99s  user  발화 시작: …요즘 볼 만한 게 뭐가 있을까요?
    14.87s  agent 발화 시작: 예.
    15.45s  agent 발화 끝
    15.84s  user  발화 끝
    15.85s  <ret> 발화 (turn6 첫 프레임)
    15.94s  agent 발화 시작: <ret> 요즘 극장에서 가장 인기 있는 영화는 "인사이드 아웃 이"인데요, 이천십오년에 나온 애니메이션 영
    17.04s  ⚡SPAN 주입 [d'=1.19s / d_lead=10.20s]: The most popular movie currently showing in theaters is "Inside Out 2"
    21.25s  user  발화 시작: 응.
    21.60s  user  발화 끝
    26.14s  agent 발화 끝
    26.29s  user  발화 시작: 네, 애니메이션 괜찮아요.
    27.80s  user  발화 끝
    27.80s  agent 발화 시작: [curious] "인사이드 아웃 이"는 감정이라는 주제를 다루고 있어서, 지금 느끼시는 울적함에 공감될 수
    31.38s  user  발화 시작: 음.
    31.78s  user  발화 끝
    35.77s  agent 발화 끝
    35.78s  agent 발화 시작: 지금부터 영화 예매를 도와드릴까요? 아니면 다른 영화를 찾아볼까요? —
    39.83s  user  발화 시작: 잠깐만요, 혹시 이 영화 부산에서 볼 수 있을까요?
    40.41s  agent 발화 끝
    41.45s  agent 발화 시작: 네.
    41.85s  agent 발화 끝
    42.58s  <ret> 발화 (turn14 첫 프레임)
    42.79s  agent 발화 시작: <ret> 부산에는 롯데시네마 부산역(일 점 이킬로미터), 메가박스 해운대(오 점 칠킬로미터), 씨 지 브이
    42.87s  user  발화 끝
    43.84s  ⚡SPAN 주입 [d'=1.26s / d_lead=9.92s]: (tool result) Busan: Lotte Cinema Busan Station (1.2 km), Megabox Haeu
    52.71s  agent 발화 끝
    52.79s  user  발화 시작: 롯데시네마 부산역이 제일 가까운가 보네요.
    55.64s  agent 발화 시작: [happy] 네, 롯데시네마 부산역이 가장 가깝습니다. 혹시 오늘 시간대별 상영 시간표를 확인해 드릴까요?
    55.69s  user  발화 끝
    61.65s  agent 발화 끝
