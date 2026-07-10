# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "하형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 좀 힘든 일이 많아서… 기분 전환할 만한 영화라도 보고  | S2 그거 재밌어요? | S3 그럼 그거 예매해 주세요.… | S4 …이번 주 토요일 저녁 일곱시로요.

     0.00s  user  발화 시작: 요즘 좀 힘든 일이 많아서… 기분 전환할 만한 영화라도 보고 싶어요.
     4.79s  agent 발화 시작: 어떤 장르를 좋아하시나요? 혹시 최근에 개봉한 영화 중에서 보고 싶은 게 있으신가요?
     5.00s  user  발화 끝
    10.25s  agent 발화 끝
    11.77s  user  발화 시작: 음… 코미디나 로맨틱 코미디 같은 거요. 너무 무거운 건 좀 그렇고…
    17.14s  <ret> 발화 (turn3 첫 프레임)
    17.53s  agent 발화 시작: <ret> 최근에 개봉한 로맨틱 코미디 영화로는, 이천이십삼년 십이월 이십이일에 개봉한 "Anyone But
    17.54s  ⚡SPAN 주입 [d'=0.50s / d_lead=10.75s]: The rom-com film "Anyone But You" was released on December 22, 2023, a
    17.74s  user  발화 끝
    24.99s  user  발화 시작: 헐.
    25.48s  user  발화 끝
    28.29s  agent 발화 끝
    28.78s  user  발화 시작: 그거 재밌어요?
    29.85s  agent 발화 시작: 평점과 관객 반응이 꽤 좋은 편이에요. 가볍게 웃으면서 즐길 수 있는 영화라고 하네요.
    29.97s  user  발화 끝
    32.53s  user  발화 시작: 그치.
    33.20s  user  발화 끝
    35.36s  user  발화 시작: 그럼 그거 예매해 주세요.…
    35.50s  agent 발화 끝
    37.28s  user  발화 끝
    38.64s  user  발화 시작: …이번 주 토요일 저녁 일곱시로요.
    41.09s  <ret> 발화 (turn10 첫 프레임)
    41.25s  agent 발화 시작: <ret> 네, "Anyone But You" 영화, 이천이십육년 칠월 십일일 토요일 저녁 일곱시, 메가박스
    41.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: (tool result) Confirmed: 2 adult tickets for "Anyone But You" on July 
    41.41s  user  발화 끝
    52.24s  agent 발화 끝
