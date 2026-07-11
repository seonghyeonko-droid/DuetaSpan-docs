# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Rowan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "home",
#       "text": "User's home address is 957 Pine Court."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이선희 씨 연락처가 혹시 있으세요? | S2 네, 한식으로 부탁드려요. | S3 그거 정말 완벽하네요! 어떻게 가야 하죠? | S4 좋아요! 식료품점도 찾아야 해요.

     0.00s  user  발화 시작: 이선희 씨 연락처가 혹시 있으세요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.02s  agent 발화 시작: <ret> 죄송하지만, 이선희 씨의 공개된 연락처는 찾을 수 없었습니다. 개인 정보인 것 같습니다.
     0.02s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (no information found)
     0.02s  user  발화 끝
     0.03s  <ret> 발화 (turn10 첫 프레임)
     0.07s  user  발화 시작: 네.
     0.07s  agent 발화 끝
     0.07s  user  발화 시작: 아, 아쉽네요. 그럼 부산 내일 날씨는 어때요?
     0.07s  user  발화 끝
     0.10s  agent 발화 시작: <ret> 내일 부산은 섭씨 26.1도이고, 습도는 68%, 풍속은 시속 7.2킬로미터입니다. 정말 좋겠네요
     0.10s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) 26.1°C, humidity 68%, wind 7.2 km/h
     0.10s  user  발화 끝
     0.15s  user  발화 시작: 와.
     0.15s  agent 발화 끝
     0.15s  user  발화 시작: 그렇군요. 여기 정착하려고 하는데, 좀 정신이 없네요.
     0.15s  user  발화 끝
     0.18s  agent 발화 시작: 새로운 도시에 정착하는 건 분명히 정신없을 수 있지만, 설레기도 하죠! 너무 걱정하지 마세요, 금방 적응하실
     0.18s  user  발화 끝
     0.22s  <ret> 발화 (turn20 첫 프레임)
     0.23s  <ret> 발화 (turn17 첫 프레임)
     0.24s  user  발화 시작: 네네.
     0.24s  agent 발화 끝
     0.25s  user  발화 시작: 근처에 괜찮은 식당 좀 찾아보고 싶어요.
     0.25s  user  발화 끝
     0.25s  <ret> 발화 (turn12 첫 프레임)
     0.27s  agent 발화 시작: <ret> 현재 위치에서 5킬로미터 반경 안에 12개의 식당을 찾았습니다. 음식 종류별로 필터링해 드릴까요?
     0.27s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) 12 restaurants found within 5km radius.
     0.27s  user  발화 끝
     0.32s  user  발화 시작: 네, 한식으로 부탁드려요.
     0.32s  agent 발화 끝
     0.33s  agent 발화 시작: <ret> 5킬로미터 이내에 한식당이 6곳 있습니다. 평점과 리뷰를 보여 드릴까요?
     0.33s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) 6 Korean restaurants found within 5km radius.
     0.33s  user  발화 끝
     0.37s  user  발화 시작: 네네.
     0.37s  agent 발화 끝
     0.37s  <ret> 발화 (turn27 첫 프레임)
     0.37s  user  발화 시작: 그거 정말 도움이 될 것 같아요, 네.
     0.37s  user  발화 끝
     0.40s  agent 발화 시작: 음… 국밥전주가 평점이 4.5점으로 아주 높습니다—
     0.40s  user  발화 끝
     0.43s  user  발화 시작: …혹시 근처에 공원 같은 곳도 있나요? 초록 공간이 좀 필요해요.
     0.43s  agent 발화 끝
     0.47s  agent 발화 시작: <ret> 태종대 공원은 1.5킬로미터 거리에 있고 평점은 4.6점입니다. 아름다운 해안 공원이에요.
     0.47s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Taejongdae Park, 1.5km away, 4.6 stars.
     0.47s  user  발화 끝
     0.51s  user  발화 시작: 그렇죠.
     0.51s  agent 발화 끝
     0.51s  user  발화 시작: 그거 정말 완벽하네요! 어떻게 가야 하죠?
     0.51s  user  발화 끝
     0.54s  agent 발화 시작: <ret> 차로 가면 약 20분, 대중교통을 이용하면 45분 정도 걸립니다. 자세한 길 안내를 원하세요?
     0.54s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Driving: 20 minutes, Public Transit: 45 minutes.
     0.54s  user  발화 끝
     0.59s  user  발화 시작: 진짜요?
     0.59s  agent 발화 끝
     0.59s  user  발화 시작: 대중교통으로 부탁드려요.
     0.59s  user  발화 끝
     0.60s  agent 발화 시작: 101번 버스를 30분 동안 타고, 133번 버스로 환승해서—
     0.60s  user  발화 끝
     0.63s  agent 발화 시작: —또 15분 정도 가시면 됩니다. 경로를 등록된 휴대폰으로 보내 드릴까요?
     0.63s  agent 발화 끝
     0.67s  user  발화 시작: 네.
     0.67s  agent 발화 끝
     0.68s  user  발화 시작: 네, 그렇게 해주세요.
     0.68s  user  발화 끝
     0.68s  <ret> 발화 (turn29 첫 프레임)
     0.68s  <ret> 발화 (turn32 첫 프레임)
     0.69s  agent 발화 시작: <ret> 버스 경로를 등록된 기기로 보냈습니다. 곧 도착할 거예요. 오후 산책하기 정말 좋은 곳입니다.
     0.69s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Message sent to registered device.
     0.69s  user  발화 끝
     0.74s  user  발화 시작: 좋아요! 식료품점도 찾아야 해요.
     0.74s  agent 발화 끝
     0.76s  agent 발화 시작: <ret> 홈플러스 부산 센텀시티가 800미터 거리에 있습니다. 필요한 모든 것을 갖춘 대형 슈퍼마켓입니다.
     0.76s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Homeplus Busan Centum City, 800m away.
     0.76s  user  발화 끝
     0.81s  user  발화 시작: 정말요?
     0.81s  agent 발화 끝
     0.81s  user  발화 시작: 훌륭하네요, 정말 가깝네요. 지역 축제에 대해서도 궁금해요.
     0.81s  user  발화 끝
     0.84s  agent 발화 시작: <ret> 부산국제영화제는 이천이십육 년 10월 21일부터 10월 30일까지 개최될 예정입니다. 아주 인기 
     0.84s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Busan International Film Festival, Oct 21-Oct 30, 2026.
     0.84s  user  발화 끝
     0.89s  user  발화 시작: 아직 좀 남았지만, 알아두면 좋겠네요. 도움 정말 감사합니다!
     0.89s  agent 발화 끝
     0.93s  agent 발화 시작: 천만에요. 정착하는 데 도움이 되어 기쁩니다. 그리고 천천히 하나씩 해나가세요. 아름다운 도시이고, 분명히 
     0.93s  user  발화 끝
     1.00s  agent 발화 끝
