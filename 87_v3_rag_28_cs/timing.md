# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 어, VA에 대해 읽다가 문득 궁금해졌어. 도대체 언제 시작된 거야?
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.95s  agent 발화 시작: <ret> 좋은 질문이세요. 역사를 알아두면 도움이 될 거예요.
     5.09s  user  발화 끝
     6.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.31s]: [source: Wikipedia] The United States Department of Veterans Affairs w
     9.13s  agent 발화 시작: 미국 재향군인부는 1930년 7월 21일에 설립되었어요.
     9.26s  agent 발화 끝
    13.90s  agent 발화 끝
    13.97s  user  발화 시작: 1930년이라고? 진짜? 난 항상 훨씬 더 오래된, 남북 전쟁 이후쯤이라고 생각했거든.
    20.61s  <ret> 발화 (turn4 첫 프레임)
    20.84s  agent 발화 시작: <ret> 그렇게 생각하시는 건 당연해요. 오랜 기간 동안 참전 용사들을 지원해 왔으니까요.
    20.92s  user  발화 끝
    22.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [source: History.com] Prior to 1930, the administration of veterans’ b
    26.60s  agent 발화 시작: 1930년이 되기 전에는 퇴역 군인들의 혜택이 여러 개의 개별 기관들에서 처리되었어요.
    26.63s  agent 발화 끝
    33.36s  agent 발화 끝
    34.58s  user  발화 시작: 그러니까 그때는 하나의 부서가 아니라 그냥 조각조각이었던 거야?
    38.57s  <ret> 발화 (turn7 첫 프레임)
    38.75s  user  발화 끝
    38.89s  agent 발화 시작: <ret> 네, 맞습니다. 처음에는 분산된 방식이었습니다.
    40.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.89s]: [source: VA.gov] The Veterans Bureau, founded in 1921, was a key precu
    42.74s  agent 발화 시작: 재향군인국은 1921년에 설립되었고, VA의 중요한 선구자였습니다.
    42.78s  agent 발화 끝
    48.76s  agent 발화 끝
