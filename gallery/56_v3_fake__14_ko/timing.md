# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "은진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 오레아크스님. 잠을 잘 자고 싶은데 어떻게 해야  | S2 아, 사우스캐롤라이나요. 그쪽은 어때요? | S3 아, 그렇군요. 저녁에는 스마트폰을 잘 안 보려고 노력해야겠어 | S4 음… 부산 근처의 조용한 바닷가 마을은 없을까요?

     0.00s  user  발화 시작: 안녕하세요, 오레아크스님. 잠을 잘 자고 싶은데 어떻게 해야 할까요?
     4.94s  agent 발화 시작: 안녕하세요! 편안한 잠을 위한 루틴을 만드는 게 중요해요. 규칙적인 수면 시간을 정하는 것부터 시작해 보세요
     4.94s  user  발화 끝
    13.17s  user  발화 시작: 규칙적인 수면 시간이라… 쉽지 않네요.
    13.17s  agent 발화 끝
    15.85s  <ret> 발화 (turn3 첫 프레임)
    15.91s  agent 발화 시작: <ret> 마이애미 해변의 산책로는 일 점 구킬로미터 길이로, 상점과 레스토랑, 오락실 등 다양한 볼거리를 
    15.91s  user  발화 끝
    16.92s  ⚡SPAN 주입 [d'=1.08s / d_lead=8.23s]: The Myrtle Beach boardwalk is 1.2 miles long and offers a variety of a
    24.14s  user  발화 시작: 마이애미 해변요? 저는 마이애미에 가본 적 없어요.
    24.14s  agent 발화 끝
    27.98s  agent 발화 시작: [surprised] 죄송합니다. 혼동을 드렸네요. 마이애미가 아니라 마이틀 비치였어요. 사우스캐롤라이나에 
    27.98s  user  발화 끝
    34.02s  user  발화 시작: 아, 사우스캐롤라이나요. 그쪽은 어때요?
    34.02s  agent 발화 끝
    36.21s  agent 발화 시작: [curious] 사우스캐롤라이나는 아름다운 해변과 역사적인 도시로 유명해요. 특히 마이틀 비치는 가족 여행
    36.21s  user  발화 끝
    43.90s  agent 발화 시작: 죄송해요. 사우스캐롤라이나의 다른 정보는 찾을 수 없었어요.
    43.90s  agent 발화 끝
    47.74s  user  발화 시작: 네네.
    47.74s  agent 발화 끝
    48.28s  user  발화 시작: 음…
    48.28s  user  발화 끝
    48.83s  agent 발화 시작: 잠으로 다시 돌아가 볼까요? 잠들기 전에 스크린 타임을 줄이는 것도 중요해요.
    48.83s  user  발화 끝
    54.87s  user  발화 시작: 네.
    54.87s  agent 발화 끝
    55.42s  user  발화 시작: 스크린 타임요? 스마트폰이나 티 브이를 보는 건가요?
    55.42s  user  발화 끝
    59.26s  agent 발화 시작: 네, 맞아요. 스마트폰이나 티 브이에서 나오는 블루라이트는 수면을 방해할 수 있거든요.
    59.26s  user  발화 끝
    65.29s  user  발화 시작: 네.
    65.29s  agent 발화 끝
    65.84s  user  발화 시작: 아, 그렇군요. 저녁에는 스마트폰을 잘 안 보려고 노력해야겠어요.
    65.84s  user  발화 끝
    70.21s  <ret> 발화 (turn18 첫 프레임)
    70.23s  agent 발화 시작: 네.
    70.23s  user  발화 끝
    70.78s  agent 발화 시작: <ret> 마이틀 비치, 사우스캐롤라이나의 호텔 객실 평균 가격은 일박에 백삼십구달러 정도라고 해요.
    70.78s  agent 발화 끝
    71.44s  ⚡SPAN 주입 [d'=1.24s / d_lead=6.04s]: The average cost of a hotel room in Myrtle Beach, SC is $139 per night
    76.82s  user  발화 시작: 호텔 가격이 백삼십구달러나 하네요.
    76.82s  agent 발화 끝
    79.01s  agent 발화 시작: [sigh] 마이틀 비치는 인기 있는 휴양지라서 가격이 조금 높은 편이에요.
    79.01s  user  발화 끝
    84.50s  user  발화 시작: 그럼 다른 곳은 어떨까요? 조금 더 저렴한 곳을 찾아볼까요?
    84.50s  agent 발화 끝
    89.44s  agent 발화 시작: 네, 물론이죠. 다른 도시나 지역을 알아볼 수도 있어요. 어디를 선호하시나요?
    89.44s  user  발화 끝
    94.92s  user  발화 시작: 네.
    94.92s  agent 발화 끝
    95.47s  user  발화 시작: 음… 부산 근처의 조용한 바닷가 마을은 없을까요?
    95.47s  user  발화 끝
    98.72s  <ret> 발화 (turn25 첫 프레임)
    99.19s  ⚡SPAN 주입(IRRELEVANT) [d'=0.46s / d_lead=6.04s]: The population of Ulaanbaatar, Mongolia is approximately 1.6 million p
    99.31s  agent 발화 시작: <ret> [curious] 부산 근처의 조용한 바닷가 마을이라… 기장이나 해운대가 괜찮을 것 같아요.
    99.31s  user  발화 끝
   105.35s  agent 발화 시작: 기장이나 해운대는 부산에서 가까워서 교통도 편리하고, 조용하게 휴식을 취하기에도 좋답니다.
   105.35s  agent 발화 끝
   110.84s  user  발화 시작: 예.
   110.84s  agent 발화 끝
   111.38s  user  발화 시작: 기장은 어때요?
   111.38s  user  발화 끝
   112.48s  agent 발화 시작: 기장은 해산물이 유명하고, 아름다운 해변이 많아요. 특히 대변항은 싱싱한 해산물을 맛볼 수 있는 곳으로 유명
   112.48s  user  발화 끝
   120.71s  agent 발화 시작: [laugh] 해산물을 좋아하신다면 기장에 가시면 정말 만족하실 거예요.
   120.71s  agent 발화 끝
   125.10s  user  발화 시작: 예.
   125.10s  agent 발화 끝
   125.65s  user  발화 시작: 해산물을 정말 좋아해요! 기장으로 가봐야겠네요.
   125.65s  user  발화 끝
   128.39s  agent 발화 시작: 아주 좋은 선택이에요! 기장에서 편안하고 즐거운 시간을 보내시길 바랍니다.
   128.39s  user  발화 끝
   133.33s  agent 발화 끝
