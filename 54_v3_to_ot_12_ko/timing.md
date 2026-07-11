# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "재완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '하우스 오브 더 라이징 선'에 출연한 배우들 알 수 있 | S2 아, 네, 계속해서요. 다른 배우도 알려주세요. | S3 덥네요. 그럼 내일 서울 날씨는 어때요? | S4 해운대 해변 좋죠. 부산 가는 기차표 예매해 줄 수 있어요?

     0.00s  user  발화 시작: 혹시 '하우스 오브 더 라이징 선'에 출연한 배우들 알 수 있을까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.05s  agent 발화 시작: <ret> '하우스 오브 더 라이징 선'에서 제니 포터 역은 에이미 스마트 씨가 맡았답니다. 혹시 다른 배우
     0.05s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Amy Smart played Jenny Porter in The House of the Rising Sun.
     0.05s  user  발화 끝
     0.13s  <ret> 발화 (turn5 첫 프레임)
     0.13s  user  발화 시작: 음… 다른 사람도 궁금하긴 한데… 잠깐만요.
     0.13s  agent 발화 끝
     0.16s  user  발화 시작: 오늘 저녁 뭐 먹을까?
     0.16s  user  발화 끝
     0.18s  user  발화 시작: 아, 네, 계속해서요. 다른 배우도 알려주세요.
     0.18s  user  발화 끝
     0.20s  <ret> 발화 (turn11 첫 프레임)
     0.21s  agent 발화 시작: <ret> 다시 말씀드리지만, 제니 포터 역은 에이미 스마트 씨가 연기하셨어요.
     0.21s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: Amy Smart played Jenny Porter in The House of the Rising Sun.
     0.21s  user  발화 끝
     0.25s  user  발화 시작: 예.
     0.25s  agent 발화 끝
     0.26s  agent 발화 시작: 혹시 다른 캐릭터에 대해 알고 싶으신가요? 제가 더 자세히 알아봐 드릴 수 있어요.
     0.26s  user  발화 끝
     0.32s  user  발화 시작: 아니, 그건 됐어요. 그냥 궁금해서 물어본 거예요.
     0.32s  agent 발화 끝
     0.35s  agent 발화 시작: 괜찮습니다. 궁금한 점이 생기면 언제든지 저에게 말씀해 주세요. 저는 캐이아, 여러분의 든든한 조력자니까요.
     0.35s  user  발화 끝
     0.42s  user  발화 시작: 고마워요. 혹시 지금 서울 날씨 어때요?
     0.42s  agent 발화 끝
     0.44s  <ret> 발화 (turn17 첫 프레임)
     0.44s  agent 발화 시작: <ret> 지금 서울 날씨는 기온 이십팔도, 습도 육십오퍼센트, 바람은 시속 사킬로미터로 측정되었어요. 꽤 
     0.44s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Current conditions are 28.0°C, humidity 65%, wind 4.0 km
     0.44s  user  발화 끝
     0.46s  <ret> 발화 (turn14 첫 프레임)
     0.51s  user  발화 시작: 와.
     0.51s  agent 발화 끝
     0.51s  user  발화 시작: 덥네요. 그럼 내일 서울 날씨는 어때요?
     0.51s  user  발화 끝
     0.51s  <ret> 발화 (turn23 첫 프레임)
     0.54s  agent 발화 시작: <ret> 내일 서울 날씨는 기온 삼십도, 습도 칠십퍼센트, 바람은 시속 삼 점 오킬로미터로 예상됩니다. 내
     0.54s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Tomorrow's forecast is 30.0°C, humidity 70%, wind 3.5 km
     0.54s  user  발화 끝
     0.62s  user  발화 시작: 알겠습니다. 그럼 이번 주 토요일에 부산…
     0.62s  agent 발화 끝
     0.65s  user  발화 시작: …갈 만한 곳 추천해 줄 수 있을까요?
     0.65s  user  발화 끝
     0.68s  agent 발화 시작: <ret> 이번 주 토요일 부산에 가신다면 해운대 해변을 추천해 드립니다. 아름다운 모래사장이 유명한 곳이에
     0.68s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Haeundae Beach is a popular attraction in Busan, known f
     0.68s  user  발화 끝
     0.75s  user  발화 시작: 네.
     0.75s  agent 발화 끝
     0.75s  user  발화 시작: 해운대 해변 좋죠. 부산 가는 기차표 예매해 줄 수 있어요?
     0.75s  user  발화 끝
     0.80s  agent 발화 시작: 죄송하지만, 기차표 예매 기능은 아직 지원하지 않습니다. 검색 기능으로 부산행 기차 정보를 찾아 드릴 수는 
     0.80s  user  발화 끝
     0.88s  user  발화 시작: 네네.
     0.88s  agent 발화 끝
     0.88s  user  발화 시작: 아, 그렇군요. 그럼 부산행 기차 검색해 주세요.
     0.88s  user  발화 끝
     0.91s  agent 발화 시작: <ret> 서울에서 부산으로 가는 기차는 매 삼십분 간격으로, 오전 일곱시부터 운행되고 있습니다. 시간표를 
     0.91s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Trains depart Seoul for Busan every 30 minutes, starting
     0.91s  user  발화 끝
     1.00s  agent 발화 끝
