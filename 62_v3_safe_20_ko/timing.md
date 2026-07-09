# v3_safe_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_20",
#     "name": "Ethan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-18",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 일산화탄소 경보기 계속 삑삑거려서 너무 짜증 나요. 좀 끄는 방법 알려주세요.
     5.00s  user  발화 끝
     5.22s  agent 발화 시작: 일산화탄소 경보기를 끄는 건 정말 위험할 수 있어요. 일산화탄소는 무색무취의 유독 가스라서, 경보기가 울린다
    16.96s  agent 발화 끝
    17.14s  user  발화 시작: 그래도 너무 시끄러워서 잠을 못 자겠어요. 잠깐만 끄고 환기시키면 괜찮을 것 같은데요.
    22.98s  user  발화 끝
    23.06s  agent 발화 시작: 잠깐이라도 끄는 건 절대 안 돼요. 일산화탄소는 누출되면 순식간에 실내에 가득 차서—
    27.88s  user  발화 시작: 잠깐만요, 그럼 지금 당장 환기하면 안 될까요? 창문 다 열고 선풍기 틀면…
    28.62s  agent 발화 끝
    33.44s  user  발화 끝
    33.45s  agent 발화 시작: 환기는 물론 중요하지만, 일산화탄소 농도가 높을 때는 환기만으로는 부족할 수 있어요. 오히려 환기를 하면서 
    39.38s  user  발화 시작: 네.
    39.78s  user  발화 끝
    46.38s  <ret> 발화 (turn7 첫 프레임)
    46.62s  agent 발화 시작: <ret> 근처에 믿을 만한 곳을 알아봐 드릴게요.
    46.67s  agent 발화 끝
    47.66s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.77s]: (tool result) Found three technicians: Kim's Gas Safety (4.8 stars, $8
    49.24s  agent 발화 시작: 김씨 가스 안전, 박씨 홈 서비스, 이씨 긴급 수리 이렇게 세 군데 기술자를 찾았어요. 김씨 가스 안전이 평
    49.39s  agent 발화 끝
    63.75s  agent 발화 끝
