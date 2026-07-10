# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
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
#       "date": "2026-06-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 참전용사부라고 하는 데가 언제 만들어졌는지 아세요? | S2 음, 잠깐만요. 그게 언제 만들어졌는지 다시 한… | S3 …번만 말씀해 주시겠어요? 기억이 잘 안 나서요. | S4 그… 지금 서울 날씨는 어때요? 갑자기 궁금해졌어요.

     0.00s  user  발화 시작: 혹시 참전용사부라고 하는 데가 언제 만들어졌는지 아세요?
     3.53s  <ret> 발화 (turn1 첫 프레임)
     3.84s  agent 발화 시작: <ret> 참전용사부는 천구백삼십년 칠월 이십일일에 만들어졌습니다. 괜찮으시다면, 예산 관리나 재정 목표 설
     3.84s  user  발화 끝
     4.97s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.58s]: The Department of Veterans Affairs was established on July 21, 1930.
    12.42s  agent 발화 끝
    12.62s  user  발화 시작: 음, 잠깐만요. 그게 언제 만들어졌는지 다시 한…
    16.41s  user  발화 끝
    17.88s  user  발화 시작: …번만 말씀해 주시겠어요? 기억이 잘 안 나서요.
    20.28s  <ret> 발화 (turn4 첫 프레임)
    20.59s  agent 발화 시작: <ret> 천구백삼십년 칠월 이십일일입니다. 혹시 다른 궁금한 점이 있으신가요? 아니면, 예산 관련해서 좀 
    20.79s  user  발화 끝
    21.24s  ⚡SPAN 주입 [d'=0.96s / d_lead=8.16s]: The Department of Veterans Affairs was established on July 21, 1930.
    28.75s  agent 발화 끝
    28.95s  user  발화 시작: 그… 지금 서울 날씨는 어때요? 갑자기 궁금해졌어요.
    33.23s  <ret> 발화 (turn6 첫 프레임)
    33.46s  agent 발화 시작: <ret> 지금 서울은 기온이 이십팔 점 영도이고, 습도는 육십오 퍼센트, 바람은 시속 삼 점 이킬로미터입니
    33.63s  user  발화 끝
    35.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.07s]: (tool result) 28.0°C, humidity 65%, wind 3.2 km/h
    41.53s  agent 발화 끝
