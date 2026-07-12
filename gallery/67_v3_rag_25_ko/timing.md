# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "진연",
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
#       "date": "2026-05-30",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 벤지 영화에 대해 아세요? 최근에 나온 영화 같은데.
     5.01s  <ret> 발화 (turn1 첫 프레임)
     5.17s  agent 발화 시작: <ret> 벤지는 브랜든 캠프가 쓰고 연출하고 공동 제작한 미국 드라마 영화예요. 천구백칠십사년 영화의 리부
     5.17s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.47s]: Brandon Camp wrote, co-produced and directed the upcoming American dra
     5.17s  user  발화 끝
    12.64s  user  발화 시작: 아, 브랜든 캠프군요. 근데 그 영화가 언제 개봉하는지는 아세요?
    12.64s  agent 발화 끝
    17.66s  <ret> 발화 (turn3 첫 프레임)
    17.82s  agent 발화 시작: <ret> 벤지는 이천십팔년 삼월 이십삼일에 개봉했어요. 가족, 모험, 드라마 장르입니다.
    17.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.17s]: (tool result) Benji (2018) - Drama, Family, Adventure - Release date: 
    17.82s  user  발화 끝
    22.99s  agent 발화 끝
