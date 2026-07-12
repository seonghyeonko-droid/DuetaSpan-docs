# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "보희",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 푸리님, 혹시 영화 '위대한 독재자'에 나오는 연설문 누가 썼 | S2 아, 그렇군요. 그 영화에 대해서 더 자세히 알고 싶어요. | S3 …그 영화가 왜 그렇게 유명한가요? | S4 그럼 채플린은 다른 유명한 영화도 많이 만들었나요?

     0.00s  user  발화 시작: 푸리님, 혹시 영화 '위대한 독재자'에 나오는 연설문 누가 썼는지 아세요?
     5.13s  agent 발화 시작: 찰리 채플린이 직접 썼다고 알려져 있어요. 그 영화는 정말 유명하죠.
     5.13s  user  발화 끝
    10.26s  user  발화 시작: 아, 그렇군요. 그 영화에 대해서 더 자세히 알고 싶어요.
    10.26s  agent 발화 끝
    14.88s  agent 발화 시작: '위대한 독재자'는 천구백사십년에 개봉한 찰리 채플린 감독의 풍자 영화예요—
    14.88s  user  발화 끝
    19.50s  user  발화 시작: …그 영화가 왜 그렇게 유명한가요?
    19.50s  agent 발화 끝
    22.06s  agent 발화 시작: 그 영화는 아돌프 히틀러를 풍자하며, 전체주의에 대한 강렬한 비판을 담고 있어서예요. 채플린은 이 영화를 통
    22.06s  user  발화 끝
    33.35s  user  발화 시작: 네.
    33.35s  agent 발화 끝
    33.86s  agent 발화 시작: 네, 정말 그렇죠. 이 영화는 개봉 당시에도 큰 논란을 불러일으켰지만, 지금은 영화사에서 중요한 작품으로 평
    33.86s  user  발화 끝
    46.69s  user  발화 시작: 그럼 채플린은 다른 유명한 영화도 많이 만들었나요?
    46.69s  agent 발화 끝
    49.88s  <ret> 발화 (turn9 첫 프레임)
    50.28s  agent 발화 시작: <ret> 찰리 채플린은 영화 산업 역사상 가장 중요한 인물 중 한 명으로 널리 알려진 영국 코미디 배우, 
    50.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.85s]: Charles Chaplin was an English comic actor, filmmaker, and composer wh
    50.28s  user  발화 끝
    64.13s  agent 발화 끝
