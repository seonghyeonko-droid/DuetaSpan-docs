# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "도연",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 도연님! 저는 조리예요. 오늘 하루는 어떠셨어요?
     3.46s  user  발화 시작: 안녕하세요, 조리님. 오늘 좀 피곤하네요. 지금 몇 시예요?
     3.46s  agent 발화 끝
     7.33s  <ret> 발화 (turn2 첫 프레임)
     7.41s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 두시 삼십팔분이에요. 혹시 힘든 일이 있으셨나요?
     7.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: It is Friday, July 10, 2026 at 2:38 PM in Asia/Seoul right now.
     7.41s  user  발화 끝
    13.33s  user  발화 시작: 그냥 일이 좀 많았어요. 스위스 여행 계획 세우고 있는데, 십이월에 가려고 해요.
    13.33s  agent 발화 끝
    19.02s  <ret> 발화 (turn4 첫 프레임)
    19.26s  agent 발화 시작: <ret> 혹시 특별히 가보고 싶은 곳이 있으세요?
    19.26s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.96s]: [2025-06-08] User is planning a trip to Switzerland in December.
    19.26s  user  발화 끝
    22.22s  agent 발화 끝
