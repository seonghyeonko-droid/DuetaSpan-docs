# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "서담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-19",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: p53 단백질이 세포 주기의 어느 단계에서 활약하는지 궁금해요.
     3.81s  <ret> 발화 (turn1 첫 프레임)
     3.97s  agent 발화 시작: <ret> p53 단백질은 주로 세포 주기의 G1/S기에서 중요한 역할을 수행한다고 해요.
     3.97s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.24s]: p53 functions primarily at the G1/S transition in the cell cycle.
     4.16s  user  발화 끝
    10.22s  agent 발화 끝
    11.71s  user  발화 시작: 어머, 오늘 날씨 진짜 좋다!
    13.73s  user  발화 시작: G1/S기가 정확히 언제인데요?
    13.88s  user  발화 끝
    15.92s  <ret> 발화 (turn4 첫 프레임)
    16.16s  agent 발화 시작: <ret> G1/S기는 세포가 분열할지 말지 결정하는 중요한 검문소 역할을 하는 시기라고 할 수 있어요.
    16.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: The G1/S transition is a checkpoint where the cell decides whether to 
    16.27s  user  발화 끝
    20.19s  user  발화 시작: 그렇군요.
    20.82s  user  발화 끝
    23.14s  agent 발화 시작: 혹시 세포 분열 과정에 대해 더 자세히 알아보고 싶으세요?
    23.29s  agent 발화 끝
    26.52s  agent 발화 끝
