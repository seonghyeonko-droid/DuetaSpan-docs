# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "노현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-02",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 노현님. 저는 여러분의 창의적인 고민을 돕는 웰니스 코치, 두나입니다.
     4.86s  agent 발화 끝
     5.35s  user  발화 시작: 안녕하세요, 두나님. 지금 부산 시간 몇 시예요?
     8.55s  <ret> 발화 (turn2 첫 프레임)
     8.63s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 네시 오십팔분입니다. 오늘 하루 잘 보내고 계신가요?
     8.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: (tool result) It is Friday, July 10, 2026 at 4:58 PM in Asia/Seoul rig
     8.72s  user  발화 끝
    14.88s  agent 발화 끝
    15.43s  user  발화 시작: 네, 덕분에 잘 지내고 있어요. 혹시 제가 글루텐 알레르기가 있다던 거 기억하세요?
    20.27s  <ret> 발화 (turn4 첫 프레임)
    20.50s  agent 발화 시작: <ret> 네, 노현님은 글루텐 알레르기가 있으시다는 걸 기억하고 있어요. 식사하실 때 꼭 주의하시고요.
    20.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.78s]: [2025-10-08] User is gluten-free.
    20.70s  user  발화 끝
    26.28s  agent 발화 끝
