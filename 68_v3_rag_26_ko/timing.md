# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "도원",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 진짜 요즘 너무 피곤해. 주말에 여행이라도 가고 싶은데, | S2 오, 진짜요? 빨리 찾아봐 주세요.… | S3 …혹시 벨기에 국기도 비슷한 색깔인가? | S4 천구백사십오년이요? 그럼 벨기에 국기는 더 오래됐겠네요?

     0.00s  user  발화 시작: 아, 진짜 요즘 너무 피곤해. 주말에 여행이라도 가고 싶은데, 어디로 가면 좋을까요? 근데 있잖아, 독일 국
    10.99s  user  발화 끝
    11.06s  agent 발화 시작: 여행 생각하시는군요, 좋은 생각이에요. 독일 국기 색깔은 검정색, 빨간색, 그리고 노란색입니다.
    17.55s  agent 발화 끝
    17.65s  user  발화 시작: 아, 맞다, 맞다! 검빨노! 근데 그 세 가지 색깔을 가진 국기는 또 뭐가 있을까? 궁금해졌어.
    25.32s  <ret> 발화 (turn3 첫 프레임)
    25.63s  agent 발화 시작: <ret> 다른 나라 국기 중에도 검정색, 빨간색, 노란색을 사용하는 곳이 있는지 알아볼게요… 정보를 찾을 
    25.67s  user  발화 끝
    27.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: 독일 국기 색깔은 검정색, 빨간색, 그리고 노란색입니다.
    29.30s  user  발화 시작: 어어.
    30.12s  user  발화 끝
    32.33s  user  발화 시작: 오, 진짜요? 빨리 찾아봐 주세요.…
    32.38s  agent 발화 끝
    35.66s  user  발화 끝
    36.65s  user  발화 시작: …혹시 벨기에 국기도 비슷한 색깔인가?
    38.90s  <ret> 발화 (turn7 첫 프레임)
    39.30s  agent 발화 시작: <ret> 벨기에 국기는 검정색, 노란색, 빨간색으로 구성되어 있습니다… 맞습니다.
    39.55s  user  발화 끝
    40.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: 벨기에 국기는 검정색, 노란색, 빨간색의 세 가지 색깔을 가지고 있습니다.
    41.41s  user  발화 시작: 음.
    41.91s  user  발화 끝
    45.06s  user  발화 시작: 아, 그렇구나. 그럼 독일이랑 벨기에 국기 중에 누가 먼저 만들어졌을까?
    45.09s  agent 발화 끝
    51.32s  <ret> 발화 (turn10 첫 프레임)
    51.47s  agent 발화 시작: <ret> 독일 국기가 현재의 형태로 채택된 시기는 천구백사십오년입니다… 벨기에 국기가 먼저 만들어졌습니다.
    51.54s  user  발화 끝
    53.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: 독일 국기는 1848년에 만들어졌고 벨기에 국기는 1830년에 만들어졌습니다.
    57.91s  agent 발화 끝
    57.98s  user  발화 시작: 천구백사십오년이요? 그럼 벨기에 국기는 더 오래됐겠네요?
    62.76s  <ret> 발화 (turn12 첫 프레임)
    63.15s  agent 발화 시작: <ret> 벨기에 국기가 처음 사용된 것은 천구백삼십년입니다… 천구백삼십년입니다
    63.16s  user  발화 끝
    63.96s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.38s]: 벨기에 국기가 먼저 만들어졌습니다.
    66.53s  agent 발화 끝
