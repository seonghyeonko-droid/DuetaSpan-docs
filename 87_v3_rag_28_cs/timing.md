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


     0.00s  user  발화 시작: 어, 정부 부처들 읽다가 궁금해졌어… 재향군인부 언제 시작했어?
     4.17s  <ret> 발화 (turn1 첫 프레임)
     4.56s  agent 발화 시작: <ret> 네, 좋은 질문이고, 복무하신 분들을 생각하면 정말 중요한 질문이에요.
     4.72s  user  발화 끝
     5.77s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.18s]: [source: Wikipedia] The United States Department of Veterans Affairs w
     9.66s  agent 발화 시작: 재향군인부는 후버 대통령에 의해 천구백삼십년 칠월 이십일일에 설립되었어요.
     9.74s  agent 발화 끝
    15.64s  agent 발화 끝
    15.76s  user  발화 시작: 천구백삼십년? 왠지… 생각보다 엄청 최근인데. 남북전쟁 이후쯤일 줄 알았는데?
    22.08s  <ret> 발화 (turn4 첫 프레임)
    22.15s  agent 발화 시작: <ret> 네, 많은 분들이 그렇게 생각하실 수도 있어요. 이전 기관에서 발전된 건데, 그때 독립된 부처가 
    22.24s  user  발화 끝
    24.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: [source: VA.gov] Prior to 1930, veterans’ affairs were handled by the 
    29.60s  agent 발화 시작: 천구백삼십년 이전에 재향군인 관련 업무는 천팔백육십일년에 설립된 연금국에서 담당했어요.
    29.61s  agent 발화 끝
    37.01s  agent 발화 끝
    38.14s  user  발화 시작: 그러면 연금국이 오랫동안 주된 곳이었어? 근데 그게 정확히 뭘 했는데?
    42.59s  <ret> 발화 (turn7 첫 프레임)
    42.81s  user  발화 끝
    42.91s  agent 발화 시작: <ret> 연금국은 주로 남북전쟁 참전 용사 및 그 가족에게 연금을 지급했어요. 시간이 지나면서 다른 전쟁으
    44.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.23s]: [source: National Archives] The Bureau of Pensions processed claims fo
    52.06s  agent 발화 시작: 연금국은 모든 미국 전쟁 참전 용사들의 장애, 부양, 사망 관련 혜택 청구를 처리했어요.
    52.14s  agent 발화 끝
    59.29s  agent 발화 끝
