# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "정온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-14",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 농구 선수들 평균 키가 얼마나 돼? | S2 육피트 칠인치가 몇 센티미터야? | S3 … 혹시 여자 농구… | S4 …선수들은 평균 키가 얼마나 돼?

     0.00s  user  발화 시작: 농구 선수들 평균 키가 얼마나 돼?
     2.39s  <ret> 발화 (turn1 첫 프레임)
     2.71s  agent 발화 시작: <ret> 음, nba 농구 선수들의 평균 키는 육피트 칠인치 정도 된대요.
     2.71s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.51s]: The average height of a basketball player in the NBA is 6 feet 7 inche
     2.71s  user  발화 끝
     7.22s  user  발화 시작: 진짜?
     7.22s  agent 발화 끝
     7.67s  user  발화 시작: 육피트 칠인치가 몇 센티미터야?
     7.67s  user  발화 끝
     9.31s  <ret> 발화 (turn4 첫 프레임)
     9.47s  agent 발화 시작: <ret> 아, 센티미터로 환산하면 약 백구십팔 점 일 이센티미터 정도 됩니다.
     9.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.51s]: (tool result) 198.12 cm
     9.47s  user  발화 끝
    13.99s  user  발화 시작: 오.
    13.99s  agent 발화 끝
    14.44s  agent 발화 시작: 키가 크면 아무래도 농구에 유리하겠죠 —
    14.44s  user  발화 끝
    17.14s  user  발화 시작: … 혹시 여자 농구…
    17.14s  agent 발화 끝
    18.95s  user  발화 시작: …선수들은 평균 키가 얼마나 돼?
    18.95s  user  발화 끝
    21.12s  <ret> 발화 (turn9 첫 프레임)
    21.20s  agent 발화 시작: <ret> wNBA 선수들의 평균 키는 육피트 정도라고 하네요.
    21.20s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.16s]: The average height for female WNBA players is 6 feet.
    21.20s  user  발화 끝
    24.36s  agent 발화 끝
