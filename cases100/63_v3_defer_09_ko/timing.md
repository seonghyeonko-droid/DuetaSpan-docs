# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "유희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "airline",
#       "text": "User usually flies with Lufthansa."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "trip",
#       "text": "User is planning a trip to Jordan in November."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "sibling",
#       "text": "User has a younger sibling named Jisoo."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "dislike",
#       "text": "User can't stand natto."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-30",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-04-27",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-04-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-01-13",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 에나 씨. 요즘 스트레스가 너무 심해서 마음을 좀 | S2 음… 그럼 역삼역 근처는 어때요? | S3 정말 감사합니다! 그런데— | S4 아, 차 마시는 거 좋네요. 근처에 분위기 좋은 카페가 있을까

     0.00s  user  발화 시작: 안녕하세요, 에나 씨. 요즘 스트레스가 너무 심해서 마음을 좀 다스리고 싶어요.
     4.91s  user  발화 끝
     4.93s  agent 발화 시작: 안녕하세요! 스트레스 해소를 위해 어떤 도움을 드릴까요? 편안한 마음을 찾는 데 함께 노력해 봐요.
    13.97s  agent 발화 끝
    14.71s  user  발화 시작: 명상이나 요가 같은 걸 배우고 싶은데, 혹시 추천해 주실 만한 곳이 있을까요?
    19.09s  user  발화 끝
    19.34s  agent 발화 시작: 주변에 괜찮은 곳들을 찾아볼게요. 혹시 선호하는 지역이 있으신가요?
    25.50s  agent 발화 끝
    26.28s  user  발화 시작: 강남역 근처면 좋을 것 같아요.
    27.89s  <ret> 발화 (turn5 첫 프레임)
    28.10s  agent 발화 시작: <ret> 죄송해요. 강남역 근처에서 요가나 명상 관련 업체를 찾을 수 없었어요. 다른 지역도 괜찮으신가요?
    28.24s  user  발화 끝
    29.36s  ⚡SPAN 주입 [d'=1.48s / d_lead=9.32s]: (tool result) (no information found)
    37.42s  agent 발화 끝
    37.76s  user  발화 시작: 음… 그럼 역삼역 근처는 어때요?
    40.06s  user  발화 끝
    40.11s  <ret> 발화 (turn7 첫 프레임)
    40.34s  agent 발화 시작: <ret> 역삼역 근처에 "요가 블리스"라는 곳이 있어요. 주소는 역삼동 일 삼 육 일 이번지이고, 전화번호
    41.12s  ⚡SPAN 주입 [d'=1.01s / d_lead=12.38s]: (tool result) {"name": "Yoga Bliss", "address": "136-12 Yeoksam-dong",
    49.07s  user  발화 시작: 네.
    49.52s  user  발화 끝
    52.72s  agent 발화 끝
    53.03s  user  발화 시작: 아, 좋아요! 거기가 평점이 괜찮은가요?
    55.82s  <ret> 발화 (turn10 첫 프레임)
    55.92s  agent 발화 시작: <ret> "요가 블리스"의 평점은 사 점 오점이고, 리뷰는 백이십오개입니다. 꽤 괜찮은 곳인 것 같아요.
    56.09s  user  발화 끝
    56.86s  ⚡SPAN 주입 [d'=1.04s / d_lead=9.32s]: {"name": "Yoga Bliss", "rating": 4.5, "reviews": 125}
    65.23s  user  발화 시작: 오, 사 점 오점이면 꽤 좋은데요. 혹시 지금 바로 예약할 수 있을까요?
    65.24s  agent 발화 끝
    67.60s  agent 발화 시작: 네.
    68.19s  agent 발화 끝
    68.72s  <ret> 발화 (turn13 첫 프레임)
    69.24s  agent 발화 시작: <ret> 네, 칠월 십일일 오전 열시에 예약이 완료되었습니다. 확인 코드는 와이 비 이 공 이 육 공 칠 
    69.32s  ⚡SPAN 주입 [d'=0.60s / d_lead=10.89s]: (tool result) {"provider": "Yoga Bliss", "date": "2026-07-11", "time":
    69.37s  user  발화 끝
    80.13s  agent 발화 끝
    81.49s  user  발화 시작: 정말 감사합니다! 그런데—
    83.76s  user  발화 시작: 혹시 요가 블리스 가는 길을 알려줄 수 있을까요? 지금 강남역에 있거든요.
    83.81s  user  발화 끝
    85.81s  agent 발화 시작: 네네.
    86.58s  agent 발화 끝
    88.35s  <ret> 발화 (turn17 첫 프레임)
    88.39s  agent 발화 시작: <ret> 강남역에서 요가 블리스까지는 도보로 이 점 삼킬로미터, 약 삼십분 정도 걸립니다.
    88.51s  user  발화 끝
    88.95s  ⚡SPAN 주입 [d'=0.60s / d_lead=7.32s]: {"start": "Gangnam Station", "end": "Yoga Bliss, 136-12 Yeoksam-dong",
    92.92s  user  발화 시작: 네.
    93.37s  user  발화 끝
    95.70s  agent 발화 끝
    95.75s  user  발화 시작: 삼십분이면 괜찮네요. 혹시 다른 스트레스 해소 방법도 추천해 주실 수 있나요?
   100.19s  agent 발화 시작: 스트레스 해소에는 산책이나 가벼운 운동도 도움이 많이 돼요. 아니면 좋아하는 음악을 듣거나 차를 마시는 것도
   100.23s  user  발화 끝
   110.39s  agent 발화 끝
   111.00s  user  발화 시작: 아, 차 마시는 거 좋네요. 근처에 분위기 좋은 카페가 있을까요?
   114.41s  <ret> 발화 (turn22 첫 프레임)
   114.43s  user  발화 끝
   114.45s  agent 발화 시작: <ret> 역삼동에 "커피빈 역삼점"이 있어요. 주소는 역삼동 일 삼 육 일 삼번지이고, 전화번호는 공 이 
   115.94s  ⚡SPAN 주입 [d'=1.54s / d_lead=12.52s]: (tool result) {"name": "Coffee Bean Yeoksam", "address": "136-13 Yeoks
   126.97s  agent 발화 끝
   128.35s  user  발화 시작: 커피빈이요? 거기 괜찮죠?
   130.18s  user  발화 끝
   130.26s  agent 발화 시작: 커피빈은 분위기가 좋고, 다양한 음료를 즐길 수 있어서 많은 분들이 찾으시는 곳이에요.
   137.93s  user  발화 시작: 좋아요. 그럼 오늘 요가 블리스에서 요가하고 커피빈에서 차 마시는 걸로 할게요.
   138.10s  agent 발화 끝
   142.88s  user  발화 끝
   143.08s  agent 발화 시작: [happy] 아주 좋은 계획이네요! 오늘 하루 편안하게 보내시길 바랍니다.
   148.50s  agent 발화 끝
