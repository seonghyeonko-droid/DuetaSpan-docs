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

# EXAMINER(FDB-v2) 단계: S1 어, 정부 부처들 읽다가… 퇴역 군인부 언제 시작했는지 궁금해 | S2 천구백삼십년? 솔직히 생각보다 엄청 최근인데. 훨씬 오래된 줄 | S3 그러면 연금국에서 남북 전쟁 때 처리했겠네… 근데 그 *전*에 | S4 와, 천육백삼십육년! 진짜 대박이다. 나라 시작할 때부터 거의

     0.00s  user  발화 시작: 어, 정부 부처들 읽다가… 퇴역 군인부 언제 시작했는지 궁금해.
     4.11s  <ret> 발화 (turn1 첫 프레임)
     4.51s  agent 발화 시작: <ret> 네, 퇴역 군인부는 호버 대통령님께서 천구백삼십년에 설립하셨습니다.
     4.58s  user  발화 끝
     5.71s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.97s]: [source: Wikipedia] The United States Department of Veterans Affairs w
    10.39s  user  발화 시작: 천구백삼십년? 솔직히 생각보다 엄청 최근인데. 훨씬 오래된 줄 알았어.
    10.48s  agent 발화 끝
    15.43s  <ret> 발화 (turn3 첫 프레임)
    15.66s  agent 발화 시작: <ret> 사실, 퇴역 군인들을 위한 지원은 더 오래 전부터 있었어요. 천구백삼십년 이전에 퇴역 군인 관련 
    15.90s  user  발화 끝
    17.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: [source: History.com] Prior to 1930, veterans’ affairs were managed by
    28.23s  agent 발화 끝
    29.00s  user  발화 시작: 그러면 연금국에서 남북 전쟁 때 처리했겠네… 근데 그 *전*에는? 독립 전쟁 참전 용사들은?
    34.94s  <ret> 발화 (turn5 첫 프레임)
    35.17s  agent 발화 시작: <ret> 네, 퇴역 군인들에 대한 지원은 천육백삼십육년으로 거슬러 올라가요. 순례자들이 장애가 있는 군인들
    35.35s  user  발화 끝
    36.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.32s]: [source: VA.gov] Initially, assistance to veterans dates back to 1636,
    38.13s  user  발화 시작: 어어.
    38.94s  user  발화 끝
    43.97s  user  발화 시작: 와, 천육백삼십육년! 진짜 대박이다. 나라 시작할 때부터 거의 신경 썼다는 거네.
    44.49s  agent 발화 끝
    49.72s  user  발화 끝
