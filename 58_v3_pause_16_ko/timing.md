# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "채린",
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
#       "date": "2026-06-23",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그 노래… 엄마는 카우보이가 되지… | S2 에드 브루스… 음… 그분 다른 노래도 있나요? | S3 아, 텍사스도 부르셨구나… 그… | S4 …곡은 언제 발매됐을까요? …

     0.00s  user  발화 시작: 그 노래… 엄마는 카우보이가 되지…
     3.56s  user  발화 끝
     4.96s  user  발화 시작: …않게 하세요… 부르는 사람이 누구였더라…?
     8.13s  <ret> 발화 (turn2 첫 프레임)
     8.53s  agent 발화 시작: <ret> 그 노래는 에드 브루스라는 미국의 컨트리 음악 가수이자 작곡가가 불렀습니다.
     8.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: Ed Bruce is an American country music singer and songwriter.
     8.75s  user  발화 끝
    11.22s  user  발화 시작: 네.
    11.62s  user  발화 끝
    13.74s  user  발화 시작: 에드 브루스… 음… 그분 다른 노래도 있나요?
    13.90s  agent 발화 끝
    16.69s  <ret> 발화 (turn5 첫 프레임)
    17.01s  agent 발화 시작: <ret> 에드 브루스는 "텍사스(내가 죽을 때)"나 "밤에 일어나는 일들" 같은 곡으로도 유명합니다.
    17.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.43s]: (tool result) Ed Bruce also had hits with songs like "Texas (When I Di
    17.07s  user  발화 끝
    20.19s  user  발화 시작: 그렇죠.
    20.73s  user  발화 끝
    23.44s  agent 발화 끝
    24.61s  user  발화 시작: 아, 텍사스도 부르셨구나… 그…
    26.96s  user  발화 끝
    27.89s  user  발화 시작: …곡은 언제 발매됐을까요? …
    29.34s  <ret> 발화 (turn9 첫 프레임)
    29.50s  agent 발화 시작: <ret> "텍사스(내가 죽을 때)"는 천구백칠십사년에 발매되었고 에드 브루스의 대표곡이 되었습니다.
    29.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: "Texas (When I Die)" was released in 1974 and became Ed Bruce's signat
    29.64s  user  발화 끝
    36.63s  agent 발화 끝
