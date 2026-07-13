# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "유현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 창욱진 씨에 대해 좀 알려주시겠어요? | S2 아, 그렇군요. | S3 천구백사십오년이군요. 그럼 창욱진 님은 그 즈음에 태어나셨다는 | S4 그림을 좀 보여주실 수 있나요?

     0.00s  user  발화 시작: 창욱진 씨에 대해 좀 알려주시겠어요?
     2.91s  agent 발화 시작: 창욱진 님에 대해 궁금하시군요. 어떤 점이 가장 알고 싶으세요?
     2.91s  user  발화 끝
     8.14s  user  발화 시작: 그분이 어떤 시대에 태어났는지 궁금해요.
     8.14s  agent 발화 끝
    10.44s  <ret> 발화 (turn3 첫 프레임)
    11.05s  agent 발화 시작: <ret> 창욱진 님은 제이차 세계 대전이 끝나는 시기에 한국에서 태어나셨습니다.
    11.05s  user  발화 끝
    11.94s  ⚡SPAN 주입 [d'=1.50s / d_lead=5.23s]: Chang Ucchin was born in Korea during a time that ended with the concl
    16.28s  user  발화 시작: 그렇죠.
    16.28s  agent 발화 끝
    16.86s  user  발화 시작: 아, 그렇군요.
    16.86s  user  발화 끝
    18.02s  agent 발화 시작: 창욱진 님은 한국화의 중요한 인물로 평가받고 계세요.
    18.02s  user  발화 끝
    22.09s  user  발화 시작: 음.
    22.09s  agent 발화 끝
    22.67s  user  발화 시작: 세계 대전이 언제 끝났죠?
    22.67s  user  발화 끝
    24.85s  <ret> 발화 (turn9 첫 프레임)
    25.00s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 두시 사십일분입니다. 제이차 세계 대전은 천구백사십오년
    25.00s  user  발화 끝
    25.93s  ⚡SPAN 주입 [d'=1.08s / d_lead=7.56s]: (tool result) It is Friday, July 10, 2026 at 2:41 PM in Asia/Seoul rig
    32.56s  user  발화 시작: 천구백사십오년이군요. 그럼 창욱진 님은 그 즈음에 태어나셨다는 말씀이시네요.
    32.56s  agent 발화 끝
    37.21s  agent 발화 시작: [happy] 네, 맞습니다. 창욱진 님은 천구백십팔년에 태어나셨고, 천구백칠십팔년에 세상을 떠나셨어요.
    37.21s  user  발화 끝
    43.02s  user  발화 시작: 아, 그럼 한국 전쟁도 겪으셨겠네요.
    43.02s  agent 발화 끝
    45.93s  agent 발화 시작: 창욱진 님은 한국 전쟁 시기에 작품 활동을 하셨습니다. 전쟁의 아픔을 담은 그림도 많으시고요.
    45.93s  user  발화 끝
    53.49s  user  발화 시작: 그렇죠.
    53.49s  agent 발화 끝
    54.07s  user  발화 시작: 그림을 좀 보여주실 수 있나요?
    54.07s  user  발화 끝
    56.90s  <ret> 발화 (turn16 첫 프레임)
    56.98s  agent 발화 시작: <ret> 창욱진 화백의 삶과 예술에 대한 유튜브 영상이 있습니다. 길이는 십이분 삼십사초입니다.
    56.98s  user  발화 끝
    57.51s  ⚡SPAN 주입 [d'=0.61s / d_lead=6.40s]: (tool result) '창욱진 화백의 삶과 예술' - YouTube, youtube.com, 12:34
    63.37s  user  발화 시작: 좋아요. 한번 봐야겠네요.
    63.37s  agent 발화 끝
    65.12s  user  발화 끝
