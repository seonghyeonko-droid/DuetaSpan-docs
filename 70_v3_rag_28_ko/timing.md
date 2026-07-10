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

# EXAMINER(FDB-v2) 단계: S1 어, 재향군인부요? 그거 언제 생겼대? | S2 음, 천구백삼십년이라고? 그건 좀 빠른 것 같은데. 더 일찍  | S3 아, 천구백십칠년이 처음이었구나. 그럼 천구백삼십년은 뭐 달라 | S4 그래, 이름이 바뀐 거였구나. 그럼 지금은 재향군인부라고 하던

     0.00s  user  발화 시작: 어, 재향군인부요? 그거 언제 생겼대?
     2.73s  <ret> 발화 (turn1 첫 프레임)
     3.00s  user  발화 끝
     3.04s  agent 발화 시작: <ret> 재향군인부는 천구백삼십년 칠월 이십일일에 설립되었답니다. 예전에 보훈 관련해서 여쭤보신 적이 있으
     4.17s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.36s]: The Department of Veterans Affairs was established on July 21, 1930.
    10.40s  agent 발화 끝
    10.45s  user  발화 시작: 음, 천구백삼십년이라고? 그건 좀 빠른 것 같은데. 더 일찍 생기지 않았나?
    15.24s  <ret> 발화 (turn3 첫 프레임)
    15.55s  agent 발화 시작: <ret> 사실 재향군인부의 시작은 천구백십칠년으로 거슬러 올라가요. 당시에는 '재향군인국'이라는 이름으로 
    15.67s  user  발화 끝
    16.20s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.93s]: The agency's origins can be traced back to 1917, with the establishmen
    23.47s  agent 발화 끝
    24.31s  user  발화 시작: 아, 천구백십칠년이 처음이었구나. 그럼 천구백삼십년은 뭐 달라진 거야?
    28.90s  <ret> 발화 (turn5 첫 프레임)
    29.13s  agent 발화 시작: <ret> 천구백삼십년에 '재향군인국'이 정식으로 '재향군인청'으로 명칭이 변경되었답니다. 규모도 좀 커졌을
    29.35s  user  발화 끝
    30.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: In 1930, the Veteran's Bureau was formally renamed the Veterans Admini
    33.53s  user  발화 시작: 응.
    34.02s  user  발화 끝
    36.73s  agent 발화 끝
    36.76s  user  발화 시작: 그래, 이름이 바뀐 거였구나. 그럼 지금은 재향군인부라고 하던데, 또 바뀐 거야?
    42.69s  <ret> 발화 (turn8 첫 프레임)
    42.76s  agent 발화 시작: <ret> 네, 맞습니다. 천구백구십년에 '재향군인청'에서 지금의 '재향군인부'로 다시 한 번 부처 명칭이 
    43.00s  user  발화 끝
    44.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: The Veterans Administration became the Department of Veterans Affairs 
    49.07s  agent 발화 끝
