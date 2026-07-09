# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "home",
#       "text": "User's home address is 411 Maple Drive."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 럭스 아우룬케가 작곡한 곡이 언제 만들어졌는지 알 수 있을까요 | S2 아, 천구백칠십년이군요. 그럼 그분이 어떤 스타일의 음악을 주 | S3 잠깐만요, 혹시 그분이 다른 음악가들과 협업한 적이 있나요? | S4 아냐 볼코프와 벤 카터라… 두 분은 어떤 음악을 하시나요?

     0.00s  user  발화 시작: 럭스 아우룬케가 작곡한 곡이 언제 만들어졌는지 알 수 있을까요?
     3.84s  user  발화 끝
     3.89s  <ret> 발화 (turn1 첫 프레임)
     3.96s  agent 발화 시작: <ret> 작곡가에 대한 정보부터 알아봐야 할 것 같아요. 럭스 아우룬케는 천구백칠십년에 태어났습니다. 전자
     5.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: [source: Britannica] Lux Aurunque was born in 1970 and is known for hi
     7.62s  user  발화 시작: 예.
     8.26s  user  발화 끝
    14.43s  agent 발화 끝
    14.77s  user  발화 시작: 아, 천구백칠십년이군요. 그럼 그분이 어떤 스타일의 음악을 주로 하시는지 궁금해요.
    19.58s  agent 발화 시작: 럭스 아우룬케는 주로 실험적인 전자 음악을 선보이는 것으로 유명합니다. 그의 작품은—
    19.72s  user  발화 끝
    25.85s  user  발화 시작: 잠깐만요, 혹시 그분이 다른 음악가들과 협업한 적이 있나요?
    26.43s  agent 발화 끝
    29.63s  <ret> 발화 (turn6 첫 프레임)
    29.68s  user  발화 끝
    29.70s  agent 발화 시작: <ret> 네, 협업에 대한 정보도 찾아볼 수 있습니다.
    31.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: [source: AllMusic] Lux Aurunque collaborated with several prominent ar
    33.34s  agent 발화 시작: 럭스 아우룬케는 아냐 볼코프, 벤 카터와 함께 "내일의 메아리"라는 앨범에서 협업했습니다. 비평가들에게 호평
    33.44s  agent 발화 끝
    42.01s  agent 발화 끝
    42.27s  user  발화 시작: 아냐 볼코프와 벤 카터라… 두 분은 어떤 음악을 하시나요?
    46.29s  user  발화 끝
