# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 820 Cedar Lane."
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
#       "date": "2025-11-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 정부 기관에 대해 읽다가 궁금해졌어…… | S2 그럼, 재향군인부(Department of Veterans A | S3 천구백삼십년? 그거 좀… 늦었네. 그보다 훨씬 전부터 퇴역 군 | S4 그러니까 병원이 먼저 생기고, 그 다음에 부서가 훨씬 뒤에 만

     0.00s  user  발화 시작: 어, 정부 기관에 대해 읽다가 궁금해졌어……
     3.13s  user  발화 끝
     4.67s  user  발화 시작: 그럼, 재향군인부(Department of Veterans Affairs)는 언제 만들어졌어?
     9.19s  <ret> 발화 (turn2 첫 프레임)
     9.59s  agent 발화 시작: <ret> 음, 재향군인부는 천구백삼십년 칠월 이십일일에 설립됐습니다. 이런 정보를 알아두시는 건 좋은 일이
     9.66s  user  발화 끝
    11.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: The United States Department of Veterans Affairs was established on Ju
    18.63s  agent 발화 끝
    19.08s  user  발화 시작: 천구백삼십년? 그거 좀… 늦었네. 그보다 훨씬 전부터 퇴역 군인들을 지원해야 했잖아?
    25.23s  <ret> 발화 (turn4 첫 프레임)
    25.47s  agent 발화 시작: <ret> 네, 사실 그렇습니다. 최초의 연방 퇴역 군인 병원은 천팔백육십육년에 문을 열어서 남북 전쟁 참전
    25.66s  user  발화 끝
    27.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.75s]: The first federal veterans’ hospital opened in 1866, offering care to 
    38.22s  agent 발화 끝
    39.36s  user  발화 시작: 그러니까 병원이 먼저 생기고, 그 다음에 부서가 훨씬 뒤에 만들어졌다는 거야? 좀 이상하잖아?
    45.36s  <ret> 발화 (turn6 첫 프레임)
    45.51s  agent 발화 시작: <ret> 맞아요, 그렇게 생각하시는 게 맞습니다. 천팔백육십일년에 연금국(Bureau of Pensions
    45.66s  user  발화 끝
    47.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.52s]: The Bureau of Pensions, established in 1861, initially handled veteran
    60.03s  agent 발화 끝
